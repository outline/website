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
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! theme */ "./theme.ts");
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2618332589", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamilyMono, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].textSecondary]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
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
          lineNumber: 34,
          columnNumber: 13
        }
      }, years[year].map(function (releases) {
        var release = releases[0];
        return __jsx(components_SidebarMenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: release.id,
          href: "#".concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(release.created_at), "yyyy-MMMM")),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 19
          }
        }, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(release.created_at), "MMMM"));
      }));
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, releases.map(function (release) {
    return __jsx("article", {
      key: release.id,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2618332589", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamilyMono, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].textSecondary]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, __jsx("a", {
      id: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(release.created_at), "yyyy-MMMM"),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2618332589", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamilyMono, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].textSecondary]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }), __jsx("a", {
      id: release.name,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2618332589", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamilyMono, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].textSecondary]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }), __jsx("h2", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2618332589", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamilyMono, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].textSecondary]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, release.name), __jsx("time", {
      dateTime: release.created_at,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2618332589", [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamilyMono, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].textSecondary]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(release.created_at), "MMMM do, yyyy")), __jsx(components_Markdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
      source: release.body,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2618332589",
    dynamic: [theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamilyMono, theme__WEBPACK_IMPORTED_MODULE_8__["colors"].textSecondary],
    __self: this
  }, "article.__jsx-style-dynamic-selector{margin:0 0 8em;}time.__jsx-style-dynamic-selector{display:block;font-family:".concat(theme__WEBPACK_IMPORTED_MODULE_8__["typography"].fontFamilyMono, ";color:").concat(theme__WEBPACK_IMPORTED_MODULE_8__["colors"].textSecondary, ";font-size:0.8em;margin-top:-1.5em;margin-bottom:2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9wYWdlcy9jaGFuZ2Vsb2cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFUyxBQUc0QixBQUlELGNBQzJCLENBSjNDLHdDQUtxQyxtQ0FDbkIsZ0JBQ0Usa0JBQ0Esa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy90b21tb29yL1Byb2plY3RzL291dGxpbmUtc2l0ZS9wYWdlcy9jaGFuZ2Vsb2cudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgeyBtYXAsIGdyb3VwQnkgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBTaWRlYmFyTWVudSBmcm9tIFwiY29tcG9uZW50cy9TaWRlYmFyTWVudVwiO1xuaW1wb3J0IFNpZGViYXJNZW51SXRlbSBmcm9tIFwiY29tcG9uZW50cy9TaWRlYmFyTWVudUl0ZW1cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcImNvbXBvbmVudHMvTWFya2Rvd25cIjtcbmltcG9ydCB7IHR5cG9ncmFwaHksIGNvbG9ycyB9IGZyb20gXCJ0aGVtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFuZ2Vsb2coeyByZWxlYXNlcyB9KSB7XG4gIGNvbnN0IG1vbnRocyA9IGdyb3VwQnkocmVsZWFzZXMsIChyZWxlYXNlKSA9PlxuICAgIGZvcm1hdChuZXcgRGF0ZShyZWxlYXNlLmNyZWF0ZWRfYXQpLCBcIk1NTU0sIHl5eXlcIilcbiAgKTtcbiAgY29uc3QgeWVhcnMgPSBncm91cEJ5KG1vbnRocywgKHJlbGVhc2VzKSA9PlxuICAgIGZvcm1hdChuZXcgRGF0ZShyZWxlYXNlc1swXS5jcmVhdGVkX2F0KSwgXCJ5eXl5XCIpXG4gICk7XG5cbiAgY29uc3Qgc29ydGVkWWVhcnMgPSBPYmplY3Qua2V5cyh5ZWFycykucmV2ZXJzZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dFxuICAgICAgdGl0bGU9XCJDaGFuZ2Vsb2dcIlxuICAgICAgYmFja2dyb3VuZD1cIiNGNEY3RkFcIlxuICAgICAgaGVybz17XG4gICAgICAgIDw+XG4gICAgICAgICAgTmV3IHVwZGF0ZXMgYW5kIGltcHJvdmVtZW50cyB0byBPdXRsaW5lLntcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9vdXRsaW5ld2lraVwiPkZvbGxvdyB1cyBvbiB0d2l0dGVyPC9hPiB0b1xuICAgICAgICAgIGZpbmQgb3V0IHdoZW4gZmVhdHVyZXMgYXJlIHJlbGVhc2VkLlxuICAgICAgICA8Lz5cbiAgICAgIH1cbiAgICAgIHNpZGViYXI9e1xuICAgICAgICA8PlxuICAgICAgICAgIHttYXAoc29ydGVkWWVhcnMsICh5ZWFyKSA9PiAoXG4gICAgICAgICAgICA8U2lkZWJhck1lbnUgdGl0bGU9e3llYXJ9IGtleT17eWVhcn0+XG4gICAgICAgICAgICAgIHt5ZWFyc1t5ZWFyXS5tYXAoKHJlbGVhc2VzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVsZWFzZSA9IHJlbGVhc2VzWzBdO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8U2lkZWJhck1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgIGtleT17cmVsZWFzZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YCMke2Zvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShyZWxlYXNlLmNyZWF0ZWRfYXQpLFxuICAgICAgICAgICAgICAgICAgICAgIFwieXl5eS1NTU1NXCJcbiAgICAgICAgICAgICAgICAgICAgKX1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKHJlbGVhc2UuY3JlYXRlZF9hdCksIFwiTU1NTVwiKX1cbiAgICAgICAgICAgICAgICAgIDwvU2lkZWJhck1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9TaWRlYmFyTWVudT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICB9XG4gICAgPlxuICAgICAge3JlbGVhc2VzLm1hcCgocmVsZWFzZSkgPT4gKFxuICAgICAgICA8YXJ0aWNsZSBrZXk9e3JlbGVhc2UuaWR9PlxuICAgICAgICAgIDxhIGlkPXtmb3JtYXQobmV3IERhdGUocmVsZWFzZS5jcmVhdGVkX2F0KSwgXCJ5eXl5LU1NTU1cIil9IC8+XG4gICAgICAgICAgPGEgaWQ9e3JlbGVhc2UubmFtZX0gLz5cbiAgICAgICAgICA8aDI+e3JlbGVhc2UubmFtZX08L2gyPlxuICAgICAgICAgIDx0aW1lIGRhdGVUaW1lPXtyZWxlYXNlLmNyZWF0ZWRfYXR9PlxuICAgICAgICAgICAge2Zvcm1hdChuZXcgRGF0ZShyZWxlYXNlLmNyZWF0ZWRfYXQpLCBcIk1NTU0gZG8sIHl5eXlcIil9XG4gICAgICAgICAgPC90aW1lPlxuICAgICAgICAgIDxNYXJrZG93biBzb3VyY2U9e3JlbGVhc2UuYm9keX0gLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGFydGljbGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgOGVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRpbWUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHt0eXBvZ3JhcGh5LmZvbnRGYW1pbHlNb25vfTtcbiAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy50ZXh0U2Vjb25kYXJ5fTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMS41ZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3Mvb3V0bGluZS9vdXRsaW5lL3JlbGVhc2VzXCJcbiAgKTtcbiAgY29uc3QgcmVsZWFzZXMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHJlbGVhc2VzLFxuICAgIH0sXG4gIH07XG59XG4iXX0= */\n/*@ sourceURL=/Users/tommoor/Projects/outline-site/pages/changelog.tsx */")));
}

/***/ })

})
//# sourceMappingURL=changelog.js.82e1584e956f83c158b7.hot-update.js.map