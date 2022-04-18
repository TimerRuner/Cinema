webpackHotUpdate("main",{

/***/ "./src/store/action-creator/auth.ts":
/*!******************************************!*\
  !*** ./src/store/action-creator/auth.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.autoLogin = exports.autoLogout = exports.loading = exports.authSuccess = exports.logout = exports.auth = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar auth_1 = __webpack_require__(/*! ../types/auth */ \"./src/store/types/auth.ts\");\r\nvar firebase_1 = __webpack_require__(/*! ../../config/firebase */ \"./src/config/firebase.ts\");\r\nvar alert_1 = __webpack_require__(/*! ../types/alert */ \"./src/store/types/alert.ts\");\r\nvar auth = function (email, password, isLogin) {\r\n    return function (dispath) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var authData, url, response, data, expirationData, error_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 2, , 3]);\r\n                    authData = {\r\n                        email: email,\r\n                        password: password,\r\n                        returnSecureToken: true,\r\n                    };\r\n                    url = \"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=\" + firebase_1.firebaseConfig.apiKey;\r\n                    if (isLogin) {\r\n                        url = \"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=\" + firebase_1.firebaseConfig.apiKey;\r\n                    }\r\n                    return [4 /*yield*/, axios_1.default.post(url, authData)];\r\n                case 1:\r\n                    response = _a.sent();\r\n                    data = response.data;\r\n                    expirationData = new Date(new Date().getTime() + data.expiresIn * 1000);\r\n                    localStorage.setItem(\"token\", data.idToken);\r\n                    localStorage.setItem(\"userId\", data.localId);\r\n                    localStorage.setItem(\"expirationData\", JSON.stringify(expirationData));\r\n                    dispath(exports.authSuccess(data.idToken));\r\n                    exports.autoLogout(String(data.expiresIn));\r\n                    return [3 /*break*/, 3];\r\n                case 2:\r\n                    error_1 = _a.sent();\r\n                    dispath({\r\n                        type: alert_1.AlertAction.SHOW_ALERT,\r\n                        payload: { text: String(error_1), type: \"error\" },\r\n                    });\r\n                    return [3 /*break*/, 3];\r\n                case 3: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); };\r\n};\r\nexports.auth = auth;\r\nvar logout = function () {\r\n    localStorage.removeItem(\"token\");\r\n    localStorage.removeItem(\"userId\");\r\n    localStorage.removeItem(\"expirationDate\");\r\n    return {\r\n        type: auth_1.AuthConstActions.AUTH_LOGOUT,\r\n    };\r\n};\r\nexports.logout = logout;\r\nvar authSuccess = function (token) { return ({\r\n    type: auth_1.AuthConstActions.AUTH_SUCCESS,\r\n    payload: token,\r\n}); };\r\nexports.authSuccess = authSuccess;\r\nvar loading = function (status) { return ({\r\n    type: auth_1.AuthConstActions.LOADING,\r\n    payload: status,\r\n}); };\r\nexports.loading = loading;\r\nvar autoLogout = function (time) {\r\n    return function (dispatch) {\r\n        setTimeout(function () {\r\n            dispatch(exports.logout());\r\n        }, parseInt(time) * 1000);\r\n    };\r\n};\r\nexports.autoLogout = autoLogout;\r\nvar autoLogin = function () {\r\n    return function (dispath) {\r\n        var token = localStorage.getItem(\"token\");\r\n        if (!token) {\r\n            dispath(exports.logout());\r\n        }\r\n        else {\r\n            var expirationDate = new Date(JSON.parse(localStorage.getItem(\"expirationData\") || \"\"));\r\n            if (expirationDate <= new Date()) {\r\n                dispath(exports.logout());\r\n            }\r\n            else {\r\n                dispath(exports.authSuccess(token));\r\n                var time = (expirationDate.getTime() - new Date().getTime()) / 1000;\r\n                exports.autoLogout(String(time));\r\n            }\r\n        }\r\n    };\r\n};\r\nexports.autoLogin = autoLogin;\r\n\n\n//# sourceURL=webpack:///./src/store/action-creator/auth.ts?");

/***/ }),

/***/ "./src/store/types/auth.ts":
/*!*********************************!*\
  !*** ./src/store/types/auth.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AuthConstActions = void 0;\r\nvar AuthConstActions;\r\n(function (AuthConstActions) {\r\n    AuthConstActions[\"AUTH_SUCCESS\"] = \"AUTH_SUCCESS\";\r\n    AuthConstActions[\"AUTH_LOGOUT\"] = \"AUTH_LOGOUT\";\r\n    AuthConstActions[\"LOADING\"] = \"LOADING\";\r\n})(AuthConstActions = exports.AuthConstActions || (exports.AuthConstActions = {}));\r\n\n\n//# sourceURL=webpack:///./src/store/types/auth.ts?");

/***/ })

})