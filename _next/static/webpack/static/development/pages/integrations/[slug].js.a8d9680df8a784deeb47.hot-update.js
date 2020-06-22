webpackHotUpdate("static/development/pages/integrations/[slug].js",{

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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["798351963", [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium]]]) + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, title), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["798351963", [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium]]]) + " " + (isOpen && "open" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "798351963",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium],
    __self: this
  }, "ul.__jsx-style-dynamic-selector{display:none;margin:0 0 2.5em;padding:0;}ul.open.__jsx-style-dynamic-selector{display:block;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{list-style:none;padding:0;margin:".concat(theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium, " 0;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL1NpZGViYXJNZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQlMsQUFHMEIsQUFNQyxBQUlFLEFBTUgsYUFmSSxDQU1uQixFQUlZLFVBQzRCLElBVjVCLFVBQ1osd0JBVUEsVUFJcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL1NpZGViYXJNZW51LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3BhY2luZyB9IGZyb20gXCJ0aGVtZVwiO1xuXG50eXBlIFByb3BzID0ge1xuICB0aXRsZT86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXJNZW51KHsgdGl0bGUsIGNoaWxkcmVuIH06IFByb3BzKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3RpdGxlICYmIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gzPn1cbiAgICAgIDx1bCBjbGFzc05hbWU9e2lzT3BlbiAmJiBcIm9wZW5cIn0+e2NoaWxkcmVufTwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAyLjVlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwub3BlbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogJHtzcGFjaW5nLm1lZGl1bX0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCBsaSBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/components/SidebarMenu.tsx */")));
}

/***/ })

})
//# sourceMappingURL=[slug].js.a8d9680df8a784deeb47.hot-update.js.map