"use strict";(self.webpackChunktemperature_blanket_app=self.webpackChunktemperature_blanket_app||[]).push([[691],{4218:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return s}});var r=n(7294),l=n(3598),a=n(5785);function o(){return Math.floor(256*Math.random())}function u(){return"rgb("+o()+","+o()+","+o()+")"}function c(e){const t=e.indexOf(",")>-1?",":"",n=e.substr(4).split(")")[0].split(t);let r=(+n[0]).toString(16),l=(+n[1]).toString(16),a=(+n[2]).toString(16);return 1===r.length&&(r="0"+r),1===l.length&&(r="0"+l),1===a.length&&(r="0"+a),("#"+r+l+a).toUpperCase()}function i(){const{0:e,1:t}=(0,r.useState)(u()),{0:n,1:l}=(0,r.useState)(!1);return r.createElement("div",{className:"flex justify-center h-[100%] w-[100%] flex-grow-[1] transition-all ease-in-out hover:flex-grow-[4] hover: cursor-pointer",style:{backgroundColor:e},onClick:()=>{t(u())}},r.createElement("div",{className:"mb-[4em] text-white text-center self-auto",onClick:t=>{t.stopPropagation(),navigator.clipboard.writeText(c(e)),l(!0),setTimeout((()=>{l(!1)}),500)}},n?"Copied!":c(e)))}function m(e){let{colorCount:t}=e;return r.createElement("div",{className:"m-auto grid sm:grid-cols-1 md:grid-cols-5"},(0,a.Z)(Array(t)).map((()=>r.createElement(i,null))))}function s(){return r.createElement(r.Fragment,null,r.createElement("main",null,r.createElement(l.Z,{pageTitle:"Home Page"}),r.createElement("h1",{className:"text-3xl font-bold underline"},"Welcome to Tempestry!"),r.createElement("p",null,"A Temperature Blanket App")),r.createElement("div",null,r.createElement(m,{colorCount:10})))}function p(){return r.createElement(r.Fragment,null,r.createElement("title",null,"Tempestry | Home"),r.createElement("meta",{name:"home",content:"Temptestry | Weather History App For Fiber Artists"}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-33ff3758bfb85f9fa2d1.js.map