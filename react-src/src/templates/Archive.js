// import React, { Component, useContext } from 'react';
import React, { useContext } from 'react';
import { PageContext } from '../providers/PageProvider.jsx';

import Head from '../partials/Head';
import Foot from '../partials/Foot';
import Pagination from '../partials/Pagination.jsx';

import BlogPage from '../components/BlogPage.jsx';
import SearchedPage from '../components/SearchedPage.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';

const Archive = (props) => {
	let { searchArr, postArr, totalPosts, totalSearch, perPost, prePage, startIdx, endIdx } = useContext(PageContext);
	const contentType = Object.keys(props.match.params).join('') || 'blog';

	// let all = useContext(PageContext);
	// console.log(endIdx);

	const archiveContentPicker = () => {
		let result;

		switch(contentType) {
			case 'blog':
				result = (
					<BlogPage
						startIdx={ startIdx }
						endIdx={ endIdx === 0 ? (perPost - 1) : endIdx }
						content={ postArr }
						perSet={ perPost }
						totalCount={ totalPosts }
					/>
				);
				break;

			case 'term':
				result = (
					<SearchedPage
						startIdx={ startIdx }
						endIdx={ endIdx === 0 ? (prePage - 1) : endIdx }
						content={ searchArr }
						perSet={ prePage }
						totalCount={ totalSearch }
					/>
				);
				break;

			case 'catid':
				result = <SearchedPage />;
				break;

			default: // 404
				result = <NotFoundPage />;
				break;
		}

		return result;
	}

	const archiveNeedsPagination = () => {
		let result;

		switch(contentType) {
			case 'blog':
				result = !!(totalPosts) && totalPosts > perPost ? (
					<Pagination
						totalCount={ totalPosts }
						perSet={ perPost }
						type={ 'posts' }
					/>
				) : '';
				break;

			case 'term':
			case 'catid':
			default: // 404
				result = !!(totalSearch) && totalSearch > prePage ? (
					<Pagination
						totalCount={ totalSearch }
						perSet={ prePage }
						type={ 'search' }
					/>
				) : '';
				break;
		}

		return result;
	}
	
	return (
		<div className="archive">
			<Head />
			<div className="content-area">
				{ archiveContentPicker() }
				{ archiveNeedsPagination() }
			</div>
			<Foot />
		</div>
	);
};

export default Archive;