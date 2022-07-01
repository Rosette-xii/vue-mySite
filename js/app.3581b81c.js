(function(t){function e(e){for(var r,c,i=e[0],s=e[1],u=e[2],l=0,A=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&A.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(A.length)A.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-60c7ff55":"89bbc1bf","chunk-8d5ff86c":"3e09fef4","chunk-b7e3f56e":"5a0775ae","chunk-cb97890c":"6a6d92b8","chunk-de512f40":"ad55aa1a"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(t);var u=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view",{staticClass:"everyPage"}),n("Contact"),n("Footer")],1)},o=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"position-fixed navbar navbar-expand-lg py-lg-4 w-100",attrs:{id:"nav"}},[r("div",{staticClass:"container"},[r("h1",{on:{click:t.goTop}},[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{src:n("9d64"),alt:"logo"}})])],1),r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:function(e){return t.burgerAction()}}},[r("span",{staticClass:"burger-top",class:{"rotate-top":t.burgerTop}}),r("span",{staticClass:"burger-bottom",class:{"rotate-bottom":t.burgerBottom}})]),r("div",{staticClass:"collapse navbar-collapse d-lg-flex justify-content-end",attrs:{id:"navbarNav"}},[r("ul",{staticClass:"navbar-nav"},t._l(t.linkList,(function(e){return r("li",{key:e.id,staticClass:"px-3 nav-item",class:{"pe-lg-0":4===e.id}},[r("a",{staticClass:"px-0 pb-1 nav-link",class:{active:t.checkPath(e)},attrs:{href:e.path},on:{click:function(n){return n.preventDefault(),t.goPath(e)}}},[t._v(t._s(e.label))])])})),0)])])])},i=[],s={data:function(){return{linkList:[{id:1,label:"GRAPHIC DESIGN",path:"/graphic-design"},{id:2,label:"PRODUCT DESIGN",path:"/product-design"},{id:3,label:"ABOUT",path:"/about"},{id:4,label:"CONTACT",path:""}],burgerTop:!1,burgerBottom:!1}},methods:{burgerAction:function(){this.burgerTop=!this.burgerTop,this.burgerBottom=!this.burgerBottom},goPath:function(t){"CONTACT"!=t.label?(this.$router.push(t.path),this.goTop()):this.goContact()},goContact:function(){document.getElementById("contact").scrollIntoView(!0)},goTop:function(){window.scrollTo(0,0)}},computed:{checkPath:function(){var t=this;return function(e){return"/graphic-design"===e.path.substr(0,15)?e.path.substr(0,15)===t.$route.path.substr(0,15):e.path===t.$route.path}}}},u=s,l=n("2877"),p=Object(l["a"])(u,c,i,!1,null,null,null),A=p.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact mb-0",attrs:{id:"contact"}},[n("div",{staticClass:"container text-center"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-8 col-md-10 col-12"},[n("h2",{staticClass:"fs-1 fw-bold pb-3"},[t._v("Contact")]),n("p",{staticClass:"lh-lg"},[t._v("謝謝您撥冗參閱"),n("br"),t._v("如果想更進一步了解作品內容"),n("br"),t._v("請與我聯絡")]),n("div",{staticClass:"icon"},[n("i",{staticClass:"bi bi-arrow-down"})]),n("a",{staticClass:"btn-border",attrs:{href:"mailto:tpfsakura@gmail.com"}},[t._v("tpfsakura@gmail.com")])])])])])}],g={},b=Object(l["a"])(g,d,f,!1,null,null,null),h=b.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"text-center"},[r("p",{staticClass:"copyright fs-7"},[t._v("© 2021 Louise Tang Projects.")]),r("div",{staticClass:"go-top"},[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:n("6024"),alt:"go to top"}})])])])}],m={},C=Object(l["a"])(m,v,w,!1,null,null,null),D=C.exports,B={name:"App",components:{Header:A,Contact:h,Footer:D}},O=B,H=(n("034f"),Object(l["a"])(O,a,o,!1,null,null,null)),k=H.exports,y=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(y["a"]);var M=[{path:"/",name:"Index",component:function(){return n.e("chunk-cb97890c").then(n.bind(null,"1e4b"))}},{path:"/graphic-design",name:"GraphicDesign",component:function(){return n.e("chunk-8d5ff86c").then(n.bind(null,"1d0e"))}},{path:"/graphic-design-detail",name:"GraphicDesignDetail",component:function(){return n.e("chunk-de512f40").then(n.bind(null,"e1c8"))}},{path:"/product-design",name:"ProductDesign",component:function(){return n.e("chunk-60c7ff55").then(n.bind(null,"a950"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-b7e3f56e").then(n.bind(null,"754b"))}}],E=new y["a"]({routes:M}),P=E,q=n("2f62");r["a"].use(q["a"]);var W=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),j=n("f5af"),x=n.n(j),U=(n("e829"),n("bc3a")),X=n.n(U),T=n("130e");r["a"].config.productionTip=!1,r["a"].use(T["a"],X.a),new r["a"]({router:P,store:W,render:function(t){return t(k)},mounted:function(){x.a.init()}}).$mount("#app")},6024:function(t,e){t.exports="data:image/png;base64,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"},"85ec":function(t,e,n){},"9d64":function(t,e,n){t.exports=n.p+"img/logo.8d98896b.png"}});
//# sourceMappingURL=app.3581b81c.js.map