webpackHotUpdate("main",{

/***/ "./app/reducers/doctorReducer.js":
/*!***************************************!*\
  !*** ./app/reducers/doctorReducer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = doctorReducer;\n\nvar _actionTypes = __webpack_require__(/*! ../actions/actionTypes */ \"./app/actions/actionTypes.js\");\n\nvar types = _interopRequireWildcard(_actionTypes);\n\nvar _initialState = __webpack_require__(/*! ./initialState */ \"./app/reducers/initialState.js\");\n\nvar _initialState2 = _interopRequireDefault(_initialState);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction doctorReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.doctors;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case types.LOAD_RECORDS_SUCCESS:\n      return action.payload;\n    default:\n      return state;\n  }\n}\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(doctorReducer, 'doctorReducer', 'C:/Learning/Repos/Patient_Check_In/Patient-Check-In/app/reducers/doctorReducer.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcmVkdWNlcnMvZG9jdG9yUmVkdWNlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvcmVkdWNlcnMvZG9jdG9yUmVkdWNlci5qcz84YjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvY3RvclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUuZG9jdG9ycywgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSB0eXBlcy5MT0FEX1JFQ09SRFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0E7QUFDQTtBQUpBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7Ozs7Ozs7Ozs7OztBQVBBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/reducers/doctorReducer.js\n");

/***/ })

})