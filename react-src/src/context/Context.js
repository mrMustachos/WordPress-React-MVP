import React, { createContext, Component } from "react";
import Axios from "axios";

//context api:  
//https://medium.com/datadriveninvestor/getting-started-w-reacts-context-api-f60aa9be758f

const storeContext = createContext();
export const Consumer = storeContext.Consumer;

export class Provider extends Component {
  constructor(props) {
    super(props);
 
    let restType = this.getRestType(props.router.match.path);
    let route = props.router.match.path;
    let slug = props.router.match.params.slug ? props.router.match.params.slug : '';
    let term = props.router.match.params.term ? props.router.match.params.term : '';
    let catid = props.router.match.params.catid ? props.router.match.params.catid : '';

    this.state = {
      term : term,
      slug : slug,
      restType : restType,
      catid : catid,
      route : route,
      posts : [],
      comments : [],
      currentPage : 1,
      totalPages : 0,
      commentFields : {
        fullName : '',
        email : '',
        website : '',
        comment : '',
      },
      appError : '',
      commentErrors : [],
      //global methods
      nextClicked : this.nextClicked.bind(this),
      previousClicked : this.previousClicked.bind(this),
      submitSearch : this.submitSearch.bind(this),
      updateTerm : this.updateTerm.bind(this),
      submitComment : this.submitComment.bind(this),
      updateCommentFields : this.updateCommentFields.bind(this),
      updateCommentErrors : this.updateCommentErrors.bind(this),
    };
  }

  getRestType (path) {
    let restType = 'post';
    switch(path){
      case '/page/:slug':
        restType = 'page';
        break;
      case '/search/:term':
        restType = 'search';
        break;
      case '/category/:catid':
        restType = 'category';
        break;
      case '/blog':
      case '/blog/:slug':
      default:
        restType = 'post';
        break;
    }
    return restType;
  }
 
  componentDidMount() {
    this.getPosts(this.buildUrl());
  }

  componentDidUpdate(prevProps) {
    if(prevProps.router.location.pathname !== this.props.router.location.pathname) {
      let curProps = this.props.router.match;
      this.setState({
        currentPage : 1,
        restType : this.getRestType(curProps.path),
        catid : curProps.params.catid ? curProps.params.catid : ''
      }, () => {
        this.getPosts(this.buildUrl());
      })
    }
  }

  updateTerm (term) {
    this.setState({
      term : term
    })
  }

  updateCommentErrors (errors) {
    this.setState({ commentErrors : errors })
  }

  submitSearch() {
    this.setState({
      restType : 'search',
      currentPage : 1
    });

    this.props.router.history.push(`/search/${this.state.term}`);
  }

  updateCommentFields (key, val) {
    //TO UPDATE NESTED STATE:
    //https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react
    var commentFields = { ...this.state.commentFields }
    commentFields[key] = val;
    this.setState({ commentFields });
  }

  submitComment() {
    let postdata = {
      'post' : this.state.posts[0].id,
      'author_name' : this.state.commentFields.fullName,
      'author_email' : this.state.commentFields.email,
      'author_url' : this.state.commentFields.website,
      'content' : this.state.commentFields.comment
    }

    Axios.post('/wp-json/wp/v2/comments', postdata)
      .then((response) => {
        let cmnt = response.data;
        cmnt.waiting = 'Your comment is waiting approval';

        let cmnts = [...this.state.comments];
        cmnts.push(cmnt);

        this.setState({ comments : cmnts });
      })
      .catch((error) => {
        let err = [];
        err.push(error.message);

        this.setState({ commentErrors : err });
      }); 
  }

  buildUrl() {
    let url = '/wp-json/wp/v2/';
    switch(this.state.restType) {
      case 'page':
        url += `pages/?slug=${this.state.slug}`;
        break;

      case 'search':
        url += `search/?s=${this.state.term}&page=${this.state.currentPage}`;
        break;

      case 'category':
        url += `posts?categories=${this.state.catid}&page=${this.state.currentPage}`;
        break;

      case 'post':
      default:
        url += this.state.slug ? `posts/?slug=${this.state.slug}` : `posts/?per_page=6&page=${this.state.currentPage}`;
        break;
    }

    return url;
  }

  getComments(id) {
    let url = `/wp-json/wp/v2/comments?post=${id}`;
    Axios.get(url)
      .then((response) => this.setState({ comments : response.data }))
      .catch((error) => console.log(error));
  }

  getPosts (url) {
    Axios.get(url)
      .then((response) => {
        this.setState({
          posts : response.data,
          totalPages : response.headers['x-wp-totalpages']
        }, () => {
          //get comments if post, and post array is not empty
          if(this.state.route === '/blog/:slug' && this.state.posts[0]) {
            this.getComments(this.state.posts[0].id);
          }
        })
      })
      .catch((error) => {
        console.log(error);
        this.appError = 'An unexpected error occurred';
      });
  }


  nextClicked () { 
    let newPage = this.state.currentPage + 1;
    this.setState({
      currentPage : newPage
    }, () => {
      this.getPosts(this.buildUrl());
    })
  }


  previousClicked () {
    let newPage = this.state.currentPage - 1;
    this.setState({
      currentPage : newPage
    }, () => {
      this.getPosts(this.buildUrl());
    })
  }


  render() {
    const { children } = this.props;
    return (
      <storeContext.Provider value={ this.state }>{ children }</storeContext.Provider>
    );
  }
}