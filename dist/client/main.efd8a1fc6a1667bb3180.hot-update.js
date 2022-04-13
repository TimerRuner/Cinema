webpackHotUpdate("main",{

/***/ "./src/store/reducers/cinemaReducer.ts":
/*!*********************************************!*\
  !*** ./src/store/reducers/cinemaReducer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.cinemaReducer = void 0;\r\nvar cinema_1 = __webpack_require__(/*! ../types/cinema */ \"./src/store/types/cinema.ts\");\r\nvar initialState = {\r\n    id: [],\r\n    currentMovies: [{}],\r\n    movies: [{}],\r\n    currentPage: 1,\r\n    perPage: 12,\r\n    error: \"\",\r\n    loading: false,\r\n    total: 0,\r\n    sortedMovies: [{}],\r\n};\r\nvar cinemaReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case cinema_1.CinemaActionTypes.INIT_CINEMA:\r\n            return __assign(__assign(__assign({}, state), { loading: true }), action.payload);\r\n        case cinema_1.CinemaActionTypes.FETCH_MOVIES:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case cinema_1.CinemaActionTypes.FETCH_MOVIES_SUCCESS:\r\n            return __assign(__assign({}, state), { currentMovies: action.payload, loading: false });\r\n        case cinema_1.CinemaActionTypes.FETCH_MOVIES_ERROR:\r\n            return __assign(__assign({}, state), { error: action.payload, loading: false });\r\n        case cinema_1.CinemaActionTypes.SEARCH_CINEMA:\r\n            return __assign(__assign({}, state), { movies: sortedMovies.payload });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.cinemaReducer = cinemaReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/cinemaReducer.ts?");

/***/ }),

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = void 0;\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar cinemaReducer_1 = __webpack_require__(/*! ./cinemaReducer */ \"./src/store/reducers/cinemaReducer.ts\");\r\nvar bgReducer_1 = __webpack_require__(/*! ./bgReducer */ \"./src/store/reducers/bgReducer.ts\");\r\nvar alertReducer_1 = __webpack_require__(/*! ./alertReducer */ \"./src/store/reducers/alertReducer.ts\");\r\nexports.rootReducer = redux_1.combineReducers({\r\n    cinema: cinemaReducer_1.cinemaReducer,\r\n    bg: bgReducer_1.bgReducer,\r\n    alert: alertReducer_1.alertReducer,\r\n});\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/index.ts?");

/***/ })

})