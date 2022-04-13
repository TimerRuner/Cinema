webpackHotUpdate("main",{

/***/ "./src/store/reducers/cinemaReducer.ts":
/*!*********************************************!*\
  !*** ./src/store/reducers/cinemaReducer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.cinemaReducer = void 0;\r\nvar cinema_1 = __webpack_require__(/*! ../types/cinema */ \"./src/store/types/cinema.ts\");\r\nvar initialState = {\r\n    id: [],\r\n    currentMovies: [{}],\r\n    movies: [{}],\r\n    currentPage: 1,\r\n    perPage: 12,\r\n    error: \"\",\r\n    loading: false,\r\n    total: 0,\r\n};\r\nvar cinemaReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case cinema_1.CinemaActionTypes.INIT_CINEMA:\r\n            return __assign(__assign(__assign({}, state), { loading: true }), action.payload);\r\n        case cinema_1.CinemaActionTypes.FETCH_MOVIES:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case cinema_1.CinemaActionTypes.FETCH_MOVIES_SUCCESS:\r\n            return __assign(__assign({}, state), { currentMovies: action.payload, loading: false });\r\n        case cinema_1.CinemaActionTypes.FETCH_MOVIES_ERROR:\r\n            return __assign(__assign({}, state), { error: action.payload, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.cinemaReducer = cinemaReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/cinemaReducer.ts?");

/***/ }),

/***/ "./src/store/types/cinema.ts":
/*!***********************************!*\
  !*** ./src/store/types/cinema.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CinemaActionTypes = void 0;\r\nvar CinemaActionTypes;\r\n(function (CinemaActionTypes) {\r\n    CinemaActionTypes[\"FETCH_MOVIES_SUCCESS\"] = \"FETCH_MOVIES_SUCCESS\";\r\n    CinemaActionTypes[\"FETCH_MOVIES_ERROR\"] = \"FETCH_MOVIES_ERROR\";\r\n    CinemaActionTypes[\"FETCH_MOVIES\"] = \"FETCH_MOVIES\";\r\n    CinemaActionTypes[\"INIT_CINEMA\"] = \"INIT_CINEMA\";\r\n    CinemaActionTypes[\"SEARCH_CINEMA\"] = \"SEARCH_CINEMA\";\r\n})(CinemaActionTypes = exports.CinemaActionTypes || (exports.CinemaActionTypes = {}));\r\n\n\n//# sourceURL=webpack:///./src/store/types/cinema.ts?");

/***/ })

})