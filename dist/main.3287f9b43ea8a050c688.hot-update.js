webpackHotUpdate("main",{

/***/ "./app/actions/doctorActions.js":
/*!**************************************!*\
  !*** ./app/actions/doctorActions.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.loadRecordsSuccess = loadRecordsSuccess;\nexports.loadRecords = loadRecords;\n\nvar _actionTypes = __webpack_require__(/*! ./actionTypes */ \"./app/actions/actionTypes.js\");\n\nvar types = _interopRequireWildcard(_actionTypes);\n\nvar _DataApi = __webpack_require__(/*! ../../server/DataApi */ \"./server/DataApi.js\");\n\nvar _DataApi2 = _interopRequireDefault(_DataApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction loadRecordsSuccess(doctors) {\n  return {\n    type: types.LOAD_RECORDS_SUCCESS,\n    doctors: doctors\n  };\n}\n\nfunction loadRecords() {\n  return function (dispatch) {\n    return fetch(\"http://jsonplaceholder.typicode.com/users\").then(function (response) {\n      return response.json();\n    }).then(dispatch(loadRecordsSuccess(response))).catch(function (error) {\n      throw error;\n    });\n  };\n}\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(loadRecordsSuccess, 'loadRecordsSuccess', 'C:/Learning/Repos/Patient_Check_In/Patient-Check-In/app/actions/doctorActions.js');\n  reactHotLoader.register(loadRecords, 'loadRecords', 'C:/Learning/Repos/Patient_Check_In/Patient-Check-In/app/actions/doctorActions.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYWN0aW9ucy9kb2N0b3JBY3Rpb25zLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9hY3Rpb25zL2RvY3RvckFjdGlvbnMuanM/ZjgzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL2FjdGlvblR5cGVzJztcclxuaW1wb3J0IERhdGFBcGkgZnJvbSAnLi4vLi4vc2VydmVyL0RhdGFBcGknO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRSZWNvcmRzU3VjY2Vzcyhkb2N0b3JzKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IHR5cGVzLkxPQURfUkVDT1JEU19TVUNDRVNTLFxyXG4gICAgZG9jdG9yc1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUmVjb3JkcygpIHtcclxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbihkaXNwYXRjaChsb2FkUmVjb3Jkc1N1Y2Nlc3MocmVzcG9uc2UpKVxyXG4gICAgKS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgIHRocm93KGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUdBO0FBT0E7QUFDQTtBQVhBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFoQkE7QUFPQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/actions/doctorActions.js\n");

/***/ })

})