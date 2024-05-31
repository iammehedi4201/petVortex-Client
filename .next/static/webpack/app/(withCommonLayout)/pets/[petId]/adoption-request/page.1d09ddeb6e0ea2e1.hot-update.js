"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(withCommonLayout)/pets/[petId]/adoption-request/page",{

/***/ "(app-pages-browser)/./src/redux/api/adoptionRequests/adoptionRequestApi.ts":
/*!**************************************************************!*\
  !*** ./src/redux/api/adoptionRequests/adoptionRequestApi.ts ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCreateAdoptionRequestMutation: function() { return /* binding */ useCreateAdoptionRequestMutation; },\n/* harmony export */   useGetAdoptionRequestByUserQuery: function() { return /* binding */ useGetAdoptionRequestByUserQuery; },\n/* harmony export */   useGetAllAdoptionRequestsQuery: function() { return /* binding */ useGetAllAdoptionRequestsQuery; },\n/* harmony export */   useUpdateAdoptionRequestMutation: function() { return /* binding */ useUpdateAdoptionRequestMutation; }\n/* harmony export */ });\n/* harmony import */ var _baseApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../baseApi */ \"(app-pages-browser)/./src/redux/api/baseApi.ts\");\n\nconst adoptionRequestApi = _baseApi__WEBPACK_IMPORTED_MODULE_0__.baseApi.injectEndpoints({\n    endpoints: (builder)=>({\n            getAllAdoptionRequests: builder.query({\n                query: ()=>{\n                    return {\n                        url: \"/adoption-request\",\n                        method: \"GET\"\n                    };\n                }\n            }),\n            getAdoptionRequestByUser: builder.query({\n                query: (id)=>{\n                    return {\n                        url: \"adoption-request/user\",\n                        method: \"GET\"\n                    };\n                }\n            }),\n            createAdoptionRequest: builder.mutation({\n                query: ()=>{\n                    return {\n                        url: \"/adoption-request\",\n                        method: \"POST\"\n                    };\n                }\n            }),\n            updateAdoptionRequest: builder.mutation({\n                query: (data)=>{\n                    return {\n                        url: \"/adoptionRequests/\".concat(data.id),\n                        method: \"PATCH\",\n                        body: data\n                    };\n                }\n            })\n        }),\n    overrideExisting: true\n});\nconst { useGetAllAdoptionRequestsQuery, useGetAdoptionRequestByUserQuery, useCreateAdoptionRequestMutation, useUpdateAdoptionRequestMutation } = adoptionRequestApi;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9hcGkvYWRvcHRpb25SZXF1ZXN0cy9hZG9wdGlvblJlcXVlc3RBcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFckMsTUFBTUMscUJBQXFCRCw2Q0FBT0EsQ0FBQ0UsZUFBZSxDQUFDO0lBQ2pEQyxXQUFXLENBQUNDLFVBQWE7WUFDdkJDLHdCQUF3QkQsUUFBUUUsS0FBSyxDQUFDO2dCQUNwQ0EsT0FBTztvQkFDTCxPQUFPO3dCQUNMQyxLQUFLO3dCQUNMQyxRQUFRO29CQUNWO2dCQUNGO1lBQ0Y7WUFDQUMsMEJBQTBCTCxRQUFRRSxLQUFLLENBQUM7Z0JBQ3RDQSxPQUFPLENBQUNJO29CQUNOLE9BQU87d0JBQ0xILEtBQU07d0JBQ05DLFFBQVE7b0JBQ1Y7Z0JBQ0Y7WUFDRjtZQUNBRyx1QkFBdUJQLFFBQVFRLFFBQVEsQ0FBQztnQkFDdENOLE9BQU87b0JBQ0wsT0FBTzt3QkFDTEMsS0FBSzt3QkFDTEMsUUFBUTtvQkFDVjtnQkFDRjtZQUNGO1lBQ0FLLHVCQUF1QlQsUUFBUVEsUUFBUSxDQUFDO2dCQUN0Q04sT0FBTyxDQUFDUTtvQkFDTixPQUFPO3dCQUNMUCxLQUFLLHFCQUE2QixPQUFSTyxLQUFLSixFQUFFO3dCQUNqQ0YsUUFBUTt3QkFDUk8sTUFBTUQ7b0JBQ1I7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0FFLGtCQUFrQjtBQUNwQjtBQUVPLE1BQU0sRUFDWEMsOEJBQThCLEVBQzlCQyxnQ0FBZ0MsRUFDaENDLGdDQUFnQyxFQUNoQ0MsZ0NBQWdDLEVBQ2pDLEdBQUduQixtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L2FwaS9hZG9wdGlvblJlcXVlc3RzL2Fkb3B0aW9uUmVxdWVzdEFwaS50cz8wNDdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJhc2VBcGkgfSBmcm9tIFwiLi4vYmFzZUFwaVwiO1xyXG5cclxuY29uc3QgYWRvcHRpb25SZXF1ZXN0QXBpID0gYmFzZUFwaS5pbmplY3RFbmRwb2ludHMoe1xyXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XHJcbiAgICBnZXRBbGxBZG9wdGlvblJlcXVlc3RzOiBidWlsZGVyLnF1ZXJ5KHtcclxuICAgICAgcXVlcnk6ICgpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdXJsOiBcIi9hZG9wdGlvbi1yZXF1ZXN0XCIsXHJcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgZ2V0QWRvcHRpb25SZXF1ZXN0QnlVc2VyOiBidWlsZGVyLnF1ZXJ5KHtcclxuICAgICAgcXVlcnk6IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHVybDogYGFkb3B0aW9uLXJlcXVlc3QvdXNlcmAsXHJcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgY3JlYXRlQWRvcHRpb25SZXF1ZXN0OiBidWlsZGVyLm11dGF0aW9uKHtcclxuICAgICAgcXVlcnk6ICgpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdXJsOiBcIi9hZG9wdGlvbi1yZXF1ZXN0XCIsXHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHVwZGF0ZUFkb3B0aW9uUmVxdWVzdDogYnVpbGRlci5tdXRhdGlvbih7XHJcbiAgICAgIHF1ZXJ5OiAoZGF0YTogeyBpZDogc3RyaW5nOyBzdGF0dXM6IHN0cmluZyB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHVybDogYC9hZG9wdGlvblJlcXVlc3RzLyR7ZGF0YS5pZH1gLFxyXG4gICAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgICBib2R5OiBkYXRhLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICB9KSxcclxuICBvdmVycmlkZUV4aXN0aW5nOiB0cnVlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgdXNlR2V0QWxsQWRvcHRpb25SZXF1ZXN0c1F1ZXJ5LFxyXG4gIHVzZUdldEFkb3B0aW9uUmVxdWVzdEJ5VXNlclF1ZXJ5LFxyXG4gIHVzZUNyZWF0ZUFkb3B0aW9uUmVxdWVzdE11dGF0aW9uLFxyXG4gIHVzZVVwZGF0ZUFkb3B0aW9uUmVxdWVzdE11dGF0aW9uLFxyXG59ID0gYWRvcHRpb25SZXF1ZXN0QXBpO1xyXG4iXSwibmFtZXMiOlsiYmFzZUFwaSIsImFkb3B0aW9uUmVxdWVzdEFwaSIsImluamVjdEVuZHBvaW50cyIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJnZXRBbGxBZG9wdGlvblJlcXVlc3RzIiwicXVlcnkiLCJ1cmwiLCJtZXRob2QiLCJnZXRBZG9wdGlvblJlcXVlc3RCeVVzZXIiLCJpZCIsImNyZWF0ZUFkb3B0aW9uUmVxdWVzdCIsIm11dGF0aW9uIiwidXBkYXRlQWRvcHRpb25SZXF1ZXN0IiwiZGF0YSIsImJvZHkiLCJvdmVycmlkZUV4aXN0aW5nIiwidXNlR2V0QWxsQWRvcHRpb25SZXF1ZXN0c1F1ZXJ5IiwidXNlR2V0QWRvcHRpb25SZXF1ZXN0QnlVc2VyUXVlcnkiLCJ1c2VDcmVhdGVBZG9wdGlvblJlcXVlc3RNdXRhdGlvbiIsInVzZVVwZGF0ZUFkb3B0aW9uUmVxdWVzdE11dGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/api/adoptionRequests/adoptionRequestApi.ts\n"));

/***/ })

});