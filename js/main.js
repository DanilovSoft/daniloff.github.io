/*! For license information please see main.js.LICENSE.txt */
(()=>{var e,t,n,o,a={984:()=>{var e;const t=null===(e=document)||void 0===e?void 0:e.querySelector(".header"),n=t.offsetHeight;window.onscroll=()=>window.scrollY>n/1.5?t.classList.add("--scroll"):t.classList.remove("--scroll")},305:()=>{function e(e){document.querySelectorAll(".ru").forEach((e=>e.style.display="none")),document.querySelectorAll(".en").forEach((e=>e.style.display="none")),document.querySelectorAll(".de").forEach((e=>e.style.display="none")),document.querySelectorAll(`.${e}`).forEach((e=>e.style.display="")),document.querySelectorAll("[data-language]").forEach((t=>t.value=`${e}`))}document.querySelectorAll("[data-language]").forEach((t=>{t.addEventListener("change",(function(t){localStorage.setItem("language",`${t.target.value}`),e(`${t.target.value}`)}))})),null===localStorage.getItem("language")&&localStorage.setItem("language","de"),e(`${localStorage.getItem("language")}`)},796:()=>{document.getElementById("player")&&(document.querySelectorAll(".header__nav-list-item")[0].classList.toggle("--active"),document.querySelectorAll(".burger-menu__nav-list-item")[0].classList.toggle("--active"),document.querySelectorAll(".footer__nav-list-item")[0].classList.toggle("--active")),document.getElementById("about")&&(document.querySelectorAll(".header__nav-list-item")[1].classList.toggle("--active"),document.querySelectorAll(".burger-menu__nav-list-item")[1].classList.toggle("--active"),document.querySelectorAll(".footer__nav-list-item")[1].classList.toggle("--active")),document.getElementById("contact")&&(document.querySelectorAll(".header__nav-list-item")[2].classList.toggle("--active"),document.querySelectorAll(".burger-menu__nav-list-item")[2].classList.toggle("--active"),document.querySelectorAll(".footer__nav-list-item")[2].classList.toggle("--active"))},524:()=>{let e=!1,t=100;!function(){var n,o,a,i;const r=null===(n=document)||void 0===n?void 0:n.querySelector("[data-burger]"),s=null===(o=document)||void 0===o?void 0:o.querySelector("[data-menu]"),c=null===(a=document)||void 0===a?void 0:a.querySelectorAll("[data-menu-item]"),l=null===(i=document)||void 0===i?void 0:i.querySelector("[data-menu-overlay]");function u(){null==r||r.classList.toggle("burger--active"),null==s||s.classList.toggle("menu--active"),e=!0,null!=s&&s.classList.contains("menu--active")?(null==r||r.setAttribute("aria-expanded","true"),null==r||r.setAttribute("aria-label","Закрыть меню"),setTimeout((()=>{c[0].classList.toggle("menu--active"),c[1].classList.toggle("menu--active"),c[2].classList.toggle("menu--active"),setTimeout((()=>{c[3].classList.toggle("menu--active"),c[4].classList.toggle("menu--active"),c[5].classList.toggle("menu--active"),setTimeout((()=>{c[6].classList.toggle("menu--active"),c[7].classList.toggle("menu--active"),c[8].classList.toggle("menu--active")}),t)}),t)}),t),e=!0):(null==r||r.setAttribute("aria-expanded","false"),null==r||r.setAttribute("aria-label","Открыть меню"),setTimeout((()=>{c[6].classList.remove("menu--active"),c[7].classList.remove("menu--active"),c[8].classList.remove("menu--active"),setTimeout((()=>{c[3].classList.remove("menu--active"),c[4].classList.remove("menu--active"),c[5].classList.remove("menu--active"),setTimeout((()=>{c[0].classList.remove("menu--active"),c[1].classList.remove("menu--active"),c[2].classList.remove("menu--active")}),t)}),t)}),0),e=!1)}function d(){null==r||r.setAttribute("aria-expanded","false"),null==r||r.setAttribute("aria-label","Открыть меню"),r.classList.remove("burger--active"),s.classList.remove("menu--active"),setTimeout((()=>{c[6].classList.remove("menu--active"),c[7].classList.remove("menu--active"),c[8].classList.remove("menu--active"),setTimeout((()=>{c[3].classList.remove("menu--active"),c[4].classList.remove("menu--active"),c[5].classList.remove("menu--active"),setTimeout((()=>{c[0].classList.remove("menu--active"),c[1].classList.remove("menu--active"),c[2].classList.remove("menu--active")}),t)}),t)}),0),e=!1}null==r||r.addEventListener("click",(e=>{u()})),null==l||l.addEventListener("click",(()=>{d()})),null==c||c.forEach((t=>{t.addEventListener("click",(()=>{null==r||r.setAttribute("aria-expanded","false"),null==r||r.setAttribute("aria-label","Открыть меню"),r.classList.remove("burger--active"),s.classList.remove("menu--active"),null==c||c.forEach((e=>e.classList.remove("menu--active"))),e=!1}))})),document.addEventListener("touchstart",(function(e){const t=function(e){return e.touches||e.originalEvent.touches}(e)[0];m=t.clientX,v=t.clientY}),!1),document.addEventListener("touchmove",(function(t){if(m&&v){var n=t.touches[0].clientX,o=t.touches[0].clientY,a=m-n,i=v-o;Math.abs(a)>Math.abs(i)?a>0?!0===e&&d():!1===e&&u():!0===e&&d(),m=null,v=null}}),!1);var m=null,v=null}()},598:()=>{function e(e){var t=!0,n=!1,o=null,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function r(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function s(e){t=!1}function c(){document.addEventListener("mousemove",l),document.addEventListener("mousedown",l),document.addEventListener("mouseup",l),document.addEventListener("pointermove",l),document.addEventListener("pointerdown",l),document.addEventListener("pointerup",l),document.addEventListener("touchmove",l),document.addEventListener("touchstart",l),document.addEventListener("touchend",l)}function l(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mousedown",l),document.removeEventListener("mouseup",l),document.removeEventListener("pointermove",l),document.removeEventListener("pointerdown",l),document.removeEventListener("pointerup",l),document.removeEventListener("touchmove",l),document.removeEventListener("touchstart",l),document.removeEventListener("touchend",l))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&r(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),c())}),!0),c(),e.addEventListener("focus",(function(e){var n,o,s;i(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(s=n.tagName)&&a[o]&&!n.readOnly||"TEXTAREA"===s&&!n.readOnly||n.isContentEditable))&&r(e.target)}),!0),e.addEventListener("blur",(function(e){var t;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)},2:function(e,t,n){var o,a;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),a=Math.max(0,16-(o-e)),i=window.setTimeout((function(){t(o+a)}),a);return e=o+a,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),a=void 0!==n.g?n.g:"undefined"!=typeof window?window:this,o=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},o=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,i="",r=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===r?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+i},a=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},r=function(t,n,o,a){if(n.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:a}});document.dispatchEvent(i)}};return function(s,c){var l,u,d,m,v={cancelScroll:function(e){cancelAnimationFrame(m),m=null,e||r("scrollCancel",l)},animateScroll:function(o,s,c){v.cancelScroll();var u=n(l||t,c||{}),f="[object Number]"===Object.prototype.toString.call(o),g=f||!o.tagName?null:o;if(f||g){var h=e.pageYOffset;u.header&&!d&&(d=document.querySelector(u.header));var p,y,b,E,L,w,S,A,O=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(d),q=f?o:function(t,n,o,i){var r=0;if(t.offsetParent)for(;r+=t.offsetTop,t=t.offsetParent;);return r=Math.max(r-n-o,0),i&&(r=Math.min(r,a()-e.innerHeight)),r}(g,O,parseInt("function"==typeof u.offset?u.offset(o,s):u.offset,10),u.clip),T=q-h,_=a(),C=0,M=(p=T,b=(y=u).speedAsDuration?y.speed:Math.abs(p/1e3*y.speed),y.durationMax&&b>y.durationMax?y.durationMax:y.durationMin&&b<y.durationMin?y.durationMin:parseInt(b,10)),I=function(t){var n,a,c;E||(E=t),C+=t-E,w=h+T*(a=L=1<(L=0===M?0:C/M)?1:L,"easeInQuad"===(n=u).easing&&(c=a*a),"easeOutQuad"===n.easing&&(c=a*(2-a)),"easeInOutQuad"===n.easing&&(c=a<.5?2*a*a:(4-2*a)*a-1),"easeInCubic"===n.easing&&(c=a*a*a),"easeOutCubic"===n.easing&&(c=--a*a*a+1),"easeInOutCubic"===n.easing&&(c=a<.5?4*a*a*a:(a-1)*(2*a-2)*(2*a-2)+1),"easeInQuart"===n.easing&&(c=a*a*a*a),"easeOutQuart"===n.easing&&(c=1- --a*a*a*a),"easeInOutQuart"===n.easing&&(c=a<.5?8*a*a*a*a:1-8*--a*a*a*a),"easeInQuint"===n.easing&&(c=a*a*a*a*a),"easeOutQuint"===n.easing&&(c=1+--a*a*a*a*a),"easeInOutQuint"===n.easing&&(c=a<.5?16*a*a*a*a*a:1+16*--a*a*a*a*a),n.customEasing&&(c=n.customEasing(a)),c||a),e.scrollTo(0,Math.floor(w)),function(t,n){var a=e.pageYOffset;if(t==n||a==n||(h<n&&e.innerHeight+a)>=_)return v.cancelScroll(!0),i(o,n,f),r("scrollStop",u,o,s),!(m=E=null)}(w,q)||(m=e.requestAnimationFrame(I),E=t)};0===e.pageYOffset&&e.scrollTo(0,0),S=o,A=u,f||history.pushState&&A.updateURL&&history.pushState({smoothScroll:JSON.stringify(A),anchor:S.id},document.title,S===document.documentElement?"#top":"#"+S.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?i(o,Math.floor(q),!1):(r("scrollStart",u,o,s),v.cancelScroll(!0),e.requestAnimationFrame(I))}}},f=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(u=t.target.closest(s))&&"a"===u.tagName.toLowerCase()&&!t.target.closest(l.ignore)&&u.hostname===e.location.hostname&&u.pathname===e.location.pathname&&/#/.test(u.href)){var n,a;try{n=o(decodeURIComponent(u.hash))}catch(t){n=o(u.hash)}if("#"===n){if(!l.topOnEmptyHash)return;a=document.documentElement}else a=document.querySelector(n);(a=a||"#top"!==n?a:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(l),v.animateScroll(a,u))}},g=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(l)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(o(history.state.anchor)))||v.animateScroll(t,null,{updateURL:!1})}};return v.destroy=function(){l&&(document.removeEventListener("click",f,!1),e.removeEventListener("popstate",g,!1),v.cancelScroll(),m=d=u=l=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";v.destroy(),l=n(t,c||{}),d=l.header?document.querySelector(l.header):null,document.addEventListener("click",f,!1),l.updateURL&&l.popstate&&e.addEventListener("popstate",g,!1)}(),v}}(a)}.apply(t,[]),void 0===o||(e.exports=o)}},i={};function r(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return a[e].call(n.exports,n,n.exports,r),n.exports}r.m=a,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,r.d(a,i),a},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>e+".main.js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="sasha-danilov:",r.l=(e,t,a,i)=>{if(n[e])n[e].push(t);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+a){s=d;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",o+a),s.src=e),n[e]=[t];var m=(t,o)=>{s.onerror=s.onload=null,clearTimeout(v);var a=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(o))),t)return t(o)},v=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={179:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((n,a)=>o=e[t]=[n,a]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error;r.l(i,(n=>{if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var o,a,[i,s,c]=n,l=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);c&&c(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackChunksasha_danilov=self.webpackChunksasha_danilov||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";r(598),window,document,document.documentElement,document.body,r(524);var e=r(2);new(r.n(e)())('a[href*="#"]',{easing:"easeInOutCubic",speed:1e3,header:".header"}),r(305),r(796),r(984),document.querySelector(".player")&&r.e(343).then(r.t.bind(r,343,23))})()})();