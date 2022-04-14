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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = exports.AppCopmonent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar CardList_1 = __webpack_require__(/*! ./shared/CardList */ \"./src/shared/CardList/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store/index.ts\");\r\nvar Alert_1 = __webpack_require__(/*! ./shared/Alert */ \"./src/shared/Alert/index.ts\");\r\nfunction AppCopmonent() {\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },\r\n        react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(CardList_1.CardList, null),\r\n            react_1.default.createElement(Alert_1.Alert, null))));\r\n}\r\nexports.AppCopmonent = AppCopmonent;\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppCopmonent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \"ul {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\n* {\\r\\n    padding: 0px;\\r\\n    margin: 0px;\\r\\n    border: 0px;\\r\\n}\\r\\n*,\\r\\n*:before,\\r\\n*:after {\\r\\n    -moz-box-sizing: border-box;\\r\\n    -webkit-box-sizing: border-box;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n:focus,\\r\\n:active {\\r\\n    outline: none;\\r\\n}\\r\\na:focus,\\r\\na:active {\\r\\n    outline: none;\\r\\n}\\r\\naside,\\r\\nnav,\\r\\nfooter,\\r\\nheader,\\r\\nsection {\\r\\n    display: block;\\r\\n}\\r\\nhtml,\\r\\nbody {\\r\\n    height: 100%;\\r\\n}\\r\\nbody {\\r\\n    line-height: 1;\\r\\n    font-size: 14px;\\r\\n    -ms-text-size-adjust: 100%;\\r\\n    -moz-text-size-adjust: 100%;\\r\\n    -webkit-text-size-adjust: 100%;\\r\\n}\\r\\ninput::-ms-clear {\\r\\n    display: none;\\r\\n}\\r\\nbutton {\\r\\n    cursor: pointer;\\r\\n}\\r\\nbutton::-moz-focus-inner {\\r\\n    padding: 0;\\r\\n    border: 0;\\r\\n}\\r\\na,\\r\\na:visited {\\r\\n    text-decoration: none;\\r\\n}\\r\\na:hover {\\r\\n    text-decoration: none;\\r\\n}\\r\\nul li {\\r\\n    list-style: none;\\r\\n}\\r\\nimg {\\r\\n    vertical-align: top;\\r\\n}\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6 {\\r\\n    font-weight: inherit;\\r\\n    font-size: inherit;\\r\\n}\\r\\n\\r\\n:root {\\r\\n    --black: #000;\\r\\n    --white: #fff;\\r\\n    --green: #d4edda;\\r\\n    --border-green: #c3e6cb;\\r\\n    --yellow: #fff3cd;\\r\\n    --border-yellow: #ffeeba;\\r\\n    --red: #f8d7da;\\r\\n    --border-red: #f5c6cb;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    font-family: \\\"Roboto\\\", serif;\\r\\n}\\r\\n.container {\\r\\n    max-width: 1140px;\\r\\n    margin: 0 auto;\\r\\n    padding: 0 30px;\\r\\n}\\r\\n\\r\\n/*Alert type color*/\\r\\n.warning {\\r\\n    background-color: var(--yellow);\\r\\n    border: 1px solid var(--border-yellow);\\r\\n}\\r\\n.error {\\r\\n    background-color: var(--red);\\r\\n    border: 1px solid var(--border-red);\\r\\n}\\r\\n.success {\\r\\n    background-color: var(--green);\\r\\n    border: 1px solid var(--border-green);\\r\\n}\\r\\n\\r\\n/* Alert anim action*/\\r\\n\\r\\n.alert-enter {\\r\\n    opacity: 0;\\r\\n    transform: scale(0.9);\\r\\n}\\r\\n.alert-enter-active {\\r\\n    opacity: 1;\\r\\n    transform: translateX(0);\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n.alert-exit {\\r\\n    opacity: 1;\\r\\n}\\r\\n.alert-exit-active {\\r\\n    opacity: 0;\\r\\n    transform: scale(0.9);\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n\\r\\n/* Delete Modal animation*/\\r\\n.deleteModal-enter {\\r\\n    opacity: 0;\\r\\n}\\r\\n.deleteModal-enter-active {\\r\\n    opacity: 1;\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n.deleteModal-exit {\\r\\n    opacity: 1;\\r\\n}\\r\\n.deleteModal-exit-active {\\r\\n    opacity: 0;\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n\\r\\n/* Card Animation */\\r\\n.card-enter {\\r\\n    opacity: 0;\\r\\n    transform: scale(0);\\r\\n}\\r\\n.card-enter-active {\\r\\n    opacity: 1;\\r\\n    transform: scale(1);\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n.card-exit {\\r\\n    opacity: 1;\\r\\n    transform: scale(1);\\r\\n}\\r\\n.card-exit-active {\\r\\n    opacity: 0;\\r\\n    transform: scale(0);\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Reddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\" + content + \"</div>\\n  <div id=\\\"delete_modal\\\"></div>\\n</body>\\n\\n</html>\\n\"; };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

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

/***/ "./src/shared/Alert/Alert.tsx":
/*!************************************!*\
  !*** ./src/shared/Alert/Alert.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Alert = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar alert_css_1 = __importDefault(__webpack_require__(/*! ./alert.css */ \"./src/shared/Alert/alert.css\"));\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nvar react_transition_group_1 = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\r\nfunction Alert() {\r\n    var _a = useTypeSelector_1.useTypeSelector(function (state) { return state.alert; }), text = _a.text, type = _a.type, visible = _a.visible;\r\n    return (react_1.default.createElement(react_transition_group_1.CSSTransition, { classNames: \"alert\", timeout: 500, in: visible, mountOnEnter: true, unmountOnExit: true },\r\n        react_1.default.createElement(\"div\", { className: alert_css_1.default.alert + \" \" + type }, text)));\r\n}\r\nexports.Alert = Alert;\r\n\n\n//# sourceURL=webpack:///./src/shared/Alert/Alert.tsx?");

/***/ }),

/***/ "./src/shared/Alert/alert.css":
/*!************************************!*\
  !*** ./src/shared/Alert/alert.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"alert\": \"alert__alert--1-xsC\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Alert/alert.css?");

/***/ }),

/***/ "./src/shared/Alert/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Alert/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Alert */ \"./src/shared/Alert/Alert.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Alert/index.ts?");

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

/***/ "./src/shared/Buttons/Buttons.tsx":
/*!****************************************!*\
  !*** ./src/shared/Buttons/Buttons.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Buttons = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar buttons_css_1 = __importDefault(__webpack_require__(/*! ./buttons.css */ \"./src/shared/Buttons/buttons.css\"));\r\nvar Button_1 = __webpack_require__(/*! ../../UI/Button */ \"./src/UI/Button/index.ts\");\r\nvar DeleteModal_1 = __webpack_require__(/*! ../DeleteModal/DeleteModal */ \"./src/shared/DeleteModal/DeleteModal.tsx\");\r\nfunction Buttons(_a) {\r\n    var identifire = _a.identifire;\r\n    var _b = react_1.useState(false), openDeleteModal = _b[0], setOpenDeleteModal = _b[1];\r\n    var removeHandler = function () {\r\n        setOpenDeleteModal(true);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: buttons_css_1.default.buttons },\r\n        react_1.default.createElement(Button_1.Button, null, \"Edit\"),\r\n        react_1.default.createElement(Button_1.Button, { onClick: function () { return removeHandler(); } }, \"Remove\"),\r\n        react_1.default.createElement(DeleteModal_1.DeleteModal, { onOpen: openDeleteModal, setClose: setOpenDeleteModal, id: identifire })));\r\n}\r\nexports.Buttons = Buttons;\r\n\n\n//# sourceURL=webpack:///./src/shared/Buttons/Buttons.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardList/Card/card.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\r\nvar Buttons_1 = __webpack_require__(/*! ../../Buttons */ \"./src/shared/Buttons/index.ts\");\r\nvar useAction_1 = __webpack_require__(/*! ../../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nfunction Card(_a) {\r\n    var title = _a.title, src = _a.src, id = _a.id, year = _a.year;\r\n    var changeBg = useAction_1.useActions().changeBg;\r\n    var hoverHandler = function (src) {\r\n        changeBg(src);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.card, onMouseEnter: function () { return hoverHandler(src); } },\r\n        react_1.default.createElement(\"div\", { className: card_css_1.default.card__content },\r\n            react_1.default.createElement(\"img\", { src: src, className: card_css_1.default.card__bg }),\r\n            react_1.default.createElement(\"div\", { className: card_css_1.default.card__wrapper },\r\n                react_1.default.createElement(\"div\", { className: card_css_1.default.card__content },\r\n                    react_1.default.createElement(\"h2\", { className: card_css_1.default.card__title },\r\n                        react_1.default.createElement(Text_1.Text, { size: 20, color: Text_1.EColors.white }, title)),\r\n                    react_1.default.createElement(\"span\", { className: card_css_1.default.card__year },\r\n                        react_1.default.createElement(Text_1.Text, { size: 16, color: Text_1.EColors.white }, year))),\r\n                react_1.default.createElement(Buttons_1.Buttons, { identifire: id })))));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Card.tsx?");

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar cardlist_css_1 = __importDefault(__webpack_require__(/*! ./cardlist.css */ \"./src/shared/CardList/cardlist.css\"));\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nvar useAction_1 = __webpack_require__(/*! ../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardList/Card/Card.tsx\");\r\nvar AppBg_1 = __webpack_require__(/*! ../AppBg */ \"./src/shared/AppBg/index.ts\");\r\nvar Pagination_1 = __webpack_require__(/*! ../Pagination */ \"./src/shared/Pagination/index.ts\");\r\nvar getTotalPage_1 = __webpack_require__(/*! ../../utils/js/getTotalPage */ \"./src/utils/js/getTotalPage.ts\");\r\nvar react_transition_group_1 = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\r\nvar Loader_1 = __webpack_require__(/*! ../../UI/Loader */ \"./src/UI/Loader/index.ts\");\r\nfunction CardList() {\r\n    var _a = useTypeSelector_1.useTypeSelector(function (state) { return state.cinema; }), id = _a.id, movies = _a.movies, currentMovies = _a.currentMovies, sortedMovies = _a.sortedMovies, loading = _a.loading, error = _a.error;\r\n    var _b = useAction_1.useActions(), fetchCinema = _b.fetchCinema, initCinema = _b.initCinema;\r\n    var _c = react_1.useState(1), currentPage = _c[0], setCurrentPage = _c[1];\r\n    var _d = react_1.useState(12), perPage = _d[0], setPerPage = _d[1];\r\n    var _e = react_1.useState(0), totalPage = _e[0], setTotalPage = _e[1];\r\n    react_1.useEffect(function () {\r\n        initCinema();\r\n    }, []);\r\n    react_1.useEffect(function () {\r\n        fetchCinema(currentPage, perPage, sortedMovies);\r\n        setTotalPage(getTotalPage_1.getTotalPage(sortedMovies.length, perPage));\r\n    }, [currentPage, sortedMovies, movies, id]);\r\n    return (react_1.default.createElement(\"div\", { className: cardlist_css_1.default.cardList },\r\n        react_1.default.createElement(\"div\", { className: \"container\" },\r\n            react_1.default.createElement(\"div\", { className: cardlist_css_1.default.cardList__content },\r\n                react_1.default.createElement(\"h2\", { className: cardlist_css_1.default.cardList__title }, \"IMDB Top 250\"),\r\n                loading && react_1.default.createElement(Loader_1.Loader, null),\r\n                !currentMovies.length && (react_1.default.createElement(\"div\", { className: cardlist_css_1.default.cardList__empty }, \"No posts\")),\r\n                react_1.default.createElement(react_transition_group_1.TransitionGroup, { component: \"div\", className: cardlist_css_1.default.cardList__wrapper }, !error &&\r\n                    !loading &&\r\n                    currentMovies.map(function (_a, index) {\r\n                        var Title = _a.Title, imdbID = _a.imdbID, Poster = _a.Poster, Year = _a.Year;\r\n                        return (react_1.default.createElement(react_transition_group_1.CSSTransition, { key: index, timeout: 500, classNames: \"card\" },\r\n                            react_1.default.createElement(Card_1.Card, { id: imdbID, title: Title, src: Poster, year: Year })));\r\n                    })))),\r\n        react_1.default.createElement(AppBg_1.AppBg, null),\r\n        totalPage && currentMovies.length && (react_1.default.createElement(Pagination_1.Pagination, { total: totalPage, current: currentPage, setPage: setCurrentPage }))));\r\n}\r\nexports.CardList = CardList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/CardList.tsx?");

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

/***/ "./src/shared/DeleteModal/DeleteModal.tsx":
/*!************************************************!*\
  !*** ./src/shared/DeleteModal/DeleteModal.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DeleteModal = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar deletemodal_css_1 = __importDefault(__webpack_require__(/*! ./deletemodal.css */ \"./src/shared/DeleteModal/deletemodal.css\"));\r\nvar isMounted_1 = __webpack_require__(/*! ../../hooks/isMounted */ \"./src/hooks/isMounted.tsx\");\r\nvar react_transition_group_1 = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nvar useAction_1 = __webpack_require__(/*! ../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nvar setLocalStorage_1 = __webpack_require__(/*! ../../utils/js/setLocalStorage */ \"./src/utils/js/setLocalStorage.ts\");\r\nfunction DeleteModal(_a) {\r\n    var _b;\r\n    var onOpen = _a.onOpen, setClose = _a.setClose, id = _a.id;\r\n    var _c = useTypeSelector_1.useTypeSelector(function (state) { return state.cinema; }), movies = _c.movies, ids = _c.id;\r\n    var title = (_b = movies.find(function (movie) { return movie.imdbID === id; })) === null || _b === void 0 ? void 0 : _b.Title;\r\n    var _d = useAction_1.useActions(), addNewIdAndMovies = _d.addNewIdAndMovies, show = _d.show;\r\n    var isMounted = isMounted_1.useIsMounted()[0];\r\n    var modal = react_1.useRef(null);\r\n    var node = null;\r\n    if (isMounted) {\r\n        node = document.getElementById(\"delete_modal\");\r\n    }\r\n    if (!node)\r\n        return null;\r\n    var closeClickHandler = function (e) {\r\n        var _a;\r\n        if (e.target instanceof Node && !((_a = modal.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {\r\n            setClose(false);\r\n        }\r\n    };\r\n    var removeHandler = function (id, title) {\r\n        var newMovies = movies.filter(function (movie) { return movie.imdbID !== id; });\r\n        var newId = ids.filter(function (item) { return item !== id; });\r\n        setLocalStorage_1.setLocalStorage(\"films\", newMovies);\r\n        setLocalStorage_1.setLocalStorage(\"ids\", newId);\r\n        addNewIdAndMovies({ id: newId, movies: newMovies });\r\n        setClose(false);\r\n        show(\"Deleted film \" + title, \"success\");\r\n    };\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(react_transition_group_1.CSSTransition, { in: onOpen, timeout: 500, classNames: \"deleteModal\", mountOnEnter: true, unmountOnExit: true },\r\n        react_1.default.createElement(\"div\", { className: deletemodal_css_1.default.overlay, onClick: closeClickHandler },\r\n            react_1.default.createElement(\"div\", { className: deletemodal_css_1.default.modal, ref: modal },\r\n                react_1.default.createElement(\"div\", { className: deletemodal_css_1.default.modal__wrapper },\r\n                    react_1.default.createElement(\"h2\", { className: deletemodal_css_1.default.modal__title },\r\n                        \"Do you really want to remove this film \",\r\n                        title,\r\n                        \" ?\"),\r\n                    react_1.default.createElement(\"div\", { className: deletemodal_css_1.default.modal__buttons },\r\n                        react_1.default.createElement(\"button\", { className: deletemodal_css_1.default.modal__btn, onClick: function () { return setClose(false); } }, \"Cancel\"),\r\n                        react_1.default.createElement(\"button\", { className: deletemodal_css_1.default.modal__btn, onClick: function () { return removeHandler(id, title); } }, \"Remove\")))))), node);\r\n}\r\nexports.DeleteModal = DeleteModal;\r\n\n\n//# sourceURL=webpack:///./src/shared/DeleteModal/DeleteModal.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar Button_1 = __webpack_require__(/*! ../../UI/Button */ \"./src/UI/Button/index.ts\");\r\nvar SearchInput_1 = __webpack_require__(/*! ../SearchInput */ \"./src/shared/SearchInput/index.ts\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(\"div\", { className: \"container\" },\r\n            react_1.default.createElement(\"div\", { className: header_css_1.default.header__wrapper },\r\n                react_1.default.createElement(\"a\", { href: \"#\", className: header_css_1.default.header__logo }, \"Movie DB\"),\r\n                react_1.default.createElement(SearchInput_1.SearchInput, null),\r\n                react_1.default.createElement(Button_1.Button, null, \"Add Movie\")))));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\",\n\t\"header__wrapper\": \"header__header__wrapper--2RySQ\",\n\t\"header__logo\": \"header__header__logo--TLrNf\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from) {\r\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\r\n        to[j] = from[i];\r\n    return to;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchInput = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar searchinput_css_1 = __importDefault(__webpack_require__(/*! ./searchinput.css */ \"./src/shared/SearchInput/searchinput.css\"));\r\nvar useAction_1 = __webpack_require__(/*! ../../hooks/useAction */ \"./src/hooks/useAction.ts\");\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nfunction SearchInput() {\r\n    var searchCinema = useAction_1.useActions().searchCinema;\r\n    var movies = useTypeSelector_1.useTypeSelector(function (state) { return state.cinema; }).movies;\r\n    var _a = react_1.useState(\"\"), searchQuery = _a[0], setSearchQuery = _a[1];\r\n    var sortedCinema = react_1.useMemo(function () {\r\n        if (searchQuery) {\r\n            return __spreadArray([], movies).filter(function (movie) {\r\n                return movie.Title.toLowerCase().includes(searchQuery.toLowerCase());\r\n            });\r\n        }\r\n        return movies;\r\n    }, [searchQuery, movies]);\r\n    react_1.useEffect(function () {\r\n        searchCinema(sortedCinema);\r\n    }, [sortedCinema, movies]);\r\n    return (react_1.default.createElement(\"input\", { type: \"text\", value: searchQuery, onChange: function (e) { return setSearchQuery(e.target.value); }, placeholder: \"Search\", className: searchinput_css_1.default.input }));\r\n}\r\nexports.SearchInput = SearchInput;\r\n\n\n//# sourceURL=webpack:///./src/shared/SearchInput/SearchInput.tsx?");

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

eval("// Exports\nmodule.exports = {};\n\n\n//# sourceURL=webpack:///./src/shared/SearchInput/searchinput.css?");

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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.show = void 0;\r\nvar alert_1 = __webpack_require__(/*! ../types/alert */ \"./src/store/types/alert.ts\");\r\nvar time = null;\r\nvar show = function (text, type) {\r\n    if (type === void 0) { type = \"warning\"; }\r\n    return function (dispatch) {\r\n        dispatch({ type: alert_1.AlertAction.SHOW_ALERT, payload: { text: text, type: type } });\r\n        if (time) {\r\n            clearTimeout(time);\r\n        }\r\n        time = setTimeout(function () {\r\n            dispatch({ type: alert_1.AlertAction.HIDE_ALERT });\r\n        }, 5000);\r\n    };\r\n};\r\nexports.show = show;\r\n\n\n//# sourceURL=webpack:///./src/store/action-creator/alert.ts?");

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
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.addNewIdAndMovies = exports.searchCinema = exports.fetchCinema = exports.initCinema = exports.initData = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! ../../plugins/axios */ \"./src/plugins/axios/index.js\"));\r\nvar cinema_1 = __webpack_require__(/*! ../types/cinema */ \"./src/store/types/cinema.ts\");\r\nvar sliceID_1 = __webpack_require__(/*! ../../utils/js/sliceID */ \"./src/utils/js/sliceID.ts\");\r\nvar ids_1 = __importDefault(__webpack_require__(/*! ../../db/ids */ \"./src/db/ids.js\"));\r\nvar initData = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var films, idsFilms, allMovies;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                if (!localStorage.getItem(\"ids\")) {\r\n                    localStorage.setItem(\"ids\", JSON.stringify(ids_1.default));\r\n                }\r\n                if (!!localStorage.getItem(\"films\")) return [3 /*break*/, 2];\r\n                return [4 /*yield*/, Promise.all(ids_1.default.map(function (id) { return axios_1.default.get(\"/?i=\" + id); }))];\r\n            case 1:\r\n                films = _a.sent();\r\n                localStorage.setItem(\"films\", JSON.stringify(films));\r\n                _a.label = 2;\r\n            case 2:\r\n                idsFilms = JSON.parse(localStorage.getItem(\"ids\") || \"[]\");\r\n                allMovies = JSON.parse(localStorage.getItem(\"films\") || \"[]\");\r\n                return [2 /*return*/, {\r\n                        id: idsFilms,\r\n                        movies: allMovies,\r\n                    }];\r\n        }\r\n    });\r\n}); };\r\nexports.initData = initData;\r\nvar initCinema = function () {\r\n    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var data, error_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 2, , 3]);\r\n                    dispatch({ type: cinema_1.CinemaActionTypes.FETCH_MOVIES });\r\n                    return [4 /*yield*/, exports.initData()];\r\n                case 1:\r\n                    data = _a.sent();\r\n                    dispatch({\r\n                        type: cinema_1.CinemaActionTypes.INIT_CINEMA,\r\n                        payload: data,\r\n                    });\r\n                    return [3 /*break*/, 3];\r\n                case 2:\r\n                    error_1 = _a.sent();\r\n                    dispatch({\r\n                        type: cinema_1.CinemaActionTypes.FETCH_MOVIES_ERROR,\r\n                        payload: String(error_1),\r\n                    });\r\n                    return [3 /*break*/, 3];\r\n                case 3: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); };\r\n};\r\nexports.initCinema = initCinema;\r\nvar fetchCinema = function (page, limit, movies) {\r\n    if (page === void 0) { page = 1; }\r\n    if (limit === void 0) { limit = 12; }\r\n    if (movies === void 0) { movies = []; }\r\n    var slicedID = sliceID_1.sliceMovie(movies)(page, limit);\r\n    return {\r\n        type: cinema_1.CinemaActionTypes.FETCH_MOVIES_SUCCESS,\r\n        payload: slicedID,\r\n    };\r\n};\r\nexports.fetchCinema = fetchCinema;\r\nvar searchCinema = function (movies) { return ({\r\n    type: cinema_1.CinemaActionTypes.SEARCH_CINEMA,\r\n    payload: movies,\r\n}); };\r\nexports.searchCinema = searchCinema;\r\nvar addNewIdAndMovies = function (data) { return ({\r\n    type: cinema_1.CinemaActionTypes.INIT_CINEMA,\r\n    payload: data,\r\n}); };\r\nexports.addNewIdAndMovies = addNewIdAndMovies;\r\n\n\n//# sourceURL=webpack:///./src/store/action-creator/cinema.ts?");

/***/ }),

/***/ "./src/store/action-creator/index.ts":
/*!*******************************************!*\
  !*** ./src/store/action-creator/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CinemaCreators = __importStar(__webpack_require__(/*! ./cinema */ \"./src/store/action-creator/cinema.ts\"));\r\nvar BgCreators = __importStar(__webpack_require__(/*! ./bg */ \"./src/store/action-creator/bg.ts\"));\r\nvar AlertCreators = __importStar(__webpack_require__(/*! ./alert */ \"./src/store/action-creator/alert.ts\"));\r\nexports.default = __assign(__assign(__assign({}, CinemaCreators), BgCreators), AlertCreators);\r\n\n\n//# sourceURL=webpack:///./src/store/action-creator/index.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.store = void 0;\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar reducers_1 = __webpack_require__(/*! ./reducers */ \"./src/store/reducers/index.ts\");\r\nexports.store = redux_1.createStore(reducers_1.rootReducer, redux_1.applyMiddleware(redux_thunk_1.default));\r\n\n\n//# sourceURL=webpack:///./src/store/index.ts?");

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
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.cinemaReducer = void 0;\r\nvar cinema_1 = __webpack_require__(/*! ../types/cinema */ \"./src/store/types/cinema.ts\");\r\nvar initialState = {\r\n    id: [],\r\n    currentMovies: [{}],\r\n    movies: [{}],\r\n    currentPage: 1,\r\n    perPage: 12,\r\n    error: \"\",\r\n    loading: false,\r\n    sortedMovies: [{}],\r\n};\r\nvar cinemaReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case cinema_1.CinemaActionTypes.INIT_CINEMA:\r\n            return __assign(__assign(__assign({}, state), action.payload), { loading: true });\r\n        case cinema_1.CinemaActionTypes.FETCH_MOVIES:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case cinema_1.CinemaActionTypes.FETCH_MOVIES_SUCCESS:\r\n            return __assign(__assign({}, state), { currentMovies: action.payload, loading: false });\r\n        case cinema_1.CinemaActionTypes.FETCH_MOVIES_ERROR:\r\n            return __assign(__assign({}, state), { error: action.payload, loading: false });\r\n        case cinema_1.CinemaActionTypes.SEARCH_CINEMA:\r\n            return __assign(__assign({}, state), { sortedMovies: action.payload });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.cinemaReducer = cinemaReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/cinemaReducer.ts?");

/***/ }),

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = void 0;\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar cinemaReducer_1 = __webpack_require__(/*! ./cinemaReducer */ \"./src/store/reducers/cinemaReducer.ts\");\r\nvar bgReducer_1 = __webpack_require__(/*! ./bgReducer */ \"./src/store/reducers/bgReducer.ts\");\r\nvar alertReducer_1 = __webpack_require__(/*! ./alertReducer */ \"./src/store/reducers/alertReducer.ts\");\r\nexports.rootReducer = redux_1.combineReducers({\r\n    cinema: cinemaReducer_1.cinemaReducer,\r\n    bg: bgReducer_1.bgReducer,\r\n    alert: alertReducer_1.alertReducer,\r\n});\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/index.ts?");

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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CinemaActionTypes = void 0;\r\nvar CinemaActionTypes;\r\n(function (CinemaActionTypes) {\r\n    CinemaActionTypes[\"FETCH_MOVIES_SUCCESS\"] = \"FETCH_MOVIES_SUCCESS\";\r\n    CinemaActionTypes[\"FETCH_MOVIES_ERROR\"] = \"FETCH_MOVIES_ERROR\";\r\n    CinemaActionTypes[\"FETCH_MOVIES\"] = \"FETCH_MOVIES\";\r\n    CinemaActionTypes[\"INIT_CINEMA\"] = \"INIT_CINEMA\";\r\n    CinemaActionTypes[\"SEARCH_CINEMA\"] = \"SEARCH_CINEMA\";\r\n})(CinemaActionTypes = exports.CinemaActionTypes || (exports.CinemaActionTypes = {}));\r\n\n\n//# sourceURL=webpack:///./src/store/types/cinema.ts?");

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

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });