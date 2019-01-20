webpackHotUpdate("main",{

/***/ "./app/components/App.js":
/*!*******************************!*\
  !*** ./app/components/App.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _testData = __webpack_require__(/*! ../../server/testData */ \"./server/testData.json\");\n\nvar _DataApi = __webpack_require__(/*! ../../server/DataApi */ \"./server/DataApi.js\");\n\nvar _DataApi2 = _interopRequireDefault(_DataApi);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _DoctorsList = __webpack_require__(/*! ./DoctorsList */ \"./app/components/DoctorsList.js\");\n\nvar _DoctorsList2 = _interopRequireDefault(_DoctorsList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar doctors = new _DataApi2.default(_testData.data);\n\n// debugger;\nvar dataList = doctors.getList();\n\nvar App = function (_React$PureComponent) {\n  _inherits(App, _React$PureComponent);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'First React Component!',\n        _react2.default.createElement(_DoctorsList2.default, { data: dataList })\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return App;\n}(_react2.default.PureComponent);\n//\n// App.propTypes = {\n//   doctors: PropTypes.array.isRequired,\n// };\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  return {};\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactHotLoader.hot)(module)(App));\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(doctors, 'doctors', 'C:/Learning/Personal_Project/Code/Patient_Check_In/app/components/App.js');\n  reactHotLoader.register(dataList, 'dataList', 'C:/Learning/Personal_Project/Code/Patient_Check_In/app/components/App.js');\n  reactHotLoader.register(App, 'App', 'C:/Learning/Personal_Project/Code/Patient_Check_In/app/components/App.js');\n  reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'C:/Learning/Personal_Project/Code/Patient_Check_In/app/components/App.js');\n  reactHotLoader.register(_default, 'default', 'C:/Learning/Personal_Project/Code/Patient_Check_In/app/components/App.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9BcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQXBwLmpzP2YxM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcic7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvdGVzdERhdGEnO1xyXG5pbXBvcnQgRGF0YUFwaSBmcm9tICcuLi8uLi9zZXJ2ZXIvRGF0YUFwaSc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IERvY3RvcnNMaXN0IGZyb20gJy4vRG9jdG9yc0xpc3QnO1xyXG5cclxuXHJcbmNvbnN0IGRvY3RvcnMgPSBuZXcgRGF0YUFwaShkYXRhKTtcclxuXHJcbi8vIGRlYnVnZ2VyO1xyXG5jb25zdCBkYXRhTGlzdCA9IGRvY3RvcnMuZ2V0TGlzdCgpO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgRmlyc3QgUmVhY3QgQ29tcG9uZW50IVxyXG4gICAgICAgICAgPERvY3RvcnNMaXN0IGRhdGEgPSB7ZGF0YUxpc3R9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4vL1xyXG4vLyBBcHAucHJvcFR5cGVzID0ge1xyXG4vLyAgIGRvY3RvcnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4vLyB9O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiB7XHJcblxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoaG90KG1vZHVsZSkoQXBwKSk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUtBOzs7Ozs7Ozs7OztBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQTNCQTtBQUdBO0FBRUE7QUFlQTs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/App.js\n");

/***/ })

})