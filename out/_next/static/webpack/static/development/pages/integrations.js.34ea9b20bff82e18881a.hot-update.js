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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3076473684", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey]]]) + " " + "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), query ? __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3076473684", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Results"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3076473684", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey]]]) + " " + "pure-g cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, query && results.map(function (integration) {
    return __jsx("div", {
      key: integration.slug,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3076473684", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey]]]) + " " + "pure-u-1 pure-u-md-1-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("img", {
        src: "/images/integrations/".concat(integration.slug, ".png"),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3076473684", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey]]]) + " " + "integration-icon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3076473684", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 25
        }
      }, integration.name)),
      description: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, integration.summary || integration.description, "."),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 19
      }
    }));
  }), results.length === 0 && __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3076473684", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey]]]) + " " + "pure-u-1 pure-u-md-1-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "",
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, "Want to suggest a new integration?"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  })))) : __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3076473684", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Featured"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3076473684", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey]]]) + " " + "pure-g cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, ["slack", "google-docs", "alfred", "figma"].map(function (slug) {
    var integration = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["find"])(data_integrations_json__WEBPACK_IMPORTED_MODULE_7__, {
      slug: slug
    });
    return __jsx("div", {
      key: slug,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3076473684", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey]]]) + " " + "pure-u-1 pure-u-md-1-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 19
      }
    }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("img", {
        src: "/images/integrations/".concat(integration.slug, ".png"),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3076473684", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey]]]) + " " + "integration-icon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 27
        }
      }), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3076473684", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 27
        }
      }, integration.name)),
      description: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, integration.summary || integration.description, "."),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3076473684",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey],
    __self: this
  }, ".search.__jsx-style-dynamic-selector{width:100%;height:32px;border-radius:4px;border:0;padding:".concat(theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].large, ";background:").concat(theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, ";font-size:16px;margin:16px 0;}.cards.__jsx-style-dynamic-selector{margin:0 -1rem;}.integration-icon.__jsx-style-dynamic-selector{width:60px;height:60px;margin-bottom:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9wYWdlcy9pbnRlZ3JhdGlvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtHUyxBQUd3QixBQVdJLEFBSUosV0FkQyxBQWVBLElBSmQsUUFWb0IsQUFlQSxrQkFkVCxBQWVYLFNBZHVDLHFDQUNHLHdDQUN6QixlQUNELGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9wYWdlcy9pbnRlZ3JhdGlvbnMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmaWx0ZXIsIGZpbmQgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgSW50ZWdyYXRpb25zTWVudSBmcm9tIFwiY29tcG9uZW50cy9JbnRlZ3JhdGlvbnNNZW51XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGNvbnRlbnQgZnJvbSBcImRhdGEvaW50ZWdyYXRpb25zLmpzb25cIjtcbmltcG9ydCB7IGNvbG9ycywgc3BhY2luZyB9IGZyb20gXCJ0aGVtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRlZ3JhdGlvbnMoKSB7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gIGNvbnN0IHJlc3VsdHMgPSBmaWx0ZXIoY29udGVudCwgKGludGVncmF0aW9uKSA9PlxuICAgIGludGVncmF0aW9uLnNsdWcudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhub3JtYWxpemVkUXVlcnkpIHx8XG4gICAgaW50ZWdyYXRpb24uZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhub3JtYWxpemVkUXVlcnkpXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICB0aXRsZT1cIkludGVncmF0aW9uc1wiXG4gICAgICBiYWNrZ3JvdW5kPVwiI0Y0RjdGQVwiXG4gICAgICBoZXJvPVwiT3V0bGluZSBpcyBleHRlbnNpYmxlIGFuZCBkZXNpZ25lZCB0byBpbnRlZ3JhdGUgd2l0aCB5b3VyIGV4aXN0aW5nXG4gICAgICB3b3JrZmxvdyBhbmQgdG9vbHMuIElmIHlvdSBjYW7igJl0IGZpbmQgdGhlIGludGVncmF0aW9uIHlvdeKAmXJlXG4gICAgICBhZnRlciwgcmVhY2ggb3V0IOKAk8Kgd2UgYXJlIGFkZGluZyBuZXcgYXBwbGljYXRpb25zIGFsbCB0aGUgdGltZS5cIlxuICAgICAgc2lkZWJhcj17PEludGVncmF0aW9uc01lbnUgLz59XG4gICAgPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNo4oCmXCJcbiAgICAgICAgb25DaGFuZ2U9eyhldikgPT4gc2V0UXVlcnkoZXYuY3VycmVudFRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaFwiXG4gICAgICAvPlxuXG4gICAgICB7cXVlcnkgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgyPlJlc3VsdHM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nIGNhcmRzXCI+XG4gICAgICAgICAgICB7cXVlcnkgJiZcbiAgICAgICAgICAgICAgcmVzdWx0cy5tYXAoKGludGVncmF0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtMS0yXCIga2V5PXtpbnRlZ3JhdGlvbi5zbHVnfT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnRlZ3JhdGlvbi1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9pbnRlZ3JhdGlvbnMvJHtpbnRlZ3JhdGlvbi5zbHVnfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2ludGVncmF0aW9uLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgICAgICAgICAgICAgIDw+e2ludGVncmF0aW9uLnN1bW1hcnkgfHwgaW50ZWdyYXRpb24uZGVzY3JpcHRpb259LjwvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHtyZXN1bHRzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEgcHVyZS11LW1kLTEtMlwiPlxuICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17PD5XYW50IHRvIHN1Z2dlc3QgYSBuZXcgaW50ZWdyYXRpb24/PC8+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aDI+RmVhdHVyZWQ8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWcgY2FyZHNcIj5cbiAgICAgICAgICAgICAge1tcInNsYWNrXCIsIFwiZ29vZ2xlLWRvY3NcIiwgXCJhbGZyZWRcIiwgXCJmaWdtYVwiXS5tYXAoKHNsdWcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnRlZ3JhdGlvbiA9IGZpbmQoY29udGVudCwgeyBzbHVnIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEgcHVyZS11LW1kLTEtMlwiIGtleT17c2x1Z30+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImludGVncmF0aW9uLWljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvaW50ZWdyYXRpb25zLyR7aW50ZWdyYXRpb24uc2x1Z30ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57aW50ZWdyYXRpb24ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICAgICA8PntpbnRlZ3JhdGlvbi5zdW1tYXJ5IHx8IGludGVncmF0aW9uLmRlc2NyaXB0aW9ufS48Lz5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAke3NwYWNpbmcubGFyZ2V9O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcnMubGlnaHRHcmV5fTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkcyB7XG4gICAgICAgICAgICBtYXJnaW46IDAgLTFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmludGVncmF0aW9uLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/pages/integrations.tsx */")));
}

/***/ })

})
//# sourceMappingURL=integrations.js.34ea9b20bff82e18881a.hot-update.js.map