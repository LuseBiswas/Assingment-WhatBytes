(()=>{var e={};e.id=931,e.ids=[931],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},88120:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>f,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d}),r(43294),r(83657),r(35866);var n=r(23191),s=r(88716),o=r(37922),a=r.n(o),i=r(95231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,43294)),"/Users/riteshbiswas/Desktop/whatbytes-frontend-main/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,83657)),"/Users/riteshbiswas/Desktop/whatbytes-frontend-main/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/riteshbiswas/Desktop/whatbytes-frontend-main/src/app/page.tsx"],u="/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},77508:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},52731:(e,t,r)=>{Promise.resolve().then(r.bind(r,20248)),Promise.resolve().then(r.bind(r,82548))},35303:()=>{},20248:(e,t,r)=>{"use strict";r.d(t,{Header:()=>o});var n=r(10326),s=r(46226);let o=()=>(0,n.jsxs)("header",{className:"flex w-full items-center justify-between lg:h-24 h-16 border-b-2 lg:p-8 p-4 border-slate-100",children:[n.jsx("div",{className:"relative aspect-[254/45] lg:min-w-48 min-w-28",children:n.jsx(s.default,{src:"/logo.png",alt:"logo",fill:!0,className:"absolute object-contain"})}),(0,n.jsxs)("button",{className:"flex items-center gap-2.5 bg-white rounded-sm pl-2 pr-4 py-1.5 shadow-md hover:shadow-md transition-shadow",children:[n.jsx("div",{className:"relative w-8 h-8 rounded-full overflow-hidden",children:n.jsx(s.default,{src:"/profile.jpeg",alt:"Profile",fill:!0,className:"object-cover"})}),n.jsx("span",{className:"text-gray-900 text-sm font-bold",children:"Rahil Siddique"})]})]})},82548:(e,t,r)=>{"use strict";r.d(t,{NavBar:()=>d});var n=r(10326),s=r(90434),o=r(35047),a=r(5508),i=r(997),l=r(39572);let d=()=>n.jsx("nav",{className:"lg:w-1/5 w-full lg:h-full h-fit lg:border-r-2 border-slate-100",children:(0,n.jsxs)("ul",{className:"w-full flex lg:flex-col lg:pr-4 justify-evenly lg:mt-12 mt-2",children:[n.jsx(c,{title:"Dashboard",link:"/dashboard",children:n.jsx(a.Z,{className:"hidden lg:block"})}),n.jsx(c,{title:"Skill Test",link:"/skill-test",children:n.jsx(i.Z,{className:"hidden lg:block"})}),n.jsx(c,{title:"Internship",link:"/internship",children:n.jsx(l.Z,{className:"hidden lg:block"})})]})}),c=({children:e,title:t,link:r})=>{let a=(0,o.usePathname)();return(0,n.jsxs)(s.default,{href:r,className:`lg:text-md font-bold flex gap-4 lg:p-5 p-2 px-4 rounded-full lg:rounded-tl-none lg:rounded-bl-none  ${a===r?"text-blue-700 bg-slate-100":"text-slate-500"}`,children:[e,t]})}},61085:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return a},RedirectType:function(){return n.RedirectType},notFound:function(){return s.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect}});let n=r(83953),s=r(16399);class o extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class a extends URLSearchParams{append(){throw new o}delete(){throw new o}set(){throw new o}sort(){throw new o}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return s},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function s(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8586:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},83953:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return l},getRedirectStatusCodeFromError:function(){return m},getRedirectTypeFromError:function(){return p},getURLFromRedirectError:function(){return f},isRedirectError:function(){return u},permanentRedirect:function(){return c},redirect:function(){return d}});let s=r(54580),o=r(72934),a=r(8586),i="NEXT_REDIRECT";function l(e,t,r){void 0===r&&(r=a.RedirectStatusCode.TemporaryRedirect);let n=Error(i);n.digest=i+";"+t+";"+e+";"+r+";";let o=s.requestAsyncStorage.getStore();return o&&(n.mutableCookies=o.mutableCookies),n}function d(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.TemporaryRedirect)}function c(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.PermanentRedirect)}function u(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,s]=e.digest.split(";",4),o=Number(s);return t===i&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(o)&&o in a.RedirectStatusCode}function f(e){return u(e)?e.digest.split(";",3)[2]:null}function p(e){if(!u(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function m(e){if(!u(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},83657:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b,metadata:()=>h});var n=r(19510),s=r(45317),o=r.n(s);r(5023);var a=r(68570);let i=(0,a.createProxy)(String.raw`/Users/riteshbiswas/Desktop/whatbytes-frontend-main/src/components/header.tsx`),{__esModule:l,$$typeof:d}=i;i.default;let c=(0,a.createProxy)(String.raw`/Users/riteshbiswas/Desktop/whatbytes-frontend-main/src/components/header.tsx#Header`);(0,a.createProxy)(String.raw`/Users/riteshbiswas/Desktop/whatbytes-frontend-main/src/components/header.tsx#default`);let u=(0,a.createProxy)(String.raw`/Users/riteshbiswas/Desktop/whatbytes-frontend-main/src/components/navbar.tsx`),{__esModule:f,$$typeof:p}=u;u.default;let m=(0,a.createProxy)(String.raw`/Users/riteshbiswas/Desktop/whatbytes-frontend-main/src/components/navbar.tsx#NavBar`),h={title:"WhatBytes",description:"WhatBytes - Elevate your Digital Presence"};function b({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:o().className,children:(0,n.jsxs)("main",{className:"bg-white h-screen w-full",children:[n.jsx(c,{}),(0,n.jsxs)("div",{className:"h-screen flex flex-col lg:flex-row",children:[n.jsx(m,{}),e]})]})})})}},43294:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(61085);function s(){(0,n.redirect)("/skill-test")}},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(66621);let s=e=>[{type:"image/x-icon",sizes:"48x41",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948,268,621],()=>r(88120));module.exports=n})();