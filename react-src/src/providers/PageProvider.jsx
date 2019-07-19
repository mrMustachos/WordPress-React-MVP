import React, { Component, createContext } from 'react';
import Axios from "axios";
import { withRouter } from 'react-router-dom';

export const PageContext = createContext({ state: null });

class PageProvider extends Component {
	state = {
		postArr: null,
		searchArr: null,
		pgObj: null,
		frontPageId: null,
		totalPosts: null,
		totalPages: null,
		totalSearch: null,
		currentPage: 1,
		restType: null,
		perPost: 6,
		prePage: 10,
		// post_currPage : 1,
		// page_currPage : 1,
		// post_totalPages : 0,
		// page_totalPages : 0,
		term: '',
		lastSearched: null,
		startIdx: 0,
		endIdx: 0,
		updateSearhTerm: this.updateSearhTerm.bind(this),
		updateRestType: this.updateRestType.bind(this),
		submitSearch: this.submitSearch.bind(this),
		nextClicked: this.nextClicked.bind(this),
		previousClicked: this.previousClicked.bind(this),
	};

	wpInfo = {
		baseUrl: '/wp-json/wp/v2/',
		searchPage: '?per_page=',
		wpFetchHeaders: {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Expose-Headers': 'x-wp-total'
			},
		},
	};

	buildUrl() {
		const { baseUrl } = this.wpInfo;
		const { restType, term, catid, currentPage } = this.state;
		const perPage = this.getPerPage();
		let url = baseUrl;

		switch(restType) {
			case 'search':
				url += `search/?s=${term}&page=${currentPage}`;
				break;

			case 'category':
				url += `posts?categories=${catid}&page=${currentPage}`;
				break;

			case 'posts':
				// console.log(`${restType}${perPage}&page=${currentPage}`);
				url += `${restType}${perPage}&page=${currentPage}`;
				break;

			case 'pages':
			default:
				url += `${restType}${perPage}`;
				break;
		}

		return url;
	}

	getPerPage () {
		const { restType, perPost, prePage } = this.state;
		const { searchPage } = this.wpInfo;
		let contentType;

		switch(restType) {
			case 'posts':
				contentType = `${searchPage}${perPost}`;
				break;

			case 'pages':
			default:
				contentType = `${searchPage}${prePage}`;
				break;
		}
		return contentType;
	}

	makeNum = (str) => parseInt(str, 10);

	makeStrChecker = (res) => res.reduce((acc, curr) => acc += JSON.stringify(curr), '');

	handleSearchArr = (data) => {
		const { searchArr, term, lastSearched } = this.state;
		let result;

		if (lastSearched !== term) {
			result = data;

		} else {
			let incomingData = this.makeStrChecker(data);
			let currData = this.makeStrChecker(searchArr);

			if (currData.includes(incomingData)) {
				result = searchArr;
			} else {
				result = [...searchArr].concat(data);
			}
		}

		return result;
	}

	handlePostArr = (data) => {
		const { postArr } = this.state;
		let result;

		if (!postArr) {
			result = data;

		} else {
			let incomingData = this.makeStrChecker(data);
			let currData = this.makeStrChecker(postArr);

			if (currData.includes(incomingData)) {
				result = postArr;
			} else {
				result = [...postArr].concat(data);
			}
		}

		return result;
	}

	setDataPaths (responce) {
		const { restType } = this.state;
		const { headers, data } = responce;
		let pathData = true;

		switch(restType) {
			case 'posts':
				let allPostsData = this.handlePostArr(data);
				this.setState({
					totalPosts: this.makeNum(headers['x-wp-total']),
					postArr: allPostsData,
				});
				break;

			case 'search':
				let allSearchData = this.handleSearchArr(data);
				this.setState({
					totalSearch: this.makeNum(headers['x-wp-total']),
					searchArr: allSearchData,
				});
				break;

			case 'pages':
			default:
				this.setState({ totalPages: this.makeNum(headers['x-wp-total']) });
				pathData = this.makeNum(headers['x-wp-totalpages']);
				break;
		}

		return pathData;
	}

	dataInit = async () => {
		const { baseUrl, wpFetchHeaders } = this.wpInfo;
		const url = `${baseUrl}frontpage`;

		await Axios(url, wpFetchHeaders)
			.then(({ data }) => this.setState({
				frontPageId: data.id,
				restType: 'pages',
			}))
			.catch((err) => console.log('error fetching frontpage id: ', err)
		);

		return true;
	}

	fetchData = async () => {
		const { wpFetchHeaders } = this.wpInfo;
		const url = this.buildUrl();
		// console.log(url);

		const responce = await Axios(url, wpFetchHeaders);
		return this.setDataPaths(responce);
	}

	collectAllData = async (numPages) => {
		const { wpFetchHeaders } = this.wpInfo;
		const dataArr = [];

		for (let pg = 1; pg <= numPages; pg += 1) {
			const url = `${this.buildUrl()}&page=${pg}`;
			const page = Axios.get(url, wpFetchHeaders);
			dataArr.push(page);
		}

		const flattenData = await Axios.all(dataArr)
			.then((response) => {
				const pageData = response.map((res) => res.data).flat();
				return pageData;
			})
			.catch((err) => console.log('error fetching data: ', err)
		);

		return flattenData;
	}

	updateState = (data) => {
		const { restType } = this.state;

		switch(restType) {
			case 'posts':
				this.setState({ postArr: data });
				break;

			case 'pages':
			default:
				const { frontPageId } = this.state;
				let pgObj = {};

				data.forEach((item) => {
					if (item.id === frontPageId) {
						pgObj.index = item;
					} else {
						pgObj[item.slug] = item;
					}
				});
				this.setState({ pgObj });
				break;
		}
	}




	updateSearhTerm (term) {
		this.setState({ term });
	}

	updateRestType (type) {
		this.setState({ restType: type });
	}

	submitSearch() {
		const { term } = this.state;
		this.setState({
			restType: 'search',
			currentPage: 1,
			lastSearched: term,
		}, () => {
			this.props.history.push(`/search/${term}`);
			this.unsubscribeFromSearch = this.fetchData()
				.then((result) => result)
				.catch((err) => console.error('err fetching search data', err));
		});
	}





	nextClicked (type) {
		const { currentPage, startIdx, perPost, prePage } = this.state;
		let newPage = currentPage + 1;
		let newEnd = type === 'posts' ? (perPost - 1) * newPage : (prePage - 1) * newPage;
		let newStart = type === 'posts' ? startIdx + perPost : startIdx + prePage;

		// let checkOffset = startIdx === 0 ? startIdx : (startIdx - 1);
		// let newStart = type === 'posts' ? (startIdx + perPost) : (startIdx + prePage);
		// let newEnd = type === 'posts' ? checkOffset + (perPost - 1) : checkOffset + (prePage - 1);

		this.setState({
			currentPage : newPage,
			startIdx : newStart,
			endIdx: newEnd,
		}, () => {
			this.unsubscribeFromPosts = this.fetchData()
				.then((result) => result)
				.catch((err) => console.error('err fetching post data', err));
		})
	}

	previousClicked (type) {
		const { currentPage, startIdx, perPost, prePage } = this.state;
		let newPage = currentPage - 1;
		let newEnd = type === 'posts' ? (perPost - 1) * newPage : (prePage - 1) * newPage;
		let newStart = type === 'posts' ? startIdx - perPost : startIdx - prePage;

		this.setState({
			currentPage : newPage,
			startIdx : newStart,
			endIdx: newEnd,
		})
	}





















	unsubscribeFromPages = null;
	unsubscribeFromPosts = null;
	unsubscribeFromSearch = null;

	getAllPosts() {
		this.setState({
			restType : 'posts',
			currentPage : 1,
			startIdx: 0,
			endIdx: 0,
		}, () => {
			this.unsubscribeFromPosts = this.fetchData()
				.then((result) => result)
				.catch((err) => console.error('err fetching post data', err));
		});
	}

	getAllPages() {
		this.unsubscribeFromPages = this.dataInit()
			.then(() => this.fetchData())
			.then((numPages) => this.collectAllData(numPages))
			.then((data) => this.updateState(data))
			.catch((err) => console.error('err fetching page data', err));	
	}

	componentDidMount = () => {
		const { pathname } = this.props.location;
		this.getAllPages();

		// console.log('this.props: ', this.props);

		if (pathname.startsWith('/blog')) {
			this.getAllPosts();

		} else if (pathname.startsWith('/search/')) {
			let term = pathname.replace('/search/', '');
			console.log(`rerun search term: ${term}`);
		}
	}

	componentDidUpdate = (prevProps) => {
		const { pathname } = this.props.location;

		if (prevProps.location.pathname !== pathname) {

			console.log('prevProps: ', prevProps);
			console.log('this.props: ', this.props);

			// this is where you should build in a check for page updates.
			// also check old data vs new data

			if (pathname === '/blog') {
				this.getAllPosts();
			}
		}
	}

	componentWillUnmount = () => {
		this.unsubscribeFromPages();
		this.unsubscribeFromSearch();
		this.unsubscribeFromPosts();
	}

	render() {
		const { children } = this.props;
		return (
			<PageContext.Provider value={ this.state }>{ children }</PageContext.Provider>
		);
	}
}

export default withRouter(PageProvider);