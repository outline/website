webpackHotUpdate("static/development/pages/integrations.js",{

/***/ "./components/SidebarMenu.tsx":
/*!************************************!*\
  !*** ./components/SidebarMenu.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SidebarMenu; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme */ "./theme.ts");
/* harmony import */ var outline_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! outline-icons */ "./node_modules/outline-icons/lib/index.js");
/* harmony import */ var outline_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(outline_icons__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/tommoor/Projects/outline-site/components/SidebarMenu.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];



function SidebarMenu(_ref) {
  var title = _ref.title,
      children = _ref.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, title && __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1032771712", [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium]]]) + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1032771712", [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 39
    }
  }, title, " ", __jsx(outline_icons__WEBPACK_IMPORTED_MODULE_4__["ExpandedIcon"], {
    color: "currentColor",
    className: "toggle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 85
    }
  }))), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1032771712", [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium]]]) + " " + (isOpen && "open" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1032771712",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium],
    __self: this
  }, "ul.__jsx-style-dynamic-selector{margin:0 0 2.5em;padding:0;}ul.open.__jsx-style-dynamic-selector{display:block;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{list-style:none;padding:0;margin:".concat(theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium, " 0;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.toggle.__jsx-style-dynamic-selector{display:none;}@media (max-width:48em){ul.__jsx-style-dynamic-selector{display:none;}.toggle.__jsx-style-dynamic-selector{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL1NpZGViYXJNZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQlMsQUFHOEIsQUFLSCxBQUlFLEFBTUgsQUFLQSxBQUtBLEFBS0UsQUFJQyxhQVJsQixBQUtFLENBekJGLEFBNkJFLEVBekJVLENBVEEsU0FVNEIsQ0FUeEMscUNBVUEsVUFJcUIsQUFLQSw2RkFKckIsQUFLQSIsImZpbGUiOiIvVXNlcnMvdG9tbW9vci9Qcm9qZWN0cy9vdXRsaW5lLXNpdGUvY29tcG9uZW50cy9TaWRlYmFyTWVudS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNwYWNpbmcgfSBmcm9tIFwidGhlbWVcIjtcbmltcG9ydCB7IEV4cGFuZGVkSWNvbiB9IGZyb20gXCJvdXRsaW5lLWljb25zXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhck1lbnUoeyB0aXRsZSwgY2hpbGRyZW4gfTogUHJvcHMpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dGl0bGUgJiYgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+PGEgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT57dGl0bGV9IDxFeHBhbmRlZEljb24gY29sb3I9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJ0b2dnbGVcIiAvPjwvYT48L2gzPn1cbiAgICAgIDx1bCBjbGFzc05hbWU9e2lzT3BlbiAmJiBcIm9wZW5cIn0+e2NoaWxkcmVufTwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDIuNWVtO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bC5vcGVuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAke3NwYWNpbmcubWVkaXVtfSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIGxpIGEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIGEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvZ2dsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XG4gICAgICAgICAgICB1bCB7IFxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9nZ2xlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/components/SidebarMenu.tsx */")));
}

/***/ })

})
//# sourceMappingURL=integrations.js.bb9c03623b64130aa587.hot-update.js.map