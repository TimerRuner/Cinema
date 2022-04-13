webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = exports.AppCopmonent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar CardList_1 = __webpack_require__(/*! ./shared/CardList */ \"./src/shared/CardList/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store/index.ts\");\r\nvar Alert_1 = __webpack_require__(/*! ./shared/Alert */ \"./src/shared/Alert/index.ts\");\r\nfunction AppCopmonent() {\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },\r\n        react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(CardList_1.CardList, null),\r\n            react_1.default.createElement(Alert_1.Alert, null))));\r\n}\r\nexports.AppCopmonent = AppCopmonent;\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppCopmonent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/store/action-creator/cinema.ts":
/*!********************************************!*\
  !*** ./src/store/action-creator/cinema.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.searchCinema = exports.fetchCinema = exports.initCinema = exports.initData = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! ../../plugins/axios */ \"./src/plugins/axios/index.js\"));\r\nvar cinema_1 = __webpack_require__(/*! ../types/cinema */ \"./src/store/types/cinema.ts\");\r\nvar ids_1 = __importDefault(__webpack_require__(/*! ../../db/ids */ \"./src/db/ids.js\"));\r\nvar initData = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var films, idsFilms, allMovies;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                if (!localStorage.getItem(\"ids\")) {\r\n                    localStorage.setItem(\"ids\", JSON.stringify(ids_1.default));\r\n                }\r\n                if (!!localStorage.getItem(\"films\")) return [3 /*break*/, 2];\r\n                return [4 /*yield*/, Promise.all(ids_1.default.map(function (id) { return axios_1.default.get(\"/?i=\" + id); }))];\r\n            case 1:\r\n                films = _a.sent();\r\n                localStorage.setItem(\"films\", JSON.stringify(films));\r\n                _a.label = 2;\r\n            case 2:\r\n                idsFilms = JSON.parse(localStorage.getItem(\"ids\") || \"[]\");\r\n                allMovies = JSON.parse(localStorage.getItem(\"films\") || \"[]\");\r\n                return [2 /*return*/, {\r\n                        id: idsFilms,\r\n                        movies: allMovies,\r\n                    }];\r\n        }\r\n    });\r\n}); };\r\nexports.initData = initData;\r\nvar initCinema = function () {\r\n    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var data, error_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 2, , 3]);\r\n                    return [4 /*yield*/, exports.initData()];\r\n                case 1:\r\n                    data = _a.sent();\r\n                    dispatch({\r\n                        type: cinema_1.CinemaActionTypes.INIT_CINEMA,\r\n                        payload: data,\r\n                    });\r\n                    return [3 /*break*/, 3];\r\n                case 2:\r\n                    error_1 = _a.sent();\r\n                    dispatch({\r\n                        type: cinema_1.CinemaActionTypes.FETCH_MOVIES_ERROR,\r\n                        payload: String(error_1),\r\n                    });\r\n                    return [3 /*break*/, 3];\r\n                case 3: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); };\r\n};\r\nexports.initCinema = initCinema;\r\nvar fetchCinema = function (page, limit, movies) {\r\n    if (page === void 0) { page = 1; }\r\n    if (limit === void 0) { limit = 12; }\r\n    if (movies === void 0) { movies = []; }\r\n    var slicedID = sliceID(movies)(page, limit);\r\n    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var response;\r\n        return __generator(this, function (_a) {\r\n            try {\r\n                dispatch({ type: cinema_1.CinemaActionTypes.FETCH_MOVIES });\r\n                response = slicedID.map(function (item) { return console.log(item); });\r\n                dispatch({\r\n                    type: cinema_1.CinemaActionTypes.FETCH_MOVIES_SUCCESS,\r\n                    payload: response,\r\n                });\r\n            }\r\n            catch (error) {\r\n                dispatch({\r\n                    type: cinema_1.CinemaActionTypes.FETCH_MOVIES_ERROR,\r\n                    payload: String(error),\r\n                });\r\n            }\r\n            return [2 /*return*/];\r\n        });\r\n    }); };\r\n};\r\nexports.fetchCinema = fetchCinema;\r\nvar searchCinema = function (movies) { return ({\r\n    type: cinema_1.CinemaActionTypes.SEARCH_CINEMA,\r\n    payload: movies,\r\n}); };\r\nexports.searchCinema = searchCinema;\r\n\n\n//# sourceURL=webpack:///./src/store/action-creator/cinema.ts?");

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

/***/ "./src/utils/js/sliceID.ts":
false

})