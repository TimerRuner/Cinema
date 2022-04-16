webpackHotUpdate("main",{

/***/ "./src/config/configInputs.ts":
false,

/***/ "./src/shared/Modal/FilmInfo/FilmInfo.tsx":
/*!************************************************!*\
  !*** ./src/shared/Modal/FilmInfo/FilmInfo.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.FilmInfo = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar filminfo_css_1 = __importDefault(__webpack_require__(/*! ./filminfo.css */ \"./src/shared/Modal/FilmInfo/filminfo.css\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\r\nvar useTypeSelector_1 = __webpack_require__(/*! ../../../hooks/useTypeSelector */ \"./src/hooks/useTypeSelector.ts\");\r\nvar Input_1 = __webpack_require__(/*! ../../../UI/Input */ \"./src/UI/Input/index.ts\");\r\nfunction FilmInfo() {\r\n    var id = react_router_dom_1.useParams().id;\r\n    var movies = useTypeSelector_1.useTypeSelector(function (state) { return state.cinema; }).movies;\r\n    var config = useMovieInfo(id, movies)[0];\r\n    // if (id) {\r\n    //     const film = findFilm(id, movies)\r\n    //     configInput = getInputConfig(film, true)\r\n    // } else {\r\n    //     configInput = getInputConfig()\r\n    // }\r\n    // const [config, setConfig] = useState(configInput)\r\n    // useEffect(() => {\r\n    //     if (id) {\r\n    //         const film = findFilm(id, movies)\r\n    //         configInput = getInputConfig(film, true)\r\n    //         setConfig(configInput)\r\n    //     } else {\r\n    //         configInput = getInputConfig()\r\n    //         setConfig(configInput)\r\n    //     }\r\n    // }, [movies])\r\n    var validateControl = function (value, validation) {\r\n        if (!validation) {\r\n            return true;\r\n        }\r\n        var isValid = true;\r\n        if (validation.required) {\r\n            isValid = value.trim() !== \"\" && isValid;\r\n        }\r\n        if (validation.minLength) {\r\n            isValid = value.length >= validation.minLength && isValid;\r\n        }\r\n        return isValid;\r\n    };\r\n    var onChangeHandler = function (e, controlName) {\r\n        var formControls = __assign({}, config.formControls);\r\n        var control = __assign({}, config.formControls[controlName]);\r\n        control.value = e.target.value;\r\n        control.touched = true;\r\n        control.valid = validateControl(control.value, control.validation);\r\n        if (id) {\r\n            Object.keys(formControls).map(function (controlName) {\r\n                var controlValid = formControls[controlName];\r\n                var value = controlValid.value;\r\n                controlValid.valid = validateControl(value, controlValid.validation);\r\n            });\r\n        }\r\n        formControls[controlName] = control;\r\n        var isFormValid = true;\r\n        Object.keys(formControls).forEach(function (name) {\r\n            isFormValid = formControls[name].valid && isFormValid;\r\n        });\r\n        setConfig({ isFormValid: isFormValid, formControls: formControls });\r\n    };\r\n    var render = function () {\r\n        return Object.keys(config.formControls).map(function (controlName, index) {\r\n            var control = config.formControls[controlName];\r\n            return (react_1.default.createElement(Input_1.Input, { key: controlName + index, type: control.type, value: control.value, touched: control.touched, valid: control.valid, label: control.label, shouldValidate: !!control.validation, errorMessage: control.errorMessage, onChange: function (e) { return onChangeHandler(e, controlName); } }));\r\n        });\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: filminfo_css_1.default.filmInfo },\r\n        react_1.default.createElement(\"div\", { className: filminfo_css_1.default.filmPoster },\r\n            react_1.default.createElement(\"img\", { src: \"#\", alt: \"poster\" })),\r\n        react_1.default.createElement(\"form\", { action: \"#\" },\r\n            render(),\r\n            react_1.default.createElement(\"div\", { className: filminfo_css_1.default.form_buttons },\r\n                react_1.default.createElement(\"button\", { className: filminfo_css_1.default.form_button }, \"Cancel\"),\r\n                react_1.default.createElement(\"button\", { className: filminfo_css_1.default.form_button, disabled: !config.isFormValid }, \"Submit\")))));\r\n}\r\nexports.FilmInfo = FilmInfo;\r\n\n\n//# sourceURL=webpack:///./src/shared/Modal/FilmInfo/FilmInfo.tsx?");

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

/***/ "./src/utils/js/findFilm.ts":
false,

/***/ "./src/utils/js/isObjectEmpty.ts":
false

})