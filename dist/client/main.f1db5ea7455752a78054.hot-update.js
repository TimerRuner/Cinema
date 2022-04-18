webpackHotUpdate("main",{

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar Button_1 = __webpack_require__(/*! ../../UI/Button */ \"./src/UI/Button/index.ts\");\r\nvar SearchInput_1 = __webpack_require__(/*! ../SearchInput */ \"./src/shared/SearchInput/index.ts\");\r\nvar useAction_1 = __webpack_require__(/*! ../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\r\nfunction Header() {\r\n    var showAddModal = react_router_dom_1.useNavigate();\r\n    var _a = react_1.useState(false), dropOpen = _a[0], setDropOpen = _a[1];\r\n    var _b = useAction_1.useActions(), logout = _b.logout, initCinema = _b.initCinema;\r\n    var clickHandler = function () {\r\n        showAddModal(\"/add-film\");\r\n        setDropOpen(false);\r\n    };\r\n    var toggleDropHandler = function () {\r\n        setDropOpen(!dropOpen);\r\n    };\r\n    var logoutHandler = function () {\r\n        logout();\r\n        setDropOpen(false);\r\n    };\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(\"div\", { className: \"container\" },\r\n            react_1.default.createElement(\"div\", { className: header_css_1.default.header__wrapper },\r\n                react_1.default.createElement(\"a\", { href: \"/\", className: header_css_1.default.header__logo }, \"Movie DB\"),\r\n                react_1.default.createElement(SearchInput_1.SearchInput, null),\r\n                react_1.default.createElement(\"div\", { className: header_css_1.default.header__buttons + \" \" + (dropOpen ? header_css_1.default._activeDrop : \"\") },\r\n                    react_1.default.createElement(Button_1.Button, { onClick: function () { return clickHandler(); } }, \"Add Movie\"),\r\n                    react_1.default.createElement(Button_1.Button, { onClick: logoutHandler }, \"Log out\"),\r\n                    react_1.default.createElement(Button_1.Button, { onClick: resetHandler }, \"Reload Films\")),\r\n                react_1.default.createElement(\"div\", { className: header_css_1.default.header__burger + \" \" + (dropOpen ? header_css_1.default.active : \"\"), onClick: function () { return toggleDropHandler(); } },\r\n                    react_1.default.createElement(\"span\", null),\r\n                    react_1.default.createElement(\"span\", null),\r\n                    react_1.default.createElement(\"span\", null))))));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ })

})