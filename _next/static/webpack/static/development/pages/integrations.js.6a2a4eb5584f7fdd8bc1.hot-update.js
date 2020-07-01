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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var outline_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! outline-icons */ "./node_modules/outline-icons/lib/index.js");
/* harmony import */ var outline_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(outline_icons__WEBPACK_IMPORTED_MODULE_5__);

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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["193456875", [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium]]]) + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["193456875", [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, title, " ", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["193456875", [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium]]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_4___default()("toggle", {
      open: isOpen
    }) || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(outline_icons__WEBPACK_IMPORTED_MODULE_5__["ExpandedIcon"], {
    color: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  })))), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["193456875", [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium]]]) + " " + (isOpen && "open" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "193456875",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium],
    __self: this
  }, "ul.__jsx-style-dynamic-selector{margin:0 0 2.5em;padding:0;}ul.open.__jsx-style-dynamic-selector{display:block;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{list-style:none;padding:0;margin:".concat(theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium, " 0;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:inherit;}.toggle.__jsx-style-dynamic-selector{display:none;-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);width:24px;height:24px;}@media (max-width:48em){ul.__jsx-style-dynamic-selector{display:none;}.toggle.__jsx-style-dynamic-selector{display:block;}.toggle.open.__jsx-style-dynamic-selector{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL1NpZGViYXJNZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQlMsQUFHOEIsQUFLSCxBQUlFLEFBTUgsQUFLQSxBQU1BLEFBUUUsQUFJQyxBQUlTLGFBZkEsQUFRekIsQ0E3QkYsQUFpQ0UsRUE3QlUsQ0FUQSxTQVU0QixDQVR4QyxxQ0FVQSxVQUlxQixBQUtBLE9Bc0JuQixtQkFmVyxXQUNDLFlBQ2QsNENBYkEsQUFLZ0IsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL3RvbW1vb3IvUHJvamVjdHMvb3V0bGluZS1zaXRlL2NvbXBvbmVudHMvU2lkZWJhck1lbnUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzcGFjaW5nIH0gZnJvbSBcInRoZW1lXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgRXhwYW5kZWRJY29uIH0gZnJvbSBcIm91dGxpbmUtaWNvbnNcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyTWVudSh7IHRpdGxlLCBjaGlsZHJlbiB9OiBQcm9wcykge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt0aXRsZSAmJiAoXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX0+XG4gICAgICAgICAgICB7dGl0bGV9e1wiIFwifVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwidG9nZ2xlXCIsIHsgb3BlbjogaXNPcGVuIH0pfT5cbiAgICAgICAgICAgICAgPEV4cGFuZGVkSWNvbiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2gzPlxuICAgICAgKX1cbiAgICAgIDx1bCBjbGFzc05hbWU9e2lzT3BlbiAmJiBcIm9wZW5cIn0+e2NoaWxkcmVufTwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDIuNWVtO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bC5vcGVuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAke3NwYWNpbmcubWVkaXVtfSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIGxpIGEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIGEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9nZ2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRvZ2dsZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9nZ2xlLm9wZW4ge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/components/SidebarMenu.tsx */")));
}

/***/ })

})
//# sourceMappingURL=integrations.js.6a2a4eb5584f7fdd8bc1.hot-update.js.map