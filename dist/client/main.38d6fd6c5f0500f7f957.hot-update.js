webpackHotUpdate("main",{

/***/ "./src/UI/Input/Input.tsx":
/*!********************************!*\
  !*** ./src/UI/Input/Input.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Input = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar isInvalid = function (_a) {\r\n    var valid = _a.valid, touched = _a.touched, shouldValidate = _a.shouldValidate;\r\n    return !valid && shouldValidate && touched;\r\n};\r\nfunction Input(_a) {\r\n    var type = _a.type, valid = _a.valid, touched = _a.touched, shouldValidate = _a.shouldValidate, label = _a.label, value = _a.value, onChange = _a.onChange, onChangeTextarea = _a.onChangeTextarea, size = _a.size, errorMessage = _a.errorMessage;\r\n    var inputType = type || \"text\";\r\n    var cls = [\"input \" + type];\r\n    var htmlFor = inputType + \"-\" + Math.random();\r\n    if (isInvalid({ valid: valid, touched: touched, shouldValidate: shouldValidate })) {\r\n        cls.push(\"invalid\");\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: cls.join(\" \"), \"data-size\": size },\r\n        react_1.default.createElement(\"label\", { htmlFor: htmlFor }, label),\r\n        inputType === \"textarea\" ? (react_1.default.createElement(\"textarea\", { id: htmlFor, value: value, onChange: onChangeTextarea })) : (react_1.default.createElement(\"input\", { type: inputType, id: htmlFor, value: value, onChange: onChange })),\r\n        isInvalid({ valid: valid, touched: touched, shouldValidate: shouldValidate }) ? (react_1.default.createElement(\"span\", null, errorMessage)) : null));\r\n}\r\nexports.Input = Input;\r\n\n\n//# sourceURL=webpack:///./src/UI/Input/Input.tsx?");

/***/ }),

/***/ "./src/UI/Input/index.ts":
/*!*******************************!*\
  !*** ./src/UI/Input/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Input */ \"./src/UI/Input/Input.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/UI/Input/index.ts?");

/***/ })

})