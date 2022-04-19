/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = exports.AppCopmonent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store/index.ts\");\r\nvar Container_1 = __webpack_require__(/*! ./shared/Container */ \"./src/shared/Container/index.ts\");\r\nfunction AppCopmonent() {\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },\r\n        react_1.default.createElement(Container_1.Container, null)));\r\n}\r\nexports.AppCopmonent = AppCopmonent;\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppCopmonent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/UI/Button/Button.tsx":
/*!**********************************!*\
  !*** ./src/UI/Button/Button.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Button = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar button_css_1 = __importDefault(__webpack_require__(/*! ./button.css */ \"./src/UI/Button/button.css\"));\r\nfunction Button(_a) {\r\n    var children = _a.children, onClick = _a.onClick;\r\n    return (react_1.default.createElement(\"button\", { onClick: onClick, className: button_css_1.default.button }, children));\r\n}\r\nexports.Button = Button;\r\n\n\n//# sourceURL=webpack:///./src/UI/Button/Button.tsx?");

/***/ }),

/***/ "./src/UI/Button/button.css":
/*!**********************************!*\
  !*** ./src/UI/Button/button.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"button\": \"button__button--2v3-t\"\n};\n\n\n//# sourceURL=webpack:///./src/UI/Button/button.css?");

/***/ }),

/***/ "./src/UI/Button/index.ts":
/*!********************************!*\
  !*** ./src/UI/Button/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Button */ \"./src/UI/Button/Button.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/UI/Button/index.ts?");

/***/ }),

/***/ "./src/UI/Input/Input.tsx":
/*!********************************!*\
  !*** ./src/UI/Input/Input.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Input = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar isInvalid = function (_a) {\r\n    var valid = _a.valid, touched = _a.touched, shouldValidate = _a.shouldValidate;\r\n    return !valid && shouldValidate && touched;\r\n};\r\nfunction Input(_a) {\r\n    var type = _a.type, valid = _a.valid, touched = _a.touched, shouldValidate = _a.shouldValidate, label = _a.label, value = _a.value, onChange = _a.onChange, onChangeTextarea = _a.onChangeTextarea, size = _a.size, errorMessage = _a.errorMessage;\r\n    var inputType = type || \"text\";\r\n    var cls = [\"input \" + type];\r\n    var htmlFor = inputType + \"-\" + Math.random();\r\n    if (isInvalid({ valid: valid, touched: touched, shouldValidate: shouldValidate })) {\r\n        cls.push(\"invalid\");\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: cls.join(\" \"), \"data-size\": size },\r\n        react_1.default.createElement(\"label\", { htmlFor: htmlFor }, label),\r\n        inputType === \"textarea\" ? (react_1.default.createElement(\"textarea\", { id: htmlFor, value: value, onChange: onChangeTextarea })) : (react_1.default.createElement(\"input\", { type: inputType, id: htmlFor, value: value, onChange: onChange })),\r\n        isInvalid({ valid: valid, touched: touched, shouldValidate: shouldValidate }) ? (react_1.default.createElement(\"span\", null, errorMessage)) : null));\r\n}\r\nexports.Input = Input;\r\n\n\n//# sourceURL=webpack:///./src/UI/Input/Input.tsx?");

/***/ }),

/***/ "./src/UI/Input/index.ts":
/*!*******************************!*\
  !*** ./src/UI/Input/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Input */ \"./src/UI/Input/Input.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/UI/Input/index.ts?");

/***/ }),

/***/ "./src/UI/Loader/Loader.tsx":
/*!**********************************!*\
  !*** ./src/UI/Loader/Loader.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Loader = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar loader_css_1 = __importDefault(__webpack_require__(/*! ./loader.css */ \"./src/UI/Loader/loader.css\"));\r\nfunction Loader() {\r\n    return (react_1.default.createElement(\"div\", { className: loader_css_1.default.layout },\r\n        react_1.default.createElement(\"div\", { className: loader_css_1.default.lds_ring },\r\n            react_1.default.createElement(\"div\", null),\r\n            react_1.default.createElement(\"div\", null),\r\n            react_1.default.createElement(\"div\", null),\r\n            react_1.default.createElement(\"div\", null))));\r\n}\r\nexports.Loader = Loader;\r\n\n\n//# sourceURL=webpack:///./src/UI/Loader/Loader.tsx?");

/***/ }),

/***/ "./src/UI/Loader/index.ts":
/*!********************************!*\
  !*** ./src/UI/Loader/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Loader */ \"./src/UI/Loader/Loader.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/UI/Loader/index.ts?");

/***/ }),

/***/ "./src/UI/Loader/loader.css":
/*!**********************************!*\
  !*** ./src/UI/Loader/loader.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"lds_ring\": \"loader__lds_ring--1dlhD\",\n\t\"lds-ring\": \"loader__lds-ring--10d8u\",\n\t\"layout\": \"loader__layout--1HB2O\"\n};\n\n\n//# sourceURL=webpack:///./src/UI/Loader/loader.css?");

/***/ }),

/***/ "./src/config/configAuth.ts":
/*!**********************************!*\
  !*** ./src/config/configAuth.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getAuthConfig = void 0;\r\nvar getAuthConfig = function () {\r\n    return {\r\n        isFormValid: false,\r\n        formControls: {\r\n            email: {\r\n                value: \"\",\r\n                type: \"email\",\r\n                label: \"Email\",\r\n                errorMessage: \"Введіть коректний email\",\r\n                valid: false,\r\n                touched: false,\r\n                validation: {\r\n                    required: true,\r\n                    email: true,\r\n                },\r\n            },\r\n            password: {\r\n                value: \"\",\r\n                type: \"password\",\r\n                label: \"Password\",\r\n                errorMessage: \"Введіть коректний password\",\r\n                valid: false,\r\n                touched: false,\r\n                validation: {\r\n                    required: true,\r\n                    minLength: 6,\r\n                },\r\n            },\r\n        },\r\n    };\r\n};\r\nexports.getAuthConfig = getAuthConfig;\r\n\n\n//# sourceURL=webpack:///./src/config/configAuth.ts?");

/***/ }),

/***/ "./src/config/configInputs.ts":
/*!************************************!*\
  !*** ./src/config/configInputs.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getInputConfig = void 0;\r\nvar isObjectEmpty_1 = __webpack_require__(/*! ../utils/js/isObjectEmpty */ \"./src/utils/js/isObjectEmpty.ts\");\r\nvar getInputConfig = function (film, defaultValid) {\r\n    if (!isObjectEmpty_1.isEmpty(film)) {\r\n        return {\r\n            isFormValid: defaultValid ? defaultValid : false,\r\n            formControls: {\r\n                Title: {\r\n                    value: film === null || film === void 0 ? void 0 : film.Title,\r\n                    type: \"text\",\r\n                    label: \"Title\",\r\n                    errorMessage: \"Enter title of film !\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Poster: {\r\n                    value: film === null || film === void 0 ? void 0 : film.Poster,\r\n                    type: \"text\",\r\n                    label: \"Poster\",\r\n                    errorMessage: \"Enter poster link!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Plot: {\r\n                    value: film === null || film === void 0 ? void 0 : film.Plot,\r\n                    type: \"textarea\",\r\n                    label: \"Plot\",\r\n                    errorMessage: \"Enter short plot!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 10,\r\n                    },\r\n                },\r\n                Metascore: {\r\n                    value: film === null || film === void 0 ? void 0 : film.Metascore,\r\n                    type: \"text\",\r\n                    label: \"Rating\",\r\n                    errorMessage: \"Enter rating from 1 to 100!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    size: \"small\",\r\n                    validation: {\r\n                        required: true,\r\n                        number: true,\r\n                    },\r\n                },\r\n                Year: {\r\n                    value: film === null || film === void 0 ? void 0 : film.Year,\r\n                    type: \"text\",\r\n                    label: \"Year\",\r\n                    errorMessage: \"Enter year!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    size: \"small\",\r\n                    validation: {\r\n                        required: true,\r\n                        number: true,\r\n                    },\r\n                },\r\n                Runtime: {\r\n                    value: film === null || film === void 0 ? void 0 : film.Runtime,\r\n                    type: \"text\",\r\n                    label: \"Runtime\",\r\n                    errorMessage: \"Enter minutes!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    size: \"small\",\r\n                    validation: {\r\n                        required: true,\r\n                        number: true,\r\n                    },\r\n                },\r\n                Genre: {\r\n                    value: film === null || film === void 0 ? void 0 : film.Genre,\r\n                    type: \"text\",\r\n                    label: \"Genre\",\r\n                    errorMessage: \"Enter genre!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    size: \"small\",\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Production: {\r\n                    value: film === null || film === void 0 ? void 0 : film.Production,\r\n                    type: \"text\",\r\n                    label: \"Production\",\r\n                    errorMessage: \"Enter production!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Country: {\r\n                    value: film === null || film === void 0 ? void 0 : film.Country,\r\n                    type: \"text\",\r\n                    label: \"Country\",\r\n                    errorMessage: \"Enter country!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Director: {\r\n                    value: film === null || film === void 0 ? void 0 : film.Director,\r\n                    type: \"text\",\r\n                    label: \"Director\",\r\n                    errorMessage: \"Enter director!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Writer: {\r\n                    value: film === null || film === void 0 ? void 0 : film.Writer,\r\n                    type: \"text\",\r\n                    label: \"Writer\",\r\n                    errorMessage: \"Enter writer!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Actors: {\r\n                    value: film === null || film === void 0 ? void 0 : film.Actors,\r\n                    type: \"text\",\r\n                    label: \"Actors\",\r\n                    errorMessage: \"Enter actors!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Awards: {\r\n                    value: film === null || film === void 0 ? void 0 : film.Awards,\r\n                    type: \"text\",\r\n                    label: \"Awards\",\r\n                    errorMessage: \"Enter awards!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n            },\r\n        };\r\n    }\r\n    else {\r\n        return {\r\n            isFormValid: false,\r\n            formControls: {\r\n                Title: {\r\n                    value: \"\",\r\n                    type: \"text\",\r\n                    label: \"Title\",\r\n                    errorMessage: \"Enter title of film !\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Poster: {\r\n                    value: \"\",\r\n                    type: \"text\",\r\n                    label: \"Poster\",\r\n                    errorMessage: \"Enter poster link!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Plot: {\r\n                    value: \"\",\r\n                    type: \"textarea\",\r\n                    label: \"Plot\",\r\n                    errorMessage: \"Enter short plot!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 10,\r\n                    },\r\n                },\r\n                Metascore: {\r\n                    value: \"\",\r\n                    type: \"text\",\r\n                    label: \"Rating\",\r\n                    errorMessage: \"Enter rating from 1 to 100!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    size: \"small\",\r\n                    validation: {\r\n                        required: true,\r\n                        number: true,\r\n                    },\r\n                },\r\n                Year: {\r\n                    value: \"\",\r\n                    type: \"text\",\r\n                    label: \"Year\",\r\n                    errorMessage: \"Enter year!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    size: \"small\",\r\n                    validation: {\r\n                        required: true,\r\n                        number: true,\r\n                    },\r\n                },\r\n                Runtime: {\r\n                    value: \"\",\r\n                    type: \"text\",\r\n                    label: \"Runtime\",\r\n                    errorMessage: \"Enter minutes!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    size: \"small\",\r\n                    validation: {\r\n                        required: true,\r\n                        number: true,\r\n                    },\r\n                },\r\n                Genre: {\r\n                    value: \"\",\r\n                    type: \"text\",\r\n                    label: \"Genre\",\r\n                    errorMessage: \"Enter genre!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    size: \"small\",\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Production: {\r\n                    value: \"\",\r\n                    type: \"text\",\r\n                    label: \"Production\",\r\n                    errorMessage: \"Enter production!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Country: {\r\n                    value: \"\",\r\n                    type: \"text\",\r\n                    label: \"Country\",\r\n                    errorMessage: \"Enter country!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Director: {\r\n                    value: \"\",\r\n                    type: \"text\",\r\n                    label: \"Director\",\r\n                    errorMessage: \"Enter director!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Writer: {\r\n                    value: \"\",\r\n                    type: \"text\",\r\n                    label: \"Writer\",\r\n                    errorMessage: \"Enter writer!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Actors: {\r\n                    value: \"\",\r\n                    type: \"text\",\r\n                    label: \"Actors\",\r\n                    errorMessage: \"Enter actor!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n                Awards: {\r\n                    value: \"\",\r\n                    type: \"text\",\r\n                    label: \"Awards\",\r\n                    errorMessage: \"Enter awards!\",\r\n                    valid: false,\r\n                    touched: false,\r\n                    validation: {\r\n                        required: true,\r\n                        minLength: 3,\r\n                    },\r\n                },\r\n            },\r\n        };\r\n    }\r\n};\r\nexports.getInputConfig = getInputConfig;\r\n\n\n//# sourceURL=webpack:///./src/config/configInputs.ts?");

/***/ }),

/***/ "./src/config/firebase.ts":
/*!********************************!*\
  !*** ./src/config/firebase.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.firebaseConfig = void 0;\r\nvar app_1 = __webpack_require__(/*! firebase/app */ \"firebase/app\");\r\nexports.firebaseConfig = {\r\n    apiKey: \"AIzaSyDyVB7cqcjItIvb6KVbaYDM3P2sCn64DWE\",\r\n    authDomain: \"cinema-47527.firebaseapp.com\",\r\n    projectId: \"cinema-47527\",\r\n    storageBucket: \"cinema-47527.appspot.com\",\r\n    messagingSenderId: \"306776373205\",\r\n    appId: \"1:306776373205:web:c0943a1e5b8cc608de6f5c\",\r\n};\r\nvar app = app_1.initializeApp(exports.firebaseConfig);\r\n\n\n//# sourceURL=webpack:///./src/config/firebase.ts?");

/***/ }),

/***/ "./src/db/ids.js":
/*!***********************!*\
  !*** ./src/db/ids.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = [\r\n    \"tt0111161\",\r\n    \"tt0068646\",\r\n    \"tt0071562\",\r\n    \"tt0468569\",\r\n    \"tt0050083\",\r\n    \"tt0108052\",\r\n    \"tt0167260\",\r\n    \"tt0110912\",\r\n    \"tt0060196\",\r\n    \"tt0137523\",\r\n    \"tt0120737\",\r\n    \"tt0109830\",\r\n    \"tt0080684\",\r\n    \"tt1375666\",\r\n    \"tt0167261\",\r\n    \"tt0073486\",\r\n    \"tt0099685\",\r\n    \"tt0133093\",\r\n    \"tt0047478\",\r\n    \"tt0114369\",\r\n    \"tt0317248\",\r\n    \"tt0076759\",\r\n    \"tt0102926\",\r\n    \"tt0038650\",\r\n    \"tt0118799\",\r\n    \"tt4633694\",\r\n    \"tt0114814\",\r\n    \"tt0245429\",\r\n    \"tt0120815\",\r\n    \"tt0110413\",\r\n    \"tt0120689\",\r\n    \"tt0816692\",\r\n    \"tt0054215\",\r\n    \"tt0120586\",\r\n    \"tt0021749\",\r\n    \"tt0064116\",\r\n    \"tt0034583\",\r\n    \"tt0027977\",\r\n    \"tt0253474\",\r\n    \"tt1675434\",\r\n    \"tt0407887\",\r\n    \"tt0088763\",\r\n    \"tt0103064\",\r\n    \"tt2582802\",\r\n    \"tt0047396\",\r\n    \"tt0082971\",\r\n    \"tt0110357\",\r\n    \"tt0172495\",\r\n    \"tt0482571\",\r\n    \"tt0078788\",\r\n    \"tt0209144\",\r\n    \"tt0078748\",\r\n    \"tt0095765\",\r\n    \"tt0032553\",\r\n    \"tt0095327\",\r\n    \"tt0043014\",\r\n    \"tt0405094\",\r\n    \"tt0057012\",\r\n    \"tt4154756\",\r\n    \"tt0050825\",\r\n    \"tt0081505\",\r\n    \"tt1853728\",\r\n    \"tt0910970\",\r\n    \"tt0119698\",\r\n    \"tt0051201\",\r\n    \"tt0364569\",\r\n    \"tt1345836\",\r\n    \"tt0169547\",\r\n    \"tt0090605\",\r\n    \"tt0087843\",\r\n    \"tt2380307\",\r\n    \"tt0082096\",\r\n    \"tt0033467\",\r\n    \"tt0112573\",\r\n    \"tt0052357\",\r\n    \"tt0053125\",\r\n    \"tt0105236\",\r\n    \"tt0086190\",\r\n    \"tt5311514\",\r\n    \"tt0022100\",\r\n    \"tt0086879\",\r\n    \"tt5074352\",\r\n    \"tt0180093\",\r\n    \"tt0986264\",\r\n    \"tt0056172\",\r\n    \"tt1187043\",\r\n    \"tt0338013\",\r\n    \"tt0062622\",\r\n    \"tt0066921\",\r\n    \"tt0114709\",\r\n    \"tt0211915\",\r\n    \"tt0036775\",\r\n    \"tt0045152\",\r\n    \"tt0075314\",\r\n    \"tt0361748\",\r\n    \"tt0093058\",\r\n    \"tt0040522\",\r\n    \"tt0056592\",\r\n    \"tt0012349\",\r\n    \"tt0070735\",\r\n    \"tt0119217\",\r\n    \"tt0435761\",\r\n    \"tt2106476\",\r\n    \"tt0208092\",\r\n    \"tt0086250\",\r\n    \"tt0071853\",\r\n    \"tt0059578\",\r\n    \"tt0053604\",\r\n    \"tt0017136\",\r\n    \"tt0119488\",\r\n    \"tt1832382\",\r\n    \"tt0097576\",\r\n    \"tt0042876\",\r\n    \"tt1049413\",\r\n    \"tt0042192\",\r\n    \"tt0372784\",\r\n    \"tt0055630\",\r\n    \"tt0053291\",\r\n    \"tt0105695\",\r\n    \"tt0363163\",\r\n    \"tt0095016\",\r\n    \"tt0040897\",\r\n    \"tt0113277\",\r\n    \"tt8108198\",\r\n    \"tt0044741\",\r\n    \"tt1255953\",\r\n    \"tt0081398\",\r\n    \"tt0057115\",\r\n    \"tt0118849\",\r\n    \"tt0457430\",\r\n    \"tt0476735\",\r\n    \"tt0071315\",\r\n    \"tt0041959\",\r\n    \"tt0096283\",\r\n    \"tt0347149\",\r\n    \"tt0089881\",\r\n    \"tt0055031\",\r\n    \"tt1305806\",\r\n    \"tt0015864\",\r\n    \"tt0050212\",\r\n    \"tt0268978\",\r\n    \"tt1727824\",\r\n    \"tt0120735\",\r\n    \"tt0112641\",\r\n    \"tt0047296\",\r\n    \"tt5027774\",\r\n    \"tt0050976\",\r\n    \"tt2096673\",\r\n    \"tt0080678\",\r\n    \"tt0993846\",\r\n    \"tt3170832\",\r\n    \"tt0434409\",\r\n    \"tt0031679\",\r\n    \"tt1291584\",\r\n    \"tt0083658\",\r\n    \"tt0046912\",\r\n    \"tt0050986\",\r\n    \"tt0017925\",\r\n    \"tt0477348\",\r\n    \"tt0117951\",\r\n    \"tt0469494\",\r\n    \"tt0167404\",\r\n    \"tt0031381\",\r\n    \"tt0084787\",\r\n    \"tt0116282\",\r\n    \"tt1205489\",\r\n    \"tt0077416\",\r\n    \"tt0266543\",\r\n    \"tt0091251\",\r\n    \"tt0015324\",\r\n    \"tt0118715\",\r\n    \"tt1130884\",\r\n    \"tt0266697\",\r\n    \"tt0061512\",\r\n    \"tt0032976\",\r\n    \"tt0046438\",\r\n    \"tt0978762\",\r\n    \"tt2119532\",\r\n    \"tt2267998\",\r\n    \"tt0892769\",\r\n    \"tt0018455\",\r\n    \"tt3011894\",\r\n    \"tt0107290\",\r\n    \"tt0758758\",\r\n    \"tt0120382\",\r\n    \"tt0107207\",\r\n    \"tt2278388\",\r\n    \"tt0025316\",\r\n    \"tt0079470\",\r\n    \"tt0092005\",\r\n    \"tt0091763\",\r\n    \"tt0079944\",\r\n    \"tt0116231\",\r\n    \"tt0074958\",\r\n    \"tt0353969\",\r\n    \"tt0060827\",\r\n    \"tt0052618\",\r\n    \"tt0395169\",\r\n    \"tt2024544\",\r\n    \"tt0405159\",\r\n    \"tt0060107\",\r\n    \"tt0019254\",\r\n    \"tt0046268\",\r\n    \"tt0112471\",\r\n    \"tt1979320\",\r\n    \"tt1392190\",\r\n    \"tt0053198\",\r\n    \"tt1392214\",\r\n    \"tt1028532\",\r\n    \"tt1895587\",\r\n    \"tt3315342\",\r\n    \"tt0245712\",\r\n    \"tt0405508\",\r\n    \"tt0093779\",\r\n    \"tt0264464\",\r\n    \"tt0087544\",\r\n    \"tt1201607\",\r\n    \"tt0064115\",\r\n    \"tt0075148\",\r\n    \"tt0072684\",\r\n    \"tt0198781\",\r\n    \"tt0032551\",\r\n    \"tt0033870\",\r\n    \"tt0097165\",\r\n    \"tt0088247\",\r\n    \"tt0246578\",\r\n    \"tt0083987\",\r\n    \"tt0046911\",\r\n    \"tt0113247\",\r\n    \"tt0107048\",\r\n    \"tt0050783\",\r\n    \"tt0032138\",\r\n    \"tt0118694\",\r\n    \"tt0073195\",\r\n    \"tt1454029\",\r\n    \"tt4016934\",\r\n    \"tt2991224\",\r\n    \"tt4430212\",\r\n    \"tt0056443\",\r\n    \"tt0381681\",\r\n    \"tt0070510\",\r\n    \"tt0087884\",\r\n    \"tt0092067\",\r\n    \"tt1954470\",\r\n    \"tt0036868\",\r\n    \"tt0083922\",\r\n    \"tt2338151\",\r\n    \"tt2015381\",\r\n    \"tt0169102\",\r\n    \"tt0056801\",\r\n];\r\n\n\n//# sourceURL=webpack:///./src/db/ids.js?");

/***/ }),

/***/ "./src/hooks/isMounted.tsx":
/*!*********************************!*\
  !*** ./src/hooks/isMounted.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useIsMounted = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n//? Завдяки рендері компоненти з даним хуком і використанні його для взаємодії із dom, ми не впадемо на сервері, де хуки не використовуються і умова, яка там не спрацює навіть не ініціалізується\r\nfunction useIsMounted() {\r\n    var _a = react_1.default.useState(false), isMounted = _a[0], setIsMounted = _a[1];\r\n    react_1.default.useEffect(function () {\r\n        setIsMounted(true);\r\n    }, []);\r\n    return [isMounted];\r\n}\r\nexports.useIsMounted = useIsMounted;\r\n\n\n//# sourceURL=webpack:///./src/hooks/isMounted.tsx?");

/***/ }),

/***/ "./src/hooks/useAction.ts":
/*!********************************!*\
  !*** ./src/hooks/useAction.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useActions = void 0;\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar action_creator_1 = __importDefault(__webpack_require__(/*! ../store/action-creator/ */ \"./src/store/action-creator/index.ts\"));\r\n//! поєднуємо екшн креатори і dispatch\r\nvar useActions = function () {\r\n    var dispatch = react_redux_1.useDispatch();\r\n    return redux_1.bindActionCreators(action_creator_1.default, dispatch);\r\n};\r\nexports.useActions = useActions;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useAction.ts?");

/***/ }),

/***/ "./src/hooks/useTypeSelector.ts":
/*!**************************************!*\
  !*** ./src/hooks/useTypeSelector.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useTypeSelector = void 0;\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nexports.useTypeSelector = react_redux_1.useSelector;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useTypeSelector.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \"ul {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\n* {\\r\\n    padding: 0px;\\r\\n    margin: 0px;\\r\\n    border: 0px;\\r\\n}\\r\\n*,\\r\\n*:before,\\r\\n*:after {\\r\\n    -moz-box-sizing: border-box;\\r\\n    -webkit-box-sizing: border-box;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n:focus,\\r\\n:active {\\r\\n    outline: none;\\r\\n}\\r\\na:focus,\\r\\na:active {\\r\\n    outline: none;\\r\\n}\\r\\naside,\\r\\nnav,\\r\\nfooter,\\r\\nheader,\\r\\nsection {\\r\\n    display: block;\\r\\n}\\r\\nhtml,\\r\\nbody {\\r\\n    height: 100%;\\r\\n    overflow-x: hidden;\\r\\n}\\r\\nbody {\\r\\n    line-height: 1;\\r\\n    font-size: 14px;\\r\\n    -ms-text-size-adjust: 100%;\\r\\n    -moz-text-size-adjust: 100%;\\r\\n    -webkit-text-size-adjust: 100%;\\r\\n}\\r\\ninput::-ms-clear {\\r\\n    display: none;\\r\\n}\\r\\nbutton {\\r\\n    cursor: pointer;\\r\\n}\\r\\nbutton::-moz-focus-inner {\\r\\n    padding: 0;\\r\\n    border: 0;\\r\\n}\\r\\na,\\r\\na:visited {\\r\\n    text-decoration: none;\\r\\n}\\r\\na:hover {\\r\\n    text-decoration: none;\\r\\n}\\r\\nul li {\\r\\n    list-style: none;\\r\\n}\\r\\nimg {\\r\\n    vertical-align: top;\\r\\n}\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6 {\\r\\n    font-weight: inherit;\\r\\n    font-size: inherit;\\r\\n}\\r\\n\\r\\n:root {\\r\\n    --black: #000;\\r\\n    --white: #fff;\\r\\n    --green: #d4edda;\\r\\n    --border-green: #c3e6cb;\\r\\n    --yellow: #fff3cd;\\r\\n    --border-yellow: #ffeeba;\\r\\n    --red: #f8d7da;\\r\\n    --border-red: #f5c6cb;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    font-family: \\\"Roboto\\\", serif;\\r\\n}\\r\\n.container {\\r\\n    max-width: 1140px;\\r\\n    margin: 0 auto;\\r\\n    padding: 0 30px;\\r\\n}\\r\\n\\r\\n/*Alert type color*/\\r\\n.warning {\\r\\n    background-color: var(--yellow);\\r\\n    border: 1px solid var(--border-yellow);\\r\\n}\\r\\n.error {\\r\\n    background-color: var(--red);\\r\\n    border: 1px solid var(--border-red);\\r\\n}\\r\\n.success {\\r\\n    background-color: var(--green);\\r\\n    border: 1px solid var(--border-green);\\r\\n}\\r\\n\\r\\n/* Alert anim action*/\\r\\n\\r\\n.alert-enter {\\r\\n    opacity: 0;\\r\\n    transform: scale(0.9);\\r\\n}\\r\\n.alert-enter-active {\\r\\n    opacity: 1;\\r\\n    transform: translateX(0);\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n.alert-exit {\\r\\n    opacity: 1;\\r\\n}\\r\\n.alert-exit-active {\\r\\n    opacity: 0;\\r\\n    transform: scale(0.9);\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n\\r\\n/* Delete Modal animation*/\\r\\n.deleteModal-enter {\\r\\n    opacity: 0;\\r\\n}\\r\\n.deleteModal-enter-active {\\r\\n    opacity: 1;\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n.deleteModal-exit {\\r\\n    opacity: 1;\\r\\n}\\r\\n.deleteModal-exit-active {\\r\\n    opacity: 0;\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n\\r\\n/* Card Animation */\\r\\n.card-enter,\\r\\n.modal-enter {\\r\\n    opacity: 0;\\r\\n    transform: scale(0);\\r\\n}\\r\\n.card-enter-active,\\r\\n.modal-enter-active {\\r\\n    opacity: 1;\\r\\n    transform: scale(1);\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n.card-exit,\\r\\n.modal-exit {\\r\\n    opacity: 1;\\r\\n    transform: scale(1);\\r\\n}\\r\\n.card-exit-active,\\r\\n.modal-exit-active {\\r\\n    opacity: 0;\\r\\n    transform: scale(0);\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n\\r\\n/* Modal Form styles */\\r\\n.input {\\r\\n    display: inline-flex;\\r\\n    flex-direction: column;\\r\\n    align-items: flex-start;\\r\\n    justify-content: space-between;\\r\\n    margin: 0 0 20px 0;\\r\\n    width: calc(50% - 10px);\\r\\n    position: relative;\\r\\n}\\r\\n.input.invalid input,\\r\\n.input.invalid.textarea textarea {\\r\\n    border: 1px solid red;\\r\\n}\\r\\n.input.textarea {\\r\\n    width: 100%;\\r\\n}\\r\\n.input.textarea textarea {\\r\\n    width: 100%;\\r\\n    resize: none;\\r\\n    height: 70px;\\r\\n    border-radius: 5px;\\r\\n    border: 1px solid green;\\r\\n    padding: 5px 10px;\\r\\n}\\r\\n.input[data-size=\\\"small\\\"] {\\r\\n    width: calc(25% - 10px);\\r\\n}\\r\\n\\r\\n.input label {\\r\\n    display: inline-block;\\r\\n    margin: 0 0 5px 0;\\r\\n}\\r\\n.input input {\\r\\n    border-radius: 5px;\\r\\n    border: 1px solid green;\\r\\n    padding: 5px 10px;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.input span {\\r\\n    color: red;\\r\\n    position: absolute;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n    opacity: 0;\\r\\n    transition: opacity 0.2s ease, transform 0.2s ease;\\r\\n}\\r\\n.input.invalid span {\\r\\n    opacity: 1;\\r\\n    transform: translateY(110%);\\r\\n}\\r\\n\\r\\n@media all and (max-width: 992px) {\\r\\n    .input {\\r\\n        width: 100%;\\r\\n    }\\r\\n    .input[data-size=\\\"small\\\"] {\\r\\n        width: calc(50% - 10px);\\r\\n    }\\r\\n}\\r\\n@media all and (max-width: 768px) {\\r\\n    .input[data-size=\\\"small\\\"] {\\r\\n        width: 100%;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/plugins/axios/index.js":
/*!************************************!*\
  !*** ./src/plugins/axios/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar interceptors_1 = __importDefault(__webpack_require__(/*! ./interceptors */ \"./src/plugins/axios/interceptors.js\"));\r\nvar instance = axios_1.default.create({\r\n    baseURL: \"https://www.omdbapi.com\",\r\n});\r\ninterceptors_1.default(instance);\r\nexports.default = instance;\r\n\n\n//# sourceURL=webpack:///./src/plugins/axios/index.js?");

/***/ }),

/***/ "./src/plugins/axios/interceptors.js":
/*!*******************************************!*\
  !*** ./src/plugins/axios/interceptors.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction setParams(config) {\r\n    var params = config.params || {};\r\n    config.params = Object.assign(params, {\r\n        apikey: \"1012e55f\",\r\n        plot: \"full\",\r\n    });\r\n    return config;\r\n}\r\nfunction returnData(res) {\r\n    return res.data;\r\n}\r\nfunction default_1(axios) {\r\n    axios.interceptors.request.use(setParams);\r\n    axios.interceptors.response.use(returnData);\r\n}\r\nexports.default = default_1;\r\n\n\n//# sourceURL=webpack:///./src/plugins/axios/interceptors.js?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <link\\n    rel=\\\"stylesheet\\\"\\n    href=\\\"https://use.fontawesome.com/releases/v5.6.1/css/all.css\\\"\\n    integrity=\\\"sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP\\\"\\n    crossorigin=\\\"anonymous\\\"\\n  />\\n  <title>Reddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\" + content + \"</div>\\n  <div id=\\\"delete_modal\\\"></div>\\n</body>\\n\\n</html>\\n\"; };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_tsx_1 = __webpack_require__(/*! ../App.tsx */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\nvar PORT = process.env.PORT || 3000;\r\nvar app = express_1.default();\r\napp.use(compression_1.default());\r\n// app.use(\r\n//     helmet({\r\n//         contentSecurityPolicy: false,\r\n//         crossOriginEmbedderPolicy: false,\r\n//     })\r\n// )\r\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\r\napp.get(\"*\", function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_tsx_1.App())));\r\n});\r\napp.listen(PORT, function () {\r\n    console.log(\"server started on port http://localhost:\" + PORT);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/AdditionalInfo/AdditionalInfo.tsx":
/*!******************************************************!*\
  !*** ./src/shared/AdditionalInfo/AdditionalInfo.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AdditionalInfo = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar additionalinfo_css_1 = __importDefault(__webpack_require__(/*! ./additionalinfo.css */ \"./src/shared/AdditionalInfo/additionalinfo.css\"));\r\nfunction AdditionalInfo(_a) {\r\n    var info = _a.info;\r\n    return (react_1.default.createElement(\"div\", { className: additionalinfo_css_1.default.additional }, info.map(function (item, index) { return (react_1.default.createElement(\"div\", { className: additionalinfo_css_1.default.additional_info, key: index }, item)); })));\r\n}\r\nexports.AdditionalInfo = AdditionalInfo;\r\n\n\n//# sourceURL=webpack:///./src/shared/AdditionalInfo/AdditionalInfo.tsx?");

/***/ }),

/***/ "./src/shared/AdditionalInfo/additionalinfo.css":
/*!******************************************************!*\
  !*** ./src/shared/AdditionalInfo/additionalinfo.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"additional\": \"additionalinfo__additional--3noHy\",\n\t\"additional_info\": \"additionalinfo__additional_info--3opcZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/AdditionalInfo/additionalinfo.css?");

/***/ }),

/***/ "./src/shared/AdditionalInfo/index.ts":
/*!********************************************!*\
  !*** ./src/shared/AdditionalInfo/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AdditionalInfo */ \"./src/shared/AdditionalInfo/AdditionalInfo.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/AdditionalInfo/index.ts?");

/***/ }),

/***/ "./src/shared/Alert/Alert.tsx":
/*!************************************!*\
  !*** ./src/shared/Alert/Alert.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Alert = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar alert_css_1 = __importDefault(__webpack_require__(/*! ./alert.css */ \"./src/shared/Alert/alert.css\"));\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nvar react_transition_group_1 = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\r\nvar useAction_1 = __webpack_require__(/*! ../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nfunction Alert() {\r\n    var _a = useTypeSelector_1.useTypeSelector(function (state) { return state.alert; }), text = _a.text, type = _a.type, visible = _a.visible;\r\n    var hide = useAction_1.useActions().hide;\r\n    var time = null;\r\n    if (visible) {\r\n        if (time) {\r\n            clearTimeout(time);\r\n        }\r\n        time = setTimeout(function () {\r\n            hide();\r\n        }, 5000);\r\n    }\r\n    return (react_1.default.createElement(react_transition_group_1.CSSTransition, { classNames: \"alert\", timeout: 500, in: visible, mountOnEnter: true, unmountOnExit: true },\r\n        react_1.default.createElement(\"div\", { className: alert_css_1.default.alert + \" \" + type }, text)));\r\n}\r\nexports.Alert = Alert;\r\n\n\n//# sourceURL=webpack:///./src/shared/Alert/Alert.tsx?");

/***/ }),

/***/ "./src/shared/Alert/alert.css":
/*!************************************!*\
  !*** ./src/shared/Alert/alert.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"alert\": \"alert__alert--1-xsC\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Alert/alert.css?");

/***/ }),

/***/ "./src/shared/AppBg/AppBg.tsx":
/*!************************************!*\
  !*** ./src/shared/AppBg/AppBg.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AppBg = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar appbg_css_1 = __importDefault(__webpack_require__(/*! ./appbg.css */ \"./src/shared/AppBg/appbg.css\"));\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nfunction AppBg() {\r\n    var src = useTypeSelector_1.useTypeSelector(function (state) { return state.bg; }).src;\r\n    return (react_1.default.createElement(\"div\", { className: appbg_css_1.default.appBg, style: { backgroundImage: \"url(\" + src + \")\" } }));\r\n}\r\nexports.AppBg = AppBg;\r\n\n\n//# sourceURL=webpack:///./src/shared/AppBg/AppBg.tsx?");

/***/ }),

/***/ "./src/shared/AppBg/appbg.css":
/*!************************************!*\
  !*** ./src/shared/AppBg/appbg.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"appBg\": \"appbg__appBg--1_g5S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/AppBg/appbg.css?");

/***/ }),

/***/ "./src/shared/AppBg/index.ts":
/*!***********************************!*\
  !*** ./src/shared/AppBg/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AppBg */ \"./src/shared/AppBg/AppBg.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/AppBg/index.ts?");

/***/ }),

/***/ "./src/shared/Auth/Auth.tsx":
/*!**********************************!*\
  !*** ./src/shared/Auth/Auth.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Auth = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar auth_css_1 = __importDefault(__webpack_require__(/*! ./auth.css */ \"./src/shared/Auth/auth.css\"));\r\nfunction Auth(_a) {\r\n    var children = _a.children;\r\n    return react_1.default.createElement(\"div\", { className: auth_css_1.default.authpage }, children);\r\n}\r\nexports.Auth = Auth;\r\n\n\n//# sourceURL=webpack:///./src/shared/Auth/Auth.tsx?");

/***/ }),

/***/ "./src/shared/Auth/AuthForm/AuthForm.tsx":
/*!***********************************************!*\
  !*** ./src/shared/Auth/AuthForm/AuthForm.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AuthForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar authform_css_1 = __importDefault(__webpack_require__(/*! ./authform.css */ \"./src/shared/Auth/AuthForm/authform.css\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar configAuth_1 = __webpack_require__(/*! ../../../config/configAuth */ \"./src/config/configAuth.ts\");\r\nvar Input_1 = __webpack_require__(/*! ../../../UI/Input */ \"./src/UI/Input/index.ts\");\r\nvar validateEmail_1 = __webpack_require__(/*! ../../../utils/js/validateEmail */ \"./src/utils/js/validateEmail.ts\");\r\nvar useAction_1 = __webpack_require__(/*! ../../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nfunction AuthForm(_a) {\r\n    var isLogin = _a.isLogin;\r\n    var _b = react_1.useState(configAuth_1.getAuthConfig()), configAuth = _b[0], setConfigAuth = _b[1];\r\n    var auth = useAction_1.useActions().auth;\r\n    var validateControl = function (value, validation) {\r\n        if (!validation) {\r\n            return true;\r\n        }\r\n        var isValid = true;\r\n        if (validation.required) {\r\n            isValid = value.trim() !== \"\" && isValid;\r\n        }\r\n        if (validation.email) {\r\n            isValid = validateEmail_1.validateEmail(value) && isValid;\r\n        }\r\n        if (validation.minLength) {\r\n            isValid = value.length >= validation.minLength && isValid;\r\n        }\r\n        return isValid;\r\n    };\r\n    var onChangeHandler = function (e, controlName) {\r\n        var formControls = __assign({}, configAuth.formControls);\r\n        var control = __assign({}, formControls[controlName]);\r\n        control.value = e.target.value;\r\n        control.touched = true;\r\n        control.valid = validateControl(control.value, control.validation);\r\n        formControls[controlName] = control;\r\n        var isFormValid = true;\r\n        Object.keys(formControls).forEach(function (name) {\r\n            isFormValid = formControls[name].valid && isFormValid;\r\n        });\r\n        setConfigAuth({ isFormValid: isFormValid, formControls: formControls });\r\n    };\r\n    var renderInputs = function () {\r\n        return Object.keys(configAuth.formControls).map(function (controlName, index) {\r\n            var control = configAuth.formControls[controlName];\r\n            return (react_1.default.createElement(Input_1.Input, { key: controlName + index, type: control.type, value: control.value, touched: control.touched, valid: control.valid, label: control.label, shouldValidate: !!control.validation, errorMessage: control.errorMessage, onChange: function (e) { return onChangeHandler(e, controlName); } }));\r\n        });\r\n    };\r\n    var loginHandler = function () {\r\n        auth(configAuth.formControls.email.value, configAuth.formControls.password.value, true);\r\n        setConfigAuth(configAuth_1.getAuthConfig());\r\n    };\r\n    var registerHandler = function () {\r\n        auth(configAuth.formControls.email.value, configAuth.formControls.password.value, false);\r\n        setConfigAuth(configAuth_1.getAuthConfig());\r\n    };\r\n    var resetHandler = function () {\r\n        setConfigAuth(configAuth_1.getAuthConfig());\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: authform_css_1.default.authform },\r\n        react_1.default.createElement(\"div\", { className: authform_css_1.default.auth_wrapper },\r\n            react_1.default.createElement(\"div\", { className: authform_css_1.default.auth_title }, isLogin ? \"Login\" : \"Registration\"),\r\n            react_1.default.createElement(\"div\", { className: authform_css_1.default.auth_inputs }, renderInputs()),\r\n            react_1.default.createElement(\"div\", { className: authform_css_1.default.auth_buttons },\r\n                isLogin ? (react_1.default.createElement(\"button\", { onClick: loginHandler, className: authform_css_1.default.auth_button, disabled: !configAuth.isFormValid }, \"Login\")) : (react_1.default.createElement(\"button\", { onClick: registerHandler, className: authform_css_1.default.auth_button, disabled: !configAuth.isFormValid }, \"Register\")),\r\n                isLogin ? (react_1.default.createElement(react_router_dom_1.Link, { to: \"/register\", onClick: resetHandler }, \"To Register\")) : (react_1.default.createElement(react_router_dom_1.Link, { to: \"/\", onClick: resetHandler }, \"To Login\"))))));\r\n}\r\nexports.AuthForm = AuthForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/Auth/AuthForm/AuthForm.tsx?");

/***/ }),

/***/ "./src/shared/Auth/AuthForm/authform.css":
/*!***********************************************!*\
  !*** ./src/shared/Auth/AuthForm/authform.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"authform\": \"authform__authform--2eivf\",\n\t\"auth_wrapper\": \"authform__auth_wrapper--3aaqh\",\n\t\"auth_inputs\": \"authform__auth_inputs--10jWg\",\n\t\"auth_title\": \"authform__auth_title--2t1ug\",\n\t\"auth_buttons\": \"authform__auth_buttons--1_b0J\",\n\t\"auth_button\": \"authform__auth_button--2iD0b\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Auth/AuthForm/authform.css?");

/***/ }),

/***/ "./src/shared/Auth/AuthForm/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/Auth/AuthForm/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AuthForm */ \"./src/shared/Auth/AuthForm/AuthForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Auth/AuthForm/index.ts?");

/***/ }),

/***/ "./src/shared/Auth/auth.css":
/*!**********************************!*\
  !*** ./src/shared/Auth/auth.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"authpage\": \"auth__authpage--oaWq1\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Auth/auth.css?");

/***/ }),

/***/ "./src/shared/Auth/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Auth/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Auth */ \"./src/shared/Auth/Auth.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Auth/index.ts?");

/***/ }),

/***/ "./src/shared/Buttons/Buttons.tsx":
/*!****************************************!*\
  !*** ./src/shared/Buttons/Buttons.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Buttons = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar buttons_css_1 = __importDefault(__webpack_require__(/*! ./buttons.css */ \"./src/shared/Buttons/buttons.css\"));\r\nvar Button_1 = __webpack_require__(/*! ../../UI/Button */ \"./src/UI/Button/index.ts\");\r\nvar DeleteModal_1 = __webpack_require__(/*! ../DeleteModal/DeleteModal */ \"./src/shared/DeleteModal/DeleteModal.tsx\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction Buttons(_a) {\r\n    var identifire = _a.identifire, isOtherModal = _a.isOtherModal;\r\n    var _b = react_1.useState(false), openDeleteModal = _b[0], setOpenDeleteModal = _b[1];\r\n    var openEditModal = react_router_dom_1.useNavigate();\r\n    var removeHandler = function (e) {\r\n        e.stopPropagation();\r\n        setOpenDeleteModal(true);\r\n    };\r\n    var editHandler = function (e) {\r\n        e.stopPropagation();\r\n        if (isOtherModal) {\r\n            openEditModal(\"/show/edit/\" + identifire);\r\n        }\r\n        else {\r\n            openEditModal(\"/edit/\" + identifire);\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: buttons_css_1.default.buttons },\r\n        react_1.default.createElement(Button_1.Button, { onClick: editHandler }, \"Edit\"),\r\n        react_1.default.createElement(Button_1.Button, { onClick: removeHandler }, \"Remove\"),\r\n        react_1.default.createElement(DeleteModal_1.DeleteModal, { onOpen: openDeleteModal, setClose: setOpenDeleteModal, id: identifire })));\r\n}\r\nexports.Buttons = Buttons;\r\n\n\n//# sourceURL=webpack:///./src/shared/Buttons/Buttons.tsx?");

/***/ }),

/***/ "./src/shared/Buttons/buttons.css":
/*!****************************************!*\
  !*** ./src/shared/Buttons/buttons.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"buttons\": \"buttons__buttons--1OLR0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Buttons/buttons.css?");

/***/ }),

/***/ "./src/shared/Buttons/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Buttons/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Buttons */ \"./src/shared/Buttons/Buttons.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Buttons/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Card.tsx":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/Card.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardList/Card/card.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\r\nvar Buttons_1 = __webpack_require__(/*! ../../Buttons */ \"./src/shared/Buttons/index.ts\");\r\nvar useAction_1 = __webpack_require__(/*! ../../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction Card(_a) {\r\n    var title = _a.title, src = _a.src, id = _a.id, year = _a.year;\r\n    var buttons = react_1.useRef(null);\r\n    var changeBg = useAction_1.useActions().changeBg;\r\n    var nav = react_router_dom_1.useNavigate();\r\n    var hoverHandler = function (src) {\r\n        changeBg(src);\r\n    };\r\n    var clickModalHandler = function (e) {\r\n        var _a;\r\n        if (e.target instanceof Node && !((_a = buttons.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {\r\n            nav(\"/show/\" + id);\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.card, onMouseEnter: function () { return hoverHandler(src); }, onClick: clickModalHandler },\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.card__content },\r\n            react_1.default.createElement(\"img\", { src: src, className: card_css_1.default.card__bg }),\r\n            react_1.default.createElement(\"div\", { className: card_css_1.default.card__wrapper },\r\n                react_1.default.createElement(\"div\", { className: card_css_1.default.card__wrapper_content },\r\n                    react_1.default.createElement(\"h2\", { className: card_css_1.default.card__title },\r\n                        react_1.default.createElement(Text_1.Text, { size: 20, color: Text_1.EColors.white }, title)),\r\n                    react_1.default.createElement(\"span\", { className: card_css_1.default.card__year },\r\n                        react_1.default.createElement(Text_1.Text, { size: 16, color: Text_1.EColors.white }, year))),\r\n                react_1.default.createElement(\"div\", { className: card_css_1.default.buttons, ref: buttons },\r\n                    react_1.default.createElement(Buttons_1.Buttons, { identifire: id }))))));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/card.css":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/card.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--1msO-\",\n\t\"card__wrapper\": \"card__card__wrapper--1udrB\",\n\t\"card__content\": \"card__card__content--8CUpk\",\n\t\"card__bg\": \"card__card__bg--1m3pS\",\n\t\"card__title\": \"card__card__title--3h-Cm\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardList/CardList.tsx":
/*!******************************************!*\
  !*** ./src/shared/CardList/CardList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar cardlist_css_1 = __importDefault(__webpack_require__(/*! ./cardlist.css */ \"./src/shared/CardList/cardlist.css\"));\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nvar useAction_1 = __webpack_require__(/*! ../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardList/Card/Card.tsx\");\r\nvar AppBg_1 = __webpack_require__(/*! ../AppBg */ \"./src/shared/AppBg/index.ts\");\r\nvar Pagination_1 = __webpack_require__(/*! ../Pagination */ \"./src/shared/Pagination/index.ts\");\r\nvar getTotalPage_1 = __webpack_require__(/*! ../../utils/js/getTotalPage */ \"./src/utils/js/getTotalPage.ts\");\r\nvar react_transition_group_1 = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\r\nvar Loader_1 = __webpack_require__(/*! ../../UI/Loader */ \"./src/UI/Loader/index.ts\");\r\nfunction CardList() {\r\n    var _a = useTypeSelector_1.useTypeSelector(function (state) { return state.cinema; }), currentMovies = _a.currentMovies, sortedMovies = _a.sortedMovies, loading = _a.loading, error = _a.error;\r\n    var _b = useAction_1.useActions(), fetchCinema = _b.fetchCinema, initCinema = _b.initCinema;\r\n    var _c = react_1.useState(1), currentPage = _c[0], setCurrentPage = _c[1];\r\n    var _d = react_1.useState(12), perPage = _d[0], setPerPage = _d[1];\r\n    var _e = react_1.useState(0), totalPage = _e[0], setTotalPage = _e[1];\r\n    react_1.useEffect(function () {\r\n        initCinema();\r\n    }, []);\r\n    react_1.useEffect(function () {\r\n        fetchCinema(currentPage, perPage, sortedMovies);\r\n        setTotalPage(getTotalPage_1.getTotalPage(sortedMovies.length, perPage));\r\n    }, [currentPage, sortedMovies]);\r\n    return (react_1.default.createElement(\"div\", { className: cardlist_css_1.default.cardList },\r\n        react_1.default.createElement(\"div\", { className: \"container\" },\r\n            react_1.default.createElement(\"div\", { className: cardlist_css_1.default.cardList__content },\r\n                react_1.default.createElement(\"h2\", { className: cardlist_css_1.default.cardList__title }, \"IMDB Top 250\"),\r\n                loading && react_1.default.createElement(Loader_1.Loader, null),\r\n                !loading && !currentMovies.length && (react_1.default.createElement(\"div\", { className: cardlist_css_1.default.cardList__empty }, \"No posts\")),\r\n                react_1.default.createElement(react_transition_group_1.TransitionGroup, { component: \"div\", className: cardlist_css_1.default.cardList__wrapper }, !error &&\r\n                    !loading &&\r\n                    currentMovies.map(function (_a, index) {\r\n                        var Title = _a.Title, imdbID = _a.imdbID, Poster = _a.Poster, Year = _a.Year;\r\n                        return (react_1.default.createElement(react_transition_group_1.CSSTransition, { key: index, timeout: 500, classNames: \"card\" },\r\n                            react_1.default.createElement(Card_1.Card, { id: imdbID, title: Title, src: Poster, year: Year })));\r\n                    })))),\r\n        react_1.default.createElement(AppBg_1.AppBg, null),\r\n        totalPage && currentMovies.length && (react_1.default.createElement(Pagination_1.Pagination, { total: totalPage, current: currentPage, setPage: setCurrentPage }))));\r\n}\r\nexports.CardList = CardList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/CardList.tsx?");

/***/ }),

/***/ "./src/shared/CardList/cardlist.css":
/*!******************************************!*\
  !*** ./src/shared/CardList/cardlist.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardList\": \"cardlist__cardList--1csLe\",\n\t\"cardList__content\": \"cardlist__cardList__content--1xHYK\",\n\t\"cardList__title\": \"cardlist__cardList__title--2Y8L7\",\n\t\"cardList__wrapper\": \"cardlist__cardList__wrapper--1lTyG\",\n\t\"cardList__empty\": \"cardlist__cardList__empty--1NhNm\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/cardlist.css?");

/***/ }),

/***/ "./src/shared/CardList/index.ts":
/*!**************************************!*\
  !*** ./src/shared/CardList/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardList */ \"./src/shared/CardList/CardList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/index.ts?");

/***/ }),

/***/ "./src/shared/Container/Container.tsx":
/*!********************************************!*\
  !*** ./src/shared/Container/Container.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Container = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar isMounted_1 = __webpack_require__(/*! ../../hooks/isMounted */ \"./src/hooks/isMounted.tsx\");\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nvar routes_1 = __webpack_require__(/*! ./Routes/routes */ \"./src/shared/Container/Routes/routes.tsx\");\r\nvar useAction_1 = __webpack_require__(/*! ../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nvar Loader_1 = __webpack_require__(/*! ../../UI/Loader */ \"./src/UI/Loader/index.ts\");\r\nvar Alert_1 = __webpack_require__(/*! ../Alert/Alert */ \"./src/shared/Alert/Alert.tsx\");\r\nfunction Container() {\r\n    var autoLogin = useAction_1.useActions().autoLogin;\r\n    var isMounted = isMounted_1.useIsMounted()[0];\r\n    var _a = useTypeSelector_1.useTypeSelector(function (store) { return store.auth; }), token = _a.token, loading = _a.loading;\r\n    var _b = react_1.useState([]), routers = _b[0], setRouters = _b[1];\r\n    react_1.useEffect(function () {\r\n        autoLogin();\r\n    }, []);\r\n    react_1.useEffect(function () {\r\n        if (token !== \"\") {\r\n            setRouters(routes_1.pages);\r\n        }\r\n        else {\r\n            setRouters(routes_1.auth);\r\n        }\r\n    }, [token]);\r\n    return (react_1.default.createElement(\"div\", null, isMounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n        react_1.default.createElement(react_router_dom_1.Routes, null, routers.map(function (route, index) { return (react_1.default.createElement(react_router_dom_1.Route, { key: route.path + index, path: route.path, element: route.element })); })),\r\n        loading ? react_1.default.createElement(Loader_1.Loader, null) : null,\r\n        react_1.default.createElement(Alert_1.Alert, null)))));\r\n}\r\nexports.Container = Container;\r\n\n\n//# sourceURL=webpack:///./src/shared/Container/Container.tsx?");

/***/ }),

/***/ "./src/shared/Container/Routes/routes.tsx":
/*!************************************************!*\
  !*** ./src/shared/Container/Routes/routes.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.auth = exports.pages = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Auth_1 = __webpack_require__(/*! ../../Auth */ \"./src/shared/Auth/index.ts\");\r\nvar AuthForm_1 = __webpack_require__(/*! ../../Auth/AuthForm */ \"./src/shared/Auth/AuthForm/index.ts\");\r\nvar CardList_1 = __webpack_require__(/*! ../../CardList */ \"./src/shared/CardList/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ../../Header */ \"./src/shared/Header/index.ts\");\r\nvar Layout_1 = __webpack_require__(/*! ../../Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Modal_1 = __webpack_require__(/*! ../../Modal */ \"./src/shared/Modal/index.ts\");\r\nvar FilmInfo_1 = __webpack_require__(/*! ../../Modal/FilmInfo */ \"./src/shared/Modal/FilmInfo/index.ts\");\r\nvar ViewFilm_1 = __webpack_require__(/*! ../../Modal/ViewFilm */ \"./src/shared/Modal/ViewFilm/index.ts\");\r\nexports.pages = [\r\n    {\r\n        path: \"/\",\r\n        element: (react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(CardList_1.CardList, null))),\r\n    },\r\n    {\r\n        path: \"*\",\r\n        element: (react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(CardList_1.CardList, null))),\r\n    },\r\n    {\r\n        path: \"/show/:id\",\r\n        element: (react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(CardList_1.CardList, null),\r\n            react_1.default.createElement(Modal_1.Modal, { name: \"Show Info\" },\r\n                react_1.default.createElement(ViewFilm_1.ViewFilm, null)))),\r\n    },\r\n    {\r\n        path: \"/edit/:id\",\r\n        element: (react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(CardList_1.CardList, null),\r\n            react_1.default.createElement(Modal_1.Modal, { name: \"Edit Info\" },\r\n                react_1.default.createElement(FilmInfo_1.FilmInfo, null)))),\r\n    },\r\n    {\r\n        path: \"/show/edit/:id\",\r\n        element: (react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(CardList_1.CardList, null),\r\n            react_1.default.createElement(Modal_1.Modal, { isOtherModal: true, name: \"Edit Info\" },\r\n                react_1.default.createElement(FilmInfo_1.FilmInfo, { isOtherModal: true })))),\r\n    },\r\n    {\r\n        path: \"/add-film\",\r\n        element: (react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(CardList_1.CardList, null),\r\n            react_1.default.createElement(Modal_1.Modal, { name: \"Add New Film\" },\r\n                react_1.default.createElement(FilmInfo_1.FilmInfo, null)))),\r\n    },\r\n];\r\nexports.auth = [\r\n    {\r\n        path: \"/\",\r\n        element: (react_1.default.createElement(Auth_1.Auth, null,\r\n            react_1.default.createElement(AuthForm_1.AuthForm, { isLogin: true }))),\r\n    },\r\n    {\r\n        path: \"/register\",\r\n        element: (react_1.default.createElement(Auth_1.Auth, null,\r\n            react_1.default.createElement(AuthForm_1.AuthForm, { isLogin: false }))),\r\n    },\r\n    {\r\n        path: \"*\",\r\n        element: (react_1.default.createElement(Auth_1.Auth, null,\r\n            react_1.default.createElement(Auth_1.Auth, null,\r\n                react_1.default.createElement(AuthForm_1.AuthForm, { isLogin: true })))),\r\n    },\r\n];\r\n\n\n//# sourceURL=webpack:///./src/shared/Container/Routes/routes.tsx?");

/***/ }),

/***/ "./src/shared/Container/index.ts":
/*!***************************************!*\
  !*** ./src/shared/Container/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Container */ \"./src/shared/Container/Container.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Container/index.ts?");

/***/ }),

/***/ "./src/shared/DeleteModal/DeleteModal.tsx":
/*!************************************************!*\
  !*** ./src/shared/DeleteModal/DeleteModal.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DeleteModal = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar deletemodal_css_1 = __importDefault(__webpack_require__(/*! ./deletemodal.css */ \"./src/shared/DeleteModal/deletemodal.css\"));\r\nvar isMounted_1 = __webpack_require__(/*! ../../hooks/isMounted */ \"./src/hooks/isMounted.tsx\");\r\nvar react_transition_group_1 = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nvar useAction_1 = __webpack_require__(/*! ../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nvar setLocalStorage_1 = __webpack_require__(/*! ../../utils/js/setLocalStorage */ \"./src/utils/js/setLocalStorage.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction DeleteModal(_a) {\r\n    var _b;\r\n    var onOpen = _a.onOpen, setClose = _a.setClose, id = _a.id;\r\n    var _c = useTypeSelector_1.useTypeSelector(function (state) { return state.cinema; }), movies = _c.movies, ids = _c.id;\r\n    var title = (_b = movies.find(function (movie) { return movie.imdbID === id; })) === null || _b === void 0 ? void 0 : _b.Title;\r\n    var _d = useAction_1.useActions(), addNewIdAndMovies = _d.addNewIdAndMovies, show = _d.show;\r\n    var isMounted = isMounted_1.useIsMounted()[0];\r\n    var modal = react_1.useRef(null);\r\n    var closeShowModal = react_router_dom_1.useNavigate();\r\n    var node = null;\r\n    if (isMounted) {\r\n        node = document.getElementById(\"delete_modal\");\r\n    }\r\n    if (!node)\r\n        return null;\r\n    var closeClickHandler = function (e) {\r\n        var _a;\r\n        e.stopPropagation();\r\n        if (e.target instanceof Node && !((_a = modal.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {\r\n            setClose(false);\r\n        }\r\n    };\r\n    var removeHandler = function (id, title) {\r\n        return function (e) {\r\n            e.stopPropagation();\r\n            closeShowModal(\"/\");\r\n            var newMovies = movies.filter(function (movie) { return movie.imdbID !== id; });\r\n            var newId = ids.filter(function (item) { return item !== id; });\r\n            setLocalStorage_1.setLocalStorage(\"films\", newMovies);\r\n            setLocalStorage_1.setLocalStorage(\"ids\", newId);\r\n            addNewIdAndMovies({ id: newId, movies: newMovies });\r\n            setClose(false);\r\n            show(\"Deleted film: \" + title, \"success\");\r\n        };\r\n    };\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(react_transition_group_1.CSSTransition, { in: onOpen, timeout: 500, classNames: \"deleteModal\", mountOnEnter: true, unmountOnExit: true },\r\n        react_1.default.createElement(\"div\", { className: deletemodal_css_1.default.overlay, onClick: closeClickHandler },\r\n            react_1.default.createElement(\"div\", { className: deletemodal_css_1.default.modal, ref: modal },\r\n                react_1.default.createElement(\"div\", { className: deletemodal_css_1.default.modal__wrapper },\r\n                    react_1.default.createElement(\"h2\", { className: deletemodal_css_1.default.modal__title },\r\n                        \"Do you really want to remove this film: \",\r\n                        title,\r\n                        \" ?\"),\r\n                    react_1.default.createElement(\"div\", { className: deletemodal_css_1.default.modal__buttons },\r\n                        react_1.default.createElement(\"button\", { className: deletemodal_css_1.default.modal__btn, onClick: function () { return setClose(false); } }, \"Cancel\"),\r\n                        react_1.default.createElement(\"button\", { className: deletemodal_css_1.default.modal__btn, onClick: removeHandler(id, title) }, \"Remove\")))))), node);\r\n}\r\nexports.DeleteModal = DeleteModal;\r\n\n\n//# sourceURL=webpack:///./src/shared/DeleteModal/DeleteModal.tsx?");

/***/ }),

/***/ "./src/shared/DeleteModal/deletemodal.css":
/*!************************************************!*\
  !*** ./src/shared/DeleteModal/deletemodal.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"overlay\": \"deletemodal__overlay--1Aitc\",\n\t\"modal\": \"deletemodal__modal--2hUbQ\",\n\t\"modal__wrapper\": \"deletemodal__modal__wrapper--2cB-1\",\n\t\"modal__title\": \"deletemodal__modal__title--snGxO\",\n\t\"modal__buttons\": \"deletemodal__modal__buttons--1IUB3\",\n\t\"modal__btn\": \"deletemodal__modal__btn--OdLJF\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/DeleteModal/deletemodal.css?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar Button_1 = __webpack_require__(/*! ../../UI/Button */ \"./src/UI/Button/index.ts\");\r\nvar SearchInput_1 = __webpack_require__(/*! ../SearchInput */ \"./src/shared/SearchInput/index.ts\");\r\nvar useAction_1 = __webpack_require__(/*! ../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction Header() {\r\n    var showAddModal = react_router_dom_1.useNavigate();\r\n    var _a = react_1.useState(false), dropOpen = _a[0], setDropOpen = _a[1];\r\n    var _b = useAction_1.useActions(), logout = _b.logout, initCinema = _b.initCinema;\r\n    var clickHandler = function () {\r\n        showAddModal(\"/add-film\");\r\n        setDropOpen(false);\r\n    };\r\n    var toggleDropHandler = function () {\r\n        setDropOpen(!dropOpen);\r\n    };\r\n    var logoutHandler = function () {\r\n        logout();\r\n        setDropOpen(false);\r\n    };\r\n    var resetHandler = function () {\r\n        localStorage.setItem(\"films\", \"\");\r\n        localStorage.setItem(\"ids\", \"\");\r\n        initCinema();\r\n    };\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(\"div\", { className: \"container\" },\r\n            react_1.default.createElement(\"div\", { className: header_css_1.default.header__wrapper },\r\n                react_1.default.createElement(\"a\", { href: \"/\", className: header_css_1.default.header__logo }, \"Movie DB\"),\r\n                react_1.default.createElement(SearchInput_1.SearchInput, null),\r\n                react_1.default.createElement(\"div\", { className: header_css_1.default.header__buttons + \" \" + (dropOpen ? header_css_1.default._activeDrop : \"\") },\r\n                    react_1.default.createElement(Button_1.Button, { onClick: function () { return clickHandler(); } }, \"Add Movie\"),\r\n                    react_1.default.createElement(Button_1.Button, { onClick: logoutHandler }, \"Log out\"),\r\n                    react_1.default.createElement(Button_1.Button, { onClick: resetHandler }, \"Reload Films\")),\r\n                react_1.default.createElement(\"div\", { className: header_css_1.default.header__burger + \" \" + (dropOpen ? header_css_1.default.active : \"\"), onClick: function () { return toggleDropHandler(); } },\r\n                    react_1.default.createElement(\"span\", null),\r\n                    react_1.default.createElement(\"span\", null),\r\n                    react_1.default.createElement(\"span\", null))))));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\",\n\t\"header__wrapper\": \"header__header__wrapper--2RySQ\",\n\t\"header__logo\": \"header__header__logo--TLrNf\",\n\t\"header__buttons\": \"header__header__buttons--3ISfJ\",\n\t\"header__burger\": \"header__header__burger--3Gsb7\",\n\t\"header__button\": \"header__header__button--1mZm3\",\n\t\"_activeDrop\": \"header___activeDrop--62wFH\",\n\t\"active\": \"header__active--1viAV\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children);\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/Modal/FilmInfo/FilmInfo.tsx":
/*!************************************************!*\
  !*** ./src/shared/Modal/FilmInfo/FilmInfo.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.FilmInfo = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar filminfo_css_1 = __importDefault(__webpack_require__(/*! ./filminfo.css */ \"./src/shared/Modal/FilmInfo/filminfo.css\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nvar findFilm_1 = __webpack_require__(/*! ../../../utils/js/findFilm */ \"./src/utils/js/findFilm.ts\");\r\nvar configInputs_1 = __webpack_require__(/*! ../../../config/configInputs */ \"./src/config/configInputs.ts\");\r\nvar Input_1 = __webpack_require__(/*! ../../../UI/Input */ \"./src/UI/Input/index.ts\");\r\nvar react_router_dom_2 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar useAction_1 = __webpack_require__(/*! ../../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nvar isObjectEmpty_1 = __webpack_require__(/*! ../../../utils/js/isObjectEmpty */ \"./src/utils/js/isObjectEmpty.ts\");\r\nfunction FilmInfo(_a) {\r\n    var _b;\r\n    var isOtherModal = _a.isOtherModal;\r\n    var id = react_router_dom_1.useParams().id;\r\n    var movies = useTypeSelector_1.useTypeSelector(function (state) { return state.cinema; }).movies;\r\n    var closeInfoModal = react_router_dom_2.useNavigate();\r\n    var _c = useAction_1.useActions(), editFilm = _c.editFilm, show = _c.show;\r\n    var configInput = null;\r\n    if (id) {\r\n        var film = findFilm_1.findFilm(id, movies);\r\n        configInput = configInputs_1.getInputConfig(film, true);\r\n    }\r\n    else {\r\n        configInput = configInputs_1.getInputConfig();\r\n    }\r\n    var _d = react_1.useState(configInput), config = _d[0], setConfig = _d[1];\r\n    react_1.useEffect(function () {\r\n        if (id) {\r\n            var film = findFilm_1.findFilm(id, movies);\r\n            configInput = configInputs_1.getInputConfig(film, true);\r\n            setConfig(configInput);\r\n        }\r\n        else {\r\n            configInput = configInputs_1.getInputConfig();\r\n            setConfig(configInput);\r\n        }\r\n    }, [movies]);\r\n    var closeModalHandler = function () {\r\n        if (isOtherModal) {\r\n            closeInfoModal(\"/show/\" + id);\r\n        }\r\n        else {\r\n            closeInfoModal(\"/\");\r\n        }\r\n    };\r\n    var validateControl = function (value, validation) {\r\n        if (!validation) {\r\n            return true;\r\n        }\r\n        var isValid = true;\r\n        if (validation.required) {\r\n            isValid = value.trim() !== \"\" && isValid;\r\n        }\r\n        if (validation.minLength) {\r\n            isValid = value.length >= validation.minLength && isValid;\r\n        }\r\n        return isValid;\r\n    };\r\n    function onChangeHandler(e, controlName) {\r\n        var formControls = __assign({}, config.formControls);\r\n        var control = __assign({}, config.formControls[controlName]);\r\n        control.value = e.target.value;\r\n        control.touched = true;\r\n        control.valid = validateControl(control.value, control.validation);\r\n        if (id) {\r\n            Object.keys(formControls).map(function (controlName) {\r\n                var controlValid = formControls[controlName];\r\n                var value = controlValid.value;\r\n                controlValid.valid = validateControl(value, controlValid.validation);\r\n            });\r\n        }\r\n        formControls[controlName] = control;\r\n        var isFormValid = true;\r\n        Object.keys(formControls).forEach(function (name) {\r\n            isFormValid = formControls[name].valid && isFormValid;\r\n        });\r\n        setConfig({ isFormValid: isFormValid, formControls: formControls });\r\n    }\r\n    function onChangeTextarea(e, controlName) {\r\n        var formControls = __assign({}, config.formControls);\r\n        var control = __assign({}, config.formControls[controlName]);\r\n        control.value = e.target.value;\r\n        control.touched = true;\r\n        control.valid = validateControl(control.value, control.validation);\r\n        if (id) {\r\n            Object.keys(formControls).map(function (controlName) {\r\n                var controlValid = formControls[controlName];\r\n                var value = controlValid.value;\r\n                controlValid.valid = validateControl(value, controlValid.validation);\r\n            });\r\n        }\r\n        formControls[controlName] = control;\r\n        var isFormValid = true;\r\n        Object.keys(formControls).forEach(function (name) {\r\n            isFormValid = formControls[name].valid && isFormValid;\r\n        });\r\n        setConfig({ isFormValid: isFormValid, formControls: formControls });\r\n    }\r\n    var render = function () {\r\n        return Object.keys(config.formControls).map(function (controlName, index) {\r\n            var control = config.formControls[controlName];\r\n            return (react_1.default.createElement(Input_1.Input, { key: controlName + index, type: control.type, value: control.value, touched: control.touched, valid: control.valid, label: control.label, size: control.size ? control.size : \"\", shouldValidate: !!control.validation, errorMessage: control.errorMessage, onChange: function (e) { return onChangeHandler(e, controlName); }, onChangeTextarea: function (e) { return onChangeTextarea(e, controlName); } }));\r\n        });\r\n    };\r\n    var submitHandler = function (e) {\r\n        e.preventDefault();\r\n        var editedFilm = config.formControls;\r\n        if (id) {\r\n            /* Edit function */\r\n            var newMovies = movies.map(function (movie) {\r\n                if (movie.imdbID === id) {\r\n                    show(\"Edited film: \" + movie.Title, \"success\");\r\n                    for (var prop in movie) {\r\n                        if (editedFilm[prop]) {\r\n                            movie[prop] = editedFilm[prop].value;\r\n                        }\r\n                    }\r\n                    return movie;\r\n                }\r\n                else {\r\n                    return movie;\r\n                }\r\n            });\r\n            isObjectEmpty_1.isEmpty(newMovies) ? editFilm(movies) : editFilm(newMovies);\r\n            localStorage.setItem(\"films\", JSON.stringify(newMovies));\r\n            closeModalHandler();\r\n        }\r\n        else {\r\n            /* Add function */\r\n            var newFilm = {};\r\n            var imdbID = String(new Date().valueOf());\r\n            var currentAddInfo = config.formControls;\r\n            for (var prop in currentAddInfo) {\r\n                newFilm[prop] = currentAddInfo[prop].value;\r\n            }\r\n            newFilm[\"imdbID\"] = imdbID;\r\n            movies.push(newFilm);\r\n            localStorage.setItem(\"films\", JSON.stringify(movies));\r\n            editFilm(movies);\r\n            closeInfoModal(\"/\");\r\n            /* Додати сповіщення про створення нового фільму */\r\n            show(\"Added new film: \" + newFilm.Title, \"success\");\r\n        }\r\n    };\r\n    var poster = (_b = config.formControls.Poster) === null || _b === void 0 ? void 0 : _b.value;\r\n    return (react_1.default.createElement(\"div\", { className: filminfo_css_1.default.filmInfo },\r\n        react_1.default.createElement(\"div\", { className: filminfo_css_1.default.filmPoster },\r\n            react_1.default.createElement(\"img\", { src: poster, alt: \"poster\" })),\r\n        react_1.default.createElement(\"form\", { action: \"#\", onSubmit: submitHandler },\r\n            render(),\r\n            react_1.default.createElement(\"div\", { className: filminfo_css_1.default.form_buttons },\r\n                react_1.default.createElement(\"button\", { onClick: closeModalHandler, className: filminfo_css_1.default.form_button }, \"Cancel\"),\r\n                react_1.default.createElement(\"button\", { className: filminfo_css_1.default.form_button, disabled: !config.isFormValid, type: \"submit\" }, \"Submit\")))));\r\n}\r\nexports.FilmInfo = FilmInfo;\r\n\n\n//# sourceURL=webpack:///./src/shared/Modal/FilmInfo/FilmInfo.tsx?");

/***/ }),

/***/ "./src/shared/Modal/FilmInfo/filminfo.css":
/*!************************************************!*\
  !*** ./src/shared/Modal/FilmInfo/filminfo.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"filmInfo\": \"filminfo__filmInfo--fSgNb\",\n\t\"filmPoster\": \"filminfo__filmPoster--208eW\",\n\t\"form_buttons\": \"filminfo__form_buttons--10Bso\",\n\t\"form_button\": \"filminfo__form_button--2GOLr\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Modal/FilmInfo/filminfo.css?");

/***/ }),

/***/ "./src/shared/Modal/FilmInfo/index.ts":
/*!********************************************!*\
  !*** ./src/shared/Modal/FilmInfo/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./FilmInfo */ \"./src/shared/Modal/FilmInfo/FilmInfo.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Modal/FilmInfo/index.ts?");

/***/ }),

/***/ "./src/shared/Modal/Modal.tsx":
/*!************************************!*\
  !*** ./src/shared/Modal/Modal.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Modal = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar modal_css_1 = __importDefault(__webpack_require__(/*! ./modal.css */ \"./src/shared/Modal/modal.css\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction Modal(_a) {\r\n    var children = _a.children, name = _a.name, isOtherModal = _a.isOtherModal;\r\n    var cleanShow = react_router_dom_1.useNavigate();\r\n    var id = react_router_dom_1.useParams().id;\r\n    var modal = react_1.useRef(null);\r\n    var close = react_1.useRef(null);\r\n    var closeModalClickHandler = function (e) {\r\n        var _a, _b;\r\n        if (e.target instanceof Node && ((_a = close.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {\r\n            if (isOtherModal) {\r\n                cleanShow(\"/show/\" + id);\r\n            }\r\n            else {\r\n                cleanShow(\"/\");\r\n            }\r\n        }\r\n        else if (e.target instanceof Node &&\r\n            !((_b = modal.current) === null || _b === void 0 ? void 0 : _b.contains(e.target))) {\r\n            if (isOtherModal) {\r\n                cleanShow(\"/show/\" + id);\r\n            }\r\n            else {\r\n                cleanShow(\"/\");\r\n            }\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: modal_css_1.default.overlay, onClick: closeModalClickHandler },\r\n        react_1.default.createElement(\"div\", { className: modal_css_1.default.modal, ref: modal },\r\n            react_1.default.createElement(\"div\", { className: modal_css_1.default.modal__header },\r\n                react_1.default.createElement(\"span\", { className: modal_css_1.default.modal__name }, name),\r\n                react_1.default.createElement(\"span\", { className: modal_css_1.default.modal__close, ref: close },\r\n                    react_1.default.createElement(\"img\", { src: \"/static/img/icons/close.svg\", alt: \"close-icon\" }))),\r\n            react_1.default.createElement(\"div\", { className: modal_css_1.default.modal__content }, children))));\r\n}\r\nexports.Modal = Modal;\r\n\n\n//# sourceURL=webpack:///./src/shared/Modal/Modal.tsx?");

/***/ }),

/***/ "./src/shared/Modal/ViewFilm/ViewFilm.tsx":
/*!************************************************!*\
  !*** ./src/shared/Modal/ViewFilm/ViewFilm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ViewFilm = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar viewfilm_css_1 = __importDefault(__webpack_require__(/*! ./viewfilm.css */ \"./src/shared/Modal/ViewFilm/viewfilm.css\"));\r\nvar Buttons_1 = __webpack_require__(/*! ../../Buttons */ \"./src/shared/Buttons/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nvar StarRating_1 = __webpack_require__(/*! ../../StarRating */ \"./src/shared/StarRating/index.ts\");\r\nvar AdditionalInfo_1 = __webpack_require__(/*! ../../AdditionalInfo */ \"./src/shared/AdditionalInfo/index.ts\");\r\nvar getTime_1 = __webpack_require__(/*! ../../../utils/js/getTime */ \"./src/utils/js/getTime.ts\");\r\nfunction ViewFilm() {\r\n    var id = react_router_dom_1.useParams().id;\r\n    var movies = useTypeSelector_1.useTypeSelector(function (state) { return state.cinema; }).movies;\r\n    var film = movies.find(function (movie) { return movie.imdbID === id; });\r\n    if (!id)\r\n        return null;\r\n    var additionalInfo = [\r\n        film === null || film === void 0 ? void 0 : film.Year,\r\n        film === null || film === void 0 ? void 0 : film.Genre,\r\n        getTime_1.getTime(parseInt(film === null || film === void 0 ? void 0 : film.Runtime)),\r\n    ];\r\n    return (react_1.default.createElement(\"div\", { className: viewfilm_css_1.default.about },\r\n        react_1.default.createElement(\"div\", { className: viewfilm_css_1.default.about__view },\r\n            react_1.default.createElement(\"div\", { className: viewfilm_css_1.default.about__img },\r\n                react_1.default.createElement(\"img\", { src: film === null || film === void 0 ? void 0 : film.Poster, alt: \"poster\" })),\r\n            react_1.default.createElement(Buttons_1.Buttons, { identifire: id, isOtherModal: true })),\r\n        react_1.default.createElement(\"div\", { className: viewfilm_css_1.default.about__content },\r\n            react_1.default.createElement(\"h2\", { className: viewfilm_css_1.default.about__title }, film === null || film === void 0 ? void 0 : film.Title),\r\n            react_1.default.createElement(StarRating_1.StarRating, { rating: film === null || film === void 0 ? void 0 : film.Metascore }),\r\n            react_1.default.createElement(\"p\", { className: viewfilm_css_1.default.about__text }, film === null || film === void 0 ? void 0 : film.Plot),\r\n            react_1.default.createElement(AdditionalInfo_1.AdditionalInfo, { info: additionalInfo }),\r\n            react_1.default.createElement(\"table\", null,\r\n                react_1.default.createElement(\"tbody\", null,\r\n                    react_1.default.createElement(\"tr\", null,\r\n                        react_1.default.createElement(\"th\", null, \"Production\"),\r\n                        react_1.default.createElement(\"td\", null, film === null || film === void 0 ? void 0 : film.Production)),\r\n                    react_1.default.createElement(\"tr\", null,\r\n                        react_1.default.createElement(\"th\", null, \"Country\"),\r\n                        react_1.default.createElement(\"td\", null, film === null || film === void 0 ? void 0 : film.Country)),\r\n                    react_1.default.createElement(\"tr\", null,\r\n                        react_1.default.createElement(\"th\", null, \"Dierector\"),\r\n                        react_1.default.createElement(\"td\", null, film === null || film === void 0 ? void 0 : film.Director)),\r\n                    react_1.default.createElement(\"tr\", null,\r\n                        react_1.default.createElement(\"th\", null, \"Writer\"),\r\n                        react_1.default.createElement(\"td\", null, film === null || film === void 0 ? void 0 : film.Writer)),\r\n                    react_1.default.createElement(\"tr\", null,\r\n                        react_1.default.createElement(\"th\", null, \"Actors\"),\r\n                        react_1.default.createElement(\"td\", null, film === null || film === void 0 ? void 0 : film.Actors)),\r\n                    react_1.default.createElement(\"tr\", null,\r\n                        react_1.default.createElement(\"th\", null, \"Awards\"),\r\n                        react_1.default.createElement(\"td\", null, film === null || film === void 0 ? void 0 : film.Awards)))))));\r\n}\r\nexports.ViewFilm = ViewFilm;\r\n\n\n//# sourceURL=webpack:///./src/shared/Modal/ViewFilm/ViewFilm.tsx?");

/***/ }),

/***/ "./src/shared/Modal/ViewFilm/index.ts":
/*!********************************************!*\
  !*** ./src/shared/Modal/ViewFilm/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ViewFilm */ \"./src/shared/Modal/ViewFilm/ViewFilm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Modal/ViewFilm/index.ts?");

/***/ }),

/***/ "./src/shared/Modal/ViewFilm/viewfilm.css":
/*!************************************************!*\
  !*** ./src/shared/Modal/ViewFilm/viewfilm.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"about\": \"viewfilm__about--3Zhoe\",\n\t\"about__view\": \"viewfilm__about__view--2rPxk\",\n\t\"about__img\": \"viewfilm__about__img--3iPXB\",\n\t\"about__content\": \"viewfilm__about__content--2bTNU\",\n\t\"about__title\": \"viewfilm__about__title--33_mL\",\n\t\"about__text\": \"viewfilm__about__text--2mPlJ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Modal/ViewFilm/viewfilm.css?");

/***/ }),

/***/ "./src/shared/Modal/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Modal/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Modal */ \"./src/shared/Modal/Modal.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Modal/index.ts?");

/***/ }),

/***/ "./src/shared/Modal/modal.css":
/*!************************************!*\
  !*** ./src/shared/Modal/modal.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"overlay\": \"modal__overlay--3Iorw\",\n\t\"modal\": \"modal__modal--1Gkzu\",\n\t\"modal__header\": \"modal__modal__header--3AW0f\",\n\t\"modal__close\": \"modal__modal__close--65WTT\",\n\t\"modal__content\": \"modal__modal__content--3ACpD\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Modal/modal.css?");

/***/ }),

/***/ "./src/shared/Pagination/Pagination.tsx":
/*!**********************************************!*\
  !*** ./src/shared/Pagination/Pagination.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Pagination = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar pagination_css_1 = __importDefault(__webpack_require__(/*! ./pagination.css */ \"./src/shared/Pagination/pagination.css\"));\r\nfunction Pagination(_a) {\r\n    var total = _a.total, current = _a.current, setPage = _a.setPage;\r\n    return (react_1.default.createElement(\"div\", { className: pagination_css_1.default.pagination },\r\n        react_1.default.createElement(\"div\", { className: \"container\" },\r\n            react_1.default.createElement(\"div\", { className: pagination_css_1.default.pagination__wrapper },\r\n                react_1.default.createElement(\"button\", { onClick: function () { return setPage(current - 1); }, className: pagination_css_1.default.start, disabled: current === 1 }, \"<<\"),\r\n                react_1.default.createElement(\"button\", { onClick: function () { return setPage(1); }, className: pagination_css_1.default.toDestination, disabled: current === 1 }, \"1\"),\r\n                react_1.default.createElement(\"div\", { className: pagination_css_1.default.current },\r\n                    current,\r\n                    \" / \",\r\n                    total),\r\n                react_1.default.createElement(\"button\", { onClick: function () { return setPage(total); }, className: pagination_css_1.default.toDestination, disabled: current === total }, total),\r\n                react_1.default.createElement(\"button\", { onClick: function () { return setPage(current + 1); }, className: pagination_css_1.default.end, disabled: current === total }, \">>\")))));\r\n}\r\nexports.Pagination = Pagination;\r\n\n\n//# sourceURL=webpack:///./src/shared/Pagination/Pagination.tsx?");

/***/ }),

/***/ "./src/shared/Pagination/index.ts":
/*!****************************************!*\
  !*** ./src/shared/Pagination/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Pagination */ \"./src/shared/Pagination/Pagination.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Pagination/index.ts?");

/***/ }),

/***/ "./src/shared/Pagination/pagination.css":
/*!**********************************************!*\
  !*** ./src/shared/Pagination/pagination.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"pagination\": \"pagination__pagination--2BtcI\",\n\t\"pagination__wrapper\": \"pagination__pagination__wrapper--1JzH5\",\n\t\"current\": \"pagination__current--2ZWpC\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Pagination/pagination.css?");

/***/ }),

/***/ "./src/shared/SearchInput/SearchInput.tsx":
/*!************************************************!*\
  !*** ./src/shared/SearchInput/SearchInput.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from) {\r\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\r\n        to[j] = from[i];\r\n    return to;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchInput = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar searchinput_css_1 = __importDefault(__webpack_require__(/*! ./searchinput.css */ \"./src/shared/SearchInput/searchinput.css\"));\r\nvar useAction_1 = __webpack_require__(/*! ../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nfunction SearchInput() {\r\n    var searchCinema = useAction_1.useActions().searchCinema;\r\n    var movies = useTypeSelector_1.useTypeSelector(function (state) { return state.cinema; }).movies;\r\n    var _a = react_1.useState(\"\"), searchQuery = _a[0], setSearchQuery = _a[1];\r\n    var sortedCinema = react_1.useMemo(function () {\r\n        if (searchQuery) {\r\n            return __spreadArray([], movies).filter(function (movie) {\r\n                return movie.Title.toLowerCase().includes(searchQuery.toLowerCase());\r\n            });\r\n        }\r\n        return movies;\r\n    }, [searchQuery, movies]);\r\n    react_1.useEffect(function () {\r\n        searchCinema(sortedCinema);\r\n    }, [sortedCinema]);\r\n    return (react_1.default.createElement(\"input\", { type: \"text\", value: searchQuery, onChange: function (e) { return setSearchQuery(e.target.value); }, placeholder: \"Search\", className: searchinput_css_1.default.input }));\r\n}\r\nexports.SearchInput = SearchInput;\r\n\n\n//# sourceURL=webpack:///./src/shared/SearchInput/SearchInput.tsx?");

/***/ }),

/***/ "./src/shared/SearchInput/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/SearchInput/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchInput */ \"./src/shared/SearchInput/SearchInput.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/SearchInput/index.ts?");

/***/ }),

/***/ "./src/shared/SearchInput/searchinput.css":
/*!************************************************!*\
  !*** ./src/shared/SearchInput/searchinput.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"input\": \"searchinput__input--HA7nZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/SearchInput/searchinput.css?");

/***/ }),

/***/ "./src/shared/StarRating/StarRating.tsx":
/*!**********************************************!*\
  !*** ./src/shared/StarRating/StarRating.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.StarRating = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar starrating_css_1 = __importDefault(__webpack_require__(/*! ./starrating.css */ \"./src/shared/StarRating/starrating.css\"));\r\nfunction StarRating(_a) {\r\n    var rating = _a.rating;\r\n    return (react_1.default.createElement(\"div\", { className: starrating_css_1.default.rating },\r\n        react_1.default.createElement(\"div\", { className: starrating_css_1.default.rating__body },\r\n            react_1.default.createElement(\"div\", { className: starrating_css_1.default.rating__active, style: { width: rating + \"%\" } })),\r\n        react_1.default.createElement(\"div\", { className: starrating_css_1.default.rating__value },\r\n            rating,\r\n            \" / 100\")));\r\n}\r\nexports.StarRating = StarRating;\r\n\n\n//# sourceURL=webpack:///./src/shared/StarRating/StarRating.tsx?");

/***/ }),

/***/ "./src/shared/StarRating/index.ts":
/*!****************************************!*\
  !*** ./src/shared/StarRating/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./StarRating */ \"./src/shared/StarRating/StarRating.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/StarRating/index.ts?");

/***/ }),

/***/ "./src/shared/StarRating/starrating.css":
/*!**********************************************!*\
  !*** ./src/shared/StarRating/starrating.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"rating\": \"starrating__rating--3_Miu\",\n\t\"rating__body\": \"starrating__rating__body--1nflk\",\n\t\"rating__active\": \"starrating__rating__active--30vxW\",\n\t\"rating__items\": \"starrating__rating__items--20y-u\",\n\t\"rating__item\": \"starrating__rating__item--355mB\",\n\t\"rating__value\": \"starrating__rating__value--2bD_j\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/StarRating/starrating.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColors = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar EColors;\r\n(function (EColors) {\r\n    EColors[\"black\"] = \"black\";\r\n    EColors[\"white\"] = \"white\";\r\n})(EColors = exports.EColors || (exports.EColors = {}));\r\nfunction Text(props) {\r\n    var _a, _b, _c, _d;\r\n    var _e = props.As, As = _e === void 0 ? \"span\" : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize, _f = props.color, color = _f === void 0 ? EColors.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g;\r\n    var classes = classnames_1.default(text_css_1.default[\"s\" + size], text_css_1.default[color], (_a = {}, _a[text_css_1.default.bold] = bold, _a), (_b = {}, _b[text_css_1.default[\"m\" + mobileSize]] = mobileSize, _b), (_c = {}, _c[text_css_1.default[\"t\" + tabletSize]] = tabletSize, _c), (_d = {}, _d[text_css_1.default[\"d\" + desktopSize]] = desktopSize, _d));\r\n    return react_1.default.createElement(As, { className: classes }, children);\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--Puvgs\",\n\t\"s20\": \"text__s20--3Xq66\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s10\": \"text__s10--DYLfy\",\n\t\"black\": \"text__black--1zchg\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"green\": \"text__green--3mYQn\",\n\t\"white\": \"text__white--13JGE\",\n\t\"grayF4\": \"text__grayF4--2X2jV\",\n\t\"greyF3\": \"text__greyF3--2Lfsi\",\n\t\"greyD9\": \"text__greyD9--7iRFr\",\n\t\"greyC4\": \"text__greyC4--3oiNM\",\n\t\"grey99\": \"text__grey99--35u3B\",\n\t\"grey66\": \"text__grey66--373uw\",\n\t\"upperCase\": \"text__upperCase--2EMyT\",\n\t\"bold\": \"text__bold--gb02H\",\n\t\"m28\": \"text__m28--2u2zs\",\n\t\"m20\": \"text__m20--1gFlM\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m10\": \"text__m10--UtIkW\",\n\t\"t28\": \"text__t28--A4rHF\",\n\t\"t20\": \"text__t20--78tCz\",\n\t\"t16\": \"text__t16--nkVMz\",\n\t\"t14\": \"text__t14--1Rj72\",\n\t\"t12\": \"text__t12--7txjW\",\n\t\"t10\": \"text__t10--n2R7f\",\n\t\"d28\": \"text__d28--3oIok\",\n\t\"d20\": \"text__d20--uwHxr\",\n\t\"d16\": \"text__d16--1Pwd1\",\n\t\"d14\": \"text__d14--3Futo\",\n\t\"d12\": \"text__d12--5X_qc\",\n\t\"d10\": \"text__d10--3pWnc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/store/action-creator/alert.ts":
/*!*******************************************!*\
  !*** ./src/store/action-creator/alert.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.hide = exports.show = void 0;\r\nvar alert_1 = __webpack_require__(/*! ../types/alert */ \"./src/store/types/alert.ts\");\r\nvar time = null;\r\nvar show = function (text, type) {\r\n    if (type === void 0) { type = \"warning\"; }\r\n    return ({\r\n        type: alert_1.AlertAction.SHOW_ALERT,\r\n        payload: { text: text, type: type },\r\n    });\r\n};\r\nexports.show = show;\r\nvar hide = function () { return ({\r\n    type: alert_1.AlertAction.HIDE_ALERT,\r\n}); };\r\nexports.hide = hide;\r\n\n\n//# sourceURL=webpack:///./src/store/action-creator/alert.ts?");

/***/ }),

/***/ "./src/store/action-creator/auth.ts":
/*!******************************************!*\
  !*** ./src/store/action-creator/auth.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.autoLogin = exports.autoLogout = exports.loading = exports.authSuccess = exports.logout = exports.auth = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar auth_1 = __webpack_require__(/*! ../types/auth */ \"./src/store/types/auth.ts\");\r\nvar firebase_1 = __webpack_require__(/*! ../../config/firebase */ \"./src/config/firebase.ts\");\r\nvar alert_1 = __webpack_require__(/*! ../types/alert */ \"./src/store/types/alert.ts\");\r\nvar auth = function (email, password, isLogin) {\r\n    return function (dispath) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var authData, url, response, data, expirationData, error_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 2, , 3]);\r\n                    dispath({ type: auth_1.AuthConstActions.LOADING, payload: true });\r\n                    authData = {\r\n                        email: email,\r\n                        password: password,\r\n                        returnSecureToken: true,\r\n                    };\r\n                    url = \"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=\" + firebase_1.firebaseConfig.apiKey;\r\n                    if (isLogin) {\r\n                        url = \"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=\" + firebase_1.firebaseConfig.apiKey;\r\n                    }\r\n                    return [4 /*yield*/, axios_1.default.post(url, authData)];\r\n                case 1:\r\n                    response = _a.sent();\r\n                    data = response.data;\r\n                    expirationData = new Date(new Date().getTime() + data.expiresIn * 1000);\r\n                    localStorage.setItem(\"token\", data.idToken);\r\n                    localStorage.setItem(\"userId\", data.localId);\r\n                    localStorage.setItem(\"expirationData\", JSON.stringify(expirationData));\r\n                    dispath(exports.authSuccess(data.idToken));\r\n                    exports.autoLogout(String(data.expiresIn));\r\n                    dispath({ type: auth_1.AuthConstActions.LOADING, payload: false });\r\n                    dispath({\r\n                        type: alert_1.AlertAction.SHOW_ALERT,\r\n                        payload: {\r\n                            text: isLogin ? \"Login Success\" : \"Registration Success\",\r\n                            type: \"success\",\r\n                        },\r\n                    });\r\n                    return [3 /*break*/, 3];\r\n                case 2:\r\n                    error_1 = _a.sent();\r\n                    dispath({\r\n                        type: alert_1.AlertAction.SHOW_ALERT,\r\n                        payload: { text: String(error_1), type: \"error\" },\r\n                    });\r\n                    dispath({ type: auth_1.AuthConstActions.LOADING, payload: false });\r\n                    return [3 /*break*/, 3];\r\n                case 3: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); };\r\n};\r\nexports.auth = auth;\r\nvar logout = function () {\r\n    localStorage.removeItem(\"token\");\r\n    localStorage.removeItem(\"userId\");\r\n    localStorage.removeItem(\"expirationDate\");\r\n    return {\r\n        type: auth_1.AuthConstActions.AUTH_LOGOUT,\r\n    };\r\n};\r\nexports.logout = logout;\r\nvar authSuccess = function (token) { return ({\r\n    type: auth_1.AuthConstActions.AUTH_SUCCESS,\r\n    payload: token,\r\n}); };\r\nexports.authSuccess = authSuccess;\r\nvar loading = function (status) { return ({\r\n    type: auth_1.AuthConstActions.LOADING,\r\n    payload: status,\r\n}); };\r\nexports.loading = loading;\r\nvar autoLogout = function (time) {\r\n    return function (dispatch) {\r\n        setTimeout(function () {\r\n            dispatch(exports.logout());\r\n        }, parseInt(time) * 1000);\r\n    };\r\n};\r\nexports.autoLogout = autoLogout;\r\nvar autoLogin = function () {\r\n    return function (dispath) {\r\n        var token = localStorage.getItem(\"token\");\r\n        if (!token) {\r\n            dispath(exports.logout());\r\n        }\r\n        else {\r\n            var expirationDate = new Date(JSON.parse(localStorage.getItem(\"expirationData\") || \"\"));\r\n            if (expirationDate <= new Date()) {\r\n                dispath(exports.logout());\r\n            }\r\n            else {\r\n                dispath(exports.authSuccess(token));\r\n                var time = (expirationDate.getTime() - new Date().getTime()) / 1000;\r\n                exports.autoLogout(String(time));\r\n            }\r\n        }\r\n    };\r\n};\r\nexports.autoLogin = autoLogin;\r\n\n\n//# sourceURL=webpack:///./src/store/action-creator/auth.ts?");

/***/ }),

/***/ "./src/store/action-creator/bg.ts":
/*!****************************************!*\
  !*** ./src/store/action-creator/bg.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.changeBg = void 0;\r\nvar bg_1 = __webpack_require__(/*! ../types/bg */ \"./src/store/types/bg.ts\");\r\nvar changeBg = function (src) {\r\n    return { type: bg_1.BgActionType.CHANGE_BG, payload: src };\r\n};\r\nexports.changeBg = changeBg;\r\n\n\n//# sourceURL=webpack:///./src/store/action-creator/bg.ts?");

/***/ }),

/***/ "./src/store/action-creator/cinema.ts":
/*!********************************************!*\
  !*** ./src/store/action-creator/cinema.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.editFilm = exports.addNewIdAndMovies = exports.searchCinema = exports.fetchCinema = exports.initCinema = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! ../../plugins/axios */ \"./src/plugins/axios/index.js\"));\r\nvar cinema_1 = __webpack_require__(/*! ../types/cinema */ \"./src/store/types/cinema.ts\");\r\nvar sliceID_1 = __webpack_require__(/*! ../../utils/js/sliceID */ \"./src/utils/js/sliceID.ts\");\r\nvar ids_1 = __importDefault(__webpack_require__(/*! ../../db/ids */ \"./src/db/ids.js\"));\r\nvar initCinema = function () {\r\n    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var films, idsFilms, allMovies, error_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 3, , 4]);\r\n                    dispatch({ type: cinema_1.CinemaActionTypes.FETCH_MOVIES });\r\n                    if (!localStorage.getItem(\"ids\")) {\r\n                        localStorage.setItem(\"ids\", JSON.stringify(ids_1.default));\r\n                    }\r\n                    if (!!localStorage.getItem(\"films\")) return [3 /*break*/, 2];\r\n                    return [4 /*yield*/, Promise.all(ids_1.default.map(function (id) { return axios_1.default.get(\"/?i=\" + id); }))];\r\n                case 1:\r\n                    films = _a.sent();\r\n                    localStorage.setItem(\"films\", JSON.stringify(films));\r\n                    _a.label = 2;\r\n                case 2:\r\n                    idsFilms = JSON.parse(localStorage.getItem(\"ids\") || \"[]\");\r\n                    allMovies = JSON.parse(localStorage.getItem(\"films\") || \"[]\");\r\n                    dispatch({\r\n                        type: cinema_1.CinemaActionTypes.INIT_CINEMA,\r\n                        payload: {\r\n                            id: idsFilms,\r\n                            movies: allMovies,\r\n                        },\r\n                    });\r\n                    return [3 /*break*/, 4];\r\n                case 3:\r\n                    error_1 = _a.sent();\r\n                    dispatch({\r\n                        type: cinema_1.CinemaActionTypes.FETCH_MOVIES_ERROR,\r\n                        payload: String(error_1),\r\n                    });\r\n                    return [3 /*break*/, 4];\r\n                case 4: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); };\r\n};\r\nexports.initCinema = initCinema;\r\nvar fetchCinema = function (page, limit, movies) {\r\n    if (page === void 0) { page = 1; }\r\n    if (limit === void 0) { limit = 12; }\r\n    if (movies === void 0) { movies = []; }\r\n    var slicedID = sliceID_1.sliceMovie(movies)(page, limit);\r\n    return {\r\n        type: cinema_1.CinemaActionTypes.PAGINATION,\r\n        payload: slicedID,\r\n    };\r\n};\r\nexports.fetchCinema = fetchCinema;\r\nvar searchCinema = function (movies) { return ({\r\n    type: cinema_1.CinemaActionTypes.SEARCH_CINEMA,\r\n    payload: movies,\r\n}); };\r\nexports.searchCinema = searchCinema;\r\nvar addNewIdAndMovies = function (data) { return ({\r\n    type: cinema_1.CinemaActionTypes.INIT_CINEMA,\r\n    payload: data,\r\n}); };\r\nexports.addNewIdAndMovies = addNewIdAndMovies;\r\nvar editFilm = function (film) { return ({\r\n    type: cinema_1.CinemaActionTypes.EDIT_FILM,\r\n    payload: film,\r\n}); };\r\nexports.editFilm = editFilm;\r\n\n\n//# sourceURL=webpack:///./src/store/action-creator/cinema.ts?");

/***/ }),

/***/ "./src/store/action-creator/index.ts":
/*!*******************************************!*\
  !*** ./src/store/action-creator/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CinemaCreators = __importStar(__webpack_require__(/*! ./cinema */ \"./src/store/action-creator/cinema.ts\"));\r\nvar BgCreators = __importStar(__webpack_require__(/*! ./bg */ \"./src/store/action-creator/bg.ts\"));\r\nvar AlertCreators = __importStar(__webpack_require__(/*! ./alert */ \"./src/store/action-creator/alert.ts\"));\r\nvar AuthCreators = __importStar(__webpack_require__(/*! ./auth */ \"./src/store/action-creator/auth.ts\"));\r\nexports.default = __assign(__assign(__assign(__assign({}, CinemaCreators), BgCreators), AlertCreators), AuthCreators);\r\n\n\n//# sourceURL=webpack:///./src/store/action-creator/index.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.store = void 0;\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar reducers_1 = __webpack_require__(/*! ./reducers */ \"./src/store/reducers/index.ts\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nexports.store = redux_1.createStore(reducers_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\n\n\n//# sourceURL=webpack:///./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducers/alertReducer.ts":
/*!********************************************!*\
  !*** ./src/store/reducers/alertReducer.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.alertReducer = void 0;\r\nvar alert_1 = __webpack_require__(/*! ../types/alert */ \"./src/store/types/alert.ts\");\r\nvar initialState = {\r\n    text: \"\",\r\n    type: \"\",\r\n    visible: false,\r\n};\r\nvar alertReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case alert_1.AlertAction.SHOW_ALERT:\r\n            return __assign(__assign(__assign({}, state), action.payload), { visible: true });\r\n        case alert_1.AlertAction.HIDE_ALERT:\r\n            return __assign(__assign({}, state), { visible: false, type: \"\", text: \"\" });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.alertReducer = alertReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/alertReducer.ts?");

/***/ }),

/***/ "./src/store/reducers/authReducer.ts":
/*!*******************************************!*\
  !*** ./src/store/reducers/authReducer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.authReducer = void 0;\r\nvar auth_1 = __webpack_require__(/*! ../types/auth */ \"./src/store/types/auth.ts\");\r\nvar initialState = {\r\n    token: \"\",\r\n    loading: false,\r\n};\r\nvar authReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case auth_1.AuthConstActions.AUTH_SUCCESS:\r\n            return __assign(__assign({}, state), { loading: false, token: action.payload });\r\n        case auth_1.AuthConstActions.AUTH_LOGOUT:\r\n            return __assign(__assign({}, state), { token: \"\" });\r\n        case auth_1.AuthConstActions.LOADING:\r\n            return __assign(__assign({}, state), { loading: action.payload });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.authReducer = authReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/authReducer.ts?");

/***/ }),

/***/ "./src/store/reducers/bgReducer.ts":
/*!*****************************************!*\
  !*** ./src/store/reducers/bgReducer.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.bgReducer = void 0;\r\nvar bg_1 = __webpack_require__(/*! ../types/bg */ \"./src/store/types/bg.ts\");\r\nvar initialState = {\r\n    src: \"\",\r\n};\r\nvar bgReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case bg_1.BgActionType.CHANGE_BG:\r\n            return __assign(__assign({}, state), { src: action.payload });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.bgReducer = bgReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/bgReducer.ts?");

/***/ }),

/***/ "./src/store/reducers/cinemaReducer.ts":
/*!*********************************************!*\
  !*** ./src/store/reducers/cinemaReducer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.cinemaReducer = void 0;\r\nvar cinema_1 = __webpack_require__(/*! ../types/cinema */ \"./src/store/types/cinema.ts\");\r\nvar initialState = {\r\n    id: [],\r\n    currentMovies: [],\r\n    movies: [],\r\n    currentPage: 1,\r\n    perPage: 12,\r\n    error: \"\",\r\n    loading: false,\r\n    sortedMovies: [],\r\n};\r\nvar cinemaReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case cinema_1.CinemaActionTypes.INIT_CINEMA:\r\n            return __assign(__assign(__assign({}, state), action.payload), { loading: false });\r\n        case cinema_1.CinemaActionTypes.FETCH_MOVIES:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case cinema_1.CinemaActionTypes.PAGINATION:\r\n            return __assign(__assign({}, state), { currentMovies: action.payload });\r\n        case cinema_1.CinemaActionTypes.FETCH_MOVIES_ERROR:\r\n            return __assign(__assign({}, state), { error: action.payload, loading: false });\r\n        case cinema_1.CinemaActionTypes.SEARCH_CINEMA:\r\n            return __assign(__assign({}, state), { sortedMovies: action.payload });\r\n        case cinema_1.CinemaActionTypes.EDIT_FILM:\r\n            return __assign(__assign({}, state), { movies: action.payload });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.cinemaReducer = cinemaReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/cinemaReducer.ts?");

/***/ }),

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = void 0;\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar cinemaReducer_1 = __webpack_require__(/*! ./cinemaReducer */ \"./src/store/reducers/cinemaReducer.ts\");\r\nvar bgReducer_1 = __webpack_require__(/*! ./bgReducer */ \"./src/store/reducers/bgReducer.ts\");\r\nvar alertReducer_1 = __webpack_require__(/*! ./alertReducer */ \"./src/store/reducers/alertReducer.ts\");\r\nvar authReducer_1 = __webpack_require__(/*! ./authReducer */ \"./src/store/reducers/authReducer.ts\");\r\nexports.rootReducer = redux_1.combineReducers({\r\n    cinema: cinemaReducer_1.cinemaReducer,\r\n    bg: bgReducer_1.bgReducer,\r\n    alert: alertReducer_1.alertReducer,\r\n    auth: authReducer_1.authReducer,\r\n});\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/index.ts?");

/***/ }),

/***/ "./src/store/types/alert.ts":
/*!**********************************!*\
  !*** ./src/store/types/alert.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AlertAction = void 0;\r\nvar AlertAction;\r\n(function (AlertAction) {\r\n    AlertAction[\"SHOW_ALERT\"] = \"SHOW_ALERT\";\r\n    AlertAction[\"HIDE_ALERT\"] = \"HIDE_ALERT\";\r\n})(AlertAction = exports.AlertAction || (exports.AlertAction = {}));\r\n\n\n//# sourceURL=webpack:///./src/store/types/alert.ts?");

/***/ }),

/***/ "./src/store/types/auth.ts":
/*!*********************************!*\
  !*** ./src/store/types/auth.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AuthConstActions = void 0;\r\nvar AuthConstActions;\r\n(function (AuthConstActions) {\r\n    AuthConstActions[\"AUTH_SUCCESS\"] = \"AUTH_SUCCESS\";\r\n    AuthConstActions[\"AUTH_LOGOUT\"] = \"AUTH_LOGOUT\";\r\n    AuthConstActions[\"LOADING\"] = \"LOADING\";\r\n})(AuthConstActions = exports.AuthConstActions || (exports.AuthConstActions = {}));\r\n\n\n//# sourceURL=webpack:///./src/store/types/auth.ts?");

/***/ }),

/***/ "./src/store/types/bg.ts":
/*!*******************************!*\
  !*** ./src/store/types/bg.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BgActionType = void 0;\r\nvar BgActionType;\r\n(function (BgActionType) {\r\n    BgActionType[\"CHANGE_BG\"] = \"CHANGE_BG\";\r\n})(BgActionType = exports.BgActionType || (exports.BgActionType = {}));\r\n\n\n//# sourceURL=webpack:///./src/store/types/bg.ts?");

/***/ }),

/***/ "./src/store/types/cinema.ts":
/*!***********************************!*\
  !*** ./src/store/types/cinema.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CinemaActionTypes = void 0;\r\nvar CinemaActionTypes;\r\n(function (CinemaActionTypes) {\r\n    CinemaActionTypes[\"PAGINATION\"] = \"PAGINATION\";\r\n    CinemaActionTypes[\"FETCH_MOVIES_ERROR\"] = \"FETCH_MOVIES_ERROR\";\r\n    CinemaActionTypes[\"FETCH_MOVIES\"] = \"FETCH_MOVIES\";\r\n    CinemaActionTypes[\"INIT_CINEMA\"] = \"INIT_CINEMA\";\r\n    CinemaActionTypes[\"SEARCH_CINEMA\"] = \"SEARCH_CINEMA\";\r\n    CinemaActionTypes[\"EDIT_FILM\"] = \"EDIT_FILM\";\r\n})(CinemaActionTypes = exports.CinemaActionTypes || (exports.CinemaActionTypes = {}));\r\n\n\n//# sourceURL=webpack:///./src/store/types/cinema.ts?");

/***/ }),

/***/ "./src/utils/js/findFilm.ts":
/*!**********************************!*\
  !*** ./src/utils/js/findFilm.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.findFilm = void 0;\r\nvar findFilm = function (id, movies) {\r\n    return movies.find(function (movie) { return movie.imdbID === id; });\r\n};\r\nexports.findFilm = findFilm;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/findFilm.ts?");

/***/ }),

/***/ "./src/utils/js/getTime.ts":
/*!*********************************!*\
  !*** ./src/utils/js/getTime.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getTime = void 0;\r\nvar getTime = function (time) {\r\n    var hours = Math.floor(time / 60);\r\n    var minute = time % 60;\r\n    return hours + \"h \" + minute + \"m\";\r\n};\r\nexports.getTime = getTime;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/getTime.ts?");

/***/ }),

/***/ "./src/utils/js/getTotalPage.ts":
/*!**************************************!*\
  !*** ./src/utils/js/getTotalPage.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getTotalPage = void 0;\r\nvar getTotalPage = function (movies, limit) {\r\n    return Math.ceil(movies / limit);\r\n};\r\nexports.getTotalPage = getTotalPage;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/getTotalPage.ts?");

/***/ }),

/***/ "./src/utils/js/isObjectEmpty.ts":
/*!***************************************!*\
  !*** ./src/utils/js/isObjectEmpty.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.isEmpty = void 0;\r\nfunction isEmpty(obj) {\r\n    for (var prop in obj) {\r\n        if (obj.hasOwnProperty(prop))\r\n            return false;\r\n    }\r\n    return true;\r\n}\r\nexports.isEmpty = isEmpty;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/isObjectEmpty.ts?");

/***/ }),

/***/ "./src/utils/js/setLocalStorage.ts":
/*!*****************************************!*\
  !*** ./src/utils/js/setLocalStorage.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.setLocalStorage = void 0;\r\nfunction setLocalStorage(key, obj) {\r\n    localStorage.setItem(key, JSON.stringify(obj));\r\n}\r\nexports.setLocalStorage = setLocalStorage;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/setLocalStorage.ts?");

/***/ }),

/***/ "./src/utils/js/sliceID.ts":
/*!*********************************!*\
  !*** ./src/utils/js/sliceID.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.sliceMovie = void 0;\r\nvar sliceMovie = function (movies) {\r\n    return function (page, limit) {\r\n        var from = page * limit - limit;\r\n        var to = page * limit;\r\n        return movies.slice(from, to);\r\n    };\r\n};\r\nexports.sliceMovie = sliceMovie;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/sliceID.ts?");

/***/ }),

/***/ "./src/utils/js/validateEmail.ts":
/*!***************************************!*\
  !*** ./src/utils/js/validateEmail.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.validateEmail = void 0;\r\nvar validateEmail = function (email) {\r\n    return String(email)\r\n        .toLowerCase()\r\n        .match(/^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/);\r\n};\r\nexports.validateEmail = validateEmail;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/validateEmail.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");\n\n//# sourceURL=webpack:///external_%22firebase/app%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-transition-group\");\n\n//# sourceURL=webpack:///external_%22react-transition-group%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });