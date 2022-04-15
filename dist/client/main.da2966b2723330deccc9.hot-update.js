webpackHotUpdate("main",{

/***/ "./src/shared/Modal/Modal.tsx":
/*!************************************!*\
  !*** ./src/shared/Modal/Modal.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Modal = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar modal_css_1 = __importDefault(__webpack_require__(/*! ./modal.css */ \"./src/shared/Modal/modal.css\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\r\nvar react_transition_group_1 = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\r\nfunction Modal(_a) {\r\n    var children = _a.children, name = _a.name;\r\n    var cleanShow = react_router_dom_1.useNavigate();\r\n    var modal = react_1.useRef(null);\r\n    var close = react_1.useRef(null);\r\n    var closeModalClickHandler = function (e) {\r\n        var _a, _b;\r\n        if (e.target instanceof Node && ((_a = close.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {\r\n            cleanShow(\"/\");\r\n        }\r\n        else if (e.target instanceof Node &&\r\n            !((_b = modal.current) === null || _b === void 0 ? void 0 : _b.contains(e.target))) {\r\n            cleanShow(\"/\");\r\n        }\r\n    };\r\n    // const { id } = useParams()\r\n    return (react_1.default.createElement(react_transition_group_1.CSSTransition, null,\r\n        react_1.default.createElement(\"div\", { className: modal_css_1.default.overlay, onClick: closeModalClickHandler },\r\n            react_1.default.createElement(\"div\", { className: modal_css_1.default.modal, ref: modal },\r\n                react_1.default.createElement(\"div\", { className: modal_css_1.default.modal__header },\r\n                    react_1.default.createElement(\"span\", { className: modal_css_1.default.modal__name }, name),\r\n                    react_1.default.createElement(\"span\", { className: modal_css_1.default.modal__close, ref: close }, \"\\uD83D\\uDDD9\")),\r\n                react_1.default.createElement(\"div\", { className: modal_css_1.default.modal__content }, children)))));\r\n}\r\nexports.Modal = Modal;\r\n\n\n//# sourceURL=webpack:///./src/shared/Modal/Modal.tsx?");

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