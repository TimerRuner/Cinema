webpackHotUpdate("main",{

/***/ "./src/shared/Buttons/Buttons.tsx":
/*!****************************************!*\
  !*** ./src/shared/Buttons/Buttons.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Buttons = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar buttons_css_1 = __importDefault(__webpack_require__(/*! ./buttons.css */ \"./src/shared/Buttons/buttons.css\"));\r\nvar Button_1 = __webpack_require__(/*! ../../UI/Button */ \"./src/UI/Button/index.ts\");\r\nvar DeleteModal_1 = __webpack_require__(/*! ../DeleteModal/DeleteModal */ \"./src/shared/DeleteModal/DeleteModal.tsx\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\r\nfunction Buttons(_a) {\r\n    var identifire = _a.identifire;\r\n    var _b = react_1.useState(false), openDeleteModal = _b[0], setOpenDeleteModal = _b[1];\r\n    var openEditModal = react_router_dom_1.useNavigate();\r\n    var removeHandler = function (e) {\r\n        e.stopPropagation();\r\n        setOpenDeleteModal(true);\r\n    };\r\n    var editHandler = function (e) {\r\n        e.stopPropagation();\r\n        openEditModal(\"/edit/\" + identifire);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: buttons_css_1.default.buttons },\r\n        react_1.default.createElement(Button_1.Button, { onClick: editHandler }, \"Edit\"),\r\n        react_1.default.createElement(Button_1.Button, { onClick: removeHandler }, \"Remove\"),\r\n        react_1.default.createElement(DeleteModal_1.DeleteModal, { onOpen: openDeleteModal, setClose: setOpenDeleteModal, id: identifire })));\r\n}\r\nexports.Buttons = Buttons;\r\n\n\n//# sourceURL=webpack:///./src/shared/Buttons/Buttons.tsx?");

/***/ }),

/***/ "./src/shared/Buttons/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Buttons/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Buttons */ \"./src/shared/Buttons/Buttons.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Buttons/index.ts?");

/***/ })

})