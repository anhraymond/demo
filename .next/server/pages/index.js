"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./Layout/Header.js



const Header = (props)=>{
    var ref;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "category",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Header"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: ((ref = props.categories) === null || ref === void 0 ? void 0 : ref.length) > 0 && (props.categories || []).map((category)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "category-box",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/quan-ao`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: category
                            })
                        })
                    }, category)
                )
            })
        ]
    }));
};
/* harmony default export */ const Layout_Header = (Header);

;// CONCATENATED MODULE: ./Layout/Footer.js


const Footer = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
            children: "Footer"
        })
    }));
};
/* harmony default export */ const Layout_Footer = (Footer);

;// CONCATENATED MODULE: ./Layout/Layout.js




const Layout_Layout_Header = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_Header, {
                categories: props.categories
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout_Footer, {
            })
        ]
    }));
};
/* harmony default export */ const Layout = (Layout_Layout_Header);

;// CONCATENATED MODULE: ./pages/index.js



function Home(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "demo NextJS The gioi di dong"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        "http-equiv": "content-type",
                        content: "text/html; charset=utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        "http-equiv": "content-language",
                        content: "vi"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "title",
                        content: "Demo the gioi di dong"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "Description",
                        CONTENT: "Vu Ngoc Anh demo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "noindex,nofollow"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout, {
                categories: props.categories,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Trang chủ"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    })
                ]
            })
        ]
    }));
};
Home.getInitialProps = async (ctx)=>{
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const json = await res.json();
    return {
        categories: json
    };
};


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(806)));
module.exports = __webpack_exports__;

})();