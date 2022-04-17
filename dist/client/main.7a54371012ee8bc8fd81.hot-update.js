webpackHotUpdate("main",{

/***/ "./src/shared/Alert/Alert.tsx":
/*!************************************!*\
  !*** ./src/shared/Alert/Alert.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Alert = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar alert_css_1 = __importDefault(__webpack_require__(/*! ./alert.css */ \"./src/shared/Alert/alert.css\"));\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nvar react_transition_group_1 = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\r\nvar useAction_1 = __webpack_require__(/*! ../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nfunction Alert(_a) {\r\n    var timeout = _a.timeout;\r\n    var _b = useTypeSelector_1.useTypeSelector(function (state) { return state.alert; }), text = _b.text, type = _b.type, visible = _b.visible;\r\n    var hide = useAction_1.useActions().hide;\r\n    var time = null;\r\n    if (timeout) {\r\n        if (time) {\r\n            clearTimeout(time);\r\n        }\r\n        time = setTimeout(function () {\r\n            dispatch({ type: AlertAction.HIDE_ALERT });\r\n        }, 5000);\r\n    }\r\n    return (react_1.default.createElement(react_transition_group_1.CSSTransition, { classNames: \"alert\", timeout: 500, in: visible, mountOnEnter: true, unmountOnExit: true },\r\n        react_1.default.createElement(\"div\", { className: alert_css_1.default.alert + \" \" + type }, text)));\r\n}\r\nexports.Alert = Alert;\r\n\n\n//# sourceURL=webpack:///./src/shared/Alert/Alert.tsx?");

/***/ }),

/***/ "./src/shared/Alert/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Alert/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Alert */ \"./src/shared/Alert/Alert.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Alert/index.ts?");

/***/ })

})