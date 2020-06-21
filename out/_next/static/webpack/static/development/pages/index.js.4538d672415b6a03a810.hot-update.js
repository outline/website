webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/HeaderNavigation.tsx":
/*!*****************************************!*\
  !*** ./components/HeaderNavigation.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderNavigation; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tiny_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-cookie */ "./node_modules/tiny-cookie/es/index.js");
/* harmony import */ var outline_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! outline-icons */ "./node_modules/outline-icons/lib/index.js");
/* harmony import */ var outline_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(outline_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme */ "./theme.ts");
/* harmony import */ var lib_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/hooks/useOnClickOutside */ "./lib/hooks/useOnClickOutside.ts");

var _jsxFileName = "/Users/tommoor/Projects/outline-site/components/HeaderNavigation.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];






function HeaderNavigation() {
  var _this = this;

  var ref = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      openNav = _React$useState2[0],
      setOpenNav = _React$useState2[1];

  Object(lib_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_7__["default"])(ref, function () {
    return setOpenNav(null);
  });
  var sessions = {};

  var setActiveNav = function setActiveNav(name) {
    return function (event) {
      event.preventDefault();
      setOpenNav(name);
    };
  };

  if (typeof document !== "undefined") {
    sessions = JSON.parse(Object(tiny_cookie__WEBPACK_IMPORTED_MODULE_4__["getCookie"])("sessions") || "{}");
  }

  var isSignedIn = Object.keys(sessions).length;
  return __jsx("nav", {
    role: "navigation",
    ref: ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + (openNav === "product" && "open" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("a", {
    "aria-haspopup": "true",
    onClick: setActiveNav("product"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "menu-with-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Product ", __jsx(outline_icons__WEBPACK_IMPORTED_MODULE_5__["ExpandedIcon"], {
    color: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  })), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/integrations",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "Integrations"))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/developers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "Developers"))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/changelog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Changelog"))))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/pricing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Pricing"))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + (openNav === "community" && "open" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("a", {
    "aria-haspopup": "true",
    onClick: setActiveNav("community"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "menu-with-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "Community ", __jsx(outline_icons__WEBPACK_IMPORTED_MODULE_5__["ExpandedIcon"], {
    color: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  })), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "mailto:hello@getoutline.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "Contact Us")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/outline",
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "GitHub")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/outline/outline/discussions",
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "Discuss")), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://twitter.com/outlinewiki",
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "Twitter")))), __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + (openNav === "sessions" && "open" || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, isSignedIn ? __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("a", {
    key: "launch",
    href: "#login",
    "aria-haspopup": "true",
    onClick: setActiveNav("sessions"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "launch menu-with-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, "Launch Outline ", __jsx(outline_icons__WEBPACK_IMPORTED_MODULE_5__["ExpandedIcon"], {
    color: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 32
    }
  })), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "sessions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, Object.keys(sessions).map(function (teamId) {
    var session = sessions[teamId];
    return __jsx("li", {
      key: teamId,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: session.url,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "session",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: session.logoUrl,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]) + " " + "teamLogo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 25
      }
    }), " ", __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 25
      }
    }, "This is a really long team name ", session.name)));
  }))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: "login",
    href: "//app.getoutline.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3838448201", [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, "Log in | Sign up")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3838448201",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey],
    __self: this
  }, "nav.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}ul.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0;padding:0;}li.__jsx-style-dynamic-selector{display:block;-webkit-transition-duration:0.5s;transition-duration:0.5s;position:relative;}li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:".concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, " ").concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, ";margin:0 0 0 ").concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, ";color:rgba(0,0,0,0.75);-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;min-height:40px;overflow:hidden;}li.__jsx-style-dynamic-selector a.menu-with-icon.__jsx-style-dynamic-selector{padding-right:8px;position:relative;z-index:2;}li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0;}li.__jsx-style-dynamic-selector a.launch.__jsx-style-dynamic-selector,li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{background:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, ";border-radius:4px;}li.__jsx-style-dynamic-selector a.launch.__jsx-style-dynamic-selector{width:160px;}li.__jsx-style-dynamic-selector:hover{cursor:pointer;}li.open.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector{background:rgba(255,255,255,0.75);}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{visibility:hidden;opacity:0;position:absolute;-webkit-transition:all 0.5s ease;transition:all 0.5s ease;margin-top:0;margin-left:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].medium, ";left:0;display:none;background:rgba(255,255,255,0.75);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:4px;min-width:136px;z-index:1;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;}ul.__jsx-style-dynamic-selector li.open.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector,ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector:focus-within>ul.__jsx-style-dynamic-selector,ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector:hover,ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector:focus{visibility:visible;opacity:1;display:block;box-shadow:0 0 0 1px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.08),0 2px 4px rgba(0,0,0,0.08);padding-top:42px;margin-top:-42px;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{clear:both;width:100%;}a.session.__jsx-style-dynamic-selector{font-weight:500;}.teamLogo.__jsx-style-dynamic-selector{display:inline-block;margin-right:").concat(theme__WEBPACK_IMPORTED_MODULE_6__["spacing"].small, ";border:1px solid ").concat(theme__WEBPACK_IMPORTED_MODULE_6__["colors"].grey, ";border-radius:4px;width:32px;height:32px;}.sessions.__jsx-style-dynamic-selector{min-width:160px;max-width:260px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9jb21wb25lbnRzL0hlYWRlck5hdmlnYXRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThIUyxBQUcwQixBQUtBLEFBTUMsQUFNRCxBQVlLLEFBTUwsQUFNMkIsQUFLNUIsQUFJRyxBQUlzQixBQUluQixBQWdCWSxBQVFYLEFBV1IsQUFLSyxBQUlLLEFBU0wsV0FqQkwsQ0EvQ2IsRUFuQzJCLENBdUMzQixDQWdEQSxBQWFrQixFQWxGRSxBQTZCUixDQXdCQSxFQW9CZ0MsQ0FSNUMsTUFuQ29CLENBd0JKLENBVGlCLEVBc0NqQyxFQTFEQSxFQXhCWSxJQVdRLEdBNkM0QyxHQXZEaEUsQUE2QjJCLFlBbEIzQixHQWlDQSxFQTRCZ0QsU0EzRjVCLEVBWk8sQUFLaEIsQUFZVSxBQWtCVixTQTdCQyxBQThCWixPQXZCQSxHQU5BLFdBc0RlLEtBMkNLLFFBMUN1QixVQTJDOUIsU0FsQk0sRUFtQkwsWUFDZCxHQW5CbUIsS0F6QlYsT0FDTSxFQTlDcUQsR0F1RXBFLENBeEZBLE9BZ0V1QyxrQ0FDVixxQkEvQ2UseUNBZ0R4QixDQS9DUSxpQkFnRFYsTUEvQ0ssVUFnRFgsVUFDWiw4QkFoRHFCLG1CQUNILGdCQUNBLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvdG9tbW9vci9Qcm9qZWN0cy9vdXRsaW5lLXNpdGUvY29tcG9uZW50cy9IZWFkZXJOYXZpZ2F0aW9uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcInRpbnktY29va2llXCI7XG5pbXBvcnQgeyBFeHBhbmRlZEljb24gfSBmcm9tIFwib3V0bGluZS1pY29uc1wiO1xuaW1wb3J0IHsgc3BhY2luZywgY29sb3JzIH0gZnJvbSBcInRoZW1lXCI7XG5pbXBvcnQgdXNlT25DbGlja091dHNpZGUgZnJvbSBcImxpYi9ob29rcy91c2VPbkNsaWNrT3V0c2lkZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJOYXZpZ2F0aW9uKCkge1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgY29uc3QgW29wZW5OYXYsIHNldE9wZW5OYXZdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlT25DbGlja091dHNpZGUocmVmLCAoKSA9PiBzZXRPcGVuTmF2KG51bGwpKTtcblxuICBsZXQgc2Vzc2lvbnMgPSB7fTtcblxuICBjb25zdCBzZXRBY3RpdmVOYXYgPSAobmFtZSkgPT4gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRPcGVuTmF2KG5hbWUpO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBzZXNzaW9ucyA9IEpTT04ucGFyc2UoZ2V0Q29va2llKFwic2Vzc2lvbnNcIikgfHwgXCJ7fVwiKTtcbiAgfVxuXG4gIGNvbnN0IGlzU2lnbmVkSW4gPSBPYmplY3Qua2V5cyhzZXNzaW9ucykubGVuZ3RoO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiByb2xlPVwibmF2aWdhdGlvblwiIHJlZj17cmVmfT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17b3Blbk5hdiA9PT0gXCJwcm9kdWN0XCIgJiYgXCJvcGVuXCJ9PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LXdpdGgtaWNvblwiXG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtzZXRBY3RpdmVOYXYoXCJwcm9kdWN0XCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFByb2R1Y3QgPEV4cGFuZGVkSWNvbiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbnRlZ3JhdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8YT5JbnRlZ3JhdGlvbnM8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGV2ZWxvcGVyc1wiPlxuICAgICAgICAgICAgICAgIDxhPkRldmVsb3BlcnM8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hhbmdlbG9nXCI+XG4gICAgICAgICAgICAgICAgPGE+Q2hhbmdlbG9nPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3ByaWNpbmdcIj5cbiAgICAgICAgICAgIDxhPlByaWNpbmc8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtvcGVuTmF2ID09PSBcImNvbW11bml0eVwiICYmIFwib3BlblwifT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS13aXRoLWljb25cIlxuICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgb25DbGljaz17c2V0QWN0aXZlTmF2KFwiY29tbXVuaXR5XCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvbW11bml0eSA8RXhwYW5kZWRJY29uIGNvbG9yPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmhlbGxvQGdldG91dGxpbmUuY29tXCI+Q29udGFjdCBVczwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vb3V0bGluZVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vb3V0bGluZS9vdXRsaW5lL2Rpc2N1c3Npb25zXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGlzY3Vzc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9vdXRsaW5ld2lraVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIFR3aXR0ZXJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtvcGVuTmF2ID09PSBcInNlc3Npb25zXCIgJiYgXCJvcGVuXCJ9PlxuICAgICAgICAgIHtpc1NpZ25lZEluID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBrZXk9XCJsYXVuY2hcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjbG9naW5cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxhdW5jaCBtZW51LXdpdGgtaWNvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NldEFjdGl2ZU5hdihcInNlc3Npb25zXCIpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTGF1bmNoIE91dGxpbmUgPEV4cGFuZGVkSWNvbiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNlc3Npb25zXCI+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHNlc3Npb25zKS5tYXAoKHRlYW1JZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IHNlc3Npb25zW3RlYW1JZF07XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt0ZWFtSWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Nlc3Npb24udXJsfSBjbGFzc05hbWU9XCJzZXNzaW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRlYW1Mb2dvXCIgc3JjPXtzZXNzaW9uLmxvZ29Vcmx9IC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGhpcyBpcyBhIHJlYWxseSBsb25nIHRlYW0gbmFtZSB7c2Vzc2lvbi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExpbmsga2V5PVwibG9naW5cIiBocmVmPVwiLy9hcHAuZ2V0b3V0bGluZS5jb21cIj5cbiAgICAgICAgICAgICAgICA8YT5Mb2cgaW4gfCBTaWduIHVwPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaSBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogJHtzcGFjaW5nLnNtYWxsfSAke3NwYWNpbmcubWVkaXVtfTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgJHtzcGFjaW5nLm1lZGl1bX07XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaSBhLm1lbnUtd2l0aC1pY29uIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGkgdWwgbGkgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpIGEubGF1bmNoLFxuICAgICAgICAgIGxpIGE6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMuZ3JleX07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGkgYS5sYXVuY2gge1xuICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaS5vcGVuID4gYSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIGxpIHVsIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAke3NwYWNpbmcubWVkaXVtfTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTM2cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIGxpIHVsIGE6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIGxpLm9wZW4gPiB1bCxcbiAgICAgICAgICB1bCBsaTpmb2N1cy13aXRoaW4gPiB1bCxcbiAgICAgICAgICB1bCBsaSB1bDpob3ZlcixcbiAgICAgICAgICB1bCBsaSB1bDpmb2N1cyB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSxcbiAgICAgICAgICAgICAgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQycHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNDJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCBsaSB1bCBsaSB7XG4gICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEuc2Vzc2lvbiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50ZWFtTG9nbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7c3BhY2luZy5zbWFsbH07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5ncmV5fTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZXNzaW9ucyB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbmF2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/components/HeaderNavigation.tsx */")));
}

/***/ })

})
//# sourceMappingURL=index.js.4538d672415b6a03a810.hot-update.js.map