webpackHotUpdate("main",{

/***/ "./app/actions/doctorActions.js":
/*!**************************************!*\
  !*** ./app/actions/doctorActions.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.loadRecordsSuccess = loadRecordsSuccess;\nexports.loadRecords = loadRecords;\n\nvar _actionTypes = __webpack_require__(/*! ./actionTypes */ \"./app/actions/actionTypes.js\");\n\nvar types = _interopRequireWildcard(_actionTypes);\n\nvar _DataApi = __webpack_require__(/*! ../../server/DataApi */ \"./server/DataApi.js\");\n\nvar _DataApi2 = _interopRequireDefault(_DataApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n// export function loadRecords() {\n//   return {\n//     type: types.LOAD_RECORDS\n//   };\n// }\n\nfunction loadRecordsSuccess(doctors) {\n  return {\n    type: types.LOAD_RECORDS_SUCCESS,\n    doctors: doctors\n  };\n}\n\nfunction loadRecords() {\n  return function (dispatch) {\n    return _DataApi2.default.getList().then(function (doctors) {\n      loadRecordsSuccess;\n    });\n  };\n}\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(loadRecordsSuccess, 'loadRecordsSuccess', 'C:/Learning/Personal_Project/Code/Patient_Check_In/app/actions/doctorActions.js');\n  reactHotLoader.register(loadRecords, 'loadRecords', 'C:/Learning/Personal_Project/Code/Patient_Check_In/app/actions/doctorActions.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvYWN0aW9ucy9kb2N0b3JBY3Rpb25zLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9hY3Rpb25zL2RvY3RvckFjdGlvbnMuanM/ZjgzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL2FjdGlvblR5cGVzJztcclxuaW1wb3J0IERhdGFBcGkgZnJvbSAnLi4vLi4vc2VydmVyL0RhdGFBcGknO1xyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGxvYWRSZWNvcmRzKCkge1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICB0eXBlOiB0eXBlcy5MT0FEX1JFQ09SRFNcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFJlY29yZHNTdWNjZXNzKGRvY3RvcnMpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogdHlwZXMuTE9BRF9SRUNPUkRTX1NVQ0NFU1MsXHJcbiAgICBkb2N0b3JzXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRSZWNvcmRzKCkge1xyXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xyXG4gICAgcmV0dXJuIERhdGFBcGkuZ2V0TGlzdCgpLnRoZW4oZG9jdG9ycyA9PiB7XHJcbiAgICAgIGxvYWRSZWNvcmRzU3VjY2Vzc1xyXG4gICAgfSlcclxuICB9O1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFTQTtBQU9BO0FBQ0E7QUFqQkE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBYkE7QUFPQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/actions/doctorActions.js\n");

/***/ })

})