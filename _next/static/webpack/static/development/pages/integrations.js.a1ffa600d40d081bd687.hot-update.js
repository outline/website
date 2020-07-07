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
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Card */ "./components/Card.tsx");
/* harmony import */ var components_IntegrationsMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/IntegrationsMenu */ "./components/IntegrationsMenu.tsx");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Layout */ "./components/Layout.tsx");
/* harmony import */ var data_integrations_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! data/integrations.json */ "./data/integrations.json");
var data_integrations_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! data/integrations.json */ "./data/integrations.json", 1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/tommoor/Projects/outline-site/pages/integrations.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];






function Integrations() {
  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      query = _React$useState2[0],
      setQuery = _React$useState2[1];

  var results = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["filter"])(data_integrations_json__WEBPACK_IMPORTED_MODULE_6__, function (integration) {
    return integration.slug.includes(query);
  });
  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Integrations",
    background: "#F4F7FA",
    hero: "Outline is extensible and designed to integrate with your existing workflow and tools. If you can\u2019t find the integration you\u2019re after, reach out \u2013\xA0we are adding new applications all the time.",
    sidebar: __jsx(components_IntegrationsMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("input", {
    type: "search",
    value: query,
    placeholder: "Search\u2026",
    onChange: function onChange(ev) {
      return setQuery(ev.currentTarget.value);
    },
    className: "jsx-2891112560",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), query ? __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("h2", {
    className: "jsx-2891112560",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Results"), __jsx("div", {
    className: "jsx-2891112560" + " " + "pure-g cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, query && results.map(function (integration) {
    return __jsx("div", {
      key: integration.slug,
      className: "jsx-2891112560" + " " + "pure-u-1 pure-u-md-1-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("img", {
        src: "/images/integrations/".concat(integration.slug, ".png"),
        className: "jsx-2891112560" + " " + "integration-icon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "jsx-2891112560",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }
      }, integration.name)),
      description: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, integration.summary || integration.description, "."),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 19
      }
    }));
  }), results.length === 0 && __jsx("div", {
    className: "jsx-2891112560" + " " + "pure-u-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "",
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, "Want to suggest a new integration?"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  })))) : __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("h2", {
    className: "jsx-2891112560",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Featured"), __jsx("div", {
    className: "jsx-2891112560" + " " + "pure-g cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, ["slack", "google-docs", "alfred", "figma"].map(function (slug) {
    var integration = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["find"])(data_integrations_json__WEBPACK_IMPORTED_MODULE_6__, {
      slug: slug
    });
    return __jsx("div", {
      key: slug,
      className: "jsx-2891112560" + " " + "pure-u-1 pure-u-md-1-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 19
      }
    }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("img", {
        src: "/images/integrations/".concat(integration.slug, ".png"),
        className: "jsx-2891112560" + " " + "integration-icon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 27
        }
      }), __jsx("div", {
        className: "jsx-2891112560",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 27
        }
      }, integration.name)),
      description: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, integration.summary || integration.description, "."),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2891112560",
    __self: this
  }, ".cards.jsx-2891112560{margin:0 -1rem;}.integration-icon.jsx-2891112560{width:60px;height:60px;margin-bottom:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9wYWdlcy9pbnRlZ3JhdGlvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGUyxBQUc0QixBQUlKLFdBQ0MsSUFKZCxRQUtvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3RvbW1vb3IvUHJvamVjdHMvb3V0bGluZS1zaXRlL3BhZ2VzL2ludGVncmF0aW9ucy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJjb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBJbnRlZ3JhdGlvbnNNZW51IGZyb20gXCJjb21wb25lbnRzL0ludGVncmF0aW9uc01lbnVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgY29udGVudCBmcm9tIFwiZGF0YS9pbnRlZ3JhdGlvbnMuanNvblwiO1xuaW1wb3J0IHsgZmlsdGVyLCBmaW5kIH0gZnJvbSBcImxvZGFzaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRlZ3JhdGlvbnMoKSB7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJlc3VsdHMgPSBmaWx0ZXIoY29udGVudCwgKGludGVncmF0aW9uKSA9PlxuICAgIGludGVncmF0aW9uLnNsdWcuaW5jbHVkZXMocXVlcnkpXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICB0aXRsZT1cIkludGVncmF0aW9uc1wiXG4gICAgICBiYWNrZ3JvdW5kPVwiI0Y0RjdGQVwiXG4gICAgICBoZXJvPVwiT3V0bGluZSBpcyBleHRlbnNpYmxlIGFuZCBkZXNpZ25lZCB0byBpbnRlZ3JhdGUgd2l0aCB5b3VyIGV4aXN0aW5nXG4gICAgICB3b3JrZmxvdyBhbmQgdG9vbHMuIElmIHlvdSBjYW7igJl0IGZpbmQgdGhlIGludGVncmF0aW9uIHlvdeKAmXJlXG4gICAgICBhZnRlciwgcmVhY2ggb3V0IOKAk8Kgd2UgYXJlIGFkZGluZyBuZXcgYXBwbGljYXRpb25zIGFsbCB0aGUgdGltZS5cIlxuICAgICAgc2lkZWJhcj17PEludGVncmF0aW9uc01lbnUgLz59XG4gICAgPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNo4oCmXCJcbiAgICAgICAgb25DaGFuZ2U9eyhldikgPT4gc2V0UXVlcnkoZXYuY3VycmVudFRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuXG4gICAgICB7cXVlcnkgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgyPlJlc3VsdHM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nIGNhcmRzXCI+XG4gICAgICAgICAgICB7cXVlcnkgJiZcbiAgICAgICAgICAgICAgcmVzdWx0cy5tYXAoKGludGVncmF0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMSBwdXJlLXUtbWQtMS0yXCIga2V5PXtpbnRlZ3JhdGlvbi5zbHVnfT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnRlZ3JhdGlvbi1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9pbnRlZ3JhdGlvbnMvJHtpbnRlZ3JhdGlvbi5zbHVnfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2ludGVncmF0aW9uLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgICAgICAgICAgICAgIDw+e2ludGVncmF0aW9uLnN1bW1hcnkgfHwgaW50ZWdyYXRpb24uZGVzY3JpcHRpb259LjwvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHtyZXN1bHRzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTFcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezw+V2FudCB0byBzdWdnZXN0IGEgbmV3IGludGVncmF0aW9uPzwvPn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyPkZlYXR1cmVkPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nIGNhcmRzXCI+XG4gICAgICAgICAgICAgIHtbXCJzbGFja1wiLCBcImdvb2dsZS1kb2NzXCIsIFwiYWxmcmVkXCIsIFwiZmlnbWFcIl0ubWFwKChzbHVnKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW50ZWdyYXRpb24gPSBmaW5kKGNvbnRlbnQsIHsgc2x1ZyB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0xLTJcIiBrZXk9e3NsdWd9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnRlZ3JhdGlvbi1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL2ludGVncmF0aW9ucy8ke2ludGVncmF0aW9uLnNsdWd9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2ludGVncmF0aW9uLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgICAgICAgICAgICAgICAgPD57aW50ZWdyYXRpb24uc3VtbWFyeSB8fCBpbnRlZ3JhdGlvbi5kZXNjcmlwdGlvbn0uPC8+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY2FyZHMge1xuICAgICAgICAgICAgbWFyZ2luOiAwIC0xcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbnRlZ3JhdGlvbi1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/pages/integrations.tsx */"));
}

/***/ })

})
//# sourceMappingURL=integrations.js.a1ffa600d40d081bd687.hot-update.js.map