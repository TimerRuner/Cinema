webpackHotUpdate("main",{

/***/ "./src/utils/js/sliceID.ts":
/*!*********************************!*\
  !*** ./src/utils/js/sliceID.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.sliceMovie = void 0;\r\nvar sliceMovie = function (movies) {\r\n    return function (page, limit) {\r\n        var from = page * limit - limit;\r\n        var to = page * limit;\r\n        return movies.slice(from, to);\r\n    };\r\n};\r\nexports.sliceMovie = sliceMovie;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/sliceID.ts?");

/***/ })

})