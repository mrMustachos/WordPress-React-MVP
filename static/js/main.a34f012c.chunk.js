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


const HomePage = props => {
  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "Howdy From the Home Page");
};

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
    console.log(path);
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
        lineNumber: 217
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

/***/ "./src/partials/Pager.js":
/*!*******************************!*\
  !*** ./src/partials/Pager.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_WithConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/WithConsumer */ "./src/context/WithConsumer.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/partials/Pager.js";



const Pager = ({
  context
}) => {
  let prevBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  let nextBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

  let curPage = () => context.currentPage;

  let totalPages = () => context.totalPages;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    prevBtn.current.disabled = true; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function nextClicked() {
    context.nextClicked();

    if (parseInt(totalPages()) === parseInt(curPage() + 1)) {
      nextBtn.current.disabled = true;
    }

    prevBtn.current.disabled = false;
  }

  function previousClicked() {
    context.previousClicked();

    if (parseInt(curPage() - 1) === 1) {
      prevBtn.current.disabled = true;
    }

    nextBtn.current.disabled = false;
  }

  function pagerClass() {
    let cls = 'Pager';

    if (parseInt(totalPages()) <= 1 || context.appError) {
      cls = 'Pager hidden';
    }

    return cls;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: pagerClass(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    ref: prevBtn,
    onClick: previousClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Previous"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    ref: nextBtn,
    onClick: nextClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Next"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PagerText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Page", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: curPage()
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), " of", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: totalPages()
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_WithConsumer__WEBPACK_IMPORTED_MODULE_1__["default"])(Pager));

/***/ }),

/***/ "./src/partials/PostMeta.js":
/*!**********************************!*\
  !*** ./src/partials/PostMeta.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_WithConsumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/WithConsumer */ "./src/context/WithConsumer.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/partials/PostMeta.js";





const PostMeta = ({
  index,
  context
}) => {
  const posts = () => context.posts;

  const item = posts()[index];
  let catLink = ''; // console.log(item)

  if (item.categories) {
    catLink = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, "Under ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/category/".concat(item.categories[0]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, item.category_name));
  }

  let theMeta = '';

  if (item.type === 'post') {
    theMeta = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post-meta",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }, "Published: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {
      format: "MM/DD/YYYY",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    }, item.date), ", Written by ", item.author_name, ", ", catLink);
  }

  return theMeta;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_WithConsumer__WEBPACK_IMPORTED_MODULE_3__["default"])(PostMeta));

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
/* harmony import */ var _context_WithConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/WithConsumer */ "./src/context/WithConsumer.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/partials/SearchForm.js";



const SearchForm = ({
  context
}) => {
  const ct = () => context ? context.term : '';

  const term = ct();

  const updateTerm = e => context.updateTerm(e.target.value);

  const submitSearch = e => {
    e.preventDefault();
    context.submitSearch();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "searchForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: updateTerm,
    value: term,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: submitSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Submit"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_WithConsumer__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchForm));

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
/* harmony import */ var _context_WithConsumer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/WithConsumer */ "./src/context/WithConsumer.js");
/* harmony import */ var _PostMeta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostMeta */ "./src/partials/PostMeta.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/partials/ThePost.js";





const ThePost = ({
  index,
  context
}) => {
  const posts = () => context.posts;

  const item = posts()[index];
  let linkPrefix = item.type === 'page' ? '/page/' : '/blog/';
  let theContent = '';

  switch (context.route) {
    case '/': // if homepage,

    case '/blog': // if on the post page,

    case '/search/:term': // or if search

    case '/category/:catid':
      // or if search
      theContent = item.excerpt.rendered; // show excerpt only

      break;

    default:
      // for single, pages - show entire content
      theContent = item.content.rendered;
      break;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "post-id-".concat(item.id),
    className: 'post-item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "".concat(linkPrefix).concat(item.slug),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, item.title.rendered)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostMeta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    index: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post-content",
    dangerouslySetInnerHTML: {
      __html: theContent
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_context_WithConsumer__WEBPACK_IMPORTED_MODULE_2__["default"])(ThePost));

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
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/providers/PageProvider.jsx";


const PageContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  state: null
});

class PageProvider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      postArr: null,
      pgObj: null,
      frontPageId: null,
      getAllPosts: this.getAllPosts.bind(this)
    };
    this.wpInfo = {
      baseUrl: '/wp-json/wp/v2/',
      perPage: '?per_page=10',
      wpFetchHeaders: {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Expose-Headers': 'x-wp-total'
        }
      }
    };
    this.unsubscribeFromPages = null;

    this.getNumPages = async type => {
      const _this$wpInfo = this.wpInfo,
            baseUrl = _this$wpInfo.baseUrl,
            perPage = _this$wpInfo.perPage,
            wpFetchHeaders = _this$wpInfo.wpFetchHeaders;
      const url = "".concat(baseUrl).concat(type).concat(perPage);

      const _ref = await axios__WEBPACK_IMPORTED_MODULE_1___default()(url, wpFetchHeaders),
            headers = _ref.headers;

      return headers['x-wp-totalpages'];
    };

    this.fetchData = async (numPages, type) => {
      const _this$wpInfo2 = this.wpInfo,
            baseUrl = _this$wpInfo2.baseUrl,
            perPage = _this$wpInfo2.perPage,
            wpFetchHeaders = _this$wpInfo2.wpFetchHeaders;
      const dataArr = [];

      for (let pg = 1; pg <= numPages; pg += 1) {
        const url = "".concat(baseUrl).concat(type).concat(perPage, "&page=").concat(pg);
        const page = axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url, wpFetchHeaders);
        dataArr.push(page);
      }

      const collectedData = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.all(dataArr).then(response => {
        const pageData = response.map(res => res.data).flat(); // this.setState({ pages: pageData });

        return pageData;
      }).catch(err => console.log('error fetching data: ', err));
      return collectedData;
    };

    this.getFrontPage = async () => {
      const _this$wpInfo3 = this.wpInfo,
            baseUrl = _this$wpInfo3.baseUrl,
            wpFetchHeaders = _this$wpInfo3.wpFetchHeaders;
      const url = "".concat(baseUrl, "frontpage");
      await axios__WEBPACK_IMPORTED_MODULE_1___default()(url, wpFetchHeaders).then(({
        data
      }) => this.setState({
        frontPageId: data.id
      })).catch(err => console.log('error fetching frontpage id: ', err));
      return true;
    };

    this.updateState = (data, type) => {
      switch (type) {
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

    this.componentDidMount = () => {
      this.unsubscribeFromPages = this.getFrontPage().then(() => this.getNumPages('pages')).then(numPages => this.fetchData(numPages, 'pages')).then(data => this.updateState(data, 'pages')).catch(err => console.error('err fetching page data', err));
    };

    this.componentWillUnmount = () => {
      this.unsubscribeFromPages();
    };
  }

  // fetchPages = async (numPages, type = 'pages') => {
  // 	const { baseUrl, perPage, wpFetchHeaders } = this.wpInfo;
  // 	const { frontPageId } = this.state;
  // 	const pagesArr = [];
  // 	for (let pg = 1; pg <= numPages; pg += 1) {
  // 		const url = `${baseUrl}${type}${perPage}&page=${pg}`;
  // 		const page = Axios.get(url, wpFetchHeaders);
  // 		pagesArr.push(page);
  // 	}
  // 	await Axios.all(pagesArr)
  // 		.then((response) => {
  // 			const pageData = response.map((res) => res.data).flat();
  // 			// this.setState({ pages: pageData });
  // 			return pageData;
  // 		})
  // 		.then((pageArr) => {
  // 			let pgObj = {};
  // 			if (type === 'posts') {
  // 				this.setState({ postArr: pageArr });
  // 			} else {
  // 				pageArr.forEach((page) => {
  // 					if (page.id === frontPageId) {
  // 						pgObj.index = page;
  // 					} else {
  // 						pgObj[page.slug] = page;
  // 					}
  // 				});
  // 				this.setState({ pgObj });
  // 			}
  // 		})
  // 		.catch((err) => console.log('error fetching pages: ', err)
  // 	);
  // 	return true;
  // }
  getAllPosts() {
    this.unsubscribeFromPosts = this.getNumPages('posts').then(numPosts => this.fetchData(numPosts, 'posts')).then(data => this.updateState(data, 'posts')).catch(err => console.error('err fetching post data', err));
  }

  render() {
    // const { data } = this.state;
    const children = this.props.children;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContext.Provider, {
      value: this.state,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PageProvider);

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
/* harmony import */ var _partials_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/Head */ "./src/partials/Head.js");
/* harmony import */ var _partials_ThePostLoop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/ThePostLoop */ "./src/partials/ThePostLoop.js");
/* harmony import */ var _partials_Pager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partials/Pager */ "./src/partials/Pager.js");
/* harmony import */ var _partials_Foot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../partials/Foot */ "./src/partials/Foot.js");
/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/Context */ "./src/context/Context.js");
var _jsxFileName = "/Users/billdomanickwork/Repos/_wordpress/wp-content/themes/cacique/react-src/src/templates/Archive.js";







const Archive = props => {
  let pageTitle = props.match.path === '/search/:term' ? 'Search Results' : '';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_Context__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    router: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "archive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, pageTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_ThePostLoop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Pager__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Foot__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })));
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






 // import ContactPage from '../components/ContactPage.jsx';
// import ThePageLoop from '../partials/ThePageLoop';
// import Pager from '../partials/Pager';
// import { Provider } from '../context/Context';
// const Page = (props) => {
// 	return (
// 		<Provider router={ props }>
// 			<div className="pages">
// 				<Head />
// 				<div className="content-area">
// 					<ThePageLoop />
// 				</div>
// 				<Foot />
// 			</div>
// 		</Provider>
// 	);
// };

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
            lineNumber: 40
          },
          __self: undefined
        });
        break;

      case 'index':
        result = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomePage_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          content: pgObj[pageSlug],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: undefined
        });
        break;

      default:
        // 404
        result = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NotFoundPage_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, pgObj ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), pagePicker(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_Foot__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
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

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.a34f012c.chunk.js.map