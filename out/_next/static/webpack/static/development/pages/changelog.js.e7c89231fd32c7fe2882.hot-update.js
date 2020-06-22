webpackHotUpdate("static/development/pages/changelog.js",{

/***/ "./pages/changelog.tsx":
/*!*****************************!*\
  !*** ./pages/changelog.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Changelog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var components_SidebarMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/SidebarMenu */ "./components/SidebarMenu.tsx");
/* harmony import */ var components_SidebarMenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/SidebarMenuItem */ "./components/SidebarMenuItem.tsx");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Layout */ "./components/Layout.tsx");
/* harmony import */ var components_Markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Markdown */ "./components/Markdown.tsx");
var _jsxFileName = "/Users/tommoor/Projects/outline-site/pages/changelog.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var __N_SSG = true;
function Changelog(_ref) {
  var _this = this;

  var releases = _ref.releases;
  var months = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["groupBy"])(releases, function (release) {
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(release.created_at), "MMMM, yyyy");
  });
  var years = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["groupBy"])(months, function (releases) {
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(releases[0].created_at), "yyyy");
  });
  var sortedYears = Object.keys(years).reverse();
  return __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Changelog",
    background: "#F4F7FA",
    hero: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "New updates and improvements to Outline.", " ", __jsx("a", {
      href: "https://twitter.com/outlinewiki",
      className: "jsx-4104094847",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, "Follow us on twitter"), " to find out when features are released."),
    sidebar: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(sortedYears, function (year) {
      return __jsx(components_SidebarMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: year,
        key: year,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      }, years[year].map(function (releases) {
        var release = releases[0];
        return __jsx(components_SidebarMenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: release.id,
          href: "#".concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(release.created_at), "yyyy-MMMM")),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }
        }, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(release.created_at), "MMMM"));
      }));
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, releases.map(function (release) {
    return __jsx("article", {
      key: release.id,
      className: "jsx-4104094847",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, __jsx("a", {
      id: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(release.created_at), "yyyy-MMMM"),
      className: "jsx-4104094847",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }), __jsx("a", {
      id: release.name,
      className: "jsx-4104094847",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }), __jsx("h2", {
      className: "jsx-4104094847",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }, release.name), __jsx("time", {
      dateTime: release.created_at,
      className: "jsx-4104094847",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(release.created_at), "MMMM do, yyyy")), __jsx(components_Markdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
      source: release.body,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4104094847",
    __self: this
  }, "article.jsx-4104094847{margin:0 0 8em;}time.jsx-4104094847{display:block;font-family:\"Roboto Mono\",\"Menlo\",monospace;font-size:0.8em;margin-top:-1.5em;margin-bottom:2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9wYWdlcy9jaGFuZ2Vsb2cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEUyxBQUc0QixBQUlELGNBQ2dDLENBSmhELDJDQUtrQixnQkFDRSxrQkFDQSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3RvbW1vb3IvUHJvamVjdHMvb3V0bGluZS1zaXRlL3BhZ2VzL2NoYW5nZWxvZy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IG1hcCwgZ3JvdXBCeSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IFNpZGViYXJNZW51IGZyb20gXCJjb21wb25lbnRzL1NpZGViYXJNZW51XCI7XG5pbXBvcnQgU2lkZWJhck1lbnVJdGVtIGZyb20gXCJjb21wb25lbnRzL1NpZGViYXJNZW51SXRlbVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBNYXJrZG93biBmcm9tIFwiY29tcG9uZW50cy9NYXJrZG93blwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFuZ2Vsb2coeyByZWxlYXNlcyB9KSB7XG4gIGNvbnN0IG1vbnRocyA9IGdyb3VwQnkocmVsZWFzZXMsIChyZWxlYXNlKSA9PlxuICAgIGZvcm1hdChuZXcgRGF0ZShyZWxlYXNlLmNyZWF0ZWRfYXQpLCBcIk1NTU0sIHl5eXlcIilcbiAgKTtcbiAgY29uc3QgeWVhcnMgPSBncm91cEJ5KG1vbnRocywgKHJlbGVhc2VzKSA9PlxuICAgIGZvcm1hdChuZXcgRGF0ZShyZWxlYXNlc1swXS5jcmVhdGVkX2F0KSwgXCJ5eXl5XCIpXG4gICk7XG5cbiAgY29uc3Qgc29ydGVkWWVhcnMgPSBPYmplY3Qua2V5cyh5ZWFycykucmV2ZXJzZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dFxuICAgICAgdGl0bGU9XCJDaGFuZ2Vsb2dcIlxuICAgICAgYmFja2dyb3VuZD1cIiNGNEY3RkFcIlxuICAgICAgaGVybz17XG4gICAgICAgIDw+XG4gICAgICAgICAgTmV3IHVwZGF0ZXMgYW5kIGltcHJvdmVtZW50cyB0byBPdXRsaW5lLntcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9vdXRsaW5ld2lraVwiPkZvbGxvdyB1cyBvbiB0d2l0dGVyPC9hPiB0b1xuICAgICAgICAgIGZpbmQgb3V0IHdoZW4gZmVhdHVyZXMgYXJlIHJlbGVhc2VkLlxuICAgICAgICA8Lz5cbiAgICAgIH1cbiAgICAgIHNpZGViYXI9e1xuICAgICAgICA8PnttYXAoc29ydGVkWWVhcnMsICh5ZWFyKSA9PiAoXG4gICAgICAgICAgPFNpZGViYXJNZW51IHRpdGxlPXt5ZWFyfSBrZXk9e3llYXJ9PlxuICAgICAgICAgICAge3llYXJzW3llYXJdLm1hcCgocmVsZWFzZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVsZWFzZSA9IHJlbGVhc2VzWzBdO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxTaWRlYmFyTWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17cmVsZWFzZS5pZH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AjJHtmb3JtYXQoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHJlbGVhc2UuY3JlYXRlZF9hdCksXG4gICAgICAgICAgICAgICAgICAgIFwieXl5eS1NTU1NXCJcbiAgICAgICAgICAgICAgICAgICl9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKHJlbGVhc2UuY3JlYXRlZF9hdCksIFwiTU1NTVwiKX1cbiAgICAgICAgICAgICAgICA8L1NpZGViYXJNZW51SXRlbT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvU2lkZWJhck1lbnU+XG4gICAgICAgICkpfTwvPlxuICAgICAgfVxuICAgID5cbiAgICAgIHtyZWxlYXNlcy5tYXAoKHJlbGVhc2UpID0+IChcbiAgICAgICAgPGFydGljbGUga2V5PXtyZWxlYXNlLmlkfT5cbiAgICAgICAgICA8YSBpZD17Zm9ybWF0KG5ldyBEYXRlKHJlbGVhc2UuY3JlYXRlZF9hdCksIFwieXl5eS1NTU1NXCIpfSAvPlxuICAgICAgICAgIDxhIGlkPXtyZWxlYXNlLm5hbWV9IC8+XG4gICAgICAgICAgPGgyPntyZWxlYXNlLm5hbWV9PC9oMj5cbiAgICAgICAgICA8dGltZSBkYXRlVGltZT17cmVsZWFzZS5jcmVhdGVkX2F0fT5cbiAgICAgICAgICAgIHtmb3JtYXQobmV3IERhdGUocmVsZWFzZS5jcmVhdGVkX2F0KSwgXCJNTU1NIGRvLCB5eXl5XCIpfVxuICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICA8TWFya2Rvd24gc291cmNlPXtyZWxlYXNlLmJvZHl9IC8+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDhlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1vbm9cIiwgXCJNZW5sb1wiLCBtb25vc3BhY2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEuNWVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL291dGxpbmUvb3V0bGluZS9yZWxlYXNlc1wiXG4gICk7XG4gIGNvbnN0IHJlbGVhc2VzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByZWxlYXNlcyxcbiAgICB9LFxuICB9O1xufVxuIl19 */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/pages/changelog.tsx */"));
}

/***/ })

})
//# sourceMappingURL=changelog.js.e7c89231fd32c7fe2882.hot-update.js.map