webpackHotUpdate("main",{

/***/ "./app/store/configureStore.js":
/*!*************************************!*\
  !*** ./app/store/configureStore.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n// import rootReducer from '../reducers';\n// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';\n// import thunk from 'redux-thunk';\n\nvar devtools = window.devToolsExtension || function () {\n  return function (noop) {\n    return noop;\n  };\n};\n\nfunction configureStore(initialState) {\n  // const middlewares = [\n  //   thunk,\n  //   reduxImmutableStateInvariant()\n  // ];\n\n  // const enhancers = [\n  //   applyMiddleware(...middlewares),\n  //   devtools()\n  // ];\n\n  var enhancers = [devtools()];\n\n  // return createStore(\n  //   rootReducer,\n  //   initialState,\n  //   // compose(...enhancers)\n  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()\n  // );\n\n  return (0, _redux.createStore)(_redux.compose.apply(undefined, enhancers));\n\n  // const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;\n\n  // return createStore(\n  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()\n  // );\n\n  // return createStore(\n  //   componseEnhancers()\n  // );\n}\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(devtools, 'devtools', 'C:/Learning/Personal_Project/Code/Patient_Check_In/app/store/configureStore.js');\n  reactHotLoader.register(configureStore, 'configureStore', 'C:/Learning/Personal_Project/Code/Patient_Check_In/app/store/configureStore.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvY29uZmlndXJlU3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzPzRlMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlfSBmcm9tICdyZWR1eCc7XHJcbi8vIGltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbi8vIGltcG9ydCByZWR1eEltbXV0YWJsZVN0YXRlSW52YXJpYW50IGZyb20gJ3JlZHV4LWltbXV0YWJsZS1zdGF0ZS1pbnZhcmlhbnQnO1xyXG4vLyBpbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5cclxuY29uc3QgZGV2dG9vbHMgPSB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gfHwgKCgpID0+IG5vb3AgPT4gbm9vcCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICAvLyBjb25zdCBtaWRkbGV3YXJlcyA9IFtcclxuICAvLyAgIHRodW5rLFxyXG4gIC8vICAgcmVkdXhJbW11dGFibGVTdGF0ZUludmFyaWFudCgpXHJcbiAgLy8gXTtcclxuXHJcbiAgLy8gY29uc3QgZW5oYW5jZXJzID0gW1xyXG4gIC8vICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSxcclxuICAvLyAgIGRldnRvb2xzKClcclxuICAvLyBdO1xyXG5cclxuICBjb25zdCBlbmhhbmNlcnMgPSBbXHJcbiAgICBkZXZ0b29scygpXHJcbiAgXTtcclxuXHJcblxyXG4gIC8vIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAvLyAgIHJvb3RSZWR1Y2VyLFxyXG4gIC8vICAgaW5pdGlhbFN0YXRlLFxyXG4gIC8vICAgLy8gY29tcG9zZSguLi5lbmhhbmNlcnMpXHJcbiAgLy8gICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpXHJcbiAgLy8gKTtcclxuXHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgY29tcG9zZSguLi5lbmhhbmNlcnMpXHJcbiAgKTtcclxuXHJcblxyXG4gIC8vIGNvbnN0IGNvbXBvbnNlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xyXG5cclxuICAvLyByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgLy8gICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpXHJcbiAgLy8gKTtcclxuXHJcbiAgLy8gcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gIC8vICAgY29tcG9uc2VFbmhhbmNlcnMoKVxyXG4gIC8vICk7XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQU9BO0FBQ0E7QUFSQTtBQUNBOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUF2Q0E7QUFFQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/store/configureStore.js\n");

/***/ })

})