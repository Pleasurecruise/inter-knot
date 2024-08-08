(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))g(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&g(h)}).observe(document,{childList:!0,subtree:!0});function l(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function g(u){if(u.ep)return;u.ep=!0;const d=l(u);fetch(u.href,d)}})();var ne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function re(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var $={exports:{}};(function(i,o){(function(l,g){i.exports=g()})(ne,function(){function l(e,t){var n=void 0;return function(){n&&clearTimeout(n),n=setTimeout(e,t)}}function g(e,t){for(var n=e.length,r=n,c=[];n--;)c.push(t(e[r-n-1]));return c}function u(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(window.Promise)return H(e,t,n);e.recalculate(!0,!0)}function d(e){for(var t=e.options,n=e.responsiveOptions,r=e.keys,c=e.docWidth,s=void 0,a=0;a<r.length;a++){var m=parseInt(r[a],10);c>=m&&(s=t.breakAt[m],N(s,n))}return n}function h(e){for(var t=e.options,n=e.responsiveOptions,r=e.keys,c=e.docWidth,s=void 0,a=r.length-1;a>=0;a--){var m=parseInt(r[a],10);c<=m&&(s=t.breakAt[m],N(s,n))}return n}function b(e){var t=e.useContainerForBreakpoints?e.container.clientWidth:window.innerWidth,n={columns:e.columns};v(e.margin)?n.margin={x:e.margin.x,y:e.margin.y}:n.margin={x:e.margin,y:e.margin};var r=Object.keys(e.breakAt);return e.mobileFirst?d({options:e,responsiveOptions:n,keys:r,docWidth:t}):h({options:e,responsiveOptions:n,keys:r,docWidth:t})}function C(e){return b(e).columns}function _(e){return b(e).margin}function M(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],n=C(e),r=_(e).x,c=100/n;if(!t)return c;if(n===1)return"100%";var s="px";if(typeof r=="string"){var a=parseFloat(r);s=r.replace(a,""),r=a}return r=(n-1)*r/n,s==="%"?c-r+"%":"calc("+c+"% - "+r+s+")"}function V(e,t){var n=C(e.options),r=0,c=void 0,s=void 0;if(++t===1)return 0;s=_(e.options).x;var a="px";if(typeof s=="string"){var m=parseFloat(s,10);a=s.replace(m,""),s=m}return c=(s-(n-1)*s/n)*(t-1),r+=M(e.options,!1)*(t-1),a==="%"?r+c+"%":"calc("+r+"% + "+c+a+")"}function x(e){var t=0,n=e.container,r=e.rows;w(r,function(c){t=c>t?c:t}),n.style.height=t+"px"}function U(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],c=C(e.options),s=_(e.options).y;S(e,c,n),w(t,function(a){var m=0,E=parseInt(a.offsetHeight,10);isNaN(E)||(e.rows.forEach(function(ee,te){ee<e.rows[m]&&(m=te)}),a.style.position="absolute",a.style.top=e.rows[m]+"px",a.style.left=""+e.cols[m],e.rows[m]+=isNaN(E)?0:E+s,r&&(a.dataset.macyComplete=1))}),r&&(e.tmpRows=null),x(e)}function z(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],c=C(e.options),s=_(e.options).y;S(e,c,n),w(t,function(a){e.lastcol===c&&(e.lastcol=0);var m=Y(a,"height");m=parseInt(a.offsetHeight,10),isNaN(m)||(a.style.position="absolute",a.style.top=e.rows[e.lastcol]+"px",a.style.left=""+e.cols[e.lastcol],e.rows[e.lastcol]+=isNaN(m)?0:m+s,e.lastcol+=1,r&&(a.dataset.macyComplete=1))}),r&&(e.tmpRows=null),x(e)}var p=function e(t,n){if(!(this instanceof e))return new e(t,n);if(t&&t.nodeName)return t;if(t=t.replace(/^\s*/,"").replace(/\s*$/,""),n)return this.byCss(t,n);for(var r in this.selectors)if(n=r.split("/"),new RegExp(n[1],n[2]).test(t))return this.selectors[r](t);return this.byCss(t)};p.prototype.byCss=function(e,t){return(t||document).querySelectorAll(e)},p.prototype.selectors={},p.prototype.selectors[/^\.[\w\-]+$/]=function(e){return document.getElementsByClassName(e.substring(1))},p.prototype.selectors[/^\w+$/]=function(e){return document.getElementsByTagName(e)},p.prototype.selectors[/^\#[\w\-]+$/]=function(e){return document.getElementById(e.substring(1))};var w=function(e,t){for(var n=e.length,r=n;n--;)t(e[r-n-1])},L=function(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0];this.running=!1,this.events=[],this.add(e)};L.prototype.run=function(){if(!this.running&&this.events.length>0){var e=this.events.shift();this.running=!0,e(),this.running=!1,this.run()}},L.prototype.add=function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0&&arguments[0];return!!t&&(Array.isArray(t)?w(t,function(n){return e.add(n)}):(this.events.push(t),void this.run()))},L.prototype.clear=function(){this.events=[]};var G=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.instance=e,this.data=t,this},A=function(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0];this.events={},this.instance=e};A.prototype.on=function(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return!(!e||!t)&&(Array.isArray(this.events[e])||(this.events[e]=[]),this.events[e].push(t))},A.prototype.emit=function(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!e||!Array.isArray(this.events[e]))return!1;var n=new G(this.instance,t);w(this.events[e],function(r){return r(n)})};var O=function(e){return!("naturalHeight"in e&&e.naturalHeight+e.naturalWidth===0)||e.width+e.height!==0},D=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return new Promise(function(r,c){if(t.complete)return O(t)?r(t):c(t);t.addEventListener("load",function(){return O(t)?r(t):c(t)}),t.addEventListener("error",function(){return c(t)})}).then(function(r){n&&e.emit(e.constants.EVENT_IMAGE_LOAD,{img:r})}).catch(function(r){return e.emit(e.constants.EVENT_IMAGE_ERROR,{img:r})})},j=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return g(t,function(r){return D(e,r,n)})},H=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return Promise.all(j(e,t,n)).then(function(){e.emit(e.constants.EVENT_IMAGE_COMPLETE)})},B=function(e){return l(function(){e.emit(e.constants.EVENT_RESIZE),e.queue.add(function(){return e.recalculate(!0,!0)})},100)},Z=function(e){if(e.container=p(e.options.container),e.container instanceof p||!e.container)return!!e.options.debug&&console.error("Error: Container not found");e.container.length&&(e.container=e.container[0]),e.options.container=e.container,e.container.style.position="relative"},F=function(e){e.queue=new L,e.events=new A(e),e.rows=[],e.resizer=B(e)},W=function(e){var t=p("img",e.container);window.addEventListener("resize",e.resizer),e.on(e.constants.EVENT_IMAGE_LOAD,function(){return e.recalculate(!1,!1)}),e.on(e.constants.EVENT_IMAGE_COMPLETE,function(){return e.recalculate(!0,!0)}),e.options.useOwnImageLoader||u(e,t,!e.options.waitForImages),e.emit(e.constants.EVENT_INITIALIZED)},J=function(e){Z(e),F(e),W(e)},v=function(e){return e===Object(e)&&Object.prototype.toString.call(e)!=="[object Array]"},N=function(e,t){v(e)||(t.columns=e),v(e)&&e.columns&&(t.columns=e.columns),v(e)&&e.margin&&!v(e.margin)&&(t.margin={x:e.margin,y:e.margin}),v(e)&&e.margin&&v(e.margin)&&e.margin.x&&(t.margin.x=e.margin.x),v(e)&&e.margin&&v(e.margin)&&e.margin.y&&(t.margin.y=e.margin.y)},Y=function(e,t){return window.getComputedStyle(e,null).getPropertyValue(t)},S=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(e.lastcol||(e.lastcol=0),e.rows.length<1&&(n=!0),n){e.rows=[],e.cols=[],e.lastcol=0;for(var r=t-1;r>=0;r--)e.rows[r]=0,e.cols[r]=V(e,r)}else if(e.tmpRows){e.rows=[];for(var r=t-1;r>=0;r--)e.rows[r]=e.tmpRows[r]}else{e.tmpRows=[];for(var r=t-1;r>=0;r--)e.tmpRows[r]=e.rows[r]}},Q=function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=t?e.container.children:p(':scope > *:not([data-macy-complete="1"])',e.container);r=Array.from(r).filter(function(s){return s.offsetParent!==null});var c=M(e.options);return w(r,function(s){t&&(s.dataset.macyComplete=0),s.style.width=c}),e.options.trueOrder?(z(e,r,t,n),e.emit(e.constants.EVENT_RECALCULATED)):(U(e,r,t,n),e.emit(e.constants.EVENT_RECALCULATED))},K=function(){return!!window.Promise},X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Array.from||(Array.from=function(e){for(var t=0,n=[];t<e.length;)n.push(e[t++]);return n});var k={columns:4,margin:2,trueOrder:!1,waitForImages:!1,useImageLoader:!0,breakAt:{},useOwnImageLoader:!1,onInit:!1,cancelLegacy:!1,useContainerForBreakpoints:!1};(function(){try{document.createElement("a").querySelector(":scope *")}catch{(function(){function t(s){return function(a){if(a&&n.test(a)){var m=this.getAttribute("id");m||(this.id="q"+Math.floor(9e6*Math.random())+1e6),arguments[0]=a.replace(n,"#"+this.id);var E=s.apply(this,arguments);return m===null?this.removeAttribute("id"):m||(this.id=m),E}return s.apply(this,arguments)}}var n=/:scope\b/gi,r=t(Element.prototype.querySelector);Element.prototype.querySelector=function(s){return r.apply(this,arguments)};var c=t(Element.prototype.querySelectorAll);Element.prototype.querySelectorAll=function(s){return c.apply(this,arguments)}})()}})();var f=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:k;if(!(this instanceof e))return new e(t);this.options={},X(this.options,k,t),this.options.cancelLegacy&&!K()||J(this)};return f.init=function(e){return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "),new f(e)},f.prototype.recalculateOnImageLoad=function(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0];return u(this,p("img",this.container),!e)},f.prototype.runOnImageLoad=function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=p("img",this.container);return this.on(this.constants.EVENT_IMAGE_COMPLETE,e),t&&this.on(this.constants.EVENT_IMAGE_LOAD,e),u(this,n,t)},f.prototype.recalculate=function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0&&arguments[0],n=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return n&&this.queue.clear(),this.queue.add(function(){return Q(e,t,n)})},f.prototype.remove=function(){window.removeEventListener("resize",this.resizer),w(this.container.children,function(e){e.removeAttribute("data-macy-complete"),e.removeAttribute("style")}),this.container.removeAttribute("style")},f.prototype.reInit=function(){this.recalculate(!0,!0),this.emit(this.constants.EVENT_INITIALIZED),window.addEventListener("resize",this.resizer),this.container.style.position="relative"},f.prototype.on=function(e,t){this.events.on(e,t)},f.prototype.emit=function(e,t){this.events.emit(e,t)},f.constants={EVENT_INITIALIZED:"macy.initialized",EVENT_RECALCULATED:"macy.recalculated",EVENT_IMAGE_LOAD:"macy.image.load",EVENT_IMAGE_ERROR:"macy.image.error",EVENT_IMAGE_COMPLETE:"macy.images.complete",EVENT_RESIZE:"macy.resize"},f.prototype.constants=f.constants,f})})($);var oe=$.exports;const ie=re(oe),se="/inter-knot/img.svg",ae='<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="116pt" height="77pt" viewBox="0 0 116 77" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="#0c0b0aff"><path fill="#0c0b0a" opacity="1.00" d=" M 37.37 28.65 C 36.57 26.40 38.63 23.85 41.00 24.20 C 46.48 24.12 47.94 32.76 53.56 31.57 C 56.05 30.24 57.17 27.22 59.43 25.51 C 61.42 23.71 64.26 24.41 66.69 24.26 C 66.95 26.32 67.84 28.61 66.46 30.48 C 64.48 33.15 61.41 34.77 59.49 37.49 C 58.18 41.52 62.25 44.01 64.99 45.99 C 67.24 47.30 67.87 50.33 66.68 52.58 C 65.02 53.79 62.57 54.27 60.70 53.32 C 57.69 50.85 55.68 47.23 52.00 45.57 C 48.86 47.51 46.76 50.59 44.02 52.98 C 41.88 54.67 37.42 54.01 37.21 50.79 C 36.74 48.42 38.87 46.85 40.25 45.28 C 42.25 43.37 43.92 41.16 45.51 38.91 C 43.28 35.09 38.64 33.04 37.37 28.65 Z"/></g><g id="#bf2208ff"><path fill="#bf2208" opacity="1.00" d=" M 31.39 3.44 C 33.86 2.77 36.43 2.58 38.99 2.58 C 58.00 2.61 77.01 2.60 96.02 2.57 C 100.44 2.52 105.12 3.45 108.51 6.48 C 112.99 10.08 114.16 16.35 113.48 21.79 C 112.65 28.92 108.01 34.69 105.13 41.05 C 101.50 49.02 98.16 57.52 91.66 63.66 C 85.40 70.41 76.33 75.02 66.99 74.55 C 54.95 74.34 42.89 74.90 30.88 74.24 C 20.62 71.27 10.66 64.74 6.39 54.58 C 3.70 47.88 1.49 40.42 3.38 33.21 C 4.83 27.61 5.84 21.43 10.09 17.15 C 15.22 10.15 23.23 5.88 31.39 3.44 M 31.34 9.44 C 23.25 12.01 15.83 17.44 12.07 25.20 C 8.26 32.12 7.49 40.57 9.90 48.08 C 12.66 56.44 19.10 63.35 27.05 67.05 C 32.38 69.34 38.29 69.44 44.00 69.39 C 51.68 69.31 59.37 69.47 67.05 69.38 C 73.70 69.34 80.00 66.23 84.98 62.00 C 94.07 52.89 98.55 40.57 104.41 29.38 C 107.05 24.29 109.16 17.58 105.63 12.40 C 103.42 8.78 98.74 8.77 95.00 8.61 C 77.00 8.60 59.00 8.65 41.00 8.58 C 37.77 8.62 34.48 8.57 31.34 9.44 Z"/><path fill="#bf2208" opacity="1.00" d=" M 32.44 12.65 C 36.60 12.06 40.81 12.42 45.00 12.36 C 61.35 12.32 77.71 12.41 94.06 12.34 C 97.10 12.42 100.81 12.43 102.84 15.09 C 104.53 18.05 104.15 21.82 102.81 24.85 C 98.08 35.17 92.81 45.27 86.88 54.94 C 81.71 60.92 74.37 66.37 66.05 65.73 C 57.01 65.64 47.98 65.69 38.95 65.71 C 33.36 65.80 27.63 64.27 23.26 60.70 C 17.13 55.59 11.86 48.39 12.15 40.05 C 10.91 27.51 20.51 15.62 32.44 12.65 M 37.37 28.65 C 38.64 33.04 43.28 35.09 45.51 38.91 C 43.92 41.16 42.25 43.37 40.25 45.28 C 38.87 46.85 36.74 48.42 37.21 50.79 C 37.42 54.01 41.88 54.67 44.02 52.98 C 46.76 50.59 48.86 47.51 52.00 45.57 C 55.68 47.23 57.69 50.85 60.70 53.32 C 62.57 54.27 65.02 53.79 66.68 52.58 C 67.87 50.33 67.24 47.30 64.99 45.99 C 62.25 44.01 58.18 41.52 59.49 37.49 C 61.41 34.77 64.48 33.15 66.46 30.48 C 67.84 28.61 66.95 26.32 66.69 24.26 C 64.26 24.41 61.42 23.71 59.43 25.51 C 57.17 27.22 56.05 30.24 53.56 31.57 C 47.94 32.76 46.48 24.12 41.00 24.20 C 38.63 23.85 36.57 26.40 37.37 28.65 Z"/></g><g id="#5f0b05ff"><path fill="#5f0b05" opacity="1.00" d=" M 31.34 9.44 C 34.48 8.57 37.77 8.62 41.00 8.58 C 59.00 8.65 77.00 8.60 95.00 8.61 C 98.74 8.77 103.42 8.78 105.63 12.40 C 109.16 17.58 107.05 24.29 104.41 29.38 C 98.55 40.57 94.07 52.89 84.98 62.00 C 80.00 66.23 73.70 69.34 67.05 69.38 C 59.37 69.47 51.68 69.31 44.00 69.39 C 38.29 69.44 32.38 69.34 27.05 67.05 C 19.10 63.35 12.66 56.44 9.90 48.08 C 7.49 40.57 8.26 32.12 12.07 25.20 C 15.83 17.44 23.25 12.01 31.34 9.44 M 32.44 12.65 C 20.51 15.62 10.91 27.51 12.15 40.05 C 11.86 48.39 17.13 55.59 23.26 60.70 C 27.63 64.27 33.36 65.80 38.95 65.71 C 47.98 65.69 57.01 65.64 66.05 65.73 C 74.37 66.37 81.71 60.92 86.88 54.94 C 92.81 45.27 98.08 35.17 102.81 24.85 C 104.15 21.82 104.53 18.05 102.84 15.09 C 100.81 12.43 97.10 12.42 94.06 12.34 C 77.71 12.41 61.35 12.32 45.00 12.36 C 40.81 12.42 36.60 12.06 32.44 12.65 Z"/></g></svg>';LA.init({id:"3J6dEY8wQU3ZxACy",ck:"3J6dEY8wQU3ZxACy",autoTrack:!0,prefix:"inter-knot/event"});const q=[...document.querySelectorAll(".tab-container .tab")];q.forEach(i=>{i.addEventListener("click",()=>{q.forEach(o=>o.classList.remove("active")),i.classList.add("active")})});const y=document.querySelector(".popup-container");y.addEventListener("click",i=>{i.target===y&&(y.classList.remove("open"),y.classList.add("closed"))});const ce=ie({container:".card-container",columns:5,margin:{x:0,y:0}});setTimeout(()=>{typeof window.GM_xmlhttpRequest>"u"&&(alert("请先安装“绳网跨域助手”"),location.href="https://greasyfork.org/zh-CN/scripts/502874")},3e3);window.run=async()=>{var i;if(!(((i=localStorage.getItem("access_token"))==null?void 0:i.startsWith("ghu_"))??!1))if(new URL(location.href).searchParams.has("code"))try{await ge(new URL(location.href).searchParams.get("code"))}catch{T()}else T();P(async()=>{const o=await pe(localStorage.getItem("access_token"));le({curExp:6982,totalExp:1e4,level:o.public_repos,name:o.name,profilePhoto:o.avatar_url,url:o.html_url})}),P(async()=>{const o=await he(localStorage.getItem("access_token"));me(o.map(l=>{var g,u;return{cover:((u=(g=ue(l.bodyHTML))==null?void 0:g.querySelector("img"))==null?void 0:u.src)??se,authorPhoto:l.author.avatarUrl,title:l.title,author:l.author.login,content:l.bodyHTML,text:l.bodyText,url:l.url+"#new_comment_form",visited:ve(0,1001),comments:l.comments.nodes.map(d=>({profilePhoto:d.author.avatarUrl,name:d.author.login,content:d.bodyHTML}))}}))})};async function P(i){try{await i()}catch(o){console.error(o);try{await fe(localStorage.getItem("refresh_token")),await i()}catch(l){console.error(l),T()}}}function I(i){return new Promise((o,l)=>{GM_xmlhttpRequest({...i,onload:o,onerror:l})})}function ue(i){const o=document.createElement("div");return o.innerHTML=i,o.firstElementChild}function le({curExp:i,totalExp:o,level:l,name:g,profilePhoto:u,url:d}){document.querySelector(".user-info").href=d,document.querySelector(".user-info .profile-photo").src=u,document.querySelector(".user-info .curExp").textContent=i+"",document.querySelector(".user-info .totalExp").textContent=o+"",document.querySelector(".user-info .level-num").textContent=l+"",document.querySelector(".user-info .username").textContent=g,document.querySelector(".user-info .bar").style.width=i/o*100+"%"}function me(i){document.querySelector(".card-container").innerHTML=i.map(({cover:o,title:l,author:g,authorPhoto:u,text:d,visited:h})=>`<div class="card-wrapper"><div class="card"><section class="cover-container"><img class="cover" src="${o}" alt="封面" loading="lazy" /><div class="visited"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" ><path fill="currentColor" d="M1.182 12C2.122 6.88 6.608 3 12 3s9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9s-9.878-3.88-10.818-9M12 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0-2a3 3 0 1 1 0-6a3 3 0 0 1 0 6" /></svg>${h}</div></section><section class="info-container"><div class="profile"><img class="profile-photo" src="${u}" alt="头像" loading="lazy" /><div class="username">${g}</div></div><div class="title">${l}</div><div class="content">${d}</div></section></div></div>`).join(""),document.querySelectorAll(".card-container img").forEach(o=>o.addEventListener("load",()=>ce.recalculate(!0),{once:!0})),document.querySelectorAll(".card-container .card").forEach((o,l)=>{o.addEventListener("click",()=>{de(i[l])})})}function de({authorPhoto:i,author:o,visited:l,cover:g,title:u,content:d,comments:h,url:b}){y.innerHTML=`<div class="popup"><header><img class="profile-photo" src="${i}" alt="头像" loading="lazy" /><div><div>${o}</div><div class="visited"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" ><path fill="currentColor" d="M1.182 12C2.122 6.88 6.608 3 12 3s9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9s-9.878-3.88-10.818-9M12 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0-2a3 3 0 1 1 0-6a3 3 0 0 1 0 6" /></svg>${l}</div></div><div class="close-btn">${ae}</div></header><main><div class="cover"><img src="${g}" alt="封面" loading="lazy" /></div><div class="content"><div class="title">${u}</div><div class="text">${d}</div><a class="reply" href="${b}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.243 18.997H21v2H3v-4.243l9.9-9.9l4.242 4.243zm5.07-13.557l2.122-2.121a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415l-2.122 2.121z"></path></svg>写回复</a><div class="comments">${h.map(C=>`<section class="comment"><img class="profile-photo" src="${C.profilePhoto}" alt="头像" loading="lazy" /><div><div class="name">${C.name}</div><div class="text">${C.content}</div></div></section>`).join("")}</div></div></main></div>`,document.querySelector(".close-btn").addEventListener("click",()=>{y.classList.remove("open"),y.classList.add("closed")}),y.classList.remove("closed"),y.classList.add("open")}function T(){location.href="https://github.com/login/oauth/authorize?client_id=Iv23li8gf1MxGAgvw5lU"}async function ge(i){const{response:o}=await I({method:"POST",url:`https://github.com/login/oauth/access_token?client_id=Iv23li8gf1MxGAgvw5lU&client_secret=3ea999c0e2d7283f602ab4994cc684ada2eeec2b&code=${i}`,headers:{accept:"application/json"},responseType:"json"});return localStorage.setItem("access_token",o.access_token),localStorage.setItem("refresh_token",o.refresh_token),o}async function fe(i){const{response:o}=await I({method:"POST",url:`https://github.com/login/oauth/access_token?client_id=Iv23li8gf1MxGAgvw5lU&client_secret=3ea999c0e2d7283f602ab4994cc684ada2eeec2b&grant_type=refresh_token&refresh_token=${i}`,headers:{accept:"application/json"},responseType:"json"});return localStorage.setItem("access_token",o.access_token),localStorage.setItem("refresh_token",o.refresh_token),o}async function pe(i){const{data:o}=await R({access_token:i,data:"query { viewer { avatarUrl login repositories { totalCount } } }"});return{name:o.viewer.login,avatar_url:o.viewer.avatarUrl,html_url:`https://github.com/${o.viewer.login}`,public_repos:o.viewer.repositories.totalCount}}async function he(i){const{data:{repository:{discussions:{nodes:o}}}}=await R({access_token:i,data:'query { repository(owner: "share121", name: "inter-knot") { discussions(first: 100) { nodes { author { avatarUrl login url } bodyHTML url bodyText title comments(first: 100) { nodes { author { avatarUrl login url } bodyHTML } } } } } }'});return o}function ve(i,o){return i=Math.ceil(i),o=Math.floor(o),Math.floor(Math.random()*(o-i)+i)}async function R({access_token:i,data:o}){const{response:l}=await I({method:"POST",url:"https://api.github.com/graphql",headers:{Authorization:"Bearer "+i},responseType:"json",data:JSON.stringify({query:o})});return l}