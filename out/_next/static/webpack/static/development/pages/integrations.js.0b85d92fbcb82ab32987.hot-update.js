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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3695957278", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), query ? __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3695957278", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Results"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3695957278", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-g cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, query && results.map(function (integration) {
    return __jsx("div", {
      key: integration.slug,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3695957278", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-u-1 pure-u-md-1-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("img", {
        src: "/images/integrations/".concat(integration.slug, ".png"),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3695957278", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "integration-icon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3695957278", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3695957278", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-u-1 pure-u-md-1-2",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3695957278", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Featured"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3695957278", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-g cards",
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3695957278", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "pure-u-1 pure-u-md-1-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 19
      }
    }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx("img", {
        src: "/images/integrations/".concat(integration.slug, ".png"),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3695957278", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]) + " " + "integration-icon",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 27
        }
      }), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3695957278", [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 27
        }
      }, integration.name, " &arrr;")),
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
    id: "3695957278",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary],
    __self: this
  }, ".search.__jsx-style-dynamic-selector{width:100%;height:32px;border-radius:4px;border:0;padding:24px ".concat(theme__WEBPACK_IMPORTED_MODULE_8__["spacing"].medium, ";background:").concat(theme__WEBPACK_IMPORTED_MODULE_8__["colors"].lightGrey, ";font-size:16px;margin:16px 0;}.search.__jsx-style-dynamic-selector:active,.search.__jsx-style-dynamic-selector:focus{outline:none;box-shadow:0 0 0 2px ").concat(theme__WEBPACK_IMPORTED_MODULE_8__["colors"].primary, ";}.cards.__jsx-style-dynamic-selector{margin:0 -1rem;}.integration-icon.__jsx-style-dynamic-selector{width:60px;height:60px;margin-bottom:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9wYWdlcy9pbnRlZ3JhdGlvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtHUyxBQUd3QixBQVlFLEFBS0UsQUFJSixXQXBCQyxBQXFCQSxFQVRzQyxFQUtwRCxRQWhCb0IsQUFxQkEsa0JBcEJULEFBcUJYLFNBcEI0QyxhQVU1Qyw2QkFUMEMsd0NBQ3pCLGVBQ0QsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL3RvbW1vb3IvUHJvamVjdHMvb3V0bGluZS1zaXRlL3BhZ2VzL2ludGVncmF0aW9ucy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGZpbHRlciwgZmluZCB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJjb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBJbnRlZ3JhdGlvbnNNZW51IGZyb20gXCJjb21wb25lbnRzL0ludGVncmF0aW9uc01lbnVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgY29udGVudCBmcm9tIFwiZGF0YS9pbnRlZ3JhdGlvbnMuanNvblwiO1xuaW1wb3J0IHsgY29sb3JzLCBzcGFjaW5nIH0gZnJvbSBcInRoZW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludGVncmF0aW9ucygpIHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgY29uc3QgcmVzdWx0cyA9IGZpbHRlcihjb250ZW50LCAoaW50ZWdyYXRpb24pID0+XG4gICAgaW50ZWdyYXRpb24uc2x1Zy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5vcm1hbGl6ZWRRdWVyeSkgfHxcbiAgICBpbnRlZ3JhdGlvbi5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5vcm1hbGl6ZWRRdWVyeSlcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIHRpdGxlPVwiSW50ZWdyYXRpb25zXCJcbiAgICAgIGJhY2tncm91bmQ9XCIjRjRGN0ZBXCJcbiAgICAgIGhlcm89XCJPdXRsaW5lIGlzIGV4dGVuc2libGUgYW5kIGRlc2lnbmVkIHRvIGludGVncmF0ZSB3aXRoIHlvdXIgZXhpc3RpbmdcbiAgICAgIHdvcmtmbG93IGFuZCB0b29scy4gSWYgeW91IGNhbuKAmXQgZmluZCB0aGUgaW50ZWdyYXRpb24geW914oCZcmVcbiAgICAgIGFmdGVyLCByZWFjaCBvdXQg4oCTwqB3ZSBhcmUgYWRkaW5nIG5ldyBhcHBsaWNhdGlvbnMgYWxsIHRoZSB0aW1lLlwiXG4gICAgICBzaWRlYmFyPXs8SW50ZWdyYXRpb25zTWVudSAvPn1cbiAgICA+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2jigKZcIlxuICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiBzZXRRdWVyeShldi5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoXCJcbiAgICAgIC8+XG5cbiAgICAgIHtxdWVyeSA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDI+UmVzdWx0czwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWcgY2FyZHNcIj5cbiAgICAgICAgICAgIHtxdWVyeSAmJlxuICAgICAgICAgICAgICByZXN1bHRzLm1hcCgoaW50ZWdyYXRpb24pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0xLTJcIiBrZXk9e2ludGVncmF0aW9uLnNsdWd9PlxuICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImludGVncmF0aW9uLWljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL2ludGVncmF0aW9ucy8ke2ludGVncmF0aW9uLnNsdWd9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57aW50ZWdyYXRpb24ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aW50ZWdyYXRpb24uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvaW50ZWdyYXRpb25zLyR7aW50ZWdyYXRpb24uc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7cmVzdWx0cy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0xLTJcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezw+V2FudCB0byBzdWdnZXN0IGEgbmV3IGludGVncmF0aW9uPzwvPn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyPkZlYXR1cmVkPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nIGNhcmRzXCI+XG4gICAgICAgICAgICAgIHtbXCJzbGFja1wiLCBcImdvb2dsZS1kb2NzXCIsIFwiYWxmcmVkXCIsIFwiZmlnbWFcIl0ubWFwKChzbHVnKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW50ZWdyYXRpb24gPSBmaW5kKGNvbnRlbnQsIHsgc2x1ZyB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xIHB1cmUtdS1tZC0xLTJcIiBrZXk9e3NsdWd9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnRlZ3JhdGlvbi1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL2ludGVncmF0aW9ucy8ke2ludGVncmF0aW9uLnNsdWd9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2ludGVncmF0aW9uLm5hbWV9ICZhcnJyOzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+e2ludGVncmF0aW9uLnN1bW1hcnkgfHwgaW50ZWdyYXRpb24uZGVzY3JpcHRpb259LjwvPlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2ludGVncmF0aW9ucy8ke2ludGVncmF0aW9uLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggJHtzcGFjaW5nLm1lZGl1bX07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5saWdodEdyZXl9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlYXJjaDphY3RpdmUsXG4gICAgICAgICAgLnNlYXJjaDpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICR7Y29sb3JzLnByaW1hcnl9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkcyB7XG4gICAgICAgICAgICBtYXJnaW46IDAgLTFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmludGVncmF0aW9uLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/pages/integrations.tsx */")));
}

/***/ })

})
//# sourceMappingURL=integrations.js.0b85d92fbcb82ab32987.hot-update.js.map