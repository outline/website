webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Footer */ "./components/Footer.tsx");
/* harmony import */ var components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Logo */ "./components/Logo.tsx");
/* harmony import */ var components_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Hero */ "./components/Hero.tsx");
/* harmony import */ var components_HeaderNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/HeaderNavigation */ "./components/HeaderNavigation.tsx");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! theme */ "./theme.ts");
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
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, pageTitle), __jsx("link", {
    rel: "shortcut icon",
    type: "image/png",
    href: "/favicon.png",
    sizes: "16x16",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    type: "image/png",
    href: "/favicon-32.png",
    sizes: "32x32",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/purecss@2.0.3/build/base-min.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/purecss@2.0.3/build/grids-min.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/purecss@2.0.3/build/grids-responsive-min.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "referrer",
    content: "origin",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "slack-app-id",
    content: "A0W3UMKBQ",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:site_name",
    content: "Outline",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:type",
    content: "website",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:title",
    content: title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:image",
    content: "/images/screenshot.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:domain",
    content: "getoutline.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:title",
    content: title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:image",
    content: "/images/screenshot.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  })), __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + ((header || hero) && "with-header" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-g",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-u-1-2 header-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(components_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-u-1-2 header-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(components_HeaderNavigation__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }))), hero ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-g",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-u-1 pure-u-md-2-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, title), __jsx(components_Hero__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, hero)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-u-1 pure-u-md-3-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, illustration && __jsx("img", {
    src: illustration,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 34
    }
  }))) : header)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, sidebar ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-g container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-u-1 pure-u-md-1-5 sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, sidebar), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-u-1 pure-u-md-4-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2154018373", [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)]], ["487988640", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, children))) : children), __jsx(components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2154018373",
    dynamic: [color, background, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background)],
    __self: this
  }, "header.__jsx-style-dynamic-selector{color:".concat(color, ";background:").concat(background, ";}.header-left.__jsx-style-dynamic-selector,.header-right.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:").concat(theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, " 0;}.header-right.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.with-header.__jsx-style-dynamic-selector{padding-bottom:1em;margin-bottom:2em;}.page.__jsx-style-dynamic-selector{min-height:calc(100vh - 300px);}.content.__jsx-style-dynamic-selector{padding:0 ").concat(theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, ";}@media (max-width:48em){.content.__jsx-style-dynamic-selector{padding:0;}.sidebar.__jsx-style-dynamic-selector{padding:0 ").concat(theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, ";margin:-").concat(theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, " -5vw ").concat(theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, ";background:").concat(Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, background), ";width:100vw;}}img.__jsx-style-dynamic-selector{height:200px;float:right;opacity:0.95;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL0xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhTLEFBR2dELEFBTXRCLEFBS1ksQUFJTixBQUtZLEFBSVEsQUFLM0IsQUFJNkIsQUFRNUIsVUFYYixHQVlZLE1BMUJNLE1BMkJMLE1BdEJmLElBcEIwQyxFQWdCMUMsQ0EyQkEsQ0FuQkEsQUFTMkUsbUNBM0JsQyxDQUx6QyxzQkFVQSxhQXVCNEMsR0EzQjVDLHFDQTRCZ0IsWUFDZCIsImZpbGUiOiIvVXNlcnMvdG9tbW9vci9Qcm9qZWN0cy9vdXRsaW5lLXNpdGUvY29tcG9uZW50cy9MYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSBcInBvbGlzaGVkXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IExvZ28gZnJvbSBcImNvbXBvbmVudHMvTG9nb1wiO1xuaW1wb3J0IEhlcm8gZnJvbSBcImNvbXBvbmVudHMvSGVyb1wiO1xuaW1wb3J0IEhlYWRlck5hdmlnYXRpb24gZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyTmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgc3BhY2luZywgY29sb3JzLCB0eXBvZ3JhcGh5IH0gZnJvbSBcInRoZW1lXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbiAgaGVhZGVyPzogUmVhY3QuUmVhY3ROb2RlO1xuICBoZXJvPzogUmVhY3QuUmVhY3ROb2RlO1xuICBpbGx1c3RyYXRpb24/OiBzdHJpbmc7XG4gIHNpZGViYXI/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe1xuICB0aXRsZSxcbiAgaGVhZGVyLFxuICBoZXJvLFxuICBpbGx1c3RyYXRpb24sXG4gIHNpZGViYXIsXG4gIGJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCIsXG4gIGNvbG9yID0gXCJpbmhlcml0XCIsXG4gIGNoaWxkcmVuLFxufTogUHJvcHMpIHtcbiAgY29uc3QgcGFnZVRpdGxlID0gYCR7XG4gICAgdGl0bGUgPyB0aXRsZSArIFwiIOKAkyBcIiA6IFwiXCJcbiAgICB9T3V0bGluZSDigJPCoFRlYW0gd2lraSAmIGtub3dsZWRnZWJhc2VgO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3BhZ2VUaXRsZX08L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIGhyZWY9XCIvZmF2aWNvbi5wbmdcIlxuICAgICAgICAgIHNpemVzPVwiMTZ4MTZcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIGhyZWY9XCIvZmF2aWNvbi0zMi5wbmdcIlxuICAgICAgICAgIHNpemVzPVwiMzJ4MzJcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9wdXJlY3NzQDIuMC4zL2J1aWxkL2Jhc2UtbWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3B1cmVjc3NAMi4wLjMvYnVpbGQvZ3JpZHMtbWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3B1cmVjc3NAMi4wLjMvYnVpbGQvZ3JpZHMtcmVzcG9uc2l2ZS1taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInJlZmVycmVyXCIgY29udGVudD1cIm9yaWdpblwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJzbGFjay1hcHAtaWRcIiBjb250ZW50PVwiQTBXM1VNS0JRXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJPdXRsaW5lXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL2ltYWdlcy9zY3JlZW5zaG90LnBuZ1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRvbWFpblwiIGNvbnRlbnQ9XCJnZXRvdXRsaW5lLmNvbVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cIi9pbWFnZXMvc2NyZWVuc2hvdC5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9eyhoZWFkZXIgfHwgaGVybykgJiYgXCJ3aXRoLWhlYWRlclwifT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0yIGhlYWRlci1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtMiBoZWFkZXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgPEhlYWRlck5hdmlnYXRpb24gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge2hlcm8gPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0yLTVcIj5cbiAgICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPEhlcm8+e2hlcm99PC9IZXJvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtMy01XCI+XG4gICAgICAgICAgICAgICAge2lsbHVzdHJhdGlvbiAmJiA8aW1nIHNyYz17aWxsdXN0cmF0aW9ufSAvPn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBoZWFkZXJcbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAge3NpZGViYXIgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWcgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0xLTUgc2lkZWJhclwiPntzaWRlYmFyfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtNC01XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2JhY2tncm91bmR9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFkZXItbGVmdCxcbiAgICAgICAgICAuaGVhZGVyLXJpZ2h0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAke3NwYWNpbmcubGFyZ2V9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWRlci1yaWdodCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53aXRoLWhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYWdlIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogMCAke3NwYWNpbmcubGFyZ2V9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaWRlYmFyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAke3NwYWNpbmcubWVkaXVtfTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAtJHtzcGFjaW5nLmxhcmdlfSAtNXZ3ICR7c3BhY2luZy5sYXJnZX07XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7ZGFya2VuKDAuMDUsIGJhY2tncm91bmQpfTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgb3BhY2l0eTogMC45NTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIHNlbGVjdCxcbiAgICAgICAgICB0ZXh0YXJlYSxcbiAgICAgICAgICAucHVyZS1nIFtjbGFzcyo9XCJwdXJlLXVcIl0ge1xuICAgICAgICAgICAgY29sb3I6ICMxMjEyMTI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHt0eXBvZ3JhcGh5LmZvbnRGYW1pbHl9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEsXG4gICAgICAgICAgaDIsXG4gICAgICAgICAgaDMsXG4gICAgICAgICAgaDQsXG4gICAgICAgICAgLnB1cmUtZyBoMVtjbGFzcyo9XCJwdXJlLXVcIl0sXG4gICAgICAgICAgLnB1cmUtZyBoMltjbGFzcyo9XCJwdXJlLXVcIl0sXG4gICAgICAgICAgLnB1cmUtZyBoM1tjbGFzcyo9XCJwdXJlLXVcIl0sXG4gICAgICAgICAgLnB1cmUtZyBoNFtjbGFzcyo9XCJwdXJlLXVcIl0ge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSEsgR3JvdGVza1wiO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLnByaW1hcnl9O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhLIEdyb3Rlc2tcIjtcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1MaWdodC5lb3RcIikgZm9ybWF0KFwiZW90XCIpLFxuICAgICAgICAgICAgICB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLUxpZ2h0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICAgICAgICB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLUxpZ2h0LndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJISyBHcm90ZXNrXCI7XG4gICAgICAgICAgICBzcmM6IHVybChcIi9mb250cy9IS0dyb3Rlc2stUmVndWxhci5lb3RcIikgZm9ybWF0KFwiZW90XCIpLFxuICAgICAgICAgICAgICB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSEsgR3JvdGVza1wiO1xuICAgICAgICAgICAgc3JjOiB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLVNlbWlCb2xkLmVvdFwiKSBmb3JtYXQoXCJlb3RcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stU2VtaUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stU2VtaUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhLIEdyb3Rlc2tcIjtcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1Cb2xkLmVvdFwiKSBmb3JtYXQoXCJlb3RcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/components/Layout.tsx */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "487988640",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary],
    __self: this
  }, "@font-face{font-family:\"HK Grotesk\";src:url(\"/fonts/HKGrotesk-Light.eot\") format(\"eot\"), url(\"/fonts/HKGrotesk-Light.woff2\") format(\"woff2\"), url(\"/fonts/HKGrotesk-Light.woff\") format(\"woff\");font-weight:300;font-style:normal;}@font-face{font-family:\"HK Grotesk\";src:url(\"/fonts/HKGrotesk-Regular.eot\") format(\"eot\"), url(\"/fonts/HKGrotesk-Regular.woff2\") format(\"woff2\"), url(\"/fonts/HKGrotesk-Regular.woff\") format(\"woff\");font-weight:400;font-style:normal;}@font-face{font-family:\"HK Grotesk\";src:url(\"/fonts/HKGrotesk-SemiBold.eot\") format(\"eot\"), url(\"/fonts/HKGrotesk-SemiBold.woff2\") format(\"woff2\"), url(\"/fonts/HKGrotesk-SemiBold.woff\") format(\"woff\");font-weight:600;font-style:normal;}@font-face{font-family:\"HK Grotesk\";src:url(\"/fonts/HKGrotesk-Bold.eot\") format(\"eot\"), url(\"/fonts/HKGrotesk-Bold.woff2\") format(\"woff2\"), url(\"/fonts/HKGrotesk-Bold.woff\") format(\"woff\");font-weight:700;font-style:normal;}.container{max-width:1140px;width:90vw;margin:0 auto;}*{box-sizing:border-box;}html,button,input,select,textarea,.pure-g [class*=\"pure-u\"]{color:#121212;font-family:".concat(theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamily, ";}html,body{padding:0;margin:0;line-height:1.6;}h1{font-size:3em;}h2{font-size:2em;}h1,h2,h3,h4,.pure-g h1[class*=\"pure-u\"],.pure-g h2[class*=\"pure-u\"],.pure-g h3[class*=\"pure-u\"],.pure-g h4[class*=\"pure-u\"]{font-family:\"HK Grotesk\";font-weight:600;line-height:1;}a{color:").concat(theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary, ";-webkit-text-decoration:none;text-decoration:none;}p{line-height:1.4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL0xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUtTLEFBRzhCLEFBTUssQUFTUixBQU1KLEFBTUksQUFHQSxBQVdXLEFBTVUsQUFLbkIsQUFJUyxBQVNBLEFBU0EsQUFTQSxVQTdEaEIsSUFOZ0MsQUFZM0MsQUFHQSxFQXNCQSxDQXBEYSxFQXNCSyxHQWhCbEIsR0FtQ2tCLEFBaUJtQyxBQVNFLEFBU0MsQUFTSixHQXBGcEMsT0FzQmhCLEFBd0J1QixNQUxQLENBeENoQixhQWNBLEFBMkJBLDhCQUtBLDZGQXNDa0IsR0EzQkEsTUFTQSxHQVNBLElBVUUsR0EzQkEsTUFTQSxHQVNBLE1BVXBCLEdBM0JBLE1BU0EsR0FTQSIsImZpbGUiOiIvVXNlcnMvdG9tbW9vci9Qcm9qZWN0cy9vdXRsaW5lLXNpdGUvY29tcG9uZW50cy9MYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSBcInBvbGlzaGVkXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IExvZ28gZnJvbSBcImNvbXBvbmVudHMvTG9nb1wiO1xuaW1wb3J0IEhlcm8gZnJvbSBcImNvbXBvbmVudHMvSGVyb1wiO1xuaW1wb3J0IEhlYWRlck5hdmlnYXRpb24gZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyTmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgc3BhY2luZywgY29sb3JzLCB0eXBvZ3JhcGh5IH0gZnJvbSBcInRoZW1lXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbiAgaGVhZGVyPzogUmVhY3QuUmVhY3ROb2RlO1xuICBoZXJvPzogUmVhY3QuUmVhY3ROb2RlO1xuICBpbGx1c3RyYXRpb24/OiBzdHJpbmc7XG4gIHNpZGViYXI/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe1xuICB0aXRsZSxcbiAgaGVhZGVyLFxuICBoZXJvLFxuICBpbGx1c3RyYXRpb24sXG4gIHNpZGViYXIsXG4gIGJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCIsXG4gIGNvbG9yID0gXCJpbmhlcml0XCIsXG4gIGNoaWxkcmVuLFxufTogUHJvcHMpIHtcbiAgY29uc3QgcGFnZVRpdGxlID0gYCR7XG4gICAgdGl0bGUgPyB0aXRsZSArIFwiIOKAkyBcIiA6IFwiXCJcbiAgICB9T3V0bGluZSDigJPCoFRlYW0gd2lraSAmIGtub3dsZWRnZWJhc2VgO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3BhZ2VUaXRsZX08L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIGhyZWY9XCIvZmF2aWNvbi5wbmdcIlxuICAgICAgICAgIHNpemVzPVwiMTZ4MTZcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIGhyZWY9XCIvZmF2aWNvbi0zMi5wbmdcIlxuICAgICAgICAgIHNpemVzPVwiMzJ4MzJcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9wdXJlY3NzQDIuMC4zL2J1aWxkL2Jhc2UtbWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3B1cmVjc3NAMi4wLjMvYnVpbGQvZ3JpZHMtbWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3B1cmVjc3NAMi4wLjMvYnVpbGQvZ3JpZHMtcmVzcG9uc2l2ZS1taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInJlZmVycmVyXCIgY29udGVudD1cIm9yaWdpblwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJzbGFjay1hcHAtaWRcIiBjb250ZW50PVwiQTBXM1VNS0JRXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJPdXRsaW5lXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL2ltYWdlcy9zY3JlZW5zaG90LnBuZ1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRvbWFpblwiIGNvbnRlbnQ9XCJnZXRvdXRsaW5lLmNvbVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cIi9pbWFnZXMvc2NyZWVuc2hvdC5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9eyhoZWFkZXIgfHwgaGVybykgJiYgXCJ3aXRoLWhlYWRlclwifT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0yIGhlYWRlci1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtMiBoZWFkZXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgPEhlYWRlck5hdmlnYXRpb24gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge2hlcm8gPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0yLTVcIj5cbiAgICAgICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPEhlcm8+e2hlcm99PC9IZXJvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtMy01XCI+XG4gICAgICAgICAgICAgICAge2lsbHVzdHJhdGlvbiAmJiA8aW1nIHNyYz17aWxsdXN0cmF0aW9ufSAvPn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBoZWFkZXJcbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAge3NpZGViYXIgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWcgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0xLTUgc2lkZWJhclwiPntzaWRlYmFyfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtNC01XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2JhY2tncm91bmR9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFkZXItbGVmdCxcbiAgICAgICAgICAuaGVhZGVyLXJpZ2h0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAke3NwYWNpbmcubGFyZ2V9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWRlci1yaWdodCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53aXRoLWhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYWdlIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogMCAke3NwYWNpbmcubGFyZ2V9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaWRlYmFyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAke3NwYWNpbmcubWVkaXVtfTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAtJHtzcGFjaW5nLmxhcmdlfSAtNXZ3ICR7c3BhY2luZy5sYXJnZX07XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7ZGFya2VuKDAuMDUsIGJhY2tncm91bmQpfTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgb3BhY2l0eTogMC45NTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIHNlbGVjdCxcbiAgICAgICAgICB0ZXh0YXJlYSxcbiAgICAgICAgICAucHVyZS1nIFtjbGFzcyo9XCJwdXJlLXVcIl0ge1xuICAgICAgICAgICAgY29sb3I6ICMxMjEyMTI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHt0eXBvZ3JhcGh5LmZvbnRGYW1pbHl9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEsXG4gICAgICAgICAgaDIsXG4gICAgICAgICAgaDMsXG4gICAgICAgICAgaDQsXG4gICAgICAgICAgLnB1cmUtZyBoMVtjbGFzcyo9XCJwdXJlLXVcIl0sXG4gICAgICAgICAgLnB1cmUtZyBoMltjbGFzcyo9XCJwdXJlLXVcIl0sXG4gICAgICAgICAgLnB1cmUtZyBoM1tjbGFzcyo9XCJwdXJlLXVcIl0sXG4gICAgICAgICAgLnB1cmUtZyBoNFtjbGFzcyo9XCJwdXJlLXVcIl0ge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSEsgR3JvdGVza1wiO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLnByaW1hcnl9O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhLIEdyb3Rlc2tcIjtcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1MaWdodC5lb3RcIikgZm9ybWF0KFwiZW90XCIpLFxuICAgICAgICAgICAgICB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLUxpZ2h0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICAgICAgICB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLUxpZ2h0LndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJISyBHcm90ZXNrXCI7XG4gICAgICAgICAgICBzcmM6IHVybChcIi9mb250cy9IS0dyb3Rlc2stUmVndWxhci5lb3RcIikgZm9ybWF0KFwiZW90XCIpLFxuICAgICAgICAgICAgICB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSEsgR3JvdGVza1wiO1xuICAgICAgICAgICAgc3JjOiB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLVNlbWlCb2xkLmVvdFwiKSBmb3JtYXQoXCJlb3RcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stU2VtaUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stU2VtaUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhLIEdyb3Rlc2tcIjtcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1Cb2xkLmVvdFwiKSBmb3JtYXQoXCJlb3RcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/components/Layout.tsx */")));
}

/***/ })

})
//# sourceMappingURL=index.js.e69135053ea014551525.hot-update.js.map