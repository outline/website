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

/***/ })

})
//# sourceMappingURL=integrations.js.4354bcc62bac58924f16.hot-update.js.map