webpackHotUpdate("main",{

/***/ "./app/actions/doctorActions.js":
/*!**************************************!*\
  !*** ./app/actions/doctorActions.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.loadRecords = loadRecords;\n\nvar _actionTypes = __webpack_require__(/*! ./actionTypes */ \"./app/actions/actionTypes.js\");\n\nvar types = _interopRequireWildcard(_actionTypes);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction loadRecords(doctors) {\n  return {\n    type: types.LOAD_RECORDS,\n    doctors: doctors\n  };\n}\n\n// export function loadRecordsSuccess(doctors) {\n//   return {\n//     type: types.LOAD_RECORDS_SUCCESS,\n//     doctors\n//   };\n// }\n\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(loadRecords, 'loadRecords', 'C:/Learning/Personal_Project/Code/Patient_Check_In/app/actions/doctorActions.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYWN0aW9ucy9kb2N0b3JBY3Rpb25zLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9hY3Rpb25zL2RvY3RvckFjdGlvbnMuanM/ZjgzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL2FjdGlvblR5cGVzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUmVjb3Jkcyhkb2N0b3JzKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IHR5cGVzLkxPQURfUkVDT1JEUyxcclxuICAgIGRvY3RvcnNcclxuICB9O1xyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbG9hZFJlY29yZHNTdWNjZXNzKGRvY3RvcnMpIHtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgdHlwZTogdHlwZXMuTE9BRF9SRUNPUkRTX1NVQ0NFU1MsXHJcbi8vICAgICBkb2N0b3JzXHJcbi8vICAgfTtcclxuLy8gfVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7QUFDQTtBQUhBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFiQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/actions/doctorActions.js\n");

/***/ }),

/***/ "./app/components/index.js":
/*!*********************************!*\
  !*** ./app/components/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _doctorActions = __webpack_require__(/*! ../actions/doctorActions */ \"./app/actions/doctorActions.js\");\n\nvar _configureStore = __webpack_require__(/*! ../store/configureStore */ \"./app/store/configureStore.js\");\n\nvar _configureStore2 = _interopRequireDefault(_configureStore);\n\nvar _App = __webpack_require__(/*! ./App.js */ \"./app/components/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n//action\n\n\nvar store = (0, _configureStore2.default)();\n// store.dispatch();\n\n_reactDom2.default.render(_react2.default.createElement(\n  _reactRedux.Provider,\n  { store: store },\n  _react2.default.createElement(_App2.default, null)\n), document.getElementById('root'));\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(store, 'store', 'C:/Learning/Personal_Project/Code/Patient_Check_In/app/components/index.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9pbmRleC5qcz8yYjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9hY3Rpb25cclxuaW1wb3J0IHtsb2FkUmVjb3Jkc30gZnJvbSAnLi4vYWN0aW9ucy9kb2N0b3JBY3Rpb25zJztcclxuXHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLmpzJztcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcclxuLy8gc3RvcmUuZGlzcGF0Y2goKTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxBcHAgLz5cclxuICA8L1Byb3ZpZGVyPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcclxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7QUFKQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/index.js\n");

/***/ })

})