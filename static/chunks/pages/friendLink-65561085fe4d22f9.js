(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{22264:function(n,e,t){"use strict";var r=t(68739);function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n,e){var t=o.default,r={loading:function(n){n.error,n.isLoading;return n.pastDelay,null}};n instanceof Promise?r.loader=function(){return n}:"function"===typeof n?r.loader=n:"object"===typeof n&&(r=a(a({},r),n));var i=r=a(a({},r),e);0;if(i.suspense)return t(i);r.loadableGenerated&&delete(r=a(a({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,l(t,r);delete r.ssr}return t(r)},e.noSSR=l;s(t(50959));var o=s(t(52981));function s(n){return n&&n.__esModule?n:{default:n}}function l(n,e){return delete e.webpack,delete e.modules,n(e)}("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&(Object.assign(e.default,e),n.exports=e.default)},16388:function(n,e,t){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.LoadableContext=void 0;var i=((r=t(50959))&&r.__esModule?r:{default:r}).default.createContext(null);e.LoadableContext=i},52981:function(n,e,t){"use strict";var r=t(36617),i=t(38108),a=t(68739);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){var t="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"===typeof n)return c(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(n,e)}(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return o=n.done,n},e:function(n){s=!0,a=n},f:function(){try{o||null==t.return||t.return()}finally{if(s)throw a}}}}function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u,d=(u=t(50959))&&u.__esModule?u:{default:u},f=t(77316),m=t(16388);var p=[],h=[],g=!1;function b(n){var e=n(),t={loading:!0,loaded:null,error:null};return t.promise=e.then((function(n){return t.loading=!1,t.loaded=n,n})).catch((function(n){throw t.loading=!1,t.error=n,n})),t}var x=function(){function n(e,t){r(this,n),this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(n,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var n=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,t=this._opts;e.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){n._update({pastDelay:!0})}),t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout((function(){n._update({timedOut:!0})}),t.timeout))),this._res.promise.then((function(){n._update({}),n._clearTimeouts()})).catch((function(e){n._update({}),n._clearTimeouts()})),this._update({})}},{key:"_update",value:function(n){this._state=s(s({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},n),this._callbacks.forEach((function(n){return n()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(n){var e=this;return this._callbacks.add(n),function(){e._callbacks.delete(n)}}}]),n}();function y(n){return function(n,e){var t=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},e);t.suspense&&(t.lazy=d.default.lazy(t.loader));var r=null;function i(){if(!r){var e=new x(n,t);r={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return r.promise()}if(!g&&!t.suspense){var a=t.webpack?t.webpack():t.modules;a&&h.push((function(n){var e,t=l(a);try{for(t.s();!(e=t.n()).done;){var r=e.value;if(-1!==n.indexOf(r))return i()}}catch(o){t.e(o)}finally{t.f()}}))}var o=t.suspense?function(n,e){return d.default.createElement(t.lazy,s(s({},n),{},{ref:e}))}:function(n,e){i();var a=d.default.useContext(m.LoadableContext),o=f.useSubscription(r);return d.default.useImperativeHandle(e,(function(){return{retry:r.retry}}),[]),a&&Array.isArray(t.modules)&&t.modules.forEach((function(n){a(n)})),d.default.useMemo((function(){return o.loading||o.error?d.default.createElement(t.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:r.retry}):o.loaded?d.default.createElement(function(n){return n&&n.__esModule?n.default:n}(o.loaded),n):null}),[n,o])};return o.preload=function(){return!t.suspense&&i()},o.displayName="LoadableComponent",d.default.forwardRef(o)}(b,n)}function w(n,e){for(var t=[];n.length;){var r=n.pop();t.push(r(e))}return Promise.all(t).then((function(){if(n.length)return w(n,e)}))}y.preloadAll=function(){return new Promise((function(n,e){w(p).then(n,e)}))},y.preloadReady=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e){var t=function(){return g=!0,e()};w(h,n).then(t,t)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var j=y;e.default=j},97459:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return j}});t(50959);var r=t(62217),i=t.n(r),a=t(66465),o="#ffdd40",s="#2f313a",l=" all 0.4s ease 0s",c=a.ZP.div.withConfig({displayName:"styled__FriendLinkWrapper",componentId:"sc-18km3z1-0"})(['\n   margin: 0 auto;\n  /* width: 40rem; */\n    padding: 0;\n    /* overflow-x: hidden */\n    /* display: flex;\n    justify-content: center; */ \n    font-family: "Lato", Arial, Helvetica, serif;\n    /* background: linear-gradient(90deg, #131417, '," 35% 65%, #131417); */\n    font-size: 1em;\n    width: 90vmin;\n"],s),u=a.ZP.ul.withConfig({displayName:"styled__Friend",componentId:"sc-18km3z1-1"})(["\n  padding: 2em 0 2em 2.5em;\n  margin: 0;\n "]),d=a.ZP.li.withConfig({displayName:"styled__Member",componentId:"sc-18km3z1-2"})(["\n    margin: 1.5em 0 0.5em;\n    padding: 0.73em;\n    background: linear-gradient(83deg, "," 0 97%,  #fff0 calc(97% + 1px) 100%);\n    position: relative;\n    list-style: none;\n    display: block;\n    transform: scale(0.85);\n    transition: ",";\n    min-height: 8em;\n    :nth-of-type(even){\n      text-align: right;\n      background: linear-gradient(-83deg,"," 0 97%,#fff0 calc(97% + 1px) 100%);\n      .thumb {\n          --deg: 86deg;\n          float: right;\n          margin-left: 2em;\n          margin-right: -3em;\n          transform: rotate(4deg);\n      }\n      h3 {\n          left: inherit;\n          right: 9vmin;\n          transform: rotate(2deg);\n          transform-origin: right bottom;\n          background-color: black;\n          /* background: linear-gradient(-182deg, #fff0 60%, "," 0 100%); */\n      }\n      p a{\n        float: left;\n      }\n      :hover .thumb {\n        --deg: 91deg;\n      }\n    }\n    :hover {\n      transform: scale(1);\n      transition: ",";\n      filter: drop-shadow(0px 20px 10px #0008);\n      .thumb {\n        padding: 0.1em;\n        transition: ",";\n        transform: rotate(-1deg);\n        --deg: -89deg;\n      }\n      .thumb img {\n        filter: none;\n        transition: ",";\n      }\n      h3 {\n        transition: ",";\n        transform: rotate(0deg);\n        /* background: linear-gradient(180deg, #fff0 59%, "," 0 100%); */\n      }\n    }\n    \n "],o,l,o,s,l,l,l,l,s),f=a.ZP.div.withConfig({displayName:"styled__Thumb",componentId:"sc-18km3z1-3"})(["\n   width: 13vmin;\n    height: 13vmin;\n    float: left;\n    margin-right: 1.25em;\n    background: linear-gradient(",", "," 0 70%, "," 0% 100%);\n    transform: rotate(-4deg);\n    transition: ",";\n    border-radius: 0.25em;\n    overflow: hidden;\n    margin-left: -3em;\n    padding: 0.5em;\n    img{\n      width: 100%;\n      height: 100%;\n      border-radius: 0.25em;\n      filter: grayscale(1);\n      background: ",";\n    }\n    \n "],"-86deg",s,o,l,s),m=a.ZP.div.withConfig({displayName:"styled__Description",componentId:"sc-18km3z1-4"})(["\n padding-top: 1vmin;\n\n "]),p=a.ZP.h3.withConfig({displayName:"styled__Name",componentId:"sc-18km3z1-5"})(["\n    /* background: linear-gradient(182deg, #fff0 60%, "," 0 100%); */\n    top: 1.5em;\n    background-color: black;\n    display: inline;\n    transform: rotate(-2deg);\n    position: absolute;\n    margin: 0;\n    margin-top: -2.25em;\n    left: 9vmin;\n    padding: 0.2em 0.75em;\n    color: ",";\n    border-radius: 0.25em;\n    font-size: 1.35em;\n    transform-origin: left bottom;\n "],s,o),h=a.ZP.p.withConfig({displayName:"styled__Introduction",componentId:"sc-18km3z1-6"})(["\n  padding: 0 2em;\n  margin-bottom: 1em;\n  margin: 1em 0;\n"]),g=a.ZP.a.withConfig({displayName:"styled__PathLink",componentId:"sc-18km3z1-7"})(["\n    display: inline-block;\n    margin: 1em 0 0 0;\n    background: ",";\n    color: ",";\n    padding: 0.1em 0.5em 0.35em;\n    border-radius: 0.5em;\n    text-decoration: none;\n    transition: ",";\n    font-size: 1em;\n    float: right;\n\n    :hover {\n      transition: ",";\n      color: ",";\n      background: ",";\n      font-weight: bold;\n    }\n"],s,o,l,l,s,o),b=t(11527),x=i()((function(){return t.e(593).then(t.bind(t,60593))}),{ssr:!1,loadableGenerated:{webpack:function(){return[60593]}}}),y=function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(x,{title:"\u65e0\u8bba\u751f\u6d3b\u8fd8\u662f\u7f51\u7edc\uff0c\u6211\u4eec\u90fd\u9700\u8981\u670b\u53cb\u3002"}),(0,b.jsx)(c,{children:(0,b.jsxs)(u,{children:[(0,b.jsxs)(d,{children:[(0,b.jsx)(f,{className:"thumb",children:(0,b.jsx)("img",{src:"images/bg-d.jpg",alt:""})}),(0,b.jsxs)(m,{children:[(0,b.jsx)(p,{children:"\u706f\u706b\u73ca"}),(0,b.jsxs)(h,{children:["\u541b\u4e0d\u89c1\uff0c\u4e00\u7f15\u9752\u4e1d\u4e00\u58f0\u53f9 ",(0,b.jsx)("br",{}),(0,b.jsx)(g,{children:"@\u706f\u706b\u73ca"})]})]})]}),(0,b.jsxs)(d,{children:[(0,b.jsx)(f,{className:"thumb",children:(0,b.jsx)("img",{src:"images/bg-d.jpg",alt:""})}),(0,b.jsxs)(m,{children:[(0,b.jsx)(p,{children:"\u706f\u706b\u73ca"}),(0,b.jsxs)(h,{children:["\u541b\u4e0d\u89c1\uff0c\u4e00\u7f15\u9752\u4e1d\u4e00\u58f0\u53f9 ",(0,b.jsx)("br",{}),(0,b.jsx)(g,{children:"@\u706f\u706b\u73ca"})]})]})]}),(0,b.jsxs)(d,{children:[(0,b.jsx)(f,{className:"thumb",children:(0,b.jsx)("img",{src:"images/bg-d.jpg",alt:""})}),(0,b.jsxs)(m,{children:[(0,b.jsx)(p,{children:"\u706f\u706b\u73ca"}),(0,b.jsxs)(h,{children:["\u541b\u4e0d\u89c1\uff0c\u4e00\u7f15\u9752\u4e1d\u4e00\u58f0\u53f9 ",(0,b.jsx)("br",{}),(0,b.jsx)(g,{children:"@\u706f\u706b\u73ca"})]})]})]}),(0,b.jsxs)(d,{children:[(0,b.jsx)(f,{className:"thumb",children:(0,b.jsx)("img",{src:"images/bg-d.jpg",alt:""})}),(0,b.jsxs)(m,{children:[(0,b.jsx)(p,{children:"\u706f\u706b\u73ca"}),(0,b.jsxs)(h,{children:["\u541b\u4e0d\u89c1\uff0c\u4e00\u7f15\u9752\u4e1d\u4e00\u58f0\u53f9 ",(0,b.jsx)("br",{}),(0,b.jsx)(g,{children:"@\u706f\u706b\u73ca"})]})]})]})]})})]})},w=t(37312),j=function(){return(0,b.jsx)(w.Z,{title:"\u53cb\u60c5\u94fe\u63a5 \uff5c ",children:(0,b.jsx)(y,{})})}},42250:function(n,e,t){"use strict";var r=t(26290),i=t.n(r),a=(t(50959),t(66465)),o=t(11527);e.Z=function(n){var e=n.title,t=(0,a.Fg)();return(0,o.jsxs)(i(),{children:[(0,o.jsx)("title",{children:e}),(0,o.jsx)("meta",{charSet:"utf-8"}),(0,o.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1.0,maximum-scale=1.0,shrink-to-fit=no"}),(0,o.jsx)("meta",{name:"description",content:e}),(0,o.jsx)("meta",{name:"theme-color",content:t.background.primary}),(0,o.jsx)("link",{rel:"icon",href:"/favicon_logo.ico"})]})}},37312:function(n,e,t){"use strict";t.d(e,{Z:function(){return x}});var r=t(42250),i=t(66465),a=t(90016),o=t(6156),s=t(46192),l=i.ZP.nav.withConfig({displayName:"styled__NavBar",componentId:"sc-1j09oj-0"})(["\n  box-sizing: border-box;\n  position: fixed;\n  ","\n  width:100%;\n  padding: 0 2.4rem;\n  background: ",";\n  opacity: 0.95;\n  box-shadow: 0 1px 40px -8px ",";\n  z-index: 9999;\n  ",";\n  top:-2px;\n  @media only screen and "," {\n    display: none;\n  }\n"],(0,a.Zv)("space-between"),(function(n){return n.theme.background.primary}),(function(n){return n.theme.colors.fiveOpcityBlack}),(0,a.Ce)("background",250,"linear"),s.Z.device.laptop),c=i.ZP.div.withConfig({displayName:"styled__NavBarItem",componentId:"sc-1j09oj-1"})(["\n  ","\n  margin-right: 28.5rem;\n\n  a {\n    position: relative;\n    ","\n    white-space:nowrap;\n    margin-left: 1.6rem;\n    padding: 0 0.2rem;\n    height: ",";\n    font-size: 1rem;\n    color: ",";\n    ","\n\n    &::after {\n      position: absolute;\n      content: '';\n      bottom: 0;\n      left: 0;\n      width: 0;\n      height: 0.4rem;\n      background: ",";\n      ","\n    }\n\n    svg {\n      margin-right: 0.5rem;\n      width: 1.1rem;\n      height: 1.1rem;\n      fill: ",";\n      ","\n    }\n\n    &:hover {\n      color: ",";\n      ","\n\n      &::after {\n        width: 100%;\n      }\n\n      svg {\n        fill: ",";\n        stroke: ",";\n        ","\n        ","\n      }\n    }\n  }\n"],(0,a.Zv)("flex-start"),(0,a.Zv)(),(function(n){return n.theme.headerHeight}),(function(n){return n.theme.text.primary}),(0,a.Ce)("color"),(function(n){return n.theme.colors.primary}),(0,a.Ce)("width"),(function(n){return n.theme.text.primary}),(0,a.Ce)("fill"),(function(n){return n.theme.colors.primary}),(0,a.Ce)("color"),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),(0,a.Ce)("fill"),(0,a.AV)(o.UZ,2e3,"ease","infinite")),u=i.ZP.a.withConfig({displayName:"styled__Logo",componentId:"sc-1j09oj-2"})(["\n  width: 14.67rem;\n  height: 2.93rem;\n  background: url('');\n  cursor: pointer;\n  ","\n"],(0,a.Od)()),d=t(17621),f=t.n(d),m=t(64632),p=t(11527),h=function(){return(0,p.jsxs)(l,{children:[(0,p.jsx)(f(),{href:"/",passHref:!0,children:(0,p.jsx)(u,{})}),(0,p.jsxs)(c,{children:[(0,p.jsx)(f(),{href:"/",children:(0,p.jsxs)("a",{children:[(0,p.jsx)(m.J,{name:"home"}),"\u9996\u9875"]})}),(0,p.jsx)(f(),{href:"/post",children:(0,p.jsxs)("a",{children:[(0,p.jsx)(m.J,{name:"article"}),"\u6587\u7ae0"]})}),(0,p.jsx)(f(),{href:"/project",children:(0,p.jsx)("a",{children:"\u9879\u76ee"})}),(0,p.jsx)(f(),{href:"/archive",children:(0,p.jsx)("a",{children:"\u5f52\u6863"})}),(0,p.jsx)(f(),{href:"/friendLink",children:(0,p.jsx)("a",{children:"\u53cb\u60c5\u94fe\u63a5"})}),(0,p.jsx)(f(),{href:"/about",children:(0,p.jsx)("a",{children:"\u5173\u4e8e"})})]})]})},g=i.ZP.section.withConfig({displayName:"styled__Layouts",componentId:"sc-a60t2y-0"})(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n"]),b=i.ZP.main.withConfig({displayName:"styled__Main",componentId:"sc-a60t2y-1"})(["\n  flex:1;\n  overflow-x: hidden;\n\n  @media only screen and "," {\n    margin-top: 3.6rem;\n  }\n"],s.Z.device.laptop),x=function(n){var e=n.title,t=n.children;return(0,p.jsxs)(g,{children:[(0,p.jsx)(r.Z,{title:e}),(0,p.jsx)(h,{}),(0,p.jsx)(b,{children:t})]})}},6156:function(n,e,t){"use strict";t.d(e,{Jt:function(){return a},UZ:function(){return i},YX:function(){return o}});var r=t(66465),i=((0,r.F4)(["\n 0% {\n    transform: scale(1.1);\n  }\n  50% {\n    transform: scale(0.8);\n  }\n  100% {\n    transform: scale(1.1);\n  }\n"]),(0,r.F4)(["\n 0% {\n    transform: rotate(-12deg);\n  }\n  8% {\n    transform: rotate(12deg);\n  }\n  10% {\n    transform: rotate(24deg);\n  }\n  18%,\n  20% {\n    transform: rotate(-24deg);\n  }\n  28%,\n  30% {\n    transform: rotate(24deg);\n  }\n  38%,\n  40% {\n    transform: rotate(-24deg);\n  }\n  48%,\n  50% {\n    transform: rotate(24deg);\n  }\n  58%,\n  60% {\n    transform: rotate(-24deg);\n  }\n  68% {\n    transform: rotate(24deg);\n  }\n  100%,\n  75% {\n    transform: rotate(0);\n  }\n"])),a=((0,r.F4)(["\n  0% {\n    transform: translate(0, 0);\n  }\n  6% {\n    transform: translate(5px, 0);\n  }\n  12% {\n    transform: translate(0, 0);\n  }\n  18% {\n    transform: translate(5px, 0);\n  }\n  24% {\n    transform: translate(0, 0);\n  }\n  30% {\n    transform: translate(5px, 0);\n  }\n  100%,\n  36% {\n    transform: translate(0, 0);\n  }\n"]),(0,r.F4)(["\n  0% {\n    transform: translate(0, -3px);\n  }\n  4% {\n    transform: translate(0, 3px);\n  }\n  8% {\n    transform: translate(0, -3px);\n  }\n  12% {\n    transform: translate(0, 3px);\n  }\n  16% {\n    transform: translate(0, -3px);\n  }\n  20% {\n    transform: translate(0, 3px);\n  }\n  100%,\n  22% {\n    transform: translate(0, 0);\n  }\n"]),(0,r.F4)(["\n   0% {\n    transform: scale(1);\n  }\n  10%,\n  20% {\n    transform: scale(0.9) rotate(-8deg);\n  }\n  30%,\n  50%,\n  70% {\n    transform: scale(1.3) rotate(8deg);\n  }\n  40%,\n  60% {\n    transform: scale(1.3) rotate(-8deg);\n  }\n  100%,\n  80% {\n    transform: scale(1) rotate(0);\n  }\n"]),(0,r.F4)(["\n  0% {\n    opacity: 0;\n    transform: translateY(50px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]),(0,r.F4)(["\n   0% {\n    clip: rect(36px, 9999px, 9px, 0);\n  }\n\n  25% {\n    clip: rect(25px, 9999px, 99px, 0);\n  }\n\n  50% {\n    clip: rect(50px, 9999px, 102px, 0);\n  }\n\n  75% {\n    clip: rect(30px, 9999px, 92px, 0);\n  }\n\n  100% {\n    clip: rect(91px, 9999px, 98px, 0);\n  }\n"])),o=(0,r.F4)(["\n 0% {\n    top: -1px;\n    left: 1px;\n    clip: rect(65px, 9999px, 119px, 0);\n  }\n\n  25% {\n    top: -6px;\n    left: 4px;\n    clip: rect(79px, 9999px, 19px, 0);\n  }\n\n  50% {\n    top: -3px;\n    left: 2px;\n    clip: rect(68px, 9999px, 11px, 0);\n  }\n\n  75% {\n    top: 0;\n    left: -4px;\n    clip: rect(95px, 9999px, 53px, 0);\n  }\n\n  100% {\n    top: -1px;\n    left: -1px;\n    clip: rect(31px, 9999px, 149px, 0);\n  }\n"]);(0,r.F4)(["\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-6px);\n  }\n  100% {\n    transform: translateY(0);\n  }"]),(0,r.F4)(["\n  from {\n    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,\n      0 0 white, 0 0 white, 0 0 white;\n  }\n}"]),(0,r.F4)(["{\n  to {\n    transform: translateY(200px);\n    opacity: 0;\n  }\n}"]),(0,r.F4)(["\n  0%,\n  19.9% {\n    margin-top: 10%;\n    margin-left: 40%;\n  }\n  20%,\n  39.9% {\n    margin-top: 40%;\n    margin-left: 30%;\n  }\n  40%,\n  59.9% {\n    margin-top: 20%;\n    margin-left: 70%;\n  }\n  60%,\n  79.9% {\n    margin-top: 30%;\n    margin-left: 20%;\n  }\n  80%,\n  99.9% {\n    margin-top: 30%;\n    margin-left: 80%;\n  }\n}"])},96676:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/friendLink",function(){return t(97459)}])},77316:function(n,e,t){!function(){"use strict";var e={800:function(n){var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function i(n){if(null===n||void 0===n)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}n.exports=function(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var r=Object.getOwnPropertyNames(e).map((function(n){return e[n]}));if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(n){i[n]=n})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(n){return!1}}()?Object.assign:function(n,a){for(var o,s,l=i(n),c=1;c<arguments.length;c++){for(var u in o=Object(arguments[c]))t.call(o,u)&&(l[u]=o[u]);if(e){s=e(o);for(var d=0;d<s.length;d++)r.call(o,s[d])&&(l[s[d]]=o[s[d]])}}return l}},569:function(n,e,t){0},403:function(n,e,t){var r=t(800),i=t(522);e.useSubscription=function(n){var e=n.getCurrentValue,t=n.subscribe,a=i.useState((function(){return{getCurrentValue:e,subscribe:t,value:e()}}));n=a[0];var o=a[1];return a=n.value,n.getCurrentValue===e&&n.subscribe===t||(a=e(),o({getCurrentValue:e,subscribe:t,value:a})),i.useDebugValue(a),i.useEffect((function(){function n(){if(!i){var n=e();o((function(i){return i.getCurrentValue!==e||i.subscribe!==t||i.value===n?i:r({},i,{value:n})}))}}var i=!1,a=t(n);return n(),function(){i=!0,a()}}),[e,t]),a}},138:function(n,e,t){n.exports=t(403)},522:function(n){n.exports=t(50959)}},r={};function i(n){var t=r[n];if(void 0!==t)return t.exports;var a=r[n]={exports:{}},o=!0;try{e[n](a,a.exports,i),o=!1}finally{o&&delete r[n]}return a.exports}i.ab="//";var a=i(138);n.exports=a}()},62217:function(n,e,t){n.exports=t(22264)}},function(n){n.O(0,[43,774,888,179],(function(){return e=96676,n(n.s=e);var e}));var e=n.O();_N_E=e}]);