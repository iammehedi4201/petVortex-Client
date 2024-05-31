"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_components_Ui_UserProfile_UserProfile_tsx",{

/***/ "(app-pages-browser)/./src/components/Ui/UserProfile/UserProfile.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Ui/UserProfile/UserProfile.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_api_user_userApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/api/user/userApi */ \"(app-pages-browser)/./src/redux/api/user/userApi.ts\");\n/* harmony import */ var _barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,IconButton,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,IconButton,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,IconButton,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst UserProfile = (param)=>{\n    let { handleOpenUserMenu, profileImg } = param;\n    var _userInfo, _profile_data, _profile_data1;\n    _s();\n    //:get user Profile\n    const { data: profile, isLoading } = (0,_redux_api_user_userApi__WEBPACK_IMPORTED_MODULE_1__.useGetMyProfileQuery)(undefined);\n    const [isUSerMenuOpen, setIsUserMenuOpen] = useState(false); //for profile menu toggle\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                ((_userInfo = userInfo) === null || _userInfo === void 0 ? void 0 : _userInfo.email) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onClick: handleOpenUserMenu,\n                    sx: {\n                        display: \"flex\",\n                        mx: 2,\n                        borderColor: \"red\",\n                        textDecoration: \"none\",\n                        backgroundColor: \"gray.800\",\n                        borderRadius: \"50%\",\n                        \"&:focus\": {\n                            ring: 4,\n                            ringColor: \"gray.300\",\n                            dark: {\n                                ringColor: \"gray.600\"\n                            }\n                        }\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        component: \"img\",\n                        src: profileImg,\n                        alt: \"user\",\n                        sx: {\n                            width: 32,\n                            height: 32,\n                            borderRadius: \"50%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    sx: {\n                        zIndex: 50,\n                        display: isUSerMenuOpen ? \"block\" : \"none\",\n                        my: 2,\n                        textAlign: \"left\",\n                        bgcolor: \"white\",\n                        boxShadow: 1,\n                        borderRadius: 1,\n                        position: \"absolute\",\n                        top: \"2rem\",\n                        transform: \"translateY(2rem) translateX(-40%)\",\n                        width: \"500px\",\n                        maxWidth: \"100%\",\n                        dark: {\n                            bgcolor: \"gray.700\",\n                            color: \"white\"\n                        }\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            sx: {\n                                px: 2,\n                                py: 1\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    variant: \"body2\",\n                                    color: \"text.primary\",\n                                    children: profile === null || profile === void 0 ? void 0 : (_profile_data = profile.data) === null || _profile_data === void 0 ? void 0 : _profile_data.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    variant: \"body2\",\n                                    color: \"text.secondary\",\n                                    children: profile === null || profile === void 0 ? void 0 : (_profile_data1 = profile.data) === null || _profile_data1 === void 0 ? void 0 : _profile_data1.email\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                                    component: \"a\",\n                                    href: \"#\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItemText, {\n                                        primary: \"Dashboard\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                                    component: Link,\n                                    href: \"/addproduct\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItemText, {\n                                        primary: \"Add Products\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                                    component: Link,\n                                    href: \"/myproducts\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItemText, {\n                                        primary: \"My Products\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                        type: \"button\",\n                                        variant: \"contained\",\n                                        color: \"primary\",\n                                        onClick: async ()=>{\n                                            removeUser();\n                                            router.push(\"/\");\n                                        },\n                                        sx: {\n                                            textTransform: \"none\",\n                                            background: \"linear-gradient(to right, #00c6ff, #0072ff)\",\n                                            \"&:hover\": {\n                                                background: \"linear-gradient(to left, #00c6ff, #0072ff)\"\n                                            }\n                                        },\n                                        children: \"LogOut\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Web Development-L(2)\\\\Assignment_9\\\\petvortex_client\\\\src\\\\components\\\\Ui\\\\UserProfile\\\\UserProfile.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(UserProfile, \"/JhxB9ssBKHBDm5df0krD++voRk=\", false, function() {\n    return [\n        _redux_api_user_userApi__WEBPACK_IMPORTED_MODULE_1__.useGetMyProfileQuery\n    ];\n});\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VpL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnRTtBQUVKO0FBRTVELE1BQU1JLGNBQWM7UUFBQyxFQUNuQkMsa0JBQWtCLEVBQ2xCQyxVQUFVLEVBSVg7UUFTUUMsV0FrRE1DLGVBR0FBOztJQTdEYixtQkFBbUI7SUFDbkIsTUFBTSxFQUFFQyxNQUFNRCxPQUFPLEVBQUVFLFNBQVMsRUFBRSxHQUFHViw2RUFBb0JBLENBQUNXO0lBQzFELE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR0MsU0FBUyxRQUFRLHlCQUF5QjtJQUd0RixxQkFDRTtrQkFDRSw0RUFBQ2IscUdBQUdBOztnQkFDRE0sRUFBQUEsWUFBQUEsc0JBQUFBLGdDQUFBQSxVQUFVUSxLQUFLLG1CQUNkLDhEQUFDYixxR0FBVUE7b0JBQ1RjLFNBQVNYO29CQUNUWSxJQUFJO3dCQUNGQyxTQUFTO3dCQUNUQyxJQUFJO3dCQUNKQyxhQUFhO3dCQUNiQyxnQkFBZ0I7d0JBQ2hCQyxpQkFBaUI7d0JBQ2pCQyxjQUFjO3dCQUNkLFdBQVc7NEJBQ1RDLE1BQU07NEJBQ05DLFdBQVc7NEJBQ1hDLE1BQU07Z0NBQ0pELFdBQVc7NEJBQ2I7d0JBQ0Y7b0JBQ0Y7OEJBRUEsNEVBQUN4QixxR0FBR0E7d0JBQ0YwQixXQUFVO3dCQUNWQyxLQUFLdEI7d0JBQ0x1QixLQUFJO3dCQUNKWixJQUFJOzRCQUFFYSxPQUFPOzRCQUFJQyxRQUFROzRCQUFJUixjQUFjO3dCQUFNOzs7Ozs7Ozs7Ozs4QkFLdkQsOERBQUN0QixxR0FBR0E7b0JBQ0ZnQixJQUFJO3dCQUNGZSxRQUFRO3dCQUNSZCxTQUFTTixpQkFBaUIsVUFBVTt3QkFDcENxQixJQUFJO3dCQUNKQyxXQUFXO3dCQUNYQyxTQUFTO3dCQUNUQyxXQUFXO3dCQUNYYixjQUFjO3dCQUNkYyxVQUFVO3dCQUNWQyxLQUFLO3dCQUNMQyxXQUFXO3dCQUNYVCxPQUFPO3dCQUNQVSxVQUFVO3dCQUNWZCxNQUFNOzRCQUNKUyxTQUFTOzRCQUNUTSxPQUFPO3dCQUNUO29CQUNGOztzQ0FFQSw4REFBQ3hDLHFHQUFHQTs0QkFBQ2dCLElBQUk7Z0NBQUV5QixJQUFJO2dDQUFHQyxJQUFJOzRCQUFFOzs4Q0FDdEIsOERBQUN4QyxxR0FBVUE7b0NBQUN5QyxTQUFRO29DQUFRSCxPQUFNOzhDQUMvQmpDLG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVNDLElBQUksY0FBYkQsb0NBQUFBLGNBQWVxQyxJQUFJOzs7Ozs7OENBRXRCLDhEQUFDMUMscUdBQVVBO29DQUFDeUMsU0FBUTtvQ0FBUUgsT0FBTTs4Q0FDL0JqQyxvQkFBQUEsK0JBQUFBLGlCQUFBQSxRQUFTQyxJQUFJLGNBQWJELHFDQUFBQSxlQUFlTyxLQUFLOzs7Ozs7Ozs7Ozs7c0NBR3pCLDhEQUFDK0I7OzhDQUNDLDhEQUFDQztvQ0FBU3BCLFdBQVU7b0NBQUlxQixNQUFLOzhDQUMzQiw0RUFBQ0M7d0NBQWFDLFNBQVE7Ozs7Ozs7Ozs7OzhDQUV4Qiw4REFBQ0g7b0NBQVNwQixXQUFXd0I7b0NBQU1ILE1BQUs7OENBQzlCLDRFQUFDQzt3Q0FBYUMsU0FBUTs7Ozs7Ozs7Ozs7OENBRXhCLDhEQUFDSDtvQ0FBU3BCLFdBQVd3QjtvQ0FBTUgsTUFBSzs4Q0FDOUIsNEVBQUNDO3dDQUFhQyxTQUFROzs7Ozs7Ozs7Ozs4Q0FFeEIsOERBQUNIOzhDQUNDLDRFQUFDSzt3Q0FDQ0MsTUFBSzt3Q0FDTFQsU0FBUTt3Q0FDUkgsT0FBTTt3Q0FDTnpCLFNBQVM7NENBQ1BzQzs0Q0FDQUMsT0FBT0MsSUFBSSxDQUFDO3dDQUNkO3dDQUNBdkMsSUFBSTs0Q0FDRndDLGVBQWU7NENBQ2ZDLFlBQVk7NENBQ1osV0FBVztnREFDVEEsWUFBWTs0Q0FDZDt3Q0FDRjtrREFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0ExR010RDs7UUFRaUNKLHlFQUFvQkE7OztLQVJyREk7QUE0R04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVWkvVXNlclByb2ZpbGUvVXNlclByb2ZpbGUudHN4P2FjZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlR2V0TXlQcm9maWxlUXVlcnkgfSBmcm9tIFwiQC9yZWR1eC9hcGkvdXNlci91c2VyQXBpXCI7XHJcbmltcG9ydCB7IGdldFVzZXJJbmZvIH0gZnJvbSBcIkAvc2VydmljZXMvYXV0aC5zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBCb3gsIEljb25CdXR0b24sIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAoe1xyXG4gIGhhbmRsZU9wZW5Vc2VyTWVudSxcclxuICBwcm9maWxlSW1nLFxyXG59OiB7XHJcbiAgaGFuZGxlT3BlblVzZXJNZW51OiAoKSA9PiB2b2lkO1xyXG4gIHByb2ZpbGVJbWc6IHN0cmluZztcclxufSkgPT4ge1xyXG4gIC8vOmdldCB1c2VyIFByb2ZpbGVcclxuICBjb25zdCB7IGRhdGE6IHByb2ZpbGUsIGlzTG9hZGluZyB9ID0gdXNlR2V0TXlQcm9maWxlUXVlcnkodW5kZWZpbmVkKTtcclxuICBjb25zdCBbaXNVU2VyTWVudU9wZW4sIHNldElzVXNlck1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy9mb3IgcHJvZmlsZSBtZW51IHRvZ2dsZVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAge3VzZXJJbmZvPy5lbWFpbCAmJiAoXHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPcGVuVXNlck1lbnV9XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgbXg6IDIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmF5LjgwMFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICBcIiY6Zm9jdXNcIjoge1xyXG4gICAgICAgICAgICAgICAgcmluZzogNCxcclxuICAgICAgICAgICAgICAgIHJpbmdDb2xvcjogXCJncmF5LjMwMFwiLFxyXG4gICAgICAgICAgICAgICAgZGFyazoge1xyXG4gICAgICAgICAgICAgICAgICByaW5nQ29sb3I6IFwiZ3JheS42MDBcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgc3JjPXtwcm9maWxlSW1nfSAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIHVzZXIgcGhvdG8gVVJMXHJcbiAgICAgICAgICAgICAgYWx0PVwidXNlclwiXHJcbiAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6IDMyLCBoZWlnaHQ6IDMyLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICB6SW5kZXg6IDUwLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBpc1VTZXJNZW51T3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBteTogMixcclxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgYmdjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IDEsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMSxcclxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgdG9wOiBcIjJyZW1cIixcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoMnJlbSkgdHJhbnNsYXRlWCgtNDAlKVwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCI1MDBweFwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIGRhcms6IHtcclxuICAgICAgICAgICAgICBiZ2NvbG9yOiBcImdyYXkuNzAwXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJveCBzeD17eyBweDogMiwgcHk6IDEgfX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAge3Byb2ZpbGU/LmRhdGE/Lm5hbWV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgIHtwcm9maWxlPy5kYXRhPy5lbWFpbH1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGNvbXBvbmVudD1cImFcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhc2hib2FyZFwiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBjb21wb25lbnQ9e0xpbmt9IGhyZWY9XCIvYWRkcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkFkZCBQcm9kdWN0c1wiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBjb21wb25lbnQ9e0xpbmt9IGhyZWY9XCIvbXlwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk15IFByb2R1Y3RzXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZW1vdmVVc2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMGM2ZmYsICMwMDcyZmYpXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzAwYzZmZiwgIzAwNzJmZilcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9nT3V0XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xyXG4iXSwibmFtZXMiOlsidXNlR2V0TXlQcm9maWxlUXVlcnkiLCJCb3giLCJJY29uQnV0dG9uIiwiVHlwb2dyYXBoeSIsIlVzZXJQcm9maWxlIiwiaGFuZGxlT3BlblVzZXJNZW51IiwicHJvZmlsZUltZyIsInVzZXJJbmZvIiwicHJvZmlsZSIsImRhdGEiLCJpc0xvYWRpbmciLCJ1bmRlZmluZWQiLCJpc1VTZXJNZW51T3BlbiIsInNldElzVXNlck1lbnVPcGVuIiwidXNlU3RhdGUiLCJlbWFpbCIsIm9uQ2xpY2siLCJzeCIsImRpc3BsYXkiLCJteCIsImJvcmRlckNvbG9yIiwidGV4dERlY29yYXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJyaW5nIiwicmluZ0NvbG9yIiwiZGFyayIsImNvbXBvbmVudCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiekluZGV4IiwibXkiLCJ0ZXh0QWxpZ24iLCJiZ2NvbG9yIiwiYm94U2hhZG93IiwicG9zaXRpb24iLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJtYXhXaWR0aCIsImNvbG9yIiwicHgiLCJweSIsInZhcmlhbnQiLCJuYW1lIiwiTGlzdCIsIkxpc3RJdGVtIiwiaHJlZiIsIkxpc3RJdGVtVGV4dCIsInByaW1hcnkiLCJMaW5rIiwiQnV0dG9uIiwidHlwZSIsInJlbW92ZVVzZXIiLCJyb3V0ZXIiLCJwdXNoIiwidGV4dFRyYW5zZm9ybSIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Ui/UserProfile/UserProfile.tsx\n"));

/***/ })

});