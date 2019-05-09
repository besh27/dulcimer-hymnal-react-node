(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html, #root {\n  background-color:#eaeaea;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 5vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\nnav {\n  background-color: rgba(3, 63, 99, 1) !important;\n  position: fixed;\n  z-index: 100000;\n  width: 100%;\n  color:#fff;\n}\n\n.navbar{\n  background-color: rgba(3, 63, 99, 1) !important;\n}\n\n.mr-auto.navbar-nav {\n  margin-left: 25px;\n}\n\n.dropdown.nav-item {\n  margin-right: 20px;\n}\n\n.navbar-light .navbar-brand{\n  color:#fff !important\n}\n.navbar-light .navbar-nav .nav-link{\n  color:#fff !important\n}\n\n.carousel {\n  height: 400px;\n  overflow: hidden;\n  border: 3px solid #000;\n  margin: 80px 0px 25px;\n}\n.carousel-item{\n  background-color: #000;\n  height: 400px;\n}\n\n.hymnalCard {\n  border: 3px solid #fff;\n  background-color: #fff;\n  margin: 10px 0px;\n  width: 30%;\n}\n\n.hymnalCard h2{\n  display:block;\n  background-color:#0a0a0a;\n  color:#fff;\n  margin: 0px;\n}\n\n.filters {\n  margin-top: 38px;\n}\n\n.list-group-item{\n  margin: 10px 0px;\n}\n\n.hymnalCardInfo {\n  background-color: #fff;\n  color: #0a0a0a;\n  list-style: none;\n  text-align: left;\n  padding-left: 10px;\n}\n\n.hymnalCardInfo li span{\n  font-weight: 700;\n}\n\n.filters.col-4 {\n  margin-top: 38px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 100px; \n}\n\n/* Hymnal Pages */\n.pageContent{\n  margin-top:100px\n}\n.volume-info {\n  background-color: #fff;\n  padding: 10px 10px 1px 10px;\n  margin: -5px 0px 15px;\n  border-radius: 3px;\n}\n\n/* .volumeHymns{\n  columns:2 auto;\n  -moz-columns:2 auto;\n  column-gap:normal;\n  -moz-column-gap:normal;\n} */\n\n.volume-arrangements section {\n  max-height: 858px;\n  overflow: scroll;\n  background-color: #fff;\n}\n\n\nfooter {\n  text-align: center;\n  padding: 15px 0px 1px;\n  background-color: #eaeaea;\n  margin: 0px;\n  font-size: .9em;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Navigation/Navigation */ "./src/Components/Navigation/Navigation.js");
/* harmony import */ var _Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Footer/Footer */ "./src/Components/Footer/Footer.js");
/* harmony import */ var _Components_Pages_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Pages/Home */ "./src/Components/Pages/Home.js");
/* harmony import */ var _Components_Pages_Volume1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/Pages/Volume1 */ "./src/Components/Pages/Volume1.js");
/* harmony import */ var _Components_Pages_Volume2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/Pages/Volume2 */ "./src/Components/Pages/Volume2.js");
var _jsxFileName = "/Users/jMac/Documents/apps/reactJs/hymnal/dulcimer-hymnal/src/App.js";











class App extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {// hymnList: hymnalData,
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      className: "main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "/",
      component: _Components_Pages_Home__WEBPACK_IMPORTED_MODULE_7__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/volume-1",
      component: _Components_Pages_Volume1__WEBPACK_IMPORTED_MODULE_8__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/volume-2",
      component: _Components_Pages_Volume2__WEBPACK_IMPORTED_MODULE_10__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/Carousel/HeroCarousel.js":
/*!*************************************************!*\
  !*** ./src/Components/Carousel/HeroCarousel.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Carousel */ "./node_modules/react-bootstrap/Carousel.js");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_hymnalProductData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/hymnalProductData */ "./src/data/hymnalProductData.js");
var _jsxFileName = "/Users/jMac/Documents/apps/reactJs/hymnal/dulcimer-hymnal/src/Components/Carousel/HeroCarousel.js";




function HeroCarousel(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, _data_hymnalProductData__WEBPACK_IMPORTED_MODULE_2__["default"].map((product, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "d-block w-100",
    src: product.imgSrc,
    alt: product.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Caption, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, product.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, product.description)))));
}

/* harmony default export */ __webpack_exports__["default"] = (HeroCarousel);

/***/ }),

/***/ "./src/Components/Facebook/FbPosts.js":
/*!********************************************!*\
  !*** ./src/Components/Facebook/FbPosts.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jMac/Documents/apps/reactJs/hymnal/dulcimer-hymnal/src/Components/Facebook/FbPosts.js";


function FbPosts(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "fbIframe",
    src: "https://www.facebook.com/groups/thedulcimerhymnal/" // src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
    ,
    width: "340",
    height: "500",
    style: {
      "border": "none",
      "overflow": "hidden"
    },
    scrolling: "no",
    frameBorder: "0",
    allowransparency: "true",
    allow: "encrypted-media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FbPosts);

/***/ }),

/***/ "./src/Components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/Components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jMac/Documents/apps/reactJs/hymnal/dulcimer-hymnal/src/Components/Footer/Footer.js";


function Footer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "The Dulcimer Hymnal: Copyright \xA92019"));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/Components/HymnalLists/HomeList.js":
/*!************************************************!*\
  !*** ./src/Components/HymnalLists/HomeList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_defaultFilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/defaultFilters */ "./src/Services/defaultFilters.js");
/* harmony import */ var _HymnalCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HymnalCard */ "./src/Components/HymnalLists/HymnalCard.js");
var _jsxFileName = "/Users/jMac/Documents/apps/reactJs/hymnal/dulcimer-hymnal/src/Components/HymnalLists/HomeList.js";




function HomeList(props) {
  const hymnals = Object(_Services_defaultFilters__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, hymnals.map((hymn, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HymnalCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: index,
    title: hymn.title,
    composer: hymn.composer,
    words: hymn.words,
    timeSignature: hymn.timeSignature,
    keySig: hymn.keySig,
    scriptureRef: hymn.scriptureRef,
    arrangementYear: hymn.arrangementYear,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (HomeList);

/***/ }),

/***/ "./src/Components/HymnalLists/HymnalCard.js":
/*!**************************************************!*\
  !*** ./src/Components/HymnalLists/HymnalCard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "./node_modules/react-bootstrap/ListGroup.js");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jMac/Documents/apps/reactJs/hymnal/dulcimer-hymnal/src/Components/HymnalLists/HymnalCard.js";



function HymnalCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "hymnalCardInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Composer:"), " ", props.composer), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Words:"), " ", props.words), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Time Signature:"), " ", props.timeSignature), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Key Signature:"), " ", props.keySig), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Scripture Reference:"), " ", props.scriptureRef), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Date Arranged:"), " ", props.arrangementYear))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "sheetMusic",
    href: props.arrangementLink,
    rel: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Sheet Music")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "mp3Audio",
    href: props.audioLink,
    rel: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "MP3 Audio"))));
}

/* harmony default export */ __webpack_exports__["default"] = (HymnalCard);

/***/ }),

/***/ "./src/Components/HymnalLists/SearchFilters.js":
/*!*****************************************************!*\
  !*** ./src/Components/HymnalLists/SearchFilters.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "./node_modules/react-bootstrap/ListGroup.js");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Facebook_FbPosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Facebook/FbPosts */ "./src/Components/Facebook/FbPosts.js");
var _jsxFileName = "/Users/jMac/Documents/apps/reactJs/hymnal/dulcimer-hymnal/src/Components/HymnalLists/SearchFilters.js";




function SearchFilters(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Let's Search!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Composer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "exampleCheck1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-check-label",
    htmlFor: "exampleCheck1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Check me out")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Search")));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchFilters);

/***/ }),

/***/ "./src/Components/Navigation/Navigation.js":
/*!*************************************************!*\
  !*** ./src/Components/Navigation/Navigation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/jMac/Documents/apps/reactJs/hymnal/dulcimer-hymnal/src/Components/Navigation/Navigation.js";



function Navigation(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    expand: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "The Dulcimer Hymnal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
    id: "basic-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"], {
    title: "Hymnals",
    id: "basic-nav-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    href: "volume-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Volume 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    href: "volume-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Volume 2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"], {
    title: "Free Arangements",
    id: "basic-nav-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    href: "free-hyms-from-dulcimer-hymnal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Free Hyms From The Dulcimer Hymnal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    href: "free-hymn-sheet-music",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Free Hymn Sheet Music"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, {
    href: "misc-dulcimer-arrangements",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Misc. Dulcimer Arrangements")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    inline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    type: "text",
    placeholder: "Search",
    className: "mr-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outline-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Search")));
}

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./src/Components/Pages/Home.js":
/*!**************************************!*\
  !*** ./src/Components/Pages/Home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HymnalLists_HomeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HymnalLists/HomeList */ "./src/Components/HymnalLists/HomeList.js");
/* harmony import */ var _Carousel_HeroCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Carousel/HeroCarousel */ "./src/Components/Carousel/HeroCarousel.js");
/* harmony import */ var _HymnalLists_SearchFilters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HymnalLists/SearchFilters */ "./src/Components/HymnalLists/SearchFilters.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/jMac/Documents/apps/reactJs/hymnal/dulcimer-hymnal/src/Components/Pages/Home.js";






function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel_HeroCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 8,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Recent Arrangements:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HymnalLists_HomeList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 4,
    xs: 12,
    className: "filters affix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HymnalLists_SearchFilters__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/Components/Pages/Volume1.js":
/*!*****************************************!*\
  !*** ./src/Components/Pages/Volume1.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HymnalLists_HomeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HymnalLists/HomeList */ "./src/Components/HymnalLists/HomeList.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/jMac/Documents/apps/reactJs/hymnal/dulcimer-hymnal/src/Components/Pages/Volume1.js";




function Volume1(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "pageContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 8,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "The Dulcimer Hymnal: Volume 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "volume-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "50 Traditional Hymns for the Mountain Dulcimer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Purchase a PDF Version for your computer, ipad, tablet, nook or kindle!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Each Hymnal Includes 50 Hymns for Only $15!!!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "We offer Low Shipping Options of $5 for a single hymnal! If you buy another hymnal, the second's shipping free! Buy three or more (up to ten) hymnals, the shipping is only $11!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Pay With Money Order Mail all orders to my contact address")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Hymns"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 6,
    xs: 12,
    className: "volumeHymns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Abide With Me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Ah, Holy Jesus"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "All Creatures of our God and King"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Amazing Grace"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Be Thou My Vision"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Blessed Assurance, Jesus Is Mine"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Blest Be The Tie That Binds"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Christ The Lord Is Risen Today"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Come, Christians, Join To Sing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Come Thou Almighty King"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Come Thou Fount of Every Blessing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Day by Day"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Doxology"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Fairest Lord Jesus"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "For the Beauty of the Earth"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Give me Jesus"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Grace Greater Than All Our Sin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Happy the Home When God is There"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "He Leadeth Me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Holy, Holy, Holy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "How Firm a Foundation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "I Have Decided to Follow Jesus"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "I Love to Tell the Story"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "I Surrender All"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Immortal, Invisible, God Only Wise"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 6,
    xs: 12,
    className: "volumeHymns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    start: "26",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Jesus Love Me, This I Know"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Jesus Paid It All"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Jesus The Very Thought Of Thee"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Just As I Am, Without One Plea"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Leaning On The Everlasting Arms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Let All Things Now Living"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Let Us Break Bread Together"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "My Faith Looks Up To Thee"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Nothing But The Blood Of Jesus"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "O, for A Thousand Tongues To Sing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "O Sacred Head Now Wounded"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "O Worship the King"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Praise to the Lord, the Almighty"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Savior, Like a Shepherd Lead Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Standing on the Promises"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Take Time to be Holy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "The Church's One Foundation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "The Solid Rock"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "The Strife is O'er the Battle Done"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "This is my Father's World"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Were You There?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "What a Freind We Have in Jesus"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "What Wondrous Love is This?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "When I survey the Wondrous Cross"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "When We All Get to Heaven"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 4,
    xs: 12,
    className: "volume-arrangements",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Featured Arrangements"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HymnalLists_HomeList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Volume1);

/***/ }),

/***/ "./src/Components/Pages/Volume2.js":
/*!*****************************************!*\
  !*** ./src/Components/Pages/Volume2.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HymnalLists_HomeList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HymnalLists/HomeList */ "./src/Components/HymnalLists/HomeList.js");
/* harmony import */ var _Carousel_HeroCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Carousel/HeroCarousel */ "./src/Components/Carousel/HeroCarousel.js");
/* harmony import */ var _HymnalLists_SearchFilters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HymnalLists/SearchFilters */ "./src/Components/HymnalLists/SearchFilters.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/jMac/Documents/apps/reactJs/hymnal/dulcimer-hymnal/src/Components/Pages/Volume2.js";






function Volume2(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Carousel_HeroCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 8,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Recent Arrangements:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HymnalLists_HomeList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 4,
    xs: 12,
    className: "filters affix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HymnalLists_SearchFilters__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Volume2);

/***/ }),

/***/ "./src/Services/defaultFilters.js":
/*!****************************************!*\
  !*** ./src/Services/defaultFilters.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_hymnalData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/hymnalData */ "./src/data/hymnalData.js");


function defaultFilters() {
  if (window.location.pathname === '/free-hymn-sheet-music') {
    let hymns = _data_hymnalData__WEBPACK_IMPORTED_MODULE_0__["default"].filter(hymnType => hymnType.type === 0);
    return hymns;
  }

  if (window.location.pathname === '/volume1') {
    let hymns = _data_hymnalData__WEBPACK_IMPORTED_MODULE_0__["default"].filter(hymnType => hymnType.type === 1);
    return hymns;
  }

  if (window.location.pathname === '/volume2') {
    let hymns = _data_hymnalData__WEBPACK_IMPORTED_MODULE_0__["default"].filter(hymnType => hymnType.type === 2);
    return hymns;
  } else if (window.location.pathname === '/misc-dulcimer-arrangements') {
    let hymns = _data_hymnalData__WEBPACK_IMPORTED_MODULE_0__["default"].filter(hymnType => hymnType.type === 3);
    return hymns;
  } else {
    let hymns = _data_hymnalData__WEBPACK_IMPORTED_MODULE_0__["default"];
    return hymns;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (defaultFilters);

/***/ }),

/***/ "./src/data/hymnalData.js":
/*!********************************!*\
  !*** ./src/data/hymnalData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hymnalData = [{
  "arrangementLink": "",
  "arrangementYear": "7/11/2016",
  "audioLink": "",
  "composer": "William G. Fischer",
  "forSale": false,
  "images": [""],
  "keySig": "G",
  "meter": "",
  "scriptureRef": ["Romans 12:1"],
  "style": "Gospel",
  "timeSignature": "",
  "title": "Yielding to Jesus",
  "type": 0,
  "words": "unknown author",
  "year": ""
}, {
  "arrangementLink": "",
  "arrangementYear": "7/04/2016",
  "audioLink": "",
  "composer": "William J. Henry",
  "forSale": false,
  "images": [""],
  "keySig": "D",
  "meter": "",
  "style": "Gospel",
  "scriptureRef": ["Psalms 27:5"],
  "timeSignature": "",
  "title": "In His Pavilion Hiding",
  "type": 0,
  "words": "William J. Henry",
  "year": ""
}, {
  "arrangementLink": "",
  "arrangementYear": "6/27/2016",
  "audioLink": "",
  "composer": "Mildred E. Sullivan",
  "forSale": false,
  "images": [""],
  "keySig": "D",
  "meter": "",
  "scriptureRef": ["Isaiah 35:10"],
  "style": "Gospel",
  "timeSignature": "",
  "title": "Oh, Say, but I’m Glad",
  "type": 0,
  "words": "James P. Sullivan",
  "year": "1930"
}, {
  "arrangementLink": "",
  "arrangementYear": "9/23/2013",
  "audioLink": "",
  "composer": "Ira D. SankeySig",
  "forSale": false,
  "images": [""],
  "keySig": "G",
  "meter": "",
  "scriptureRef": ["Matthew 18:12-13"],
  "style": "1800s",
  "timeSignature": "6/8",
  "title": "The Ninety and Nine",
  "type": 0,
  "words": "Elizabeth C. Clephane,",
  "year": "1874"
}, {
  "arrangementLink": "",
  "arrangementYear": "9/10/2013",
  "audioLink": "",
  "composer": "African-American melody",
  "forSale": false,
  "images": [""],
  "keySig": "D",
  "meter": "",
  "scriptureRef": ["Revalations 22:14"],
  "style": "Gospel",
  "timeSignature": "4/4",
  "title": "When the Saints Go Marching In",
  "type": 0,
  "words": "Unknown Lyricist",
  "year": "1896"
}, {
  "arrangementLink": "",
  "arrangementYear": "1/7/2013",
  "audioLink": "",
  "composer": "Joshua A. Knight",
  "forSale": false,
  "images": [""],
  "keySig": "D",
  "meter": "",
  "scriptureRef": ["Acts 5:31", "Romans 5:8"],
  "style": "Gospel",
  "timeSignature": "4/4",
  "title": "What a Savior!",
  "type": 0,
  "words": "Isabel C. Byrum",
  "year": ""
}, {
  "arrangementLink": "",
  "arrangementYear": "6/11/2012",
  "audioLink": "",
  "composer": "English melody",
  "forSale": false,
  "images": [""],
  "keySig": "G",
  "meter": "",
  "scriptureRef": ["Deut 8:10", "1 Timothy 6:17", "James 1:17"],
  "style": "",
  "timeSignature": "3/4",
  "title": "God Opens Wide His Hand",
  "type": 0,
  "words": "William James",
  "year": ""
}, {
  "arrangementLink": "",
  "arrangementYear": "4/16/2012",
  "audioLink": "",
  "composer": "Barney E. Warren",
  "forSale": false,
  "images": [""],
  "keySig": "D",
  "meter": "",
  "scriptureRef": ["Luke 5:27-28"],
  "style": "Gospel",
  "timeSignature": "4/4",
  "title": "Jesus All to Me",
  "type": 0,
  "words": "Daniel S. Warner",
  "year": ""
}, {
  "arrangementLink": "",
  "arrangementYear": "4/2/2012",
  "audioLink": "",
  "composer": "James McGranahan",
  "forSale": false,
  "images": [""],
  "keySig": "G",
  "meter": "",
  "scriptureRef": ["Mark. 11:22"],
  "style": "",
  "timeSignature": "3/4",
  "title": "Have Faith in God",
  "type": 0,
  "words": "Daniel W. Whittle",
  "year": ""
}, {
  "arrangementLink": "",
  "arrangementYear": "3/12/12",
  "audioLink": "",
  "composer": "J. D. V.",
  "forSale": false,
  "images": [""],
  "keySig": "G",
  "meter": "",
  "scriptureRef": ["John. 14:2-3"],
  "style": "Gospel",
  "timeSignature": "4/4",
  "title": "I Feel Like Traveling On",
  "type": 0,
  "words": "William Hunter",
  "year": ""
}, {
  "arrangementLink": "",
  "arrangementYear": "2/27/2012",
  "audioLink": "",
  "composer": "Henry K. Oliver",
  "forSale": false,
  "images": [""],
  "keySig": "G",
  "meter": "",
  "scriptureRef": ["John 12:26"],
  "style": "",
  "timeSignature": "G",
  "title": "How Shall I Follow Him I Serve?",
  "type": 0,
  "words": "Josiah Conder",
  "year": "1832"
}, {
  "arrangementLink": "",
  "arrangementYear": "2/20/12",
  "audioLink": "",
  "composer": "John R. Sweney",
  "forSale": false,
  "images": [""],
  "keySig": "D",
  "meter": "",
  "scriptureRef": ["Psalm 55:17"],
  "style": "",
  "timeSignature": "3/4",
  "title": "The Child’s Golden keySig",
  "type": 0,
  "words": "John Parker",
  "year": "1909"
}, {
  "arrangementLink": "",
  "arrangementYear": "1/18/12",
  "audioLink": "",
  "composer": "H. Percy Smith",
  "forSale": false,
  "images": [""],
  "keySig": "D",
  "meter": "",
  "scriptureRef": ["Micah 6:8"],
  "style": "",
  "timeSignature": "3/4",
  "title": "O Master, Let Me Walk with Thee",
  "type": 0,
  "words": "Washington Gladden",
  "year": ""
}, {
  "arrangementLink": "",
  "arrangementYear": "1/18/12",
  "audioLink": "",
  "composer": "Unknown",
  "forSale": false,
  "images": [""],
  "keySig": "D",
  "meter": "",
  "scriptureRef": ["1 Chronicles 16:34"],
  "style": "",
  "timeSignature": "4/4",
  "title": "God Is So Good",
  "type": 0,
  "words": "Unknown",
  "year": ""
}, {
  "arrangementLink": "",
  "arrangementYear": "12/12/11",
  "audioLink": "",
  "composer": "French melody",
  "forSale": false,
  "images": [""],
  "keySig": "G",
  "meter": "",
  "scriptureRef": ["Luke 2:13-14"],
  "style": "",
  "timeSignature": "4/4",
  "title": "Angels We Have Heard on High",
  "type": 0,
  "words": "Unknown",
  "year": ""
}, {
  "arrangementLink": "",
  "arrangementYear": "12/05/11",
  "audioLink": "",
  "composer": "Henry T. Smart",
  "forSale": false,
  "images": [""],
  "keySig": "G",
  "meter": "",
  "scriptureRef": ["Haggai 2:7"],
  "style": "",
  "timeSignature": "4/4",
  "title": "Angels from the Realms of Glory",
  "type": 0,
  "words": "James Montgomery",
  "year": "1867"
}, {
  "arrangementLink": "",
  "arrangementYear": "12/05/11",
  "audioLink": "",
  "composer": "Example",
  "forSale": false,
  "images": [""],
  "keySig": "D",
  "meter": "",
  "scriptureRef": ["Example 2:7"],
  "style": "",
  "timeSignature": "4/4",
  "title": "Example from the Realms of Glory",
  "type": 1,
  "words": "James Montgomery",
  "year": "1867"
}, {
  "arrangementLink": "",
  "arrangementYear": "12/05/11",
  "audioLink": "",
  "composer": "Example",
  "forSale": false,
  "images": [""],
  "keySig": "D",
  "meter": "",
  "scriptureRef": ["Example 2:7"],
  "style": "",
  "timeSignature": "4/4",
  "title": "Example from the Realms of Glory",
  "type": 2,
  "words": "James Montgomery",
  "year": "1867"
}];
/* harmony default export */ __webpack_exports__["default"] = (hymnalData);

/***/ }),

/***/ "./src/data/hymnalProductData.js":
/*!***************************************!*\
  !*** ./src/data/hymnalProductData.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hymnalProductData = [{
  "description": "Volume 1 is an effort to give the mountain dulcimer the same quality music that a piano or organ hymnal would have.",
  "link": "/volume-1",
  "imgSrc": "/dulcimer-hymnal/src/Assets/Images/slide1.svg",
  "shortTitle": "Volume 1",
  "title": "The Dulcimer Hymnal: Volume 1"
}, {
  "description": "Volume 2 is an effort to give the mountain dulcimer the same quality music that a piano or organ hymnal would have.",
  "link": "/volume-2",
  "imgSrc": "/dulcimer-hymnal/src/Assets/Images/slide1.svg",
  "shortTitle": "Volume 2",
  "title": "The Dulcimer Hymnal: Volume 2"
}, {
  "description": "This section of free sheet music and tabs is filled with random hymns that were arranged for the mountain dulcimer, but are not in my hymnals.",
  "link": "/free-arrangements",
  "imgSrc": "/dulcimer-hymnal/src/Assets/Images/slide1.svg",
  "title": "Free Dulcimer Hymn Sheet Music and Tablature",
  "shortTitle": "Free Arrangements"
}, {
  "description": "This section of sheet music is filled with random tab arrangements and music theory resources that might come in handy for the mountain dulcimer.",
  "link": "/music-theory",
  "imgSrc": "/dulcimer-hymnal/src/Assets/Images/slide1.svg",
  "title": "Misc. Dulcimer Arrangements and Muic Theory Resources",
  "shortTitle": "Free Arrangements"
}];
/* harmony default export */ __webpack_exports__["default"] = (hymnalProductData);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

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
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/jMac/Documents/apps/reactJs/hymnal/dulcimer-hymnal/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jMac/Documents/apps/reactJs/hymnal/dulcimer-hymnal/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/jMac/Documents/apps/reactJs/hymnal/dulcimer-hymnal/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map