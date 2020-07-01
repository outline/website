webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card.tsx":
/*!*****************************!*\
  !*** ./components/Card.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme */ "./theme.ts");
var _jsxFileName = "/Users/tommoor/Projects/outline-site/components/Card.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Card(_ref) {
  var title = _ref.title,
      description = _ref.description,
      href = _ref.href;

  var content = __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, description));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, href ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["5376909", [theme__WEBPACK_IMPORTED_MODULE_3__["colors"].primary, theme__WEBPACK_IMPORTED_MODULE_3__["colors"].primary]]]) + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, content)) : __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["5376909", [theme__WEBPACK_IMPORTED_MODULE_3__["colors"].primary, theme__WEBPACK_IMPORTED_MODULE_3__["colors"].primary]]]) + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, content), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "5376909",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_3__["colors"].primary, theme__WEBPACK_IMPORTED_MODULE_3__["colors"].primary],
    __self: this
  }, ".card.__jsx-style-dynamic-selector{display:block;margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:8px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;min-height:250px;}a.card.__jsx-style-dynamic-selector:hover,a.card.__jsx-style-dynamic-selector:focus,a.card.__jsx-style-dynamic-selector:active{color:".concat(theme__WEBPACK_IMPORTED_MODULE_3__["colors"].primary, ";border-color:").concat(theme__WEBPACK_IMPORTED_MODULE_3__["colors"].primary, ";}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0 0 1rem 0;font-size:1.5rem;}.card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;font-size:1.25rem;line-height:1.5;}@media (max-width:48em){.card.__jsx-style-dynamic-selector{min-height:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL0NhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHeUIsQUFnQnFCLEFBS2pCLEFBS1QsQUFPTSxTQU5HLElBT2xCLENBakNZLElBcUJLLFFBcEJGLENBMEJDLFFBWDBCLEFBTTVDLFFBTUEsa0NBWEEsZUFmaUIsZUFDQyxnQkFDRixjQUNPLGtEQUNJLHlCQUNQLGtCQUNtQyxnSEFDcEMsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL0NhcmQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcInRoZW1lXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIHRpdGxlOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGRlc2NyaXB0aW9uOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBocmVmIH06IFByb3BzKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSAoXG4gICAgPD5cbiAgICAgIDxoMz57dGl0bGV9PC9oMz5cbiAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgPC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2hyZWYgPyAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmRcIj57Y29udGVudH08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+e2NvbnRlbnR9PC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEuY2FyZDpob3ZlcixcbiAgICAgICAgYS5jYXJkOmZvY3VzLFxuICAgICAgICBhLmNhcmQ6YWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcnMucHJpbWFyeX07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke2NvbG9ycy5wcmltYXJ5fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/components/Card.tsx */")));
}

/***/ })

})
//# sourceMappingURL=index.js.1f75003d3d0a8f2cd6df.hot-update.js.map