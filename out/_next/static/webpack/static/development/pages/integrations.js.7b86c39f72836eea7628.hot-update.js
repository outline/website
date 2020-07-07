webpackHotUpdate("static/development/pages/integrations.js",{

/***/ "./pages/integrations.tsx":
/*!********************************!*\
  !*** ./pages/integrations.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Integrations; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Card */ "./components/Card.tsx");
/* harmony import */ var components_IntegrationsMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/IntegrationsMenu */ "./components/IntegrationsMenu.tsx");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Layout */ "./components/Layout.tsx");
/* harmony import */ var data_integrations_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! data/integrations.json */ "./data/integrations.json");
var data_integrations_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! data/integrations.json */ "./data/integrations.json", 1);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! theme */ "./theme.ts");

var _jsxFileName = "/Users/tommoor/Projects/outline-site/pages/integrations.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];







function Integrations() {
  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      query = _React$useState2[0],
      setQuery = _React$useState2[1];

  var normalizedQuery = query.toLowerCase().trim();
  var results = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["filter"])(data_integrations_json__WEBPACK_IMPORTED_MODULE_7__, function (integration) {
    return integration.slug.toLowerCase().includes(normalizedQuery) || integration.description.toLowerCase().includes(normalizedQuery);
  });
  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Integrations",
    background: "#F4F7FA",
    hero: "Outline is extensible and designed to integrate with your existing workflow and tools. If you can\u2019t find the integration you\u2019re after, reach out \u2013\xA0we are adding new applications all the time.",
    sidebar: __jsx(components_IntegrationsMenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 16
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("input", {
    type: "search",
    value: query,
    placeholder: "Search\u2026",
    onChange: function onChange(ev) {
      return setQuery(ev.currentTarget.value);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3613700593", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), query ? __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3613700593", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Results"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3613700593", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-g cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, query && results.map(function (integration) {
    return __jsx("div", {
      key: integration.slug,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3613700593", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-u-1 pure-u-md-1-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("img", {
        src: "/images/integrations/".concat(integration.slug, ".png"),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3613700593", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "integration-icon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3613700593", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 25
        }
      }, integration.name)),
      description: integration.description,
      href: "/integrations/".concat(integration.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 19
      }
    }));
  }), results.length === 0 && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3613700593", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-u-1 pure-u-md-1-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "",
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, "Want to suggest a new integration?"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  })))) : __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3613700593", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Featured"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3613700593", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-g cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, ["slack", "google-docs", "alfred", "figma"].map(function (slug) {
    var integration = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["find"])(data_integrations_json__WEBPACK_IMPORTED_MODULE_7__, {
      slug: slug
    });
    return __jsx("div", {
      key: slug,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3613700593", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-u-1 pure-u-md-1-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 19
      }
    }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("img", {
        src: "/images/integrations/".concat(integration.slug, ".png"),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3613700593", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "integration-icon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 27
        }
      }), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3613700593", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 27
        }
      }, integration.name)),
      description: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, integration.summary || integration.description, "."),
      href: "/integrations/".concat(integration.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3613700593",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary],
    __self: this
  }, ".search.__jsx-style-dynamic-selector{width:100%;height:32px;border-radius:4px;border:0;padding:24px ".concat(theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, ";background:").concat(theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, ";font-size:16px;margin:16px 0;}.search.__jsx-style-dynamic-selector:active{outline:none;box-shadow:0 0 0 2px ").concat(theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary, ";}.cards.__jsx-style-dynamic-selector{margin:0 -1rem;}.integration-icon.__jsx-style-dynamic-selector{width:60px;height:60px;margin-bottom:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9wYWdlcy9pbnRlZ3JhdGlvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtHUyxBQUd3QixBQVdFLEFBS0UsQUFJSixXQW5CQyxBQW9CQSxFQVRzQyxFQUtwRCxRQWZvQixBQW9CQSxrQkFuQlQsQUFvQlgsU0FuQjRDLGFBUzVDLDZCQVIwQyx3Q0FDekIsZUFDRCxjQUNoQiIsImZpbGUiOiIvVXNlcnMvdG9tbW9vci9Qcm9qZWN0cy9vdXRsaW5lLXNpdGUvcGFnZXMvaW50ZWdyYXRpb25zLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmlsdGVyLCBmaW5kIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IEludGVncmF0aW9uc01lbnUgZnJvbSBcImNvbXBvbmVudHMvSW50ZWdyYXRpb25zTWVudVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBjb250ZW50IGZyb20gXCJkYXRhL2ludGVncmF0aW9ucy5qc29uXCI7XG5pbXBvcnQgeyBjb2xvcnMsIHNwYWNpbmcgfSBmcm9tIFwidGhlbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50ZWdyYXRpb25zKCkge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICBjb25zdCByZXN1bHRzID0gZmlsdGVyKGNvbnRlbnQsIChpbnRlZ3JhdGlvbikgPT5cbiAgICBpbnRlZ3JhdGlvbi5zbHVnLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobm9ybWFsaXplZFF1ZXJ5KSB8fFxuICAgIGludGVncmF0aW9uLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobm9ybWFsaXplZFF1ZXJ5KVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dFxuICAgICAgdGl0bGU9XCJJbnRlZ3JhdGlvbnNcIlxuICAgICAgYmFja2dyb3VuZD1cIiNGNEY3RkFcIlxuICAgICAgaGVybz1cIk91dGxpbmUgaXMgZXh0ZW5zaWJsZSBhbmQgZGVzaWduZWQgdG8gaW50ZWdyYXRlIHdpdGggeW91ciBleGlzdGluZ1xuICAgICAgd29ya2Zsb3cgYW5kIHRvb2xzLiBJZiB5b3UgY2Fu4oCZdCBmaW5kIHRoZSBpbnRlZ3JhdGlvbiB5b3XigJlyZVxuICAgICAgYWZ0ZXIsIHJlYWNoIG91dCDigJPCoHdlIGFyZSBhZGRpbmcgbmV3IGFwcGxpY2F0aW9ucyBhbGwgdGhlIHRpbWUuXCJcbiAgICAgIHNpZGViYXI9ezxJbnRlZ3JhdGlvbnNNZW51IC8+fVxuICAgID5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaOKAplwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHNldFF1ZXJ5KGV2LmN1cnJlbnRUYXJnZXQudmFsdWUpfVxuICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hcIlxuICAgICAgLz5cblxuICAgICAge3F1ZXJ5ID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxoMj5SZXN1bHRzPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZyBjYXJkc1wiPlxuICAgICAgICAgICAge3F1ZXJ5ICYmXG4gICAgICAgICAgICAgIHJlc3VsdHMubWFwKChpbnRlZ3JhdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEgcHVyZS11LW1kLTEtMlwiIGtleT17aW50ZWdyYXRpb24uc2x1Z30+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW50ZWdyYXRpb24taWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvaW50ZWdyYXRpb25zLyR7aW50ZWdyYXRpb24uc2x1Z30ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntpbnRlZ3JhdGlvbi5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpbnRlZ3JhdGlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9pbnRlZ3JhdGlvbnMvJHtpbnRlZ3JhdGlvbi5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHtyZXN1bHRzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEgcHVyZS11LW1kLTEtMlwiPlxuICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17PD5XYW50IHRvIHN1Z2dlc3QgYSBuZXcgaW50ZWdyYXRpb24/PC8+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aDI+RmVhdHVyZWQ8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWcgY2FyZHNcIj5cbiAgICAgICAgICAgICAge1tcInNsYWNrXCIsIFwiZ29vZ2xlLWRvY3NcIiwgXCJhbGZyZWRcIiwgXCJmaWdtYVwiXS5tYXAoKHNsdWcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnRlZ3JhdGlvbiA9IGZpbmQoY29udGVudCwgeyBzbHVnIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEgcHVyZS11LW1kLTEtMlwiIGtleT17c2x1Z30+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImludGVncmF0aW9uLWljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvaW50ZWdyYXRpb25zLyR7aW50ZWdyYXRpb24uc2x1Z30ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57aW50ZWdyYXRpb24ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICAgICA8PntpbnRlZ3JhdGlvbi5zdW1tYXJ5IHx8IGludGVncmF0aW9uLmRlc2NyaXB0aW9ufS48Lz5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9pbnRlZ3JhdGlvbnMvJHtpbnRlZ3JhdGlvbi5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4ICR7c3BhY2luZy5tZWRpdW19O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWFyY2g6YWN0aXZlIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggJHtjb2xvcnMucHJpbWFyeX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmRzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAtMXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW50ZWdyYXRpb24taWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/pages/integrations.tsx */")));
}

/***/ })

})
//# sourceMappingURL=integrations.js.7b86c39f72836eea7628.hot-update.js.map