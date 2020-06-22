webpackHotUpdate("static/development/pages/integrations.js",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Footer */ "./components/Footer.tsx");
/* harmony import */ var components_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Logo */ "./components/Logo.tsx");
/* harmony import */ var components_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Hero */ "./components/Hero.tsx");
/* harmony import */ var components_HeaderNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/HeaderNavigation */ "./components/HeaderNavigation.tsx");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme */ "./theme.ts");
var _jsxFileName = "/Users/tommoor/Projects/outline-site/components/Layout.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Layout(_ref) {
  var title = _ref.title,
      header = _ref.header,
      hero = _ref.hero,
      illustration = _ref.illustration,
      sidebar = _ref.sidebar,
      _ref$background = _ref.background,
      background = _ref$background === void 0 ? "transparent" : _ref$background,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "inherit" : _ref$color,
      children = _ref.children;
  var pageTitle = "".concat(title ? title + " – " : "", "Outline \u2013\xA0Team wiki & knowledgebase");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, pageTitle), __jsx("link", {
    rel: "shortcut icon",
    type: "image/png",
    href: "/favicon.png",
    sizes: "16x16",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    type: "image/png",
    href: "/favicon-32.png",
    sizes: "32x32",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/purecss@2.0.3/build/base-min.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/purecss@2.0.3/build/grids-min.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/purecss@2.0.3/build/grids-responsive-min.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "referrer",
    content: "origin",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "slack-app-id",
    content: "A0W3UMKBQ",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:site_name",
    content: "Outline",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:type",
    content: "website",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:title",
    content: title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:image",
    content: "/images/screenshot.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:domain",
    content: "getoutline.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:title",
    content: title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:image",
    content: "/images/screenshot.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })), __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]) + " " + ((header || hero) && "with-header" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]) + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]) + " " + "pure-g",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]) + " " + "pure-u-1-2 header-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(components_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]) + " " + "pure-u-1-2 header-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(components_HeaderNavigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }))), hero ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]) + " " + "pure-g",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]) + " " + "pure-u-1 pure-u-md-2-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, title), __jsx(components_Hero__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, hero)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]) + " " + "pure-u-1 pure-u-md-3-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, illustration && __jsx("img", {
    src: illustration,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 34
    }
  }))) : header)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]) + " " + "page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, sidebar ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]) + " " + "pure-g container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]) + " " + "pure-u-1 pure-u-md-1-5 sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, sidebar), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]) + " " + "pure-u-1 pure-u-md-4-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348107367", [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge]], ["596739005", [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily]]]) + " " + "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, children))) : children), __jsx(components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1348107367",
    dynamic: [color, background, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge],
    __self: this
  }, "header.__jsx-style-dynamic-selector{color:".concat(color, ";background:").concat(background, ";}.header-left.__jsx-style-dynamic-selector,.header-right.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:").concat(theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, " 0;}.header-right.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.with-header.__jsx-style-dynamic-selector{padding-bottom:1em;margin-bottom:2em;}.page.__jsx-style-dynamic-selector{min-height:calc(100vh - 300px);}.content.__jsx-style-dynamic-selector{padding:0 ").concat(theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, ";}@media (max-width:48em){.content.__jsx-style-dynamic-selector{padding:0;}.sidebar.__jsx-style-dynamic-selector{padding:0 ").concat(theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].large, ";margin:-").concat(theme__WEBPACK_IMPORTED_MODULE_7__["spacing"].xlarge, " -5vw 0;width:100vw;}}img.__jsx-style-dynamic-selector{height:200px;float:right;opacity:0.95;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL0xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0hTLEFBR2dELEFBTXRCLEFBS1ksQUFJTixBQUtZLEFBSVEsQUFLM0IsQUFJNkIsQUFPNUIsVUFWYixHQVdZLE1BekJNLE1BMEJMLE1BckJmLElBcEIwQyxFQWdCMUMsQ0EwQkEsQ0FsQkEsQUFTZ0QsbUNBM0JQLENBTHpDLFFBaUNnQixZQUNkLEVBeEJGLGdCQUpBIiwiZmlsZSI6Ii9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL0xheW91dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IExvZ28gZnJvbSBcImNvbXBvbmVudHMvTG9nb1wiO1xuaW1wb3J0IEhlcm8gZnJvbSBcImNvbXBvbmVudHMvSGVyb1wiO1xuaW1wb3J0IEhlYWRlck5hdmlnYXRpb24gZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyTmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgc3BhY2luZywgdHlwb2dyYXBoeSB9IGZyb20gXCJ0aGVtZVwiO1xuXG50eXBlIFByb3BzID0ge1xuICB0aXRsZT86IHN0cmluZztcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGhlYWRlcj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaGVybz86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaWxsdXN0cmF0aW9uPzogc3RyaW5nO1xuICBzaWRlYmFyPzogUmVhY3QuUmVhY3ROb2RlO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtcbiAgdGl0bGUsXG4gIGhlYWRlcixcbiAgaGVybyxcbiAgaWxsdXN0cmF0aW9uLFxuICBzaWRlYmFyLFxuICBiYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiLFxuICBjb2xvciA9IFwiaW5oZXJpdFwiLFxuICBjaGlsZHJlbixcbn06IFByb3BzKSB7XG4gIGNvbnN0IHBhZ2VUaXRsZSA9IGAke1xuICAgIHRpdGxlID8gdGl0bGUgKyBcIiDigJMgXCIgOiBcIlwiXG4gICAgfU91dGxpbmUg4oCTwqBUZWFtIHdpa2kgJiBrbm93bGVkZ2ViYXNlYDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwYWdlVGl0bGV9PC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBocmVmPVwiL2Zhdmljb24ucG5nXCJcbiAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBocmVmPVwiL2Zhdmljb24tMzIucG5nXCJcbiAgICAgICAgICBzaXplcz1cIjMyeDMyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcHVyZWNzc0AyLjAuMy9idWlsZC9iYXNlLW1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9wdXJlY3NzQDIuMC4zL2J1aWxkL2dyaWRzLW1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9wdXJlY3NzQDIuMC4zL2J1aWxkL2dyaWRzLXJlc3BvbnNpdmUtbWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJyZWZlcnJlclwiIGNvbnRlbnQ9XCJvcmlnaW5cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwic2xhY2stYXBwLWlkXCIgY29udGVudD1cIkEwVzNVTUtCUVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiT3V0bGluZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOmltYWdlXCIgY29udGVudD1cIi9pbWFnZXMvc2NyZWVuc2hvdC5wbmdcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkb21haW5cIiBjb250ZW50PVwiZ2V0b3V0bGluZS5jb21cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCIvaW1hZ2VzL3NjcmVlbnNob3QucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXsoaGVhZGVyIHx8IGhlcm8pICYmIFwid2l0aC1oZWFkZXJcIn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtMiBoZWFkZXItbGVmdFwiPlxuICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTIgaGVhZGVyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxIZWFkZXJOYXZpZ2F0aW9uIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtoZXJvID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtMi01XCI+XG4gICAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxIZXJvPntoZXJvfTwvSGVybz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEgcHVyZS11LW1kLTMtNVwiPlxuICAgICAgICAgICAgICAgIHtpbGx1c3RyYXRpb24gJiYgPGltZyBzcmM9e2lsbHVzdHJhdGlvbn0gLz59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgaGVhZGVyXG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgIHtzaWRlYmFyID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtMS01IHNpZGViYXJcIj57c2lkZWJhcn08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEgcHVyZS11LW1kLTQtNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3J9O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtiYWNrZ3JvdW5kfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhZGVyLWxlZnQsXG4gICAgICAgICAgLmhlYWRlci1yaWdodCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogJHtzcGFjaW5nLmxhcmdlfSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFkZXItcmlnaHQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud2l0aC1oZWFkZXIge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGFnZSB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzAwcHgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgJHtzcGFjaW5nLmxhcmdlfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2lkZWJhciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgJHtzcGFjaW5nLmxhcmdlfTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAtJHtzcGFjaW5nLnhsYXJnZX0gLTV2dyAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjk1O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTE0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgc2VsZWN0LFxuICAgICAgICAgIHRleHRhcmVhLFxuICAgICAgICAgIC5wdXJlLWcgW2NsYXNzKj1cInB1cmUtdVwiXSB7XG4gICAgICAgICAgICBjb2xvcjogIzEyMTIxMjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAke3R5cG9ncmFwaHkuZm9udEZhbWlseX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSxcbiAgICAgICAgICBoMixcbiAgICAgICAgICBoMyxcbiAgICAgICAgICBoNCxcbiAgICAgICAgICAucHVyZS1nIGgxW2NsYXNzKj1cInB1cmUtdVwiXSxcbiAgICAgICAgICAucHVyZS1nIGgyW2NsYXNzKj1cInB1cmUtdVwiXSxcbiAgICAgICAgICAucHVyZS1nIGgzW2NsYXNzKj1cInB1cmUtdVwiXSxcbiAgICAgICAgICAucHVyZS1nIGg0W2NsYXNzKj1cInB1cmUtdVwiXSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJISyBHcm90ZXNrXCI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJISyBHcm90ZXNrXCI7XG4gICAgICAgICAgICBzcmM6IHVybChcIi9mb250cy9IS0dyb3Rlc2stTGlnaHQuZW90XCIpIGZvcm1hdChcImVvdFwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1MaWdodC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1MaWdodC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSEsgR3JvdGVza1wiO1xuICAgICAgICAgICAgc3JjOiB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLVJlZ3VsYXIuZW90XCIpIGZvcm1hdChcImVvdFwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICAgICAgICB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhLIEdyb3Rlc2tcIjtcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1TZW1pQm9sZC5lb3RcIikgZm9ybWF0KFwiZW90XCIpLFxuICAgICAgICAgICAgICB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLVNlbWlCb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICAgICAgICB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLVNlbWlCb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJISyBHcm90ZXNrXCI7XG4gICAgICAgICAgICBzcmM6IHVybChcIi9mb250cy9IS0dyb3Rlc2stQm9sZC5lb3RcIikgZm9ybWF0KFwiZW90XCIpLFxuICAgICAgICAgICAgICB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/components/Layout.tsx */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "596739005",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily],
    __self: this
  }, "@font-face{font-family:\"HK Grotesk\";src:url(\"/fonts/HKGrotesk-Light.eot\") format(\"eot\"), url(\"/fonts/HKGrotesk-Light.woff2\") format(\"woff2\"), url(\"/fonts/HKGrotesk-Light.woff\") format(\"woff\");font-weight:300;font-style:normal;}@font-face{font-family:\"HK Grotesk\";src:url(\"/fonts/HKGrotesk-Regular.eot\") format(\"eot\"), url(\"/fonts/HKGrotesk-Regular.woff2\") format(\"woff2\"), url(\"/fonts/HKGrotesk-Regular.woff\") format(\"woff\");font-weight:400;font-style:normal;}@font-face{font-family:\"HK Grotesk\";src:url(\"/fonts/HKGrotesk-SemiBold.eot\") format(\"eot\"), url(\"/fonts/HKGrotesk-SemiBold.woff2\") format(\"woff2\"), url(\"/fonts/HKGrotesk-SemiBold.woff\") format(\"woff\");font-weight:600;font-style:normal;}@font-face{font-family:\"HK Grotesk\";src:url(\"/fonts/HKGrotesk-Bold.eot\") format(\"eot\"), url(\"/fonts/HKGrotesk-Bold.woff2\") format(\"woff2\"), url(\"/fonts/HKGrotesk-Bold.woff\") format(\"woff\");font-weight:700;font-style:normal;}.container{max-width:1140px;width:90vw;margin:0 auto;}*{box-sizing:border-box;}html,button,input,select,textarea,.pure-g [class*=\"pure-u\"]{color:#121212;font-family:".concat(theme__WEBPACK_IMPORTED_MODULE_7__["typography"].fontFamily, ";}html,body{padding:0;margin:0;line-height:1.6;}h1{font-size:3em;}h2{font-size:2em;}h1,h2,h3,h4,.pure-g h1[class*=\"pure-u\"],.pure-g h2[class*=\"pure-u\"],.pure-g h3[class*=\"pure-u\"],.pure-g h4[class*=\"pure-u\"]{font-family:\"HK Grotesk\";font-weight:600;line-height:1;}a{color:inherit;-webkit-text-decoration:none;text-decoration:none;}p{line-height:1.4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL0xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUtTLEFBRzhCLEFBTUssQUFTUixBQU1KLEFBTUksQUFHQSxBQVdXLEFBTVgsQUFLRSxBQUlTLEFBU0EsQUFTQSxBQVNBLFVBN0RoQixJQU5nQyxBQVkzQyxBQUdBLEFBaUJ1QixFQUt2QixDQXBEYSxFQXNCSyxHQWhCbEIsR0FtQ2tCLEFBaUJtQyxBQVNFLEFBU0MsQUFTSixHQXBGcEMsT0FzQmhCLE1BbUJnQixDQXhDaEIsYUFjQSxBQTJCQSxTQUtBLGtIQXNDa0IsR0EzQkEsTUFTQSxHQVNBLElBVUUsR0EzQkEsTUFTQSxHQVNBLE1BVXBCLEdBM0JBLE1BU0EsR0FTQSIsImZpbGUiOiIvVXNlcnMvdG9tbW9vci9Qcm9qZWN0cy9vdXRsaW5lLXNpdGUvY29tcG9uZW50cy9MYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBMb2dvIGZyb20gXCJjb21wb25lbnRzL0xvZ29cIjtcbmltcG9ydCBIZXJvIGZyb20gXCJjb21wb25lbnRzL0hlcm9cIjtcbmltcG9ydCBIZWFkZXJOYXZpZ2F0aW9uIGZyb20gXCJjb21wb25lbnRzL0hlYWRlck5hdmlnYXRpb25cIjtcbmltcG9ydCB7IHNwYWNpbmcsIHR5cG9ncmFwaHkgfSBmcm9tIFwidGhlbWVcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBoZWFkZXI/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGhlcm8/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGlsbHVzdHJhdGlvbj86IHN0cmluZztcbiAgc2lkZWJhcj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7XG4gIHRpdGxlLFxuICBoZWFkZXIsXG4gIGhlcm8sXG4gIGlsbHVzdHJhdGlvbixcbiAgc2lkZWJhcixcbiAgYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIixcbiAgY29sb3IgPSBcImluaGVyaXRcIixcbiAgY2hpbGRyZW4sXG59OiBQcm9wcykge1xuICBjb25zdCBwYWdlVGl0bGUgPSBgJHtcbiAgICB0aXRsZSA/IHRpdGxlICsgXCIg4oCTIFwiIDogXCJcIlxuICAgIH1PdXRsaW5lIOKAk8KgVGVhbSB3aWtpICYga25vd2xlZGdlYmFzZWA7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cGFnZVRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic2hvcnRjdXQgaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLnBuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIxNngxNlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic2hvcnRjdXQgaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLTMyLnBuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3B1cmVjc3NAMi4wLjMvYnVpbGQvYmFzZS1taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcHVyZWNzc0AyLjAuMy9idWlsZC9ncmlkcy1taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcHVyZWNzc0AyLjAuMy9idWlsZC9ncmlkcy1yZXNwb25zaXZlLW1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwicmVmZXJyZXJcIiBjb250ZW50PVwib3JpZ2luXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInNsYWNrLWFwcC1pZFwiIGNvbnRlbnQ9XCJBMFczVU1LQlFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIk91dGxpbmVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCIvaW1hZ2VzL3NjcmVlbnNob3QucG5nXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZG9tYWluXCIgY29udGVudD1cImdldG91dGxpbmUuY29tXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiL2ltYWdlcy9zY3JlZW5zaG90LnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17KGhlYWRlciB8fCBoZXJvKSAmJiBcIndpdGgtaGVhZGVyXCJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xLTIgaGVhZGVyLWxlZnRcIj5cbiAgICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0yIGhlYWRlci1yaWdodFwiPlxuICAgICAgICAgICAgICA8SGVhZGVyTmF2aWdhdGlvbiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7aGVybyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEgcHVyZS11LW1kLTItNVwiPlxuICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8SGVybz57aGVyb308L0hlcm8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0zLTVcIj5cbiAgICAgICAgICAgICAgICB7aWxsdXN0cmF0aW9uICYmIDxpbWcgc3JjPXtpbGx1c3RyYXRpb259IC8+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIGhlYWRlclxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgICB7c2lkZWJhciA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZyBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEgcHVyZS11LW1kLTEtNSBzaWRlYmFyXCI+e3NpZGViYXJ9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC00LTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7YmFja2dyb3VuZH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWRlci1sZWZ0LFxuICAgICAgICAgIC5oZWFkZXItcmlnaHQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6ICR7c3BhY2luZy5sYXJnZX0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhZGVyLXJpZ2h0IHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndpdGgtaGVhZGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwICR7c3BhY2luZy5sYXJnZX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNpZGViYXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwICR7c3BhY2luZy5sYXJnZX07XG4gICAgICAgICAgICAgIG1hcmdpbjogLSR7c3BhY2luZy54bGFyZ2V9IC01dncgMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgb3BhY2l0eTogMC45NTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIHNlbGVjdCxcbiAgICAgICAgICB0ZXh0YXJlYSxcbiAgICAgICAgICAucHVyZS1nIFtjbGFzcyo9XCJwdXJlLXVcIl0ge1xuICAgICAgICAgICAgY29sb3I6ICMxMjEyMTI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHt0eXBvZ3JhcGh5LmZvbnRGYW1pbHl9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEsXG4gICAgICAgICAgaDIsXG4gICAgICAgICAgaDMsXG4gICAgICAgICAgaDQsXG4gICAgICAgICAgLnB1cmUtZyBoMVtjbGFzcyo9XCJwdXJlLXVcIl0sXG4gICAgICAgICAgLnB1cmUtZyBoMltjbGFzcyo9XCJwdXJlLXVcIl0sXG4gICAgICAgICAgLnB1cmUtZyBoM1tjbGFzcyo9XCJwdXJlLXVcIl0sXG4gICAgICAgICAgLnB1cmUtZyBoNFtjbGFzcyo9XCJwdXJlLXVcIl0ge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSEsgR3JvdGVza1wiO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSEsgR3JvdGVza1wiO1xuICAgICAgICAgICAgc3JjOiB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLUxpZ2h0LmVvdFwiKSBmb3JtYXQoXCJlb3RcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stTGlnaHQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stTGlnaHQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhLIEdyb3Rlc2tcIjtcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1SZWd1bGFyLmVvdFwiKSBmb3JtYXQoXCJlb3RcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJISyBHcm90ZXNrXCI7XG4gICAgICAgICAgICBzcmM6IHVybChcIi9mb250cy9IS0dyb3Rlc2stU2VtaUJvbGQuZW90XCIpIGZvcm1hdChcImVvdFwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1TZW1pQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1TZW1pQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSEsgR3JvdGVza1wiO1xuICAgICAgICAgICAgc3JjOiB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLUJvbGQuZW90XCIpIGZvcm1hdChcImVvdFwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICAgICAgICB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/components/Layout.tsx */")));
}

/***/ })

})
//# sourceMappingURL=integrations.js.1486ff7e89092c2e977e.hot-update.js.map