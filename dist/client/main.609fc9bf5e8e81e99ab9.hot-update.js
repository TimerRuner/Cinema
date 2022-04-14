webpackHotUpdate("main",{

/***/ "./src/store/action-creator/alert.ts":
/*!*******************************************!*\
  !*** ./src/store/action-creator/alert.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.show = void 0;\r\nvar alert_1 = __webpack_require__(/*! ../types/alert */ \"./src/store/types/alert.ts\");\r\nvar show = function (text, type) {\r\n    if (type === void 0) { type = \"warning\"; }\r\n    return function (dispatch) {\r\n        dispatch({ type: alert_1.AlertAction.SHOW_ALERT, payload: { text: text, type: type } });\r\n        clearTimeout(time);\r\n        var time = setTimeout(function () {\r\n            dispatch({ type: alert_1.AlertAction.HIDE_ALERT });\r\n        }, 5000);\r\n    };\r\n};\r\nexports.show = show;\r\n\n\n//# sourceURL=webpack:///./src/store/action-creator/alert.ts?");

/***/ }),

/***/ "./src/store/action-creator/index.ts":
/*!*******************************************!*\
  !*** ./src/store/action-creator/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CinemaCreators = __importStar(__webpack_require__(/*! ./cinema */ \"./src/store/action-creator/cinema.ts\"));\r\nvar BgCreators = __importStar(__webpack_require__(/*! ./bg */ \"./src/store/action-creator/bg.ts\"));\r\nvar AlertCreators = __importStar(__webpack_require__(/*! ./alert */ \"./src/store/action-creator/alert.ts\"));\r\nexports.default = __assign(__assign(__assign({}, CinemaCreators), BgCreators), AlertCreators);\r\n\n\n//# sourceURL=webpack:///./src/store/action-creator/index.ts?");

/***/ })

})