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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3945108884", [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium]]]) + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3945108884", [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 39
    }
  }, title, " ", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3945108884", [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium]]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_4___default()("toggle", {
      "open": isOpen
    }) || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 85
    }
  }, __jsx(outline_icons__WEBPACK_IMPORTED_MODULE_5__["ExpandedIcon"], {
    color: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 144
    }
  })))), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3945108884", [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium]]]) + " " + (isOpen && "open" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3945108884",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium],
    __self: this
  }, "ul.__jsx-style-dynamic-selector{margin:0 0 2.5em;padding:0;}ul.open.__jsx-style-dynamic-selector{display:block;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{list-style:none;padding:0;margin:".concat(theme__WEBPACK_IMPORTED_MODULE_3__["spacing"].medium, " 0;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.title.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.toggle.__jsx-style-dynamic-selector{display:none;-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);width:24px;height:24px;}@media (max-width:48em){ul.__jsx-style-dynamic-selector{display:none;}.toggle.__jsx-style-dynamic-selector{display:block;}.toggle.open.__jsx-style-dynamic-selector{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL1NpZGViYXJNZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQlMsQUFHOEIsQUFLSCxBQUlFLEFBTUgsQUFLQSxBQUtBLEFBUUUsQUFJQyxBQUlTLGFBZkEsQUFRekIsQ0E1QkYsQUFnQ0UsRUE1QlUsQ0FUQSxTQVU0QixDQVR4QyxxQ0FVQSxVQUlxQixBQUtBLE9BcUJuQixtQkFmVyxXQUNDLFlBQ2QsNENBWkEsQUFLQSIsImZpbGUiOiIvVXNlcnMvdG9tbW9vci9Qcm9qZWN0cy9vdXRsaW5lLXNpdGUvY29tcG9uZW50cy9TaWRlYmFyTWVudS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNwYWNpbmcgfSBmcm9tIFwidGhlbWVcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyBFeHBhbmRlZEljb24gfSBmcm9tIFwib3V0bGluZS1pY29uc1wiO1xuXG50eXBlIFByb3BzID0ge1xuICB0aXRsZT86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXJNZW51KHsgdGl0bGUsIGNoaWxkcmVuIH06IFByb3BzKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3RpdGxlICYmIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPjxhIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX0+e3RpdGxlfSA8c3BhbiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJ0b2dnbGVcIiwgeyBcIm9wZW5cIjogaXNPcGVuIH0pfT48RXhwYW5kZWRJY29uIGNvbG9yPVwiY3VycmVudENvbG9yXCIgLz48L3NwYW4+PC9hPjwvaDM+fVxuICAgICAgPHVsIGNsYXNzTmFtZT17aXNPcGVuICYmIFwib3BlblwifT57Y2hpbGRyZW59PC91bD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMi41ZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsLm9wZW4ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46ICR7c3BhY2luZy5tZWRpdW19IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwgbGkgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGl0bGUgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9nZ2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcbiAgICAgICAgICAgIHVsIHsgXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50b2dnbGUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRvZ2dsZS5vcGVuIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/components/SidebarMenu.tsx */")));
}

/***/ })

})
//# sourceMappingURL=integrations.js.a5b7cce4d5fb1fa4b3d0.hot-update.js.map