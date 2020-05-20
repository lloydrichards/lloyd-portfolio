webpackHotUpdate("static/development/pages/experiment/002.js",{

/***/ "./pages/experiment/002.tsx":
/*!**********************************!*\
  !*** ./pages/experiment/002.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/lloyd/Documents/GitHub/lloyd-portfolio/pages/experiment/002.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar Experiment002 = function Experiment002(props) {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"Experiment | 002\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, \"001 - Working with API's\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, \"The current temperature is \", props.current.temp), __jsx(\"code\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 3\n    }\n  }, props.current), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c = Experiment002;\nExperiment002.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var res, data;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"https://api.openweathermap.org/data/2.5/onecall?lat=47.3769&lon=8.5417&units=metric&exclude=daily&appid=02f471c66896a92cf74995432fba9e3c\");\n\n        case 2:\n          res = _context.sent;\n          _context.next = 5;\n          return res.json();\n\n        case 5:\n          data = _context.sent;\n          return _context.abrupt(\"return\", {\n            current: data.current,\n            hourly: data.hourly\n          });\n\n        case 7:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Experiment002);\n\nvar _c;\n\n$RefreshReg$(_c, \"Experiment002\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9leHBlcmltZW50LzAwMi50c3g/NjBhZCJdLCJuYW1lcyI6WyJFeHBlcmltZW50MDAyIiwicHJvcHMiLCJjdXJyZW50IiwidGVtcCIsImdldEluaXRpYWxQcm9wcyIsIkZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJob3VybHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsYUFBOEIsR0FBRyxTQUFqQ0EsYUFBaUMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2hELFNBQ0UsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBQStCQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsSUFBN0MsQ0FGRixFQUdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0YsS0FBSyxDQUFDQyxPQUFiLENBSEUsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERjtBQVFELENBVEQ7O0tBQU1GLGE7QUFXTkEsYUFBYSxDQUFDSSxlQUFkLGlNQUFnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNaQyx5REFBSyxDQUNyQiwwSUFEcUIsQ0FETzs7QUFBQTtBQUN4QkMsYUFEd0I7QUFBQTtBQUFBLGlCQUlYQSxHQUFHLENBQUNDLElBQUosRUFKVzs7QUFBQTtBQUl4QkMsY0FKd0I7QUFBQSwyQ0FNdkI7QUFDTE4sbUJBQU8sRUFBRU0sSUFBSSxDQUFDTixPQURUO0FBRUxPLGtCQUFNLEVBQUVELElBQUksQ0FBQ0M7QUFGUixXQU51Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFoQztBQVdlVCw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2V4cGVyaW1lbnQvMDAyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBFeHBlcmltZW50MDAyOiBOZXh0UGFnZTxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiRXhwZXJpbWVudCB8IDAwMlwiPlxuICAgICAgPGgyPjAwMSAtIFdvcmtpbmcgd2l0aCBBUEknczwvaDI+XG4gICAgICA8cD5UaGUgY3VycmVudCB0ZW1wZXJhdHVyZSBpcyB7cHJvcHMuY3VycmVudC50ZW1wfTwvcD5cbiAgPGNvZGU+e3Byb3BzLmN1cnJlbnR9PC9jb2RlPlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbkV4cGVyaW1lbnQwMDIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBGZXRjaChcbiAgICBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD00Ny4zNzY5Jmxvbj04LjU0MTcmdW5pdHM9bWV0cmljJmV4Y2x1ZGU9ZGFpbHkmYXBwaWQ9MDJmNDcxYzY2ODk2YTkyY2Y3NDk5NTQzMmZiYTllM2NcIlxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnQ6IGRhdGEuY3VycmVudCxcbiAgICBob3VybHk6IGRhdGEuaG91cmx5LFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IEV4cGVyaW1lbnQwMDI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/experiment/002.tsx\n");

/***/ })

})