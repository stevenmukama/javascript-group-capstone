/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Roboto Condensed\\\", sans-serif;\\n}\\n\\nbody.static {\\n  overflow: hidden;\\n  background-color: rgb(0, 0, 0);\\n}\\n\\nheader {\\n  display: flex;\\n  justify-content: center;\\n  padding: 10px;\\n  gap: 100px;\\n}\\n\\nheader img {\\n  width: 150px;\\n  height: auto;\\n}\\n\\nheader ul {\\n  list-style-type: none;\\n  padding-left: 0;\\n  display: flex;\\n  gap: 100px;\\n  align-self: center;\\n}\\n\\nheader li {\\n  font-size: 30px;\\n  cursor: pointer;\\n}\\n\\nheader li:hover {\\n  text-decoration: underline;\\n}\\n\\nfooter {\\n  border-top: 1px solid rgb(129, 129, 129);\\n  width: 100%;\\n}\\n\\nfooter p {\\n  font-size: 20px;\\n  margin: 30px 40px;\\n}\\n\\n.active {\\n  text-decoration: underline;\\n}\\n\\n/*** comment section start ***/\\n\\n.commentpop {\\n  display: none;\\n  color: black;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow-y: hidden;\\n  overflow-x: hidden;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: rgb(0, 0, 0);\\n  background-color: rgba(0, 0, 0, 0.3);\\n}\\n\\n.comment-js {\\n  background-color: beige;\\n  width: 70%;\\n  height: 90%;\\n  overflow-y: auto;\\n  border-radius: 10px;\\n}\\n\\n.commentpop.show {\\n  display: flex;\\n}\\n\\n.name-closeicon {\\n  display: flex;\\n  justify-content: space-between;\\n  margin: 30px;\\n  align-items: center;\\n\\n  /* margin-bottom: 30px; */\\n}\\n\\n.name-closeicon h2 {\\n  font-size: 40px;\\n}\\n\\n.name-closeicon .fa-times {\\n  font-size: 20px;\\n  cursor: pointer;\\n}\\n\\n.comment-img {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.comment-img img {\\n  width: auto;\\n  height: 100%;\\n  border-radius: 10px;\\n}\\n\\n.summary {\\n  width: 90%;\\n  margin-right: auto;\\n  margin-left: auto;\\n  display: flex;\\n  justify-self: center;\\n}\\n\\n.comment-js ul {\\n  list-style-type: none;\\n  margin-bottom: 40px;\\n  margin-left: 30px;\\n}\\n\\n.comment-js ul li a {\\n  text-decoration: none;\\n  color: #0052f5;\\n  transition: 0.5s;\\n}\\n\\n.comment-js ul li a:hover {\\n  text-decoration: underline;\\n  color: #00308f;\\n}\\n\\n.add-comments {\\n  margin-bottom: 40px;\\n  margin-left: 70px;\\n}\\n\\n.add-comments h3 {\\n  font-size: 22px;\\n}\\n\\n.date {\\n  font-style: italic;\\n}\\n\\n.comment-name,\\n.comment-detail {\\n  font-weight: 400;\\n  margin-left: 5px;\\n}\\n\\n#comment-form {\\n  width: 50%;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  margin-left: 60px;\\n  margin-bottom: 30px;\\n}\\n\\n/* main section starts here */\\n.main {\\n  min-height: 50vh;\\n  display: flex;\\n  justify-content: center;\\n  gap: 100px;\\n  flex-wrap: wrap;\\n  margin: 100px 0;\\n  width: 80%;\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.main .movie {\\n  width: 20%;\\n  height: 500px;\\n  position: relative;\\n}\\n\\n.main img {\\n  width: 100%;\\n  height: auto;\\n}\\n\\n.main .name-add-like {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.name-add-like h2 {\\n  width: 80%;\\n}\\n\\n.main .name-add-like i {\\n  color: rgb(204, 6, 6);\\n  cursor: pointer;\\n}\\n\\n.main .name-add-like i:hover {\\n  color: rgb(133, 4, 4);\\n}\\n\\n.main p {\\n  text-align: right;\\n  font-size: 20px;\\n}\\n\\n.main button {\\n  width: 100%;\\n  border: 0;\\n  height: 40px;\\n  cursor: pointer;\\n}\\n\\n.main button:hover {\\n  background-color: rgb(189, 189, 189);\\n}\\n\\n.main .comment-btn-div {\\n  position: absolute;\\n  bottom: 0;\\n  width: 100%;\\n}\\n\\n/* main section ends here */\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_apiController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/apiController.js */ \"./src/modules/apiController.js\");\n/* harmony import */ var _modules_getLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _modules_movieCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/movieCounter.js */ \"./src/modules/movieCounter.js\");\n/* harmony import */ var _modules_movieCounter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_movieCounter_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst getLikesForMovie = (likes, id) => {\n  for (let i = 0; i < likes.length; i += 1) {\n    if (likes[i].item_id === id.toString()) {\n      return likes[i].likes;\n    }\n  }\n  return 0;\n};\n\nconst handleLikeButtonClick = () => {\n  document.querySelectorAll('.main .name-add-like i').forEach((item) => {\n    item.addEventListener('click', async () => {\n      await (0,_modules_apiController_js__WEBPACK_IMPORTED_MODULE_1__.postLike)(item.getAttribute('data-movieId'));\n      const likes = await (0,_modules_apiController_js__WEBPACK_IMPORTED_MODULE_1__.getlikes)();\n      item.parentElement.parentElement.querySelector('p').textContent = `${getLikesForMovie(likes, item.getAttribute('data-movieId'))} likes`;\n    });\n  });\n};\n\nconst rederMovies = async (genresType) => {\n  const allmovies = await (0,_modules_apiController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const movies = allmovies.filter((item) => item.genres.indexOf(genresType) !== -1);\n\n  const likes = await (0,_modules_apiController_js__WEBPACK_IMPORTED_MODULE_1__.getlikes)();\n\n  const mainSection = document.querySelector('.main');\n  mainSection.innerHTML = '';\n  for (let i = 0; i < movies.length; i += 1) {\n    mainSection.innerHTML += `\n        <div class=\"movie\">\n        <img src=\"${movies[i].image.medium}\">\n        <div class=\"name-add-like\">\n            <h2>${movies[i].name}</h2>\n            <i class=\"fas fa-heart fa-2x\" data-movieId=\"${movies[i].id}\"></i>\n        </div>\n        <div>\n            <p>${getLikesForMovie(likes, movies[i].id)} likes</p>\n        </div>\n        <div class=\"comment-btn-div\">\n            <button>Comments</button>\n        </div>\n        </div>`;\n  }\n\n  document.querySelector('.active').textContent += `(${_modules_movieCounter_js__WEBPACK_IMPORTED_MODULE_3___default()(allmovies, genresType)})`;\n\n  handleLikeButtonClick();\n\n  const commentButton = document.querySelectorAll('.comment-btn-div button');\n  (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(commentButton, movies);\n};\n\nrederMovies('Action');\n\nconst links = document.querySelectorAll('header li');\n\nconst resetLinks = () => {\n  for (let i = 0; i < links.length; i += 1) {\n    links[i].textContent = links[i].getAttribute('data-geners');\n    links[i].classList.remove('active');\n  }\n};\n\nfor (let i = 0; i < links.length; i += 1) {\n  links[i].addEventListener('click', () => {\n    rederMovies(links[i].textContent);\n    resetLinks();\n    links[i].classList.add('active');\n  });\n}\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiController.js":
/*!**************************************!*\
  !*** ./src/modules/apiController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMovies),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getlikes\": () => (/* binding */ getlikes),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst getMovies = () => fetch('https://api.tvmaze.com/shows')\n  .then((response) => response.json());\n\nconst getlikes = () => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/likes')\n  .then((response) => response.json());\n\nconst getComments = (id) => fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/comments?item_id=${id}`)\n  .then((response) => {\n    if (response.ok) {\n      return response.json();\n    }\n\n    return [];\n  });\n\nconst postLike = (id) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/likes', {\n  method: 'POST',\n  body: JSON.stringify({\n    item_id: id,\n  }),\n  headers: {\n    'Content-type': 'application/json; charset=UTF-8',\n  },\n})\n  .then((response) => response.text());\n\nconst postComment = (id, name, comment) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/izzKZgflb43lj8vOIg9b/comments', {\n  method: 'POST',\n  body: JSON.stringify({\n    item_id: id,\n    username: name,\n    comment,\n  }),\n  headers: {\n    'Content-type': 'application/json; charset=UTF-8',\n  },\n}).then((response) => response.text());\n\n\n\n//# sourceURL=webpack://webpack/./src/modules/apiController.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ commentPopup)\n/* harmony export */ });\n/* harmony import */ var _apiController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiController.js */ \"./src/modules/apiController.js\");\n/* harmony import */ var _movieCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movieCounter.js */ \"./src/modules/movieCounter.js\");\n/* harmony import */ var _movieCounter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_movieCounter_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst commentSection = document.querySelector('.commentpop');\nconst bodyfix = document.querySelector('body');\n\nconst getCommentsHtml = (commentResult) => {\n  let commentsHtml = `<h3>comments(${(0,_movieCounter_js__WEBPACK_IMPORTED_MODULE_1__.countComment)(commentResult)})</h3>`;\n  for (let i = 0; i < commentResult.length; i += 1) {\n    commentsHtml += `<p>\n      <span class='date'>${commentResult[i].creation_date}<span>\n      <span class='comment-name'>${commentResult[i].username}: </span>\n      <span class='comment-detail'>${commentResult[i].comment} </span>\n      <p>`;\n  }\n  return commentsHtml;\n};\n\nconst submitfunction = async (movies, index) => {\n  const form = document.getElementById('comment-form');\n  await (0,_apiController_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(movies[index].id, form.name.value, form.moviecomment.value);\n  const commentResult = await (0,_apiController_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(movies[index].id);\n  document.getElementsByClassName('add-comments')[0].innerHTML = getCommentsHtml(commentResult);\n  form.name.value = '';\n  form.moviecomment.value = '';\n};\n\nconst commentPopup = (commentButton, movies) => {\n  commentButton.forEach((button, index) => {\n    button.addEventListener('click', async () => {\n      commentSection.classList.add('show');\n      bodyfix.classList.add('static');\n\n      const commentResult = await (0,_apiController_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(movies[index].id);\n\n      commentSection.innerHTML = `<div class='comment-js'>\n        <div class='name-closeicon'>\n        <h2>${movies[index].name}</h2>\n        <i class=\"fa fa-times\"></i>\n        </div>\n        <div class='comment-img'><img src='${movies[index].image.original}'></div>\n        <div class='summary'>${movies[index].summary}</div>\n        <ul>\n        <li>Genre: ${movies[index].genres.join(',')}</li>\n        <li>tvmaze: <a href=\"${movies[index].url}\" target=\"_blank\">details about show</a></li>\n        <li>rating: ${movies[index].rating.average}</li>\n        </ul>\n        <div class='add-comments'>\n        ${getCommentsHtml(commentResult)}\n        </div>\n        <form id=\"comment-form\">\n        <h2>Add your comment</h2>\n        <div>\n            <input type=\"text\" id=\"name\" placeholder=\"name\" required />\n        </div>\n        <div>\n        <textarea id=\"moviecomment\" name=\"moviecomment\" rows=\"4\" cols=\"50\" required></textarea>\n        </div>\n        <div class=\"button-flex\">\n            <button type=\"button\" id=\"add\">Add comment</button>\n        </div>\n    </form>\n        </div>`;\n\n      const addComment = document.getElementById('add');\n      addComment.addEventListener('click', () => { submitfunction(movies, index); });\n\n      const closeComment = document.querySelector('.fa-times');\n      const closebtn = () => {\n        commentSection.classList.remove('show');\n        bodyfix.classList.remove('static');\n      };\n      closeComment.addEventListener('click', closebtn);\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/movieCounter.js":
/*!*************************************!*\
  !*** ./src/modules/movieCounter.js ***!
  \*************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Export 'countComment' is not defined (6:33)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| };\\n| \\n> export { countMovies as default, countComment };\");\n\n//# sourceURL=webpack://webpack/./src/modules/movieCounter.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;