webpackHotUpdate("main",{

/***/ "./src/shared/Modal/ViewFilm/ViewFilm.tsx":
/*!************************************************!*\
  !*** ./src/shared/Modal/ViewFilm/ViewFilm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ViewFilm = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar viewfilm_css_1 = __importDefault(__webpack_require__(/*! ./viewfilm.css */ \"./src/shared/Modal/ViewFilm/viewfilm.css\"));\r\nvar Buttons_1 = __webpack_require__(/*! ../../Buttons */ \"./src/shared/Buttons/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nfunction ViewFilm() {\r\n    var id = react_router_dom_1.useParams().id;\r\n    var movies = useTypeSelector_1.useTypeSelector(function (state) { return state.cinema; }).movies;\r\n    if (!id)\r\n        return null;\r\n    var _a = movies.find(function (movie) { return movie.imdbID === id; }), Poster = _a.Poster, Title = _a.Title, Metascore = _a.Metascore, Plot = _a.Plot, Genre = _a.Genre, Year = _a.Year, Runtime = _a.Runtime, Production = _a.Production, Country = _a.Country, Director = _a.Director, Awards = _a.Awards, Actors = _a.Actors, Writer = _a.Writer;\r\n    console.log(film, id);\r\n    return (react_1.default.createElement(\"div\", { className: viewfilm_css_1.default.about },\r\n        react_1.default.createElement(\"div\", { className: viewfilm_css_1.default.about__view },\r\n            react_1.default.createElement(\"div\", { className: viewfilm_css_1.default.about__img },\r\n                react_1.default.createElement(\"img\", { src: \"#\", alt: \"poster\" })),\r\n            react_1.default.createElement(Buttons_1.Buttons, { identifire: id })),\r\n        react_1.default.createElement(\"div\", { className: viewfilm_css_1.default.about__content },\r\n            react_1.default.createElement(\"h2\", { className: viewfilm_css_1.default.about__title }, \"Title\"),\r\n            react_1.default.createElement(\"p\", { className: viewfilm_css_1.default.about__text }, \"Text\"),\r\n            react_1.default.createElement(\"table\", null,\r\n                react_1.default.createElement(\"tbody\", null,\r\n                    react_1.default.createElement(\"tr\", null,\r\n                        react_1.default.createElement(\"th\", null, \"Production\"),\r\n                        react_1.default.createElement(\"td\", null, \"Prod\")),\r\n                    react_1.default.createElement(\"tr\", null,\r\n                        react_1.default.createElement(\"th\", null, \"Country\"),\r\n                        react_1.default.createElement(\"td\", null, \"USA\")),\r\n                    react_1.default.createElement(\"tr\", null,\r\n                        react_1.default.createElement(\"th\", null, \"Dierector\"),\r\n                        react_1.default.createElement(\"td\", null, \"Name Surname\")),\r\n                    react_1.default.createElement(\"tr\", null,\r\n                        react_1.default.createElement(\"th\", null, \"Writer\"),\r\n                        react_1.default.createElement(\"td\", null, \"Name Surname\")),\r\n                    react_1.default.createElement(\"tr\", null,\r\n                        react_1.default.createElement(\"th\", null, \"Actors\"),\r\n                        react_1.default.createElement(\"td\", null, \"Names Surname\")),\r\n                    react_1.default.createElement(\"tr\", null,\r\n                        react_1.default.createElement(\"th\", null, \"Awards\"),\r\n                        react_1.default.createElement(\"td\", null, \"Some text\")))))));\r\n}\r\nexports.ViewFilm = ViewFilm;\r\n\n\n//# sourceURL=webpack:///./src/shared/Modal/ViewFilm/ViewFilm.tsx?");

/***/ }),

/***/ "./src/shared/Modal/ViewFilm/index.ts":
/*!********************************************!*\
  !*** ./src/shared/Modal/ViewFilm/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ViewFilm */ \"./src/shared/Modal/ViewFilm/ViewFilm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Modal/ViewFilm/index.ts?");

/***/ })

})