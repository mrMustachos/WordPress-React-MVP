(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-3-1!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-2!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/AboutPage.jsx":
/*!**************************************!*\
  !*** ./src/components/AboutPage.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/components/AboutPage.jsx";


const AboutPage = ({
  content
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, "Howdy From the About Page");
};

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ }),

/***/ "./src/components/Application.jsx":
/*!****************************************!*\
  !*** ./src/components/Application.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _templates_Page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/Page.js */ "./src/templates/Page.js");
/* harmony import */ var _templates_Notfound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/Notfound */ "./src/templates/Notfound.js");
/* harmony import */ var _templates_Archive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/Archive */ "./src/templates/Archive.js");
/* harmony import */ var _templates_Single__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Single */ "./src/templates/Single.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/components/Application.jsx";







class Application extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      className: "Application",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      component: _templates_Page_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/blog",
      component: _templates_Archive__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/:slug",
      component: _templates_Page_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/blog/:slug",
      component: _templates_Single__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/category/:catid",
      component: _templates_Archive__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/search/:term",
      component: _templates_Archive__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      exact: true,
      from: "/search/",
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      exact: true,
      from: "/category/",
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      component: _templates_Notfound__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })));
  }

} // <Route exact path='/post/' component={ Archive } />
// <Route path="/post/:slug" component={ Single } />
// <Route exact path="/:slug" component={ Single } />
// <Route path="/category/:catid" component={ Archive } />
// <Route path="/search/:term" component={ Archive } />
// <Redirect exact from='/page/' to='/' />
// <Redirect exact from='/search/' to='/' />
// <Redirect from='/*/*/*/:slug' to='/post/:slug' />
// <Route component={ Notfound } />


/* harmony default export */ __webpack_exports__["default"] = (Application);

/***/ }),

/***/ "./src/components/BlogPage.jsx":
/*!*************************************!*\
  !*** ./src/components/BlogPage.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _partials_ThePost_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/ThePost.js */ "./src/partials/ThePost.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/components/BlogPage.jsx";




const BlogPage = ({
  content,
  startIdx,
  perSet
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, content ? content.map((post, idx) => {
    console.log('startIdx: ', startIdx);
    console.log('startIdx + (perSet - 1): ', startIdx + (perSet - 1));
    let renderCheck = idx >= startIdx && idx <= startIdx + (perSet - 1); // console.log(renderCheck);

    return renderCheck ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_ThePost_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: post.id,
      data: post,
      idx: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }) : '';
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Loading..."));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(BlogPage));

/***/ }),

/***/ "./src/components/HomePage.jsx":
/*!*************************************!*\
  !*** ./src/components/HomePage.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/components/HomePage.jsx";


const HomePage = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "content-area",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "Howdy From the Home Page");

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/components/NotFoundPage.jsx":
/*!*****************************************!*\
  !*** ./src/components/NotFoundPage.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/components/NotFoundPage.jsx";


const NotFoundPage = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "content-area",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "404 Page Not Found! :(");

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ "./src/components/SearchedPage.jsx":
/*!*****************************************!*\
  !*** ./src/components/SearchedPage.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/components/SearchedPage.jsx";


const SearchedPage = props => {
  console.log('from SearchedPage.jsx: ', props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "Howdy From the Search or the Category Page!");
};

/* harmony default export */ __webpack_exports__["default"] = (SearchedPage);

/***/ }),

/***/ "./src/context/Context.js":
/*!********************************!*\
  !*** ./src/context/Context.js ***!
  \********************************/
/*! exports provided: Consumer, Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var _Users_billdomanickwork_Repos_wordpress_wp_content_themes_cacique_react_src_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/context/Context.js";

 //context api:  
//https://medium.com/datadriveninvestor/getting-started-w-reacts-context-api-f60aa9be758f

const storeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const Consumer = storeContext.Consumer;
class Provider extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    let restType = this.getRestType(props.router.match.path);
    let route = props.router.match.path;
    let slug = props.router.match.params.slug ? props.router.match.params.slug : '';
    let term = props.router.match.params.term ? props.router.match.params.term : '';
    let catid = props.router.match.params.catid ? props.router.match.params.catid : '';
    this.state = {
      term: term,
      slug: slug,
      restType: restType,
      catid: catid,
      route: route,
      posts: [],
      comments: [],
      currentPage: 1,
      totalPages: 0,
      commentFields: {
        fullName: '',
        email: '',
        website: '',
        comment: ''
      },
      appError: '',
      commentErrors: [],
      //global methods
      nextClicked: this.nextClicked.bind(this),
      previousClicked: this.previousClicked.bind(this),
      submitSearch: this.submitSearch.bind(this),
      updateTerm: this.updateTerm.bind(this),
      submitComment: this.submitComment.bind(this),
      updateCommentFields: this.updateCommentFields.bind(this),
      updateCommentErrors: this.updateCommentErrors.bind(this)
    };
  }

  getRestType(path) {
    let restType = 'post';

    switch (path) {
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
    if (prevProps.router.location.pathname !== this.props.router.location.pathname) {
      let curProps = this.props.router.match;
      this.setState({
        currentPage: 1,
        restType: this.getRestType(curProps.path),
        catid: curProps.params.catid ? curProps.params.catid : ''
      }, () => {
        this.getPosts(this.buildUrl());
      });
    }
  }

  updateTerm(term) {
    this.setState({
      term: term
    });
  }

  updateCommentErrors(errors) {
    this.setState({
      commentErrors: errors
    });
  }

  submitSearch() {
    this.setState({
      restType: 'search',
      currentPage: 1
    });
    this.props.router.history.push("/search/".concat(this.state.term));
  }

  updateCommentFields(key, val) {
    //TO UPDATE NESTED STATE:
    //https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react
    var commentFields = Object(_Users_billdomanickwork_Repos_wordpress_wp_content_themes_cacique_react_src_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.commentFields);

    commentFields[key] = val;
    this.setState({
      commentFields
    });
  }

  submitComment() {
    let postdata = {
      'post': this.state.posts[0].id,
      'author_name': this.state.commentFields.fullName,
      'author_email': this.state.commentFields.email,
      'author_url': this.state.commentFields.website,
      'content': this.state.commentFields.comment
    };
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/wp-json/wp/v2/comments', postdata).then(response => {
      let cmnt = response.data;
      cmnt.waiting = 'Your comment is waiting approval';
      let cmnts = [...this.state.comments];
      cmnts.push(cmnt);
      this.setState({
        comments: cmnts
      });
    }).catch(error => {
      let err = [];
      err.push(error.message);
      this.setState({
        commentErrors: err
      });
    });
  }

  buildUrl() {
    let url = '/wp-json/wp/v2/';

    switch (this.state.restType) {
      case 'page':
        url += "pages/?slug=".concat(this.state.slug);
        break;

      case 'search':
        url += "search/?s=".concat(this.state.term, "&page=").concat(this.state.currentPage);
        break;

      case 'category':
        url += "posts?categories=".concat(this.state.catid, "&page=").concat(this.state.currentPage);
        break;

      case 'post':
      default:
        url += this.state.slug ? "posts/?slug=".concat(this.state.slug) : "posts/?per_page=6&page=".concat(this.state.currentPage);
        break;
    }

    return url;
  }

  getComments(id) {
    let url = "/wp-json/wp/v2/comments?post=".concat(id);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(response => this.setState({
      comments: response.data
    })).catch(error => console.log(error));
  }

  getPosts(url) {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(response => {
      this.setState({
        posts: response.data,
        totalPages: response.headers['x-wp-totalpages']
      }, () => {
        //get comments if post, and post array is not empty
        if (this.state.route === '/blog/:slug' && this.state.posts[0]) {
          this.getComments(this.state.posts[0].id);
        }
      });
    }).catch(error => {
      console.log(error);
      this.appError = 'An unexpected error occurred';
    });
  }

  nextClicked() {
    let newPage = this.state.currentPage + 1;
    this.setState({
      currentPage: newPage
    }, () => {
      this.getPosts(this.buildUrl());
    });
  }

  previousClicked() {
    let newPage = this.state.currentPage - 1;
    this.setState({
      currentPage: newPage
    }, () => {
      this.getPosts(this.buildUrl());
    });
  }

  render() {
    const children = this.props.children;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(storeContext.Provider, {
      value: this.state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, children);
  }

}

/***/ }),

/***/ "./src/context/WithConsumer.js":
/*!*************************************!*\
  !*** ./src/context/WithConsumer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./src/context/Context.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/context/WithConsumer.js";



function WithConsumer(WrappedComponent) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_1__["Consumer"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, ctx => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, Object.assign({}, props, {
      context: ctx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    })));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (WithConsumer);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-3-1!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-2!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Application_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Application.jsx */ "./src/components/Application.jsx");
/* harmony import */ var _providers_PageProvider_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/PageProvider.jsx */ "./src/providers/PageProvider.jsx");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/index.js";


 // import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';



 // import Archive from './templates/Archive';
// import Page from './templates/Page';
// import Single from './templates/Single';
// import Notfound from './templates/Notfound';
// const routes = (
// 	<Router>
// 		<Switch>
// 			<Route exact path="/" component={ Page } />
// 			<Route exact path='/post/' component={ Archive } />
// 			{/* <Route path="/page/:slug" component={ Single } /> */}
// 			<Route path="/post/:slug" component={ Single } />
// 			<Route exact path="/:slug" component={ Single } />
// 			<Route path="/category/:catid" component={ Archive } />
// 			<Route path="/search/:term" component={ Archive } />
// 			<Redirect exact from='/page/' to='/' />
// 			<Redirect exact from='/search/' to='/' />
// 			<Redirect from='/*/*/*/:slug' to='/post/:slug' />
// 			<Route component={ Notfound } />
// 		</Switch>
// 	</Router>
// );

Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_providers_PageProvider_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Application_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}))), document.getElementById('root'));

/***/ }),

/***/ "./src/partials/CommentForm.js":
/*!*************************************!*\
  !*** ./src/partials/CommentForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_WithConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/WithConsumer */ "./src/context/WithConsumer.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/partials/CommentForm.js";



function CommentForm({
  context
}) {
  let errors = [];

  const contextFields = () => context.commentFields;

  const fields = contextFields();

  function updateCommentData(event) {
    let key = event.target.name;
    let val = event.target.value;
    context.updateCommentFields(key, val);
  }

  function submitComment(e) {
    e.preventDefault();

    if (formValid()) {
      context.submitComment();
    }
  }

  function validURL(str) {
    //https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    return !!pattern.test(str);
  }

  function emailIsValid(email) {
    //https://tylermcginnis.com/validate-email-address-javascript/          
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function formValid() {
    errors = [];
    context.updateCommentErrors(errors);

    if (!fields.fullName) {
      errors.push('Full name is empty');
    }

    if (!emailIsValid(fields.email)) {
      errors.push('Email is empty or invalid');
    }

    if (fields.website) {
      if (!validURL(fields.website)) {
        errors.push('Website url invalid');
      }
    }

    if (!fields.comment) {
      errors.push('Comment is empty');
    }

    if (errors.length > 0) {
      context.updateCommentErrors(errors);
      return false;
    } else {
      return true;
    }
  }

  function Errors() {
    let errors = context.commentErrors;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "error-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, errors.map(function (item, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, item);
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "comment-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Errors, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "fullname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Full name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    onChange: updateCommentData,
    value: fields.fullName,
    name: "fullName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    onChange: updateCommentData,
    value: fields.email,
    name: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Website"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    onChange: updateCommentData,
    value: fields.website,
    name: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Comment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    name: "comment",
    onChange: updateCommentData,
    value: fields.comment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    onClick: submitComment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Submit")));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_WithConsumer__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentForm));

/***/ }),

/***/ "./src/partials/CommentList.js":
/*!*************************************!*\
  !*** ./src/partials/CommentList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_WithConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/WithConsumer */ "./src/context/WithConsumer.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/partials/CommentList.js";



function CommentsList({
  context
}) {
  const comments = () => context.comments;

  const commentsList = comments();
  let commentsTitle = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, commentsList.length, " Comment(s)");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "comments-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, commentsTitle, commentsList.map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comment",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comment-waiting",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, item.waiting), item.author_name, " says:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: item.content.rendered
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_WithConsumer__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentsList));

/***/ }),

/***/ "./src/partials/Foot.js":
/*!******************************!*\
  !*** ./src/partials/Foot.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/partials/Foot.js";


const Foot = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "footer");

/* harmony default export */ __webpack_exports__["default"] = (Foot);

/***/ }),

/***/ "./src/partials/Head.js":
/*!******************************!*\
  !*** ./src/partials/Head.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _partials_SearchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/SearchForm */ "./src/partials/SearchForm.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/partials/Head.js";




const Head = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
  className: "navigation",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  className: "link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
  to: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  className: "link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
  to: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  className: "link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
  to: "/blog",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Blog"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_SearchForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./src/partials/Pagination.jsx":
/*!*************************************!*\
  !*** ./src/partials/Pagination.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _providers_PageProvider_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/PageProvider.jsx */ "./src/providers/PageProvider.jsx");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/partials/Pagination.jsx";




const Pagination = ({
  totalCount,
  perSet,
  type
}) => {
  let _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_providers_PageProvider_jsx__WEBPACK_IMPORTED_MODULE_2__["PageContext"]),
      currentPage = _useContext.currentPage,
      nextClicked = _useContext.nextClicked,
      previousClicked = _useContext.previousClicked,
      updateRestType = _useContext.updateRestType;

  let prevBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  let nextBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  let curPage = currentPage;
  let totalPages = Math.ceil(totalCount / perSet); // console.log('curPage: ', curPage);
  // console.log('totalPages: ', totalPages);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    prevBtn.current.disabled = true; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextPage = () => {
    updateRestType(type);
    nextClicked(type);

    if (totalPages === curPage + 1) {
      nextBtn.current.disabled = true;
    }

    prevBtn.current.disabled = false;
  };

  const previousPage = () => {
    updateRestType(type);
    previousClicked(curPage, totalPages);

    if (curPage - 1 === 1) {
      prevBtn.current.disabled = true;
    }

    nextBtn.current.disabled = false;
  };

  const pagerClass = () => {
    let cls = 'Pager';

    if (totalPages <= 1) {
      cls = 'Pager hidden';
    }

    return cls;
  }; // return (<p>show me more shit please!</p>);


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: pagerClass(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    ref: prevBtn,
    onClick: previousPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Previous"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    ref: nextBtn,
    onClick: nextPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Next"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PagerText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Page", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, curPage), " of ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, totalPages)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Pagination));

/***/ }),

/***/ "./src/partials/SearchForm.js":
/*!************************************!*\
  !*** ./src/partials/SearchForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_PageProvider_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/PageProvider.jsx */ "./src/providers/PageProvider.jsx");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/partials/SearchForm.js";
 // import { withRouter } from 'react-router-dom';



const SearchForm = props => {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_providers_PageProvider_jsx__WEBPACK_IMPORTED_MODULE_1__["PageContext"]),
        term = _useContext.term,
        updateSearhTerm = _useContext.updateSearhTerm,
        submitSearch = _useContext.submitSearch; // console.log(props);


  const updateTerm = e => updateSearhTerm(e.target.value);

  const submitSearchTerm = e => {
    e.preventDefault();
    submitSearch();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "searchForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: updateTerm,
    value: term,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: submitSearchTerm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Submit"));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchForm); // export default withRouter(SearchForm);

/***/ }),

/***/ "./src/partials/ThePost.js":
/*!*********************************!*\
  !*** ./src/partials/ThePost.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/partials/ThePost.js";


 // import WithConsumer from '../context/WithConsumer';
// import PostMeta from './PostMeta';
// const ThePost = ({ index, context }) => {
// 	const posts = () => context.posts;
// 	const item = posts()[index];
// 	let linkPrefix = item.type === 'page' ? '/page/' : '/blog/';
// 	let theContent = '';
// 	switch(context.route) {
// 		case '/': // if homepage,
// 		case '/blog': // if on the post page,
// 		case '/search/:term': // or if search
// 		case '/category/:catid': // or if search
// 			theContent = item.excerpt.rendered; // show excerpt only
// 			break;
// 		default: // for single, pages - show entire content
// 			theContent = item.content.rendered;
// 			break;
// 	}
// 	return (
// 		<div id={ `post-id-${item.id}` } className={ 'post-item' }>
// 			<h1><Link to={ `${linkPrefix}${item.slug}` }>{ item.title.rendered }</Link></h1>
// 			<PostMeta index={ index }></PostMeta>
// 			<div className="post-content" dangerouslySetInnerHTML={{__html:theContent}}></div>
// 		</div>
// 	);
// };

const ThePost = ({
  data,
  match
}) => {
  const id = data.id,
        title = data.title,
        slug = data.slug,
        excerpt = data.excerpt,
        content = data.content;
  let theContent = '';

  switch (match.path) {
    case '/blog': // if on the blog page,

    case '/search/:term': // or if search

    case '/category/:catid':
      // or if search
      theContent = excerpt.rendered; // show excerpt only

      break;

    default:
      // for single, pages - show entire content
      theContent = content.rendered;
      break;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "post-id-".concat(id),
    className: 'post-item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/blog/".concat(slug),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, title.rendered)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-content",
    dangerouslySetInnerHTML: {
      __html: theContent
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ThePost)); // export default WithConsumer(ThePost);

/***/ }),

/***/ "./src/partials/ThePostLoop.js":
/*!*************************************!*\
  !*** ./src/partials/ThePostLoop.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_WithConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/WithConsumer */ "./src/context/WithConsumer.js");
/* harmony import */ var _ThePost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThePost */ "./src/partials/ThePost.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/partials/ThePostLoop.js";




const ThePostLoop = ({
  context
}) => {
  // const all = () => context;
  const posts = () => context.posts;

  const pos = posts();
  let results = '';

  if (context.appError) {
    results = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app-error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, context.appError);
  } else {
    if (pos.length === 0) {
      results = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "no-results",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: undefined
      }, "no results");
    } else {
      results = pos.map((item, i, all) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ThePost__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: i,
          index: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: undefined
        });
      });
    }
  }

  return results;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_WithConsumer__WEBPACK_IMPORTED_MODULE_1__["default"])(ThePostLoop));

/***/ }),

/***/ "./src/providers/PageProvider.jsx":
/*!****************************************!*\
  !*** ./src/providers/PageProvider.jsx ***!
  \****************************************/
/*! exports provided: PageContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContext", function() { return PageContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/providers/PageProvider.jsx";



const PageContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  state: null
});

class PageProvider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
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
      updateSearhTerm: this.updateSearhTerm.bind(this),
      updateRestType: this.updateRestType.bind(this),
      submitSearch: this.submitSearch.bind(this),
      nextClicked: this.nextClicked.bind(this),
      previousClicked: this.previousClicked.bind(this)
    };
    this.wpInfo = {
      baseUrl: '/wp-json/wp/v2/',
      searchPage: '?per_page=',
      wpFetchHeaders: {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Expose-Headers': 'x-wp-total'
        }
      }
    };

    this.makeNum = str => parseInt(str, 10);

    this.handleSearchArr = data => {
      const _this$state = this.state,
            searchArr = _this$state.searchArr,
            term = _this$state.term,
            lastSearched = _this$state.lastSearched;
      let result;

      if (lastSearched !== term) {
        result = data;
      } else {
        if (JSON.stringify(searchArr) === JSON.stringify(data)) {
          result = searchArr;
        } else {
          result = !searchArr ? data : [...searchArr].concat(data);
        }
      }

      return result;
    };

    this.handlePostArr = data => {
      const postArr = this.state.postArr;
      let result; // console.log(data)

      if (JSON.stringify(postArr) === JSON.stringify(data)) {
        result = postArr;
      } else {
        result = !postArr ? data : [...postArr].concat(data);
      }

      return result;
    };

    this.dataInit = async () => {
      const _this$wpInfo = this.wpInfo,
            baseUrl = _this$wpInfo.baseUrl,
            wpFetchHeaders = _this$wpInfo.wpFetchHeaders;
      const url = "".concat(baseUrl, "frontpage");
      await axios__WEBPACK_IMPORTED_MODULE_1___default()(url, wpFetchHeaders).then(({
        data
      }) => this.setState({
        frontPageId: data.id,
        restType: 'pages'
      })).catch(err => console.log('error fetching frontpage id: ', err));
      return true;
    };

    this.fetchData = async () => {
      const wpFetchHeaders = this.wpInfo.wpFetchHeaders;
      const url = this.buildUrl(); // console.log(url);

      const responce = await axios__WEBPACK_IMPORTED_MODULE_1___default()(url, wpFetchHeaders);
      return this.setDataPaths(responce);
    };

    this.collectAllData = async numPages => {
      const wpFetchHeaders = this.wpInfo.wpFetchHeaders;
      const dataArr = [];

      for (let pg = 1; pg <= numPages; pg += 1) {
        const url = "".concat(this.buildUrl(), "&page=").concat(pg);
        const page = axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url, wpFetchHeaders);
        dataArr.push(page);
      }

      const flattenData = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.all(dataArr).then(response => {
        const pageData = response.map(res => res.data).flat();
        return pageData;
      }).catch(err => console.log('error fetching data: ', err));
      return flattenData;
    };

    this.updateState = data => {
      const restType = this.state.restType;

      switch (restType) {
        case 'posts':
          this.setState({
            postArr: data
          });
          break;

        case 'pages':
        default:
          const frontPageId = this.state.frontPageId;
          let pgObj = {};
          data.forEach(item => {
            if (item.id === frontPageId) {
              pgObj.index = item;
            } else {
              pgObj[item.slug] = item;
            }
          });
          this.setState({
            pgObj
          });
          break;
      }
    };

    this.unsubscribeFromPages = null;
    this.unsubscribeFromPosts = null;
    this.unsubscribeFromSearch = null;

    this.componentDidMount = () => {
      const pathname = this.props.location.pathname;
      this.getAllPages(); // console.log('this.props: ', this.props);

      if (pathname.startsWith('/blog')) {
        this.getAllPosts();
      } else if (pathname.startsWith('/search/')) {
        let term = pathname.replace('/search/', '');
        console.log("rerun search term: ".concat(term));
      }
    };

    this.componentDidUpdate = prevProps => {
      const pathname = this.props.location.pathname;

      if (prevProps.location.pathname !== pathname) {
        console.log('prevProps: ', prevProps);
        console.log('this.props: ', this.props); // this is where you should build in a check for page updates.
        // also check old data vs new data

        if (pathname === '/blog') {
          this.getAllPosts();
        }
      }
    };

    this.componentWillUnmount = () => {
      this.unsubscribeFromPages();
      this.unsubscribeFromSearch();
      this.unsubscribeFromPosts();
    };
  }

  buildUrl() {
    const baseUrl = this.wpInfo.baseUrl;
    const _this$state2 = this.state,
          restType = _this$state2.restType,
          term = _this$state2.term,
          catid = _this$state2.catid,
          currentPage = _this$state2.currentPage;
    const perPage = this.getPerPage();
    let url = baseUrl;

    switch (restType) {
      case 'search':
        url += "search/?s=".concat(term, "&page=").concat(currentPage);
        break;

      case 'category':
        url += "posts?categories=".concat(catid, "&page=").concat(currentPage);
        break;

      case 'posts':
        // console.log(`${restType}${perPage}&page=${currentPage}`);
        url += "".concat(restType).concat(perPage, "&page=").concat(currentPage);
        break;

      case 'pages':
      default:
        url += "".concat(restType).concat(perPage);
        break;
    }

    return url;
  }

  getPerPage() {
    const _this$state3 = this.state,
          restType = _this$state3.restType,
          perPost = _this$state3.perPost,
          prePage = _this$state3.prePage;
    const searchPage = this.wpInfo.searchPage;
    let contentType;

    switch (restType) {
      case 'posts':
        contentType = "".concat(searchPage).concat(perPost);
        break;

      case 'pages':
      default:
        contentType = "".concat(searchPage).concat(prePage);
        break;
    }

    return contentType;
  }

  setDataPaths(responce) {
    const restType = this.state.restType;
    const headers = responce.headers,
          data = responce.data;
    let pathData = true;

    switch (restType) {
      case 'posts':
        let allPostsData = this.handlePostArr(data);
        this.setState({
          totalPosts: this.makeNum(headers['x-wp-total']),
          postArr: allPostsData
        });
        break;

      case 'search':
        let allSearchData = this.handleSearchArr(data);
        this.setState({
          totalSearch: this.makeNum(headers['x-wp-total']),
          searchArr: allSearchData
        });
        break;

      case 'pages':
      default:
        this.setState({
          totalPages: this.makeNum(headers['x-wp-total'])
        });
        pathData = this.makeNum(headers['x-wp-totalpages']);
        break;
    }

    return pathData;
  }

  updateSearhTerm(term) {
    this.setState({
      term
    });
  }

  updateRestType(type) {
    this.setState({
      restType: type
    });
  }

  submitSearch() {
    const term = this.state.term;
    this.setState({
      restType: 'search',
      currentPage: 1,
      lastSearched: term
    }, () => {
      this.props.history.push("/search/".concat(term));
      this.unsubscribeFromSearch = this.fetchData().then(result => result).catch(err => console.error('err fetching search data', err));
    });
  }

  nextClicked(type) {
    const _this$state4 = this.state,
          currentPage = _this$state4.currentPage,
          startIdx = _this$state4.startIdx,
          perPost = _this$state4.perPost,
          prePage = _this$state4.prePage;
    let newPage = currentPage + 1;
    let newStart = type === 'posts' ? startIdx + perPost : startIdx + prePage;
    this.setState({
      currentPage: newPage,
      startIdx: newStart
    }, () => {
      this.unsubscribeFromPosts = this.fetchData().then(result => result).catch(err => console.error('err fetching post data', err));
    });
  }

  previousClicked() {
    let newPage = this.state.currentPage - 1;
    this.setState({
      currentPage: newPage
    }, () => {
      this.unsubscribeFromPosts = this.fetchData().then(result => result).catch(err => console.error('err fetching post data', err));
    });
  }

  getAllPosts() {
    this.setState({
      restType: 'posts',
      currentPage: 1,
      startIdx: 0
    }, () => {
      this.unsubscribeFromPosts = this.fetchData().then(result => result).catch(err => console.error('err fetching post data', err));
    });
  }

  getAllPages() {
    this.unsubscribeFromPages = this.dataInit().then(() => this.fetchData()).then(numPages => this.collectAllData(numPages)).then(data => this.updateState(data)).catch(err => console.error('err fetching page data', err));
  }

  render() {
    const children = this.props.children;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContext.Provider, {
      value: this.state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    }, children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(PageProvider));

/***/ }),

/***/ "./src/templates/Archive.js":
/*!**********************************!*\
  !*** ./src/templates/Archive.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_PageProvider_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/PageProvider.jsx */ "./src/providers/PageProvider.jsx");
/* harmony import */ var _partials_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/Head */ "./src/partials/Head.js");
/* harmony import */ var _partials_Foot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partials/Foot */ "./src/partials/Foot.js");
/* harmony import */ var _partials_Pagination_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../partials/Pagination.jsx */ "./src/partials/Pagination.jsx");
/* harmony import */ var _components_BlogPage_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BlogPage.jsx */ "./src/components/BlogPage.jsx");
/* harmony import */ var _components_SearchedPage_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchedPage.jsx */ "./src/components/SearchedPage.jsx");
/* harmony import */ var _components_NotFoundPage_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NotFoundPage.jsx */ "./src/components/NotFoundPage.jsx");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/templates/Archive.js";
// import React, { Component, useContext } from 'react';









const Archive = props => {
  let _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_providers_PageProvider_jsx__WEBPACK_IMPORTED_MODULE_1__["PageContext"]),
      searchArr = _useContext.searchArr,
      postArr = _useContext.postArr,
      totalPosts = _useContext.totalPosts,
      totalSearch = _useContext.totalSearch,
      perPost = _useContext.perPost,
      prePage = _useContext.prePage,
      startIdx = _useContext.startIdx;

  const contentType = Object.keys(props.match.params).join('') || 'blog'; // let all = useContext(PageContext);
  // console.log(all);

  const archiveContentPicker = () => {
    let result;

    switch (contentType) {
      case 'blog':
        result = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BlogPage_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
          startIdx: startIdx,
          content: postArr,
          perSet: perPost,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: undefined
        });
        break;

      case 'term':
        result = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchedPage_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
          startIdx: startIdx,
          content: searchArr,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: undefined
        });
        break;

      case 'catid':
        result = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchedPage_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: undefined
        });
        break;

      default:
        // 404
        result = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NotFoundPage_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: undefined
        });
        break;
    }

    return result;
  };

  const archiveNeedsPagination = () => {
    let result;

    switch (contentType) {
      case 'blog':
        result = !!totalPosts && totalPosts > perPost ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Pagination_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          totalCount: totalPosts,
          perSet: perPost,
          type: 'posts',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: undefined
        }) : '';
        break;

      case 'term':
      case 'catid':
      default:
        // 404
        result = !!totalSearch && totalSearch > prePage ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Pagination_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          totalCount: totalSearch,
          perSet: prePage,
          type: 'search',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: undefined
        }) : '';
        break;
    }

    return result;
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "archive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, archiveContentPicker(), archiveNeedsPagination()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Foot__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Archive);

/***/ }),

/***/ "./src/templates/Notfound.js":
/*!***********************************!*\
  !*** ./src/templates/Notfound.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/Head */ "./src/partials/Head.js");
/* harmony import */ var _partials_Foot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/Foot */ "./src/partials/Foot.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/templates/Notfound.js";




class NotFound extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "notfound",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content-area",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "404 Not Found")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Foot__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/templates/Page.js":
/*!*******************************!*\
  !*** ./src/templates/Page.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_PageProvider_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/PageProvider.jsx */ "./src/providers/PageProvider.jsx");
/* harmony import */ var _partials_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/Head */ "./src/partials/Head.js");
/* harmony import */ var _partials_Foot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partials/Foot */ "./src/partials/Foot.js");
/* harmony import */ var _components_HomePage_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomePage.jsx */ "./src/components/HomePage.jsx");
/* harmony import */ var _components_AboutPage_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AboutPage.jsx */ "./src/components/AboutPage.jsx");
/* harmony import */ var _components_NotFoundPage_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NotFoundPage.jsx */ "./src/components/NotFoundPage.jsx");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/templates/Page.js";








const Page = props => {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_providers_PageProvider_jsx__WEBPACK_IMPORTED_MODULE_1__["PageContext"]),
        pgObj = _useContext.pgObj;

  const pagePicker = () => {
    const pageSlug = props.match.params.slug || 'index';
    let result = '';

    switch (pageSlug) {
      case 'about':
        result = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AboutPage_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
          content: pgObj[pageSlug],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: undefined
        });
        break;

      case 'index':
        result = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomePage_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          content: pgObj[pageSlug],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: undefined
        });
        break;

      default:
        // 404
        result = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NotFoundPage_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: undefined
        });
        break;
    }

    return result;
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, pgObj ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), pagePicker(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Foot__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Loading...")));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/templates/Single.js":
/*!*********************************!*\
  !*** ./src/templates/Single.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/Head */ "./src/partials/Head.js");
/* harmony import */ var _partials_ThePostLoop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/ThePostLoop */ "./src/partials/ThePostLoop.js");
/* harmony import */ var _partials_Foot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partials/Foot */ "./src/partials/Foot.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/Context */ "./src/context/Context.js");
/* harmony import */ var _partials_CommentList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../partials/CommentList */ "./src/partials/CommentList.js");
/* harmony import */ var _partials_CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../partials/CommentForm */ "./src/partials/CommentForm.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/templates/Single.js";








const Single = props => {
  let comments = '';
  let commentsForm = '';

  if (props.match.path === '/blog/:slug') {
    comments = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_CommentList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    });
    commentsForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_Context__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    router: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_ThePostLoop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), comments, commentsForm, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Foot__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Single);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.bcd3e49f.chunk.js.map