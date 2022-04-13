webpackHotUpdate("main",{

/***/ "./src/shared/CardList/CardList.tsx":
/*!******************************************!*\
  !*** ./src/shared/CardList/CardList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar cardlist_css_1 = __importDefault(__webpack_require__(/*! ./cardlist.css */ \"./src/shared/CardList/cardlist.css\"));\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nvar useAction_1 = __webpack_require__(/*! ../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nvar AppBg_1 = __webpack_require__(/*! ../AppBg */ \"./src/shared/AppBg/index.ts\");\r\nfunction CardList() {\r\n    var _a = useTypeSelector_1.useTypeSelector(function (state) { return state.cinema; }), id = _a.id, movies = _a.movies, currentMovies = _a.currentMovies, currentPage = _a.currentPage, perPage = _a.perPage, loading = _a.loading, sortedMovies = _a.sortedMovies;\r\n    var _b = useAction_1.useActions(), fetchCinema = _b.fetchCinema, initCinema = _b.initCinema;\r\n    react_1.useEffect(function () {\r\n        initCinema();\r\n    }, []);\r\n    react_1.useEffect(function () {\r\n        fetchCinema(currentPage, perPage, sortedMovies);\r\n    }, [currentPage, sortedMovies, movies, id]);\r\n    return (react_1.default.createElement(\"div\", { className: cardlist_css_1.default.cardList },\r\n        react_1.default.createElement(\"div\", { className: \"container\" },\r\n            react_1.default.createElement(\"div\", { className: cardlist_css_1.default.cardList__content },\r\n                react_1.default.createElement(\"h2\", { className: cardlist_css_1.default.cardList__title }, \"IMDB Top 250\"),\r\n                react_1.default.createElement(\"div\", { className: cardlist_css_1.default.cardList__wrapper },\r\n                    loading && react_1.default.createElement(\"div\", null, \"Loading...\"),\r\n                    !sortedMovies.length && react_1.default.createElement(\"div\", null, \"No posts\"),\r\n                    \")} */}\"))),\r\n        react_1.default.createElement(AppBg_1.AppBg, null)));\r\n}\r\nexports.CardList = CardList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/CardList.tsx?");

/***/ }),

/***/ "./src/shared/CardList/index.ts":
/*!**************************************!*\
  !*** ./src/shared/CardList/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardList */ \"./src/shared/CardList/CardList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/index.ts?");

/***/ })

})