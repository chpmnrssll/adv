(function(u){function t(t){var e=t[0];var n=t[1];var i=t[2];var a,r,o=0,s=[];for(;o<e.length;o++){r=e[o];if(l[r]){s.push(l[r][0])}l[r]=0}for(a in n){if(Object.prototype.hasOwnProperty.call(n,a)){u[a]=n[a]}}if(v)v(t);while(s.length){s.shift()()}h.push.apply(h,i||[]);return c()}function c(){var t;for(var e=0;e<h.length;e++){var n=h[e];var i=true;for(var a=1;a<n.length;a++){var r=n[a];if(l[r]!==0)i=false}if(i){h.splice(e--,1);t=d(d.s=n[0])}}return t}var n={};var l={8:0};var h=[];function f(t){return d.p+""+({1:"Ascii",2:"Fire",3:"Game",4:"Heightmap",5:"NormalMap",6:"Plasma",7:"Static"}[t]||t)+"-"+"c496dff22b13e47a1abb"+".bundle.js"}function d(t){if(n[t]){return n[t].exports}var e=n[t]={i:t,l:false,exports:{}};u[t].call(e.exports,e,e.exports,d);e.l=true;return e.exports}d.e=function t(r){var e=[];var n=l[r];if(n!==0){if(n){e.push(n[2])}else{var i=new Promise(function(t,e){n=l[r]=[t,e]});e.push(n[2]=i);var o=document.createElement("script");var a;o.charset="utf-8";o.timeout=120;if(d.nc){o.setAttribute("nonce",d.nc)}o.src=f(r);a=function(t){o.onerror=o.onload=null;clearTimeout(s);var e=l[r];if(e!==0){if(e){var n=t&&(t.type==="load"?"missing":t.type);var i=t&&t.target&&t.target.src;var a=new Error("Loading chunk "+r+" failed.\n("+n+": "+i+")");a.type=n;a.request=i;e[1](a)}l[r]=undefined}};var s=setTimeout(function(){a({type:"timeout",target:o})},12e4);o.onerror=o.onload=a;document.head.appendChild(o)}}return Promise.all(e)};d.m=u;d.c=n;d.d=function(t,e,n){if(!d.o(t,e)){Object.defineProperty(t,e,{enumerable:true,get:n})}};d.r=function(t){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(t,"__esModule",{value:true})};d.t=function(e,t){if(t&1)e=d(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var n=Object.create(null);d.r(n);Object.defineProperty(n,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var i in e)d.d(n,i,function(t){return e[t]}.bind(null,i));return n};d.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};d.d(t,"a",t);return t};d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};d.p="/advanced-static-site/assets/";d.oe=function(t){console.error(t);throw t};var e=window["webpackJsonp"]=window["webpackJsonp"]||[];var i=e.push.bind(e);e.push=t;e=e.slice();for(var a=0;a<e.length;a++)t(e[a]);var v=i;h.push([289,0]);return c()})({287:function(t,e,n){},289:function(t,e,n){"use strict";n.r(e);var i=n(121);var a=n(287);var r=n(48);var o=n.n(r);var s=n(118);var c=n(7);var u=function(){var t=document.querySelectorAll(".footer__logo-img");if(t){var e=Array.from(t).map(c["c"]);e.forEach(function(e,t){e.set({y:-(t*2)});Object(c["d"])({from:{rotate:-3,x:(Math.random()-.5)*10},to:{rotate:3,x:(Math.random()-.5)*10},ease:c["a"].easeInOut,flip:Infinity,duration:1e3+Math.random()*4e3}).start(function(t){return e.set(t)});var n=Object(c["d"])({from:{scale:1},to:{scale:1.05},ease:c["a"].easeInOut,flip:1,duration:500});setInterval(function(){n.start(function(t){return e.set(t)})},2e3+Math.random()*8e3)})}};var l=n(119);function h(e,t){var n=Object(c["b"])({values:[{z:0,rotateX:0},{z:40,rotateX:-40},{z:0,rotateX:0},{z:5,rotateX:-10},{z:0,rotateX:0}],duration:768,times:[0,.65,.75,.85,1]});setTimeout(function(){n.start(function(t){return e.set(t)})},t)}var f=function(){var t=document.querySelectorAll(".animated-headline");var s=48;var u=24;if(t){t.forEach(function(t,e){if(t&&t.innerText!==""){var n=window.getComputedStyle(t);var i=parseFloat(n.fontSize,10);var a=Object(l["a"])(t,{delimeter:"word",each:function t(e){e.getRootNode().style.marginRight="".concat(i/4,"px")}});var r=Array.from(a).map(c["c"]);var o=e*s;r.forEach(function(t,e){var n=e*u+o;h(t,n)})}})}};var d=256;function v(t){var e=document.querySelector(".content");e.parentNode.replaceChild(t,e);var n=Object(c["c"])(t);var i=Object(c["d"])({from:{opacity:0,scaleY:0,z:-128},to:{opacity:1,scaleY:1,z:0},ease:c["a"].easeInOut,duration:d});i.start(function(t){return n.set(t)})}function g(){var i=document.querySelector(".content");return new Promise(function(e){var n=Object(c["c"])(i);var t=Object(c["d"])({from:{opacity:1,scaleY:1,z:0},to:{opacity:0,scaleY:0,z:-512},ease:c["a"].easeInOut,duration:d});t.start({update:function t(e){return n.set(e)},complete:function t(){window.scroll(0,0);e()}})})}function p(){var t=document.querySelectorAll(".canvasDemo");t.forEach(function(s){switch(s.getAttribute("demo")){case"Platformer":Promise.all([n.e(0),n.e(3)]).then(n.bind(null,298)).then(function(t){var e=t.default;var n=s.getAttribute("baseurl")||"";window.demo=new e(s,{width:1280,height:720},n)});break;case"Ascii":n.e(1).then(n.bind(null,299)).then(function(t){var e=t.default;var n=s.getAttribute("fontfamily");var i=parseInt(s.getAttribute("fontsize"),10);var a=parseFloat(s.getAttribute("scale"));var r=s.getAttribute("characters");var o=s.getAttribute("image");return new e(s,o,n,i,a,r)});break;case"Fire":n.e(2).then(n.bind(null,300)).then(function(t){var e=t.default;window.demo=new e(s,320,180)});break;case"NormalMapping":n.e(5).then(n.bind(null,301)).then(function(t){var e=t.default;var n=s.getAttribute("image");var i=s.getAttribute("normal-map");window.demo=new e(s,320,180,n,i)});break;case"Plasma":n.e(6).then(n.bind(null,302)).then(function(t){var e=t.default;window.demo=new e(s,320,180)});break;case"Static":n.e(7).then(n.bind(null,303)).then(function(t){var e=t.default;window.demo=new e(s,320,180)});break;case"Isometric":n.e(4).then(n.bind(null,304)).then(function(t){var e=t.default;var n=s.getAttribute("height-map");window.demo=new e(s,512,256,n)});break;default:break}})}var m=n(120);var b=n.n(m);function w(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(t,i.key,i)}}function y(t,e,n){if(e)w(t.prototype,e);if(n)w(t,n);return t}function S(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}var O=function t(e){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;S(this,t);this.element=e;this.style=window.getComputedStyle(this.element);this.paddingLeft=parseFloat(this.style.paddingLeft,10)||0;this.paddingRight=parseFloat(this.style.paddingRight,10)||0;this.padding=this.paddingLeft+this.paddingRight;this.width=(parseFloat(this.style.width,10)||0)+this.padding;var i=window.getComputedStyle(this.element.parentElement);this.parent={element:e.parentElement,style:i,paddingLeft:parseFloat(i.paddingLeft,10)||0,paddingRight:parseFloat(i.paddingRight,10)||0};this.parent.padding=this.parent.paddingLeft+this.parent.paddingRight;this.parent.width=((parseFloat(i.width,10)||0)-this.parent.padding)*n;this.font={style:this.style.fontStyle,variant:this.style.fontVariant,weight:parseFloat(this.style.fontWeight,10),size:parseFloat(this.style.fontSize,10),lineHeight:parseFloat(this.style.lineHeight,10),family:this.style.fontFamily}};var T=function(){function t(){S(this,t);this.canvas=document.createElement("canvas");this.context=this.canvas.getContext("2d")}y(t,[{key:"measureText",value:function t(e){var n=e.element,i=e.font,a=e.padding;var r=i.style,o=i.variant,s=i.weight,u=i.size,c=i.lineHeight,l=i.family;this.context.font="".concat(r," ").concat(o," ").concat(s," ").concat(u,"px/").concat(c,"px ").concat(l);return this.context.measureText(n.innerText).width+a}}]);return t}();var k=function(){function t(){S(this,t);this.textMetrics=new T}y(t,[{key:"fit",value:function t(e){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:16;var a=arguments.length>3&&arguments[3]!==undefined?arguments[3]:1024;var r=new O(e,n);var o=[];for(var s=0;s<3;s++){r.font.size+=s;var u=r.font.size/10;o.push({x:this.textMetrics.measureText(r),y:r.font.size-u})}r.model=b.a.read(o,2);r.terms=r.model.getTerms();var c=r.model.predictY(r.terms,r.parent.width);var l=Math.max(i,Math.min(a,c));var h=100*l/window.innerWidth;r.element.style.fontSize="".concat(h,"vw");r.element.style.lineHeight="".concat(h,"vw")}}]);return t}();function x(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function E(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(t,i.key,i)}}function A(t,e,n){if(e)E(t.prototype,e);if(n)E(t,n);return t}var L=function(){function n(){var i=this;var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{rootMargin:"0% 0% 0% 0%",threshold:0,imageClass:".image--lazyload",imageVisibleClass:"image--visible"};x(this,n);this.options=t;var e=function t(e,n){e.forEach(function(t){if(t.isIntersecting){t.target.srcset=t.target.getAttribute("data-srcset")||"";t.target.src=t.target.getAttribute("data-src")||"";t.target.classList.add(i.options.imageVisibleClass);n.unobserve(t.target)}})};this.observer=new window.IntersectionObserver(e,this.options)}A(n,[{key:"lazyLoad",value:function t(){var e=this;this.images=document.querySelectorAll(this.options.imageClass);this.images.forEach(function(t){return e.observer.observe(t)})}}]);return n}();var j=new k;var z=new L;var M=Object(s["a"])({background:"#000000aa"});function F(){var t=document.querySelectorAll(".fit__text");t.forEach(function(t){var e=t.getAttribute("compress")||1;var n=t.getAttribute("minFontSize")||16;var i=t.getAttribute("maxFontSize")||1024;j.fit(t,e,n,i)})}function P(){F();f();u();p();z.lazyLoad();M.attach(".image__thumb, .image__thumb--alt")}o()("*",function(t){if(t.init){P();return}var e=new window.XMLHttpRequest;e.onloadend=function(t){if(t.target.status===404){o()("/404")}var e=new window.DOMParser;var n=e.parseFromString(t.target.response,"text/html");var i=n.querySelector(".content");v(i);P()};e.open("GET","".concat(t.path),true);e.send()});o.a.exit("*",function(t,e){g().then(function(){M.detach();if(window.demo&&window.demo.stop){window.demo.stop()}}).then(e)});o()();function X(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function _(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(t,i.key,i)}}function q(t,e,n){if(e)_(t.prototype,e);if(n)_(t,n);return t}var C=function(){function t(){X(this,t);this.hamburgerButton=document.querySelector(".hamburger");this.topButton=document.querySelector(".navigation__button--top");this.navigation=document.querySelector(".navigation");this.toggle=this.toggle.bind(this);this.show=this.show.bind(this);this.hide=this.hide.bind(this);this.onTouchStart=this.onTouchStart.bind(this);this.onTouchMove=this.onTouchMove.bind(this);this.onTouchEnd=this.onTouchEnd.bind(this);this.showing=false;this.touching=false;this.currentX=0;this.startX=0;this.hamburgerButton.addEventListener("click",this.toggle);this.navigation.addEventListener("click",this.hide);this.navigation.addEventListener("touchstart",this.onTouchStart,{passive:true});this.navigation.addEventListener("touchmove",this.onTouchMove,{passive:true});this.navigation.addEventListener("touchend",this.onTouchEnd);this.topButton.addEventListener("click",function(){var n=Object(c["c"])(window);var t=Object(c["d"])({from:window.scrollY,to:0,ease:c["a"].easeInOut,duration:512});t.start({update:function t(e){return n.set("scrollTop",e)}})},{passive:true})}q(t,[{key:"onTouchStart",value:function t(e){if(this.navigation.classList.contains("navigation--showing")){this.startX=e.touches[0].pageX;this.currentX=this.startX;this.touching=true}}},{key:"onTouchMove",value:function t(e){if(this.touching){this.currentX=e.touches[0].pageX}}},{key:"onTouchEnd",value:function t(){if(this.touching){this.touching=false;if(Math.min(0,this.currentX-this.startX)<0){this.hide()}}}},{key:"toggle",value:function t(){if(this.showing){this.hide()}else{this.show()}}},{key:"show",value:function t(){this.navigation.classList.remove("navigation--hidden");this.navigation.classList.add("navigation--showing");this.hamburgerButton.classList.add("is-active");this.showing=true}},{key:"hide",value:function t(){this.navigation.classList.remove("navigation--showing");this.navigation.classList.add("navigation--hidden");this.hamburgerButton.classList.remove("is-active");this.showing=false}}]);return t}();var I=new C;I.hide()}});