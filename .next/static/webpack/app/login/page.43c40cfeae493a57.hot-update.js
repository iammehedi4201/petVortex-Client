"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/utils/local_storage.ts":
/*!************************************!*\
  !*** ./src/utils/local_storage.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFromLocalStorage: function() { return /* binding */ getFromLocalStorage; },\n/* harmony export */   removeFormLocalStorage: function() { return /* binding */ removeFormLocalStorage; },\n/* harmony export */   setToLocalStorage: function() { return /* binding */ setToLocalStorage; }\n/* harmony export */ });\nconst setToLocalStorage = (key, token)=>{\n    if (!key || \"object\" === \"undefined\" || !token) {\n        return \"\";\n    }\n    return localStorage.setItem(key, token);\n};\nconst getFromLocalStorage = (key)=>{\n    if (!key || \"object\" === \"undefined\") {\n        return \"\";\n    }\n    const token = localStorage.getItem(key);\n    return token;\n};\nconst removeFormLocalStorage = (key)=>{\n    if (!key || \"object\" === \"undefined\") {\n        return;\n    }\n    return localStorage.removeItem(key);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9sb2NhbF9zdG9yYWdlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLG9CQUFvQixDQUFDQyxLQUFhQztJQUM3QyxJQUFJLENBQUNELE9BQU8sYUFBa0IsZUFBZSxDQUFDQyxPQUFPO1FBQ25ELE9BQU87SUFDVDtJQUNBLE9BQU9DLGFBQWFDLE9BQU8sQ0FBQ0gsS0FBS0M7QUFDbkMsRUFBRTtBQUVLLE1BQU1HLHNCQUFzQixDQUFDSjtJQUNsQyxJQUFJLENBQUNBLE9BQU8sYUFBa0IsYUFBYTtRQUN6QyxPQUFPO0lBQ1Q7SUFDQSxNQUFNQyxRQUFRQyxhQUFhRyxPQUFPLENBQUNMO0lBQ25DLE9BQU9DO0FBQ1QsRUFBRTtBQUVLLE1BQU1LLHlCQUF5QixDQUFDTjtJQUNyQyxJQUFJLENBQUNBLE9BQU8sYUFBa0IsYUFBYTtRQUN6QztJQUNGO0lBRUEsT0FBT0UsYUFBYUssVUFBVSxDQUFDUDtBQUNqQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9sb2NhbF9zdG9yYWdlLnRzPzYzZmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldFRvTG9jYWxTdG9yYWdlID0gKGtleTogc3RyaW5nLCB0b2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKCFrZXkgfHwgdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhdG9rZW4pIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB0b2tlbik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RnJvbUxvY2FsU3RvcmFnZSA9IChrZXk6IHN0cmluZykgPT4ge1xyXG4gIGlmICgha2V5IHx8IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgcmV0dXJuIHRva2VuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUZvcm1Mb2NhbFN0b3JhZ2UgPSAoa2V5OiBzdHJpbmcpID0+IHtcclxuICBpZiAoIWtleSB8fCB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxufTtcclxuIl0sIm5hbWVzIjpbInNldFRvTG9jYWxTdG9yYWdlIiwia2V5IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0RnJvbUxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVGb3JtTG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/local_storage.ts\n"));

/***/ })

});