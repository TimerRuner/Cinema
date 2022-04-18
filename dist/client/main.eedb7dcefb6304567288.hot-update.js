webpackHotUpdate("main",{

/***/ "./src/shared/Container/Container.tsx":
/*!********************************************!*\
  !*** ./src/shared/Container/Container.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Container = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\r\nvar isMounted_1 = __webpack_require__(/*! ../../hooks/isMounted */ \"./src/hooks/isMounted.tsx\");\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nvar routes_1 = __webpack_require__(/*! ./Routes/routes */ \"./src/shared/Container/Routes/routes.tsx\");\r\nvar useAction_1 = __webpack_require__(/*! ../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nvar Loader_1 = __webpack_require__(/*! ../../UI/Loader */ \"./src/UI/Loader/index.ts\");\r\nfunction Container() {\r\n    var autoLogin = useAction_1.useActions().autoLogin;\r\n    var isMounted = isMounted_1.useIsMounted()[0];\r\n    var _a = useTypeSelector_1.useTypeSelector(function (store) { return store.auth; }), token = _a.token, loading = _a.loading;\r\n    var _b = react_1.useState([]), routers = _b[0], setRouters = _b[1];\r\n    react_1.useEffect(function () {\r\n        autoLogin();\r\n    }, []);\r\n    react_1.useEffect(function () {\r\n        if (token !== \"\") {\r\n            setRouters(routes_1.pages);\r\n        }\r\n        else {\r\n            setRouters(routes_1.auth);\r\n        }\r\n    }, [token]);\r\n    return (react_1.default.createElement(\"div\", null, isMounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n        react_1.default.createElement(react_router_dom_1.Routes, null, routers.map(function (route) { return route; })),\r\n        loading ? react_1.default.createElement(Loader_1.Loader, null) : null,\r\n        react_1.default.createElement(Alert, { timeout: true })))));\r\n}\r\nexports.Container = Container;\r\n\n\n//# sourceURL=webpack:///./src/shared/Container/Container.tsx?");

/***/ }),

/***/ "./src/shared/Container/index.ts":
/*!***************************************!*\
  !*** ./src/shared/Container/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Container */ \"./src/shared/Container/Container.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Container/index.ts?");

/***/ })

})