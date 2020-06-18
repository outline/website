webpackHotUpdate("static/development/pages/developers.js",{

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
/* harmony import */ var components_HeaderNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/HeaderNavigation */ "./components/HeaderNavigation.tsx");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme */ "./theme.ts");
var _jsxFileName = "/Users/tommoor/Projects/outline-site/components/Layout.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Layout(_ref) {
  var title = _ref.title,
      header = _ref.header,
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
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, pageTitle), __jsx("link", {
    rel: "shortcut icon",
    type: "image/png",
    href: "/favicon.png",
    sizes: "16x16",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    type: "image/png",
    href: "/favicon-32.png",
    sizes: "32x32",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/purecss@2.0.3/build/base-min.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/purecss@2.0.3/build/grids-min.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/purecss@2.0.3/build/grids-responsive-min.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "referrer",
    content: "origin",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "slack-app-id",
    content: "A0W3UMKBQ",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:site_name",
    content: "Outline",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:type",
    content: "website",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:title",
    content: title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "og:image",
    content: "/images/screenshot.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:domain",
    content: "getoutline.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:title",
    content: title,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:image",
    content: "/images/screenshot.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })), __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]) + " " + (header && "with-header" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]) + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]) + " " + "pure-g",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]) + " " + "pure-u-1 pure-u-md-1-2 header-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(components_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]) + " " + "pure-u-1 pure-u-md-1-2 header-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(components_HeaderNavigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }))), header)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3356231463", [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large]], ["2876309305", [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily]]]) + " " + "page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, children), __jsx(components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3356231463",
    dynamic: [color, background, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large],
    __self: this
  }, "header.__jsx-style-dynamic-selector{color:".concat(color, ";background:").concat(background, ";}.header-left.__jsx-style-dynamic-selector,.header-right.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].large, " 0;}.header-right.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.with-header.__jsx-style-dynamic-selector{padding-bottom:1em;margin-bottom:2em;}.page.__jsx-style-dynamic-selector{min-height:calc(100vh - 300px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL0xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0ZTLEFBR2dELEFBTXRCLEFBS1ksQUFJTixBQUtZLG1CQUpiLFlBS3BCLElBcEIwQyxFQWdCMUMscUNBVnlDLENBTHpDLHNCQVVBLGdCQUpBIiwiZmlsZSI6Ii9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL0xheW91dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IExvZ28gZnJvbSBcImNvbXBvbmVudHMvTG9nb1wiO1xuaW1wb3J0IEhlYWRlck5hdmlnYXRpb24gZnJvbSBcImNvbXBvbmVudHMvSGVhZGVyTmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgc3BhY2luZywgdHlwb2dyYXBoeSB9IGZyb20gXCJ0aGVtZVwiO1xuXG50eXBlIFByb3BzID0ge1xuICB0aXRsZT86IHN0cmluZztcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGhlYWRlcj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7XG4gIHRpdGxlLFxuICBoZWFkZXIsXG4gIGJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCIsXG4gIGNvbG9yID0gXCJpbmhlcml0XCIsXG4gIGNoaWxkcmVuLFxufTogUHJvcHMpIHtcbiAgY29uc3QgcGFnZVRpdGxlID0gYCR7XG4gICAgdGl0bGUgPyB0aXRsZSArIFwiIOKAkyBcIiA6IFwiXCJcbiAgfU91dGxpbmUg4oCTwqBUZWFtIHdpa2kgJiBrbm93bGVkZ2ViYXNlYDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwYWdlVGl0bGV9PC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBocmVmPVwiL2Zhdmljb24ucG5nXCJcbiAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBocmVmPVwiL2Zhdmljb24tMzIucG5nXCJcbiAgICAgICAgICBzaXplcz1cIjMyeDMyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcHVyZWNzc0AyLjAuMy9idWlsZC9iYXNlLW1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9wdXJlY3NzQDIuMC4zL2J1aWxkL2dyaWRzLW1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9wdXJlY3NzQDIuMC4zL2J1aWxkL2dyaWRzLXJlc3BvbnNpdmUtbWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJyZWZlcnJlclwiIGNvbnRlbnQ9XCJvcmlnaW5cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwic2xhY2stYXBwLWlkXCIgY29udGVudD1cIkEwVzNVTUtCUVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiT3V0bGluZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOmltYWdlXCIgY29udGVudD1cIi9pbWFnZXMvc2NyZWVuc2hvdC5wbmdcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkb21haW5cIiBjb250ZW50PVwiZ2V0b3V0bGluZS5jb21cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCIvaW1hZ2VzL3NjcmVlbnNob3QucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtoZWFkZXIgJiYgXCJ3aXRoLWhlYWRlclwifT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtMS0yIGhlYWRlci1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEgcHVyZS11LW1kLTEtMiBoZWFkZXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgPEhlYWRlck5hdmlnYXRpb24gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7YmFja2dyb3VuZH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWRlci1sZWZ0LFxuICAgICAgICAgIC5oZWFkZXItcmlnaHQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6ICR7c3BhY2luZy5sYXJnZX0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVhZGVyLXJpZ2h0IHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndpdGgtaGVhZGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiA5NXZ3O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIHNlbGVjdCxcbiAgICAgICAgICB0ZXh0YXJlYSxcbiAgICAgICAgICAucHVyZS1nIFtjbGFzcyo9XCJwdXJlLXVcIl0ge1xuICAgICAgICAgICAgY29sb3I6ICMxMjEyMTI7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHt0eXBvZ3JhcGh5LmZvbnRGYW1pbHl9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSxcbiAgICAgICAgICBoMixcbiAgICAgICAgICBoMyxcbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJISyBHcm90ZXNrXCI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSEsgR3JvdGVza1wiO1xuICAgICAgICAgICAgc3JjOiB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLUxpZ2h0LmVvdFwiKSBmb3JtYXQoXCJlb3RcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stTGlnaHQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stTGlnaHQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhLIEdyb3Rlc2tcIjtcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1SZWd1bGFyLmVvdFwiKSBmb3JtYXQoXCJlb3RcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stUmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJISyBHcm90ZXNrXCI7XG4gICAgICAgICAgICBzcmM6IHVybChcIi9mb250cy9IS0dyb3Rlc2stU2VtaUJvbGQuZW90XCIpIGZvcm1hdChcImVvdFwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1TZW1pQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1TZW1pQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSEsgR3JvdGVza1wiO1xuICAgICAgICAgICAgc3JjOiB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLUJvbGQuZW90XCIpIGZvcm1hdChcImVvdFwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICAgICAgICB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/components/Layout.tsx */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2876309305",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily],
    __self: this
  }, "@font-face{font-family:\"HK Grotesk\";src:url(\"/fonts/HKGrotesk-Light.eot\") format(\"eot\"), url(\"/fonts/HKGrotesk-Light.woff2\") format(\"woff2\"), url(\"/fonts/HKGrotesk-Light.woff\") format(\"woff\");font-weight:300;font-style:normal;}@font-face{font-family:\"HK Grotesk\";src:url(\"/fonts/HKGrotesk-Regular.eot\") format(\"eot\"), url(\"/fonts/HKGrotesk-Regular.woff2\") format(\"woff2\"), url(\"/fonts/HKGrotesk-Regular.woff\") format(\"woff\");font-weight:400;font-style:normal;}@font-face{font-family:\"HK Grotesk\";src:url(\"/fonts/HKGrotesk-SemiBold.eot\") format(\"eot\"), url(\"/fonts/HKGrotesk-SemiBold.woff2\") format(\"woff2\"), url(\"/fonts/HKGrotesk-SemiBold.woff\") format(\"woff\");font-weight:600;font-style:normal;}@font-face{font-family:\"HK Grotesk\";src:url(\"/fonts/HKGrotesk-Bold.eot\") format(\"eot\"), url(\"/fonts/HKGrotesk-Bold.woff2\") format(\"woff2\"), url(\"/fonts/HKGrotesk-Bold.woff\") format(\"woff\");font-weight:700;font-style:normal;}.container{max-width:1140px;width:95vw;margin:0 auto;}*{box-sizing:border-box;}html,button,input,select,textarea,.pure-g [class*=\"pure-u\"]{color:#121212;font-family:".concat(theme__WEBPACK_IMPORTED_MODULE_6__["typography"].fontFamily, ";}html,body{padding:0;margin:0;}h1{font-size:3em;}h2{font-size:2em;}h1,h2,h3,h4{font-family:\"HK Grotesk\";font-weight:600;}a{color:inherit;-webkit-text-decoration:none;text-decoration:none;}p{line-height:1.4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL0xheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkdTLEFBRzhCLEFBTUssQUFTUixBQU1KLEFBS0ksQUFHQSxBQU9XLEFBS1gsQUFLRSxBQUlTLEFBU0EsQUFTQSxBQVNBLFVBdkRoQixJQU5nQyxBQVczQyxBQUdBLEFBWXVCLEVBS3ZCLENBOUNhLEVBc0JiLEdBaEJBLEdBOEJrQixBQWdCbUMsQUFTRSxBQVNDLEFBU0osR0E5RXBDLGFBb0NoQixDQW5DQSxhQWNBLFNBMEJBLGtIQXNDa0IsR0EzQkEsTUFTQSxHQVNBLElBVUUsR0EzQkEsTUFTQSxHQVNBLE1BVXBCLEdBM0JBLE1BU0EsR0FTQSIsImZpbGUiOiIvVXNlcnMvdG9tbW9vci9Qcm9qZWN0cy9vdXRsaW5lLXNpdGUvY29tcG9uZW50cy9MYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBMb2dvIGZyb20gXCJjb21wb25lbnRzL0xvZ29cIjtcbmltcG9ydCBIZWFkZXJOYXZpZ2F0aW9uIGZyb20gXCJjb21wb25lbnRzL0hlYWRlck5hdmlnYXRpb25cIjtcbmltcG9ydCB7IHNwYWNpbmcsIHR5cG9ncmFwaHkgfSBmcm9tIFwidGhlbWVcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBoZWFkZXI/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe1xuICB0aXRsZSxcbiAgaGVhZGVyLFxuICBiYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiLFxuICBjb2xvciA9IFwiaW5oZXJpdFwiLFxuICBjaGlsZHJlbixcbn06IFByb3BzKSB7XG4gIGNvbnN0IHBhZ2VUaXRsZSA9IGAke1xuICAgIHRpdGxlID8gdGl0bGUgKyBcIiDigJMgXCIgOiBcIlwiXG4gIH1PdXRsaW5lIOKAk8KgVGVhbSB3aWtpICYga25vd2xlZGdlYmFzZWA7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cGFnZVRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic2hvcnRjdXQgaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLnBuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIxNngxNlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic2hvcnRjdXQgaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgaHJlZj1cIi9mYXZpY29uLTMyLnBuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3B1cmVjc3NAMi4wLjMvYnVpbGQvYmFzZS1taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcHVyZWNzc0AyLjAuMy9idWlsZC9ncmlkcy1taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcHVyZWNzc0AyLjAuMy9idWlsZC9ncmlkcy1yZXNwb25zaXZlLW1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwicmVmZXJyZXJcIiBjb250ZW50PVwib3JpZ2luXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInNsYWNrLWFwcC1pZFwiIGNvbnRlbnQ9XCJBMFczVU1LQlFcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIk91dGxpbmVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCIvaW1hZ2VzL3NjcmVlbnNob3QucG5nXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZG9tYWluXCIgY29udGVudD1cImdldG91dGxpbmUuY29tXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiL2ltYWdlcy9zY3JlZW5zaG90LnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17aGVhZGVyICYmIFwid2l0aC1oZWFkZXJcIn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEgcHVyZS11LW1kLTEtMiBoZWFkZXItbGVmdFwiPlxuICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0xLTIgaGVhZGVyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxIZWFkZXJOYXZpZ2F0aW9uIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtoZWFkZXJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2JhY2tncm91bmR9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFkZXItbGVmdCxcbiAgICAgICAgICAuaGVhZGVyLXJpZ2h0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAke3NwYWNpbmcubGFyZ2V9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWRlci1yaWdodCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53aXRoLWhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYWdlIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gICAgICAgICAgICB3aWR0aDogOTV2dztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBodG1sLFxuICAgICAgICAgIGJ1dHRvbixcbiAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICBzZWxlY3QsXG4gICAgICAgICAgdGV4dGFyZWEsXG4gICAgICAgICAgLnB1cmUtZyBbY2xhc3MqPVwicHVyZS11XCJdIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMTIxMjEyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7dHlwb2dyYXBoeS5mb250RmFtaWx5fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBodG1sLFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEsXG4gICAgICAgICAgaDIsXG4gICAgICAgICAgaDMsXG4gICAgICAgICAgaDQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSEsgR3JvdGVza1wiO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhLIEdyb3Rlc2tcIjtcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1MaWdodC5lb3RcIikgZm9ybWF0KFwiZW90XCIpLFxuICAgICAgICAgICAgICB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLUxpZ2h0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgICAgICAgICB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLUxpZ2h0LndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJISyBHcm90ZXNrXCI7XG4gICAgICAgICAgICBzcmM6IHVybChcIi9mb250cy9IS0dyb3Rlc2stUmVndWxhci5lb3RcIikgZm9ybWF0KFwiZW90XCIpLFxuICAgICAgICAgICAgICB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLVJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSEsgR3JvdGVza1wiO1xuICAgICAgICAgICAgc3JjOiB1cmwoXCIvZm9udHMvSEtHcm90ZXNrLVNlbWlCb2xkLmVvdFwiKSBmb3JtYXQoXCJlb3RcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stU2VtaUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stU2VtaUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhLIEdyb3Rlc2tcIjtcbiAgICAgICAgICAgIHNyYzogdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1Cb2xkLmVvdFwiKSBmb3JtYXQoXCJlb3RcIiksXG4gICAgICAgICAgICAgIHVybChcIi9mb250cy9IS0dyb3Rlc2stQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgICAgICAgICAgdXJsKFwiL2ZvbnRzL0hLR3JvdGVzay1Cb2xkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/components/Layout.tsx */")));
}

/***/ }),

/***/ "./pages/developers.tsx":
/*!******************************!*\
  !*** ./pages/developers.tsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Developers; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redoc */ "./node_modules/redoc/bundles/redoc.lib.js");
/* harmony import */ var redoc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redoc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Hero */ "./components/Hero.tsx");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ "./theme.ts");
var _jsxFileName = "/Users/tommoor/Projects/outline-site/pages/developers.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];





var __N_SSG = true;
function Developers(_ref) {
  var spec = _ref.spec;
  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Developers",
    background: "#F4F7FA",
    header: __jsx("div", {
      className: "jsx-2355440575 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2931333994", [_theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack, _theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack]]]) + " " + "pure-grid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-2355440575 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2931333994", [_theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack, _theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack]]]) + " " + "pure-u-1 pure-u-md-2-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx("h1", {
      className: "jsx-2355440575 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2931333994", [_theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack, _theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, "Developers"), __jsx(components_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, "Outline is built on an open, best-in-class, RPC API. Easily integrate the creation and publishing of documents into your teams workflows.")), __jsx("div", {
      className: "jsx-2355440575 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2931333994", [_theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack, _theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack]]]) + " " + "pure-u-1 pure-u-md-3-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "/images/robot.png",
      className: "jsx-2355440575 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2931333994", [_theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack, _theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2355440575 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2931333994", [_theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack, _theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack]]]) + " " + "pure-grid container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(redoc__WEBPACK_IMPORTED_MODULE_2__["RedocStandalone"], {
    spec: spec,
    options: {
      nativeScrollbars: true,
      disableSearch: true,
      hideDownloadButton: true,
      hideLoading: true,
      menuToggle: true,
      noAutoAuth: true,
      requiredPropsFirst: true,
      theme: {
        spacing: {
          unit: 4
        },
        breakpoints: {
          small: "50rem",
          medium: "1000rem",
          large: "1000rem"
        },
        colors: {
          primary: {
            main: _theme__WEBPACK_IMPORTED_MODULE_5__["colors"].primary
          },
          gray: {
            50: _theme__WEBPACK_IMPORTED_MODULE_5__["colors"].lightGrey,
            100: _theme__WEBPACK_IMPORTED_MODULE_5__["colors"].greyDark
          },
          text: {
            primary: _theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack,
            secondary: _theme__WEBPACK_IMPORTED_MODULE_5__["colors"].greyMid
          }
        },
        typography: {
          fontSize: "16px",
          fontFamily: _theme__WEBPACK_IMPORTED_MODULE_5__["typography"].fontFamily,
          headings: {
            fontFamily: _theme__WEBPACK_IMPORTED_MODULE_5__["typography"].fontFamily,
            fontWeight: "500",
            lineHeight: "inherit"
          }
        },
        sidebar: {
          width: "20%",
          backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_5__["colors"].white,
          textColor: _theme__WEBPACK_IMPORTED_MODULE_5__["colors"].black
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2355440575",
    __self: this
  }, "img.jsx-2355440575{height:200px;float:right;opacity:0.95;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9wYWdlcy9kZXZlbG9wZXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRlMsQUFHMEIsYUFDRCxZQUNDLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL3RvbW1vb3IvUHJvamVjdHMvb3V0bGluZS1zaXRlL3BhZ2VzL2RldmVsb3BlcnMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IFJlZG9jU3RhbmRhbG9uZSB9IGZyb20gXCJyZWRvY1wiO1xuaW1wb3J0IEhlcm8gZnJvbSBcImNvbXBvbmVudHMvSGVyb1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IGNvbG9ycywgdHlwb2dyYXBoeSB9IGZyb20gXCIuLi90aGVtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXZlbG9wZXJzKHsgc3BlYyB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dFxuICAgICAgdGl0bGU9XCJEZXZlbG9wZXJzXCJcbiAgICAgIGJhY2tncm91bmQ9XCIjRjRGN0ZBXCJcbiAgICAgIGhlYWRlcj17XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1ncmlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtMi01XCI+XG4gICAgICAgICAgICA8aDE+RGV2ZWxvcGVyczwvaDE+XG4gICAgICAgICAgICA8SGVybz5cbiAgICAgICAgICAgICAgT3V0bGluZSBpcyBidWlsdCBvbiBhbiBvcGVuLCBiZXN0LWluLWNsYXNzLCBSUEMgQVBJLiBFYXNpbHlcbiAgICAgICAgICAgICAgaW50ZWdyYXRlIHRoZSBjcmVhdGlvbiBhbmQgcHVibGlzaGluZyBvZiBkb2N1bWVudHMgaW50byB5b3VyIHRlYW1zXG4gICAgICAgICAgICAgIHdvcmtmbG93cy5cbiAgICAgICAgICAgIDwvSGVybz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0zLTVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9yb2JvdC5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ3JpZCBjb250YWluZXJcIj5cbiAgICAgICAgPFJlZG9jU3RhbmRhbG9uZVxuICAgICAgICAgIHNwZWM9e3NwZWN9XG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgbmF0aXZlU2Nyb2xsYmFyczogdHJ1ZSxcbiAgICAgICAgICAgIGRpc2FibGVTZWFyY2g6IHRydWUsXG4gICAgICAgICAgICBoaWRlRG93bmxvYWRCdXR0b246IHRydWUsXG4gICAgICAgICAgICBoaWRlTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIG1lbnVUb2dnbGU6IHRydWUsXG4gICAgICAgICAgICBub0F1dG9BdXRoOiB0cnVlLFxuICAgICAgICAgICAgcmVxdWlyZWRQcm9wc0ZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgdGhlbWU6IHtcbiAgICAgICAgICAgICAgc3BhY2luZzoge1xuICAgICAgICAgICAgICAgIHVuaXQ6IDQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgc21hbGw6IFwiNTByZW1cIixcbiAgICAgICAgICAgICAgICBtZWRpdW06IFwiMTAwMHJlbVwiLFxuICAgICAgICAgICAgICAgIGxhcmdlOiBcIjEwMDByZW1cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY29sb3JzOiB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgICAgICAgbWFpbjogY29sb3JzLnByaW1hcnksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncmF5OiB7XG4gICAgICAgICAgICAgICAgICA1MDogY29sb3JzLmxpZ2h0R3JleSxcbiAgICAgICAgICAgICAgICAgIDEwMDogY29sb3JzLmdyZXlEYXJrLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgcHJpbWFyeTogY29sb3JzLmFsbW9zdEJsYWNrLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiBjb2xvcnMuZ3JleU1pZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0eXBvZ3JhcGh5OiB7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IHR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICAgICAgICAgICAgICBoZWFkaW5nczoge1xuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogdHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNpZGViYXI6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyMCVcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy53aGl0ZSxcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGNvbG9ycy5ibGFjayxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5yZWRvYy13cmFwIC5hcGktY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTQycHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVkb2Mtd3JhcCAuYXBpLWluZm8sXG4gICAgICAgICAgLnJlZG9jLXdyYXAgLm9wZXJhdGlvbi10eXBlLFxuICAgICAgICAgIC5yZWRvYy13cmFwIC5tZW51LWNvbnRlbnQgdWwrZGl2KSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWRvYy13cmFwIC5tZW51LWNvbnRlbnQge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTNweCk7XG4gICAgICAgIH1cblxuICAgICAgICAucmVkb2Mtd3JhcCAubWVudS1jb250ZW50IGxhYmVsIHtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbml0aWFsO1xuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBpbml0aWFsO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmVkb2Mtd3JhcCAubWVudS1jb250ZW50IHVsIGxpIHVsIGxpIGxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmFsbW9zdEJsYWNrfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWRvYy13cmFwIC5tZW51LWNvbnRlbnQgdWwgbGkgdWwgbGkgbGFiZWwgc3BhbiB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vLXdyYXA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAucmVkb2Mtd3JhcCBoMSB7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmFsbW9zdEJsYWNrfTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlZG9jLXdyYXAgaDEsXG4gICAgICAgIC5yZWRvYy13cmFwIGgyLFxuICAgICAgICAucmVkb2Mtd3JhcCBoMyxcbiAgICAgICAgLnJlZG9jLXdyYXAgaDQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhLIEdyb3Rlc2tcIjtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlZG9jLXdyYXAgaDUge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9vdXRsaW5lL29wZW5hcGkvZGV2ZWxvcC9zcGVjMy5qc29uXCJcbiAgKTtcbiAgY29uc3Qgc3BlYyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc3BlYyxcbiAgICB9LFxuICB9O1xufVxuIl19 */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/pages/developers.tsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2931333994",
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack, _theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack],
    __self: this
  }, "{.redoc-wrap .api-info, .redoc-wrap .operation-type, .redoc-wrap .menu-content ul+div) { display:none; } .redoc-wrap .menu-content { transform:translateX(-13px); } .redoc-wrap .menu-content label { -webkit-font-smoothing:initial; text-rendering:initial; font-size:16px; border-radius:4px; } .redoc-wrap .menu-content ul li ul li label { font-size:14px; color:".concat(_theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack, "; } .redoc-wrap .menu-content ul li ul li label span { white-space:no-wrap; width:100%; } .redoc-wrap h1 { color:").concat(_theme__WEBPACK_IMPORTED_MODULE_5__["colors"].almostBlack, "; margin-bottom:0; } .redoc-wrap h1, .redoc-wrap h2, .redoc-wrap h3, .redoc-wrap h4 { font-family:\"HK Grotesk\"; font-weight:600; } .redoc-wrap h5 { display:none; };}.redoc-wrap .api-content{margin-top:-42px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9wYWdlcy9kZXZlbG9wZXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RnlCLEFBRzRCLEFBOENyQixpQkE3Q0Usa3FCQTZDRCIsImZpbGUiOiIvVXNlcnMvdG9tbW9vci9Qcm9qZWN0cy9vdXRsaW5lLXNpdGUvcGFnZXMvZGV2ZWxvcGVycy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xuaW1wb3J0IHsgUmVkb2NTdGFuZGFsb25lIH0gZnJvbSBcInJlZG9jXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiY29tcG9uZW50cy9IZXJvXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgY29sb3JzLCB0eXBvZ3JhcGh5IH0gZnJvbSBcIi4uL3RoZW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldmVsb3BlcnMoeyBzcGVjIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICB0aXRsZT1cIkRldmVsb3BlcnNcIlxuICAgICAgYmFja2dyb3VuZD1cIiNGNEY3RkFcIlxuICAgICAgaGVhZGVyPXtcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdyaWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0yLTVcIj5cbiAgICAgICAgICAgIDxoMT5EZXZlbG9wZXJzPC9oMT5cbiAgICAgICAgICAgIDxIZXJvPlxuICAgICAgICAgICAgICBPdXRsaW5lIGlzIGJ1aWx0IG9uIGFuIG9wZW4sIGJlc3QtaW4tY2xhc3MsIFJQQyBBUEkuIEVhc2lseVxuICAgICAgICAgICAgICBpbnRlZ3JhdGUgdGhlIGNyZWF0aW9uIGFuZCBwdWJsaXNoaW5nIG9mIGRvY3VtZW50cyBpbnRvIHlvdXIgdGVhbXNcbiAgICAgICAgICAgICAgd29ya2Zsb3dzLlxuICAgICAgICAgICAgPC9IZXJvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEgcHVyZS11LW1kLTMtNVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3JvYm90LnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1ncmlkIGNvbnRhaW5lclwiPlxuICAgICAgICA8UmVkb2NTdGFuZGFsb25lXG4gICAgICAgICAgc3BlYz17c3BlY31cbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICBuYXRpdmVTY3JvbGxiYXJzOiB0cnVlLFxuICAgICAgICAgICAgZGlzYWJsZVNlYXJjaDogdHJ1ZSxcbiAgICAgICAgICAgIGhpZGVEb3dubG9hZEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGhpZGVMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgbWVudVRvZ2dsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5vQXV0b0F1dGg6IHRydWUsXG4gICAgICAgICAgICByZXF1aXJlZFByb3BzRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICB0aGVtZToge1xuICAgICAgICAgICAgICBzcGFjaW5nOiB7XG4gICAgICAgICAgICAgICAgdW5pdDogNCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgICAgICBzbWFsbDogXCI1MHJlbVwiLFxuICAgICAgICAgICAgICAgIG1lZGl1bTogXCIxMDAwcmVtXCIsXG4gICAgICAgICAgICAgICAgbGFyZ2U6IFwiMTAwMHJlbVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjb2xvcnM6IHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5OiB7XG4gICAgICAgICAgICAgICAgICBtYWluOiBjb2xvcnMucHJpbWFyeSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYXk6IHtcbiAgICAgICAgICAgICAgICAgIDUwOiBjb2xvcnMubGlnaHRHcmV5LFxuICAgICAgICAgICAgICAgICAgMTAwOiBjb2xvcnMuZ3JleURhcmssXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgICAgICBwcmltYXJ5OiBjb2xvcnMuYWxtb3N0QmxhY2ssXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnk6IGNvbG9ycy5ncmV5TWlkLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogdHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgICAgICAgICAgICAgIGhlYWRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiB0eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2lkZWJhcjoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwJVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLndoaXRlLFxuICAgICAgICAgICAgICAgIHRleHRDb2xvcjogY29sb3JzLmJsYWNrLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgb3BhY2l0eTogMC45NTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLnJlZG9jLXdyYXAgLmFwaS1jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWRvYy13cmFwIC5hcGktaW5mbyxcbiAgICAgICAgICAucmVkb2Mtd3JhcCAub3BlcmF0aW9uLXR5cGUsXG4gICAgICAgICAgLnJlZG9jLXdyYXAgLm1lbnUtY29udGVudCB1bCtkaXYpIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlZG9jLXdyYXAgLm1lbnUtY29udGVudCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xM3B4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWRvYy13cmFwIC5tZW51LWNvbnRlbnQgbGFiZWwge1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaXRpYWw7XG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IGluaXRpYWw7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWRvYy13cmFwIC5tZW51LWNvbnRlbnQgdWwgbGkgdWwgbGkgbGFiZWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuYWxtb3N0QmxhY2t9O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlZG9jLXdyYXAgLm1lbnUtY29udGVudCB1bCBsaSB1bCBsaSBsYWJlbCBzcGFuIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm8td3JhcDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWRvYy13cmFwIGgxIHtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuYWxtb3N0QmxhY2t9O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAucmVkb2Mtd3JhcCBoMSxcbiAgICAgICAgLnJlZG9jLXdyYXAgaDIsXG4gICAgICAgIC5yZWRvYy13cmFwIGgzLFxuICAgICAgICAucmVkb2Mtd3JhcCBoNCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiSEsgR3JvdGVza1wiO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICAucmVkb2Mtd3JhcCBoNSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL291dGxpbmUvb3BlbmFwaS9kZXZlbG9wL3NwZWMzLmpzb25cIlxuICApO1xuICBjb25zdCBzcGVjID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzcGVjLFxuICAgIH0sXG4gIH07XG59XG4iXX0= */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/pages/developers.tsx */")));
}

/***/ })

})
//# sourceMappingURL=developers.js.4354bcc62bac58924f16.hot-update.js.map