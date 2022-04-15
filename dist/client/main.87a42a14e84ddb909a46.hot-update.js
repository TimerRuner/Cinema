webpackHotUpdate("main",{

/***/ "./src/shared/Modal/Modal.tsx":
/*!************************************!*\
  !*** ./src/shared/Modal/Modal.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Modal = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar modal_css_1 = __importDefault(__webpack_require__(/*! ./modal.css */ \"./src/shared/Modal/modal.css\"));\r\nfunction Modal(_a) {\r\n    var children = _a.children, name = _a.name;\r\n    // const { id } = useParams()\r\n    return (react_1.default.createElement(\"div\", { className: modal_css_1.default.overlay },\r\n        react_1.default.createElement(\"div\", { className: modal_css_1.default.modal },\r\n            react_1.default.createElement(\"div\", { className: modal_css_1.default.modal__header },\r\n                react_1.default.createElement(\"span\", { className: modal_css_1.default.modal__name }, name),\r\n                react_1.default.createElement(\"span\", { className: modal_css_1.default.modal__close }, \"\\uD83D\\uDDD9\")),\r\n            react_1.default.createElement(\"div\", { className: modal_css_1.default.modal__content }, children))));\r\n}\r\nexports.Modal = Modal;\r\n\n\n//# sourceURL=webpack:///./src/shared/Modal/Modal.tsx?");

/***/ }),

/***/ "./src/shared/Modal/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Modal/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Modal */ \"./src/shared/Modal/Modal.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Modal/index.ts?");

/***/ })

})