webpackHotUpdate("main",{

/***/ "./src/store/reducers/authReducer.ts":
/*!*******************************************!*\
  !*** ./src/store/reducers/authReducer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.authReducer = void 0;\r\nvar auth_1 = __webpack_require__(/*! ../types/auth */ \"./src/store/types/auth.ts\");\r\nvar initialState = {\r\n    token: \"\",\r\n    loading: false,\r\n};\r\nvar authReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case auth_1.AuthConstActions.AUTH_SUCCESS:\r\n            return __assign(__assign({}, state), { token: action.payload });\r\n        case auth_1.AuthConstActions.AUTH_LOGOUT:\r\n            return __assign(__assign({}, state), { token: \"\" });\r\n        case auth_1.AuthConstActions.LOADING:\r\n            return __assign(__assign({}, state), { loading: action.payload });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.authReducer = authReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/authReducer.ts?");

/***/ }),

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = void 0;\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar cinemaReducer_1 = __webpack_require__(/*! ./cinemaReducer */ \"./src/store/reducers/cinemaReducer.ts\");\r\nvar bgReducer_1 = __webpack_require__(/*! ./bgReducer */ \"./src/store/reducers/bgReducer.ts\");\r\nvar alertReducer_1 = __webpack_require__(/*! ./alertReducer */ \"./src/store/reducers/alertReducer.ts\");\r\nvar authReducer_1 = __webpack_require__(/*! ./authReducer */ \"./src/store/reducers/authReducer.ts\");\r\nexports.rootReducer = redux_1.combineReducers({\r\n    cinema: cinemaReducer_1.cinemaReducer,\r\n    bg: bgReducer_1.bgReducer,\r\n    alert: alertReducer_1.alertReducer,\r\n    auth: authReducer_1.authReducer,\r\n});\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/index.ts?");

/***/ })

})