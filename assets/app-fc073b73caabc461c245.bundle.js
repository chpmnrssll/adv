(function(c){function t(t){var e=t[0];var n=t[1];var r=t[2];var i,a,o=0,u=[];for(;o<e.length;o++){a=e[o];if(f[a]){u.push(f[a][0])}f[a]=0}for(i in n){if(Object.prototype.hasOwnProperty.call(n,i)){c[i]=n[i]}}if(v)v(t);while(u.length){u.shift()()}l.push.apply(l,r||[]);return s()}function s(){var t;for(var e=0;e<l.length;e++){var n=l[e];var r=true;for(var i=1;i<n.length;i++){var a=n[i];if(f[a]!==0)r=false}if(r){l.splice(e--,1);t=h(h.s=n[0])}}return t}var n={};var f={8:0};var l=[];function d(t){return h.p+""+({1:"Ascii",2:"Fire",3:"Game",4:"Heightmap",5:"NormalMap",6:"Plasma",7:"Static"}[t]||t)+"-"+"fc073b73caabc461c245"+".bundle.js"}function h(t){if(n[t]){return n[t].exports}var e=n[t]={i:t,l:false,exports:{}};c[t].call(e.exports,e,e.exports,h);e.l=true;return e.exports}h.e=function t(a){var e=[];var n=f[a];if(n!==0){if(n){e.push(n[2])}else{var r=new Promise(function(t,e){n=f[a]=[t,e]});e.push(n[2]=r);var o=document.createElement("script");var i;o.charset="utf-8";o.timeout=120;if(h.nc){o.setAttribute("nonce",h.nc)}o.src=d(a);i=function(t){o.onerror=o.onload=null;clearTimeout(u);var e=f[a];if(e!==0){if(e){var n=t&&(t.type==="load"?"missing":t.type);var r=t&&t.target&&t.target.src;var i=new Error("Loading chunk "+a+" failed.\n("+n+": "+r+")");i.type=n;i.request=r;e[1](i)}f[a]=undefined}};var u=setTimeout(function(){i({type:"timeout",target:o})},12e4);o.onerror=o.onload=i;document.head.appendChild(o)}}return Promise.all(e)};h.m=c;h.c=n;h.d=function(t,e,n){if(!h.o(t,e)){Object.defineProperty(t,e,{enumerable:true,get:n})}};h.r=function(t){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(t,"__esModule",{value:true})};h.t=function(e,t){if(t&1)e=h(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var n=Object.create(null);h.r(n);Object.defineProperty(n,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var r in e)h.d(n,r,function(t){return e[t]}.bind(null,r));return n};h.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};h.d(t,"a",t);return t};h.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};h.p="/advanced-static-site/assets/";h.oe=function(t){console.error(t);throw t};var e=window["webpackJsonp"]=window["webpackJsonp"]||[];var r=e.push.bind(e);e.push=t;e=e.slice();for(var i=0;i<e.length;i++)t(e[i]);var v=r;l.push([289,0]);return s()})({287:function(t,e,n){},289:function(t,e,n){"use strict";n.r(e);var r=n(121);var i=n(287);var a=n(48);var o=n.n(a);var u=n(118);var c=n(119);var s=n(10);function f(e,t){var n=Object(s["b"])({values:[{z:0,rotateX:0},{z:40,rotateX:-40},{z:0,rotateX:0},{z:5,rotateX:-10},{z:0,rotateX:0}],duration:768,times:[0,.65,.75,.85,1]});setTimeout(function(){n.start(function(t){return e.set(t)})},t)}var l=function(){var t=document.querySelectorAll(".animated-headline");var o=48;var u=24;if(t){t.forEach(function(t,e){if(t&&t.innerText!==""){var n=parseFloat(t.style.fontSize,10);var r=Object(c["a"])(t,{delimeter:"word",each:function t(e){e.getRootNode().style.marginRight="".concat(n/5,"px")}});var i=Array.from(r).map(s["c"]);var a=e*o;i.forEach(function(t,e){var n=e*u+a;f(t,n);var r=setInterval(function(){try{f(t,n)}catch(t){clearInterval(r)}},15e3)})}})}};var d=function(){var t=document.querySelectorAll(".footer__logo-img");if(t){var e=Array.from(t).map(s["c"]);e.forEach(function(e,t){e.set({y:-(t*2)});Object(s["d"])({from:{rotate:-3,x:(Math.random()-.5)*10},to:{rotate:3,x:(Math.random()-.5)*10},ease:s["a"].easeInOut,flip:Infinity,duration:1e3+Math.random()*4e3}).start(function(t){return e.set(t)});var n=Object(s["d"])({from:{scale:1},to:{scale:1.05},ease:s["a"].easeInOut,flip:1,duration:500});setInterval(function(){n.start(function(t){return e.set(t)})},2e3+Math.random()*8e3)})}};var h=256;function v(t){var e=document.querySelector(".content");e.parentNode.replaceChild(t,e);var n=Object(s["c"])(t);var r=Object(s["d"])({from:{opacity:0,rotateX:30,scaleY:0,z:-1024},to:{opacity:1,rotateX:0,scaleY:1,z:0},ease:s["a"].easeInOut,duration:h});r.start(function(t){return n.set(t)})}function m(){var r=document.querySelector(".content");return new Promise(function(e){var n=Object(s["c"])(r);var t=Object(s["d"])({from:{opacity:1,rotateX:0,scaleY:1,z:0},to:{opacity:0,rotateX:30,scaleY:0,z:-1024},ease:s["a"].easeInOut,duration:h});t.start({update:function t(e){return n.set(e)},complete:function t(){window.scroll(0,0);e()}})})}var p=n(120);var y=n.n(p);function g(t,e,n,r,i,a,o){try{var u=t[a](o);var c=u.value}catch(t){n(t);return}if(u.done){e(c)}else{Promise.resolve(c).then(r,i)}}function O(u){return function(){var t=this,o=arguments;return new Promise(function(e,n){var r=u.apply(t,o);function i(t){g(r,e,n,i,a,"next",t)}function a(t){g(r,e,n,i,a,"throw",t)}i(undefined)})}}function w(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(t,r.key,r)}}function E(t,e,n){if(e)b(t.prototype,e);if(n)b(t,n);return t}function S(t,e){var n=window.getComputedStyle(t.parentElement);var r=parseFloat(n.paddingLeft,10)||0;var i=parseFloat(n.paddingRight,10)||0;var a=parseFloat(n.width,10)||0;return a-(r+i)*e}function x(t,e){t[4]="".concat(e,"px");return t.join(" ")}function T(t){var e=t.split(" ");e[4]=parseFloat(e[4],10);return e}var k=function(){function t(){w(this,t);this.canvas=document.createElement("canvas");this.context=this.canvas.getContext("2d");this.elements=[]}E(t,[{key:"getTextWidth",value:function t(e,n){this.context.font=n;return this.context.measureText(e.innerText).width}},{key:"getFittedSize",value:regeneratorRuntime.mark(function t(n,r,i){var a,o,u,c,s,f;return regeneratorRuntime.wrap(function t(e){while(1){switch(e.prev=e.next){case 0:a=T(r);o=a[4];u=this.getTextWidth(n,r);c=i-u;s=1;f=1;if(c>s){o+=f}else if(c<-s){o-=f}e.next=9;return{difference:c,fontSize:o,fontString:x(a,o),width:u};case 9:case"end":return e.stop()}}},t,this)})},{key:"fit",value:function t(l){var d=this;var h=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;var v=arguments.length>2&&arguments[2]!==undefined?arguments[2]:16;var m=arguments.length>3&&arguments[3]!==undefined?arguments[3]:1024;var e=window.getComputedStyle(l);var p=e.font;var n=T(p);var g=n[4];var w=0;var b=[];var r={element:l,resizer:function(){var t=O(regeneratorRuntime.mark(function t(){var n,r,i,a,o,u,c,s,f;return regeneratorRuntime.wrap(function t(e){while(1){switch(e.prev=e.next){case 0:n=S(l,h);for(r=0;r<4;r++){i=d.getFittedSize(l,p,n).next(),a=i.value;p=a.fontString;g=a.fontSize;w=a.width;b.push({x:w,y:g})}o=y.a.read(b,2);u=o.getTerms();c=o.predictY(u,n*.95);s=Math.min(m,c);f=Math.max(v,s);l.style.fontSize="".concat(f,"px");l.style.lineHeight="".concat(f,"px");case 9:case"end":return e.stop()}}},t)}));function e(){return t.apply(this,arguments)}return e}()};r.resizer();this.elements.push(r);window.addEventListener("resize",r.resizer,false);window.addEventListener("orientationchange",r.resizer,false)}},{key:"removeAllEventListeners",value:function t(){this.elements.forEach(function(t){window.removeEventListener("resize",t.resizer,false);window.removeEventListener("orientationchange",t.resizer,false)})}}]);return t}();var _=new k;function z(e){var t=document.querySelectorAll(".fit__text");t.forEach(function(t){_.fit(t,e)})}function A(t){var e=document.querySelector(".fit__text--fat");if(e){_.fit(e,t)}}function M(){_.removeAllEventListeners()}function j(){var t=document.querySelectorAll(".canvasDemo");t.forEach(function(u){switch(u.getAttribute("demo")){case"Platformer":Promise.all([n.e(0),n.e(3)]).then(n.bind(null,299)).then(function(t){var e=t.default;var n=u.getAttribute("baseurl");window.demo=new e(1e3,1e3,u,{width:640,height:480},n)});break;case"Ascii":n.e(1).then(n.bind(null,293)).then(function(t){var e=t.default;var n=u.getAttribute("fontfamily");var r=parseInt(u.getAttribute("fontsize"),10);var i=parseFloat(u.getAttribute("scale"));var a=u.getAttribute("characters");var o=u.getAttribute("image");return new e(u,o,n,r,i,a)});break;case"Fire":n.e(2).then(n.bind(null,294)).then(function(t){var e=t.default;window.demo=new e(u,320,180)});break;case"NormalMapping":n.e(5).then(n.bind(null,295)).then(function(t){var e=t.default;var n=u.getAttribute("image");var r=u.getAttribute("normal-map");window.demo=new e(u,320,180,n,r)});break;case"Plasma":n.e(6).then(n.bind(null,296)).then(function(t){var e=t.default;window.demo=new e(u,320,180)});break;case"Static":n.e(7).then(n.bind(null,297)).then(function(t){var e=t.default;window.demo=new e(u,320,180)});break;case"Isometric":n.e(4).then(n.bind(null,298)).then(function(t){var e=t.default;var n=u.getAttribute("height-map");window.demo=new e(u,512,256,n)});break;default:break}})}var L=Object(u["a"])({background:"#000000aa"});o()("*",function(t){if(t.init){L.attach(".image__thumb, .image__thumb--alt");z();A();l();d();j();return}var e=new window.XMLHttpRequest;e.onloadend=function(t){if(t.target.status===404){o()("/404")}var e=new window.DOMParser;var n=e.parseFromString(t.target.response,"text/html");var r=n.querySelector(".content");v(r);z();A();l();d();j();L.attach(".image__thumb, .image__thumb--alt")};e.open("GET","".concat(t.path),true);e.send()});o.a.exit("*",function(t,e){m().then(function(){M();if(window.demo&&window.demo.stop){window.demo.stop()}L.detach()}).then(e)});o()();function X(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(t,r.key,r)}}function P(t,e,n){if(e)I(t.prototype,e);if(n)I(t,n);return t}var q=function(){function e(){var t=this;X(this,e);this.showButton=document.querySelector(".navigation__button--open");this.hideButton=document.querySelector(".navigation__button--close");this.topButton=document.querySelector(".navigation__button--top");this.navigation=document.querySelector(".navigation");this.show=this.show.bind(this);this.hide=this.hide.bind(this);this.onTouchStart=this.onTouchStart.bind(this);this.onTouchMove=this.onTouchMove.bind(this);this.onTouchEnd=this.onTouchEnd.bind(this);this.touching=false;this.currentX=0;this.startX=0;this.showButton.addEventListener("click",this.show);this.hideButton.addEventListener("click",this.hide);this.navigation.addEventListener("click",this.hide);this.navigation.addEventListener("touchstart",this.onTouchStart,{passive:true});this.navigation.addEventListener("touchmove",this.onTouchMove,{passive:true});this.navigation.addEventListener("touchend",this.onTouchEnd);this.topButton.addEventListener("click",function(){t.scrollTo(0,500,"easeInOutQuad")},{passive:true})}P(e,[{key:"onTouchStart",value:function t(e){if(this.navigation.classList.contains("navigation--showing")){this.startX=e.touches[0].pageX;this.currentX=this.startX;this.touching=true}}},{key:"onTouchMove",value:function t(e){if(this.touching){this.currentX=e.touches[0].pageX}}},{key:"onTouchEnd",value:function t(){if(this.touching){this.touching=false;if(Math.min(0,this.currentX-this.startX)<0){this.hide()}}}},{key:"show",value:function t(){this.navigation.classList.remove("navigation--hidden");this.navigation.classList.add("navigation--showing")}},{key:"hide",value:function t(){this.navigation.classList.remove("navigation--showing");this.navigation.classList.add("navigation--hidden")}}],[{key:"scrollTo",value:function t(e){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:200;var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"linear";var a={linear:function t(e){return e},easeInQuad:function t(e){return e*e},easeInCubic:function t(e){return e*e*e},easeInQuart:function t(e){return e*e*e*e},easeInQuint:function t(e){return e*e*e*e*e},easeOutQuad:function t(e){return e*(2-e)},easeOutCubic:function t(e){return--e*e*e+1},easeOutQuart:function t(e){return 1- --e*e*e*e},easeOutQuint:function t(e){return 1+--e*e*e*e*e},easeInOutQuad:function t(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInOutCubic:function t(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInOutQuart:function t(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInOutQuint:function t(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var o=window.pageYOffset;var u="now"in window.performance?window.performance.now():(new Date).getTime();var n=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);var c=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight;var s=typeof e==="number"?e:e.offsetTop;var f=s;if(n-s<c){f=n-c}var l=Math.round(f);function d(){var t="now"in window.performance?window.performance.now():(new Date).getTime();var e=Math.min(1,(t-u)/r);var n=a[i](e);window.scroll(0,Math.ceil(n*(l-o)+o));if(window.pageYOffset!==l){window.requestAnimationFrame(d)}}window.requestAnimationFrame(d)}}]);return e}();var F=new q;F.hide()}});