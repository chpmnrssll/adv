(function(c){function t(t){var e=t[0];var n=t[1];var i=t[2];var r,o,a=0,u=[];for(;a<e.length;a++){o=e[a];if(f[o]){u.push(f[o][0])}f[o]=0}for(r in n){if(Object.prototype.hasOwnProperty.call(n,r)){c[r]=n[r]}}if(v)v(t);while(u.length){u.shift()()}d.push.apply(d,i||[]);return s()}function s(){var t;for(var e=0;e<d.length;e++){var n=d[e];var i=true;for(var r=1;r<n.length;r++){var o=n[r];if(f[o]!==0)i=false}if(i){d.splice(e--,1);t=l(l.s=n[0])}}return t}var n={};var f={8:0};var d=[];function h(t){return l.p+""+({1:"Ascii",2:"Fire",3:"Game",4:"Heightmap",5:"NormalMap",6:"Plasma",7:"Static"}[t]||t)+"-"+"cf0b2256f17096b4a806"+".bundle.js"}function l(t){if(n[t]){return n[t].exports}var e=n[t]={i:t,l:false,exports:{}};c[t].call(e.exports,e,e.exports,l);e.l=true;return e.exports}l.e=function t(o){var e=[];var n=f[o];if(n!==0){if(n){e.push(n[2])}else{var i=new Promise(function(t,e){n=f[o]=[t,e]});e.push(n[2]=i);var a=document.createElement("script");var r;a.charset="utf-8";a.timeout=120;if(l.nc){a.setAttribute("nonce",l.nc)}a.src=h(o);r=function(t){a.onerror=a.onload=null;clearTimeout(u);var e=f[o];if(e!==0){if(e){var n=t&&(t.type==="load"?"missing":t.type);var i=t&&t.target&&t.target.src;var r=new Error("Loading chunk "+o+" failed.\n("+n+": "+i+")");r.type=n;r.request=i;e[1](r)}f[o]=undefined}};var u=setTimeout(function(){r({type:"timeout",target:a})},12e4);a.onerror=a.onload=r;document.head.appendChild(a)}}return Promise.all(e)};l.m=c;l.c=n;l.d=function(t,e,n){if(!l.o(t,e)){Object.defineProperty(t,e,{enumerable:true,get:n})}};l.r=function(t){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(t,"__esModule",{value:true})};l.t=function(e,t){if(t&1)e=l(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var n=Object.create(null);l.r(n);Object.defineProperty(n,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n};l.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};l.d(t,"a",t);return t};l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};l.p="/advanced-static-site/assets/";l.oe=function(t){console.error(t);throw t};var e=window["webpackJsonp"]=window["webpackJsonp"]||[];var i=e.push.bind(e);e.push=t;e=e.slice();for(var r=0;r<e.length;r++)t(e[r]);var v=i;d.push([6,0]);return s()})({3:function(t,e,n){},6:function(t,e,n){"use strict";n.r(e);var i=n(3);var r=n(1);var o=n.n(r);var u=n(2);var c=n(0);function s(e,t){var n=Object(c["b"])({values:[{z:0,rotateX:0},{z:40,rotateX:-40},{z:0,rotateX:0},{z:5,rotateX:-10},{z:0,rotateX:0}],duration:768,times:[0,.65,.75,.85,1]});setTimeout(function(){n.start(function(t){return e.set(t)})},t)}var a=function(){var t=document.querySelectorAll(".animated-headline");var o=48;var a=24;if(t){t.forEach(function(t,e){if(t&&t.innerText!==""){var n=Object(u["a"])(t,{delimeter:"word",each:function t(e){e.getRootNode().style.marginRight="8px"}});var i=Array.from(n).map(c["c"]);var r=e*o;i.forEach(function(t,e){var n=e*a+r;s(t,n);var i=setInterval(function(){try{s(t,n)}catch(t){clearInterval(i)}},15e3)})}})}};var f=function(){var t=document.querySelectorAll(".footer__logo-img");if(t){var e=Array.from(t).map(c["c"]);e.forEach(function(e,t){e.set({y:-(t*2)});Object(c["d"])({from:{rotate:-3,x:(Math.random()-.5)*10},to:{rotate:3,x:(Math.random()-.5)*10},ease:c["a"].easeInOut,flip:Infinity,duration:1e3+Math.random()*4e3}).start(function(t){return e.set(t)});var n=Object(c["d"])({from:{scale:1},to:{scale:1.05},ease:c["a"].easeInOut,flip:1,duration:500});setInterval(function(){n.start(function(t){return e.set(t)})},2e3+Math.random()*8e3)})}};var d=256;function h(t){var e=document.querySelector(".content");e.parentNode.replaceChild(t,e);var n=Object(c["c"])(t);var i=Object(c["d"])({from:{opacity:0,rotateX:30,scaleY:0,z:-1024},to:{opacity:1,rotateX:0,scaleY:1,z:0},ease:c["a"].easeInOut,duration:d});i.start(function(t){return n.set(t)})}function l(){var i=document.querySelector(".content");return new Promise(function(e){var n=Object(c["c"])(i);var t=Object(c["d"])({from:{opacity:1,rotateX:0,scaleY:1,z:0},to:{opacity:0,rotateX:30,scaleY:0,z:-1024},ease:c["a"].easeInOut,duration:d});t.start({update:function t(e){return n.set(e)},complete:function t(){window.scroll(0,0);e()}})})}function v(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(t,i.key,i)}}function w(t,e,n){if(e)m(t.prototype,e);if(n)m(t,n);return t}var p=function(){function e(t){v(this,e);this.canvas=document.createElement("canvas");this.context=this.canvas.getContext("2d");this.compressor=t||1;this.maxFontSize=128;this.minFontSize=16}w(e,[{key:"getTextWidth",value:function t(e){var n=window.getComputedStyle(e);this.context.font=n.font;return{fontSize:parseInt(n.fontSize,10),width:this.context.measureText(e.innerText).width,computedStyle:n}}},{key:"fit",value:function t(d,e,n,i){var h=this;this.minFontSize=e||this.minFontSize;this.maxFontSize=n||this.maxFontSize;this.compressor=i||this.compressor;var l=16;var r=function t(){var e=h.getTextWidth(d),n=e.fontSize,i=e.width;var r=window.getComputedStyle(d.parentElement);var o=parseInt(r.padding,10)+l||l;var a=parseInt(r.width,10)-o||0;var u=a*h.compressor-i;var c=Math.max(Math.min(n,h.maxFontSize),h.minFontSize);if(u>n){var s="".concat(c*1.1,"px");d.style.fontSize=s;d.style.lineHeight=s;window.requestAnimationFrame(t)}else if(-u>n){var f="".concat(c*.99,"px");d.style.fontSize=f;d.style.lineHeight=f;window.requestAnimationFrame(t)}};r();if(window.addEventListener){window.addEventListener("resize",r,false);window.addEventListener("orientationchange",r,false)}else{window.attachEvent("onresize",r);window.attachEvent("orientationchange",r)}return this}}]);return e}();var g=new p;function b(e,n){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;var t=document.querySelectorAll(".fit__text");t.forEach(function(t){return g.fit(t,e,n,i)})}function y(t,e){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;var i=document.querySelector(".fit__text--fat");if(i){g.fit(i,t,e,n)}}var S="";function O(t){var e=t.pathname;switch(e){case"".concat(S,"/demo/2018/03/27/Platformer.html"):Promise.all([n.e(0),n.e(3)]).then(n.bind(null,16)).then(function(t){var e=t.default;window.demo=new e(1e3,1e3,document.querySelector(".canvasDemo"),{width:640,height:480})});break;case"".concat(S,"/demo/2017/10/13/Ascii-Demo.html"):n.e(1).then(n.bind(null,10)).then(function(t){var a=t.default;document.querySelectorAll(".canvasDemo").forEach(function(t){var e=t.getAttribute("fontfamily");var n=parseInt(t.getAttribute("fontsize"),10);var i=t.getAttribute("image");var r=parseFloat(t.getAttribute("scale"));var o=t.getAttribute("characters");return new a(t,i,e,n,r,o)})}).catch(function(){return"An error occurred while loading the component"});break;case"".concat(S,"/demo/2017/10/18/Fire.html"):n.e(2).then(n.bind(null,11)).then(function(t){var e=t.default;window.demo=new e(320,180)});break;case"".concat(S,"/demo/2018/03/26/NormalMapping.html"):n.e(5).then(n.bind(null,12)).then(function(t){var e=t.default;window.demo=new e(320,180)});break;case"".concat(S,"/demo/2017/10/19/Plasma.html"):n.e(6).then(n.bind(null,13)).then(function(t){var e=t.default;window.demo=new e(320,180)});break;case"".concat(S,"/demo/2017/10/17/Static.html"):n.e(7).then(n.bind(null,14)).then(function(t){var e=t.default;window.demo=new e(320,180)});break;case"".concat(S,"/demo/2017/10/21/Isometric.html"):n.e(4).then(n.bind(null,15)).then(function(t){var e=t.default;window.demo=new e(512,256)});break;default:break}}o()("*",function(r){if(r.init){b(16,128);y(16,128,1);a();f();O(r);return}var t=new window.XMLHttpRequest;t.onloadend=function(t){if(t.target.status===404){o()("/404")}var e=new window.DOMParser;var n=e.parseFromString(t.target.response,"text/html");var i=n.querySelector(".content");h(i);b(24,128);y(64,128,.7);a();f();O(r)};t.open("GET","".concat(r.path),true);t.send()});o.a.exit("*",function(t,e){l().then(function(){if(window.demo&&window.demo.stop){window.demo.stop()}}).then(e)});o()();function E(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function T(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(t,i.key,i)}}function x(t,e,n){if(e)T(t.prototype,e);if(n)T(t,n);return t}var k=function(){function e(){var t=this;E(this,e);this.showButton=document.querySelector(".navigation__button--open");this.hideButton=document.querySelector(".navigation__button--close");this.topButton=document.querySelector(".navigation__button--top");this.navigation=document.querySelector(".navigation");this.show=this.show.bind(this);this.hide=this.hide.bind(this);this.onTouchStart=this.onTouchStart.bind(this);this.onTouchMove=this.onTouchMove.bind(this);this.onTouchEnd=this.onTouchEnd.bind(this);this.touching=false;this.currentX=0;this.startX=0;this.showButton.addEventListener("click",this.show);this.hideButton.addEventListener("click",this.hide);this.navigation.addEventListener("click",this.hide);this.navigation.addEventListener("touchstart",this.onTouchStart,{passive:true});this.navigation.addEventListener("touchmove",this.onTouchMove,{passive:true});this.navigation.addEventListener("touchend",this.onTouchEnd);this.topButton.addEventListener("click",function(){t.scrollTo(0,500,"easeInOutQuad")},{passive:true})}x(e,[{key:"onTouchStart",value:function t(e){if(this.navigation.classList.contains("navigation--showing")){this.startX=e.touches[0].pageX;this.currentX=this.startX;this.touching=true}}},{key:"onTouchMove",value:function t(e){if(this.touching){this.currentX=e.touches[0].pageX}}},{key:"onTouchEnd",value:function t(){if(this.touching){this.touching=false;if(Math.min(0,this.currentX-this.startX)<0){this.hide()}}}},{key:"show",value:function t(){this.navigation.classList.remove("navigation--hidden");this.navigation.classList.add("navigation--showing")}},{key:"hide",value:function t(){this.navigation.classList.remove("navigation--showing");this.navigation.classList.add("navigation--hidden")}}],[{key:"scrollTo",value:function t(e){var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:200;var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"linear";var o={linear:function t(e){return e},easeInQuad:function t(e){return e*e},easeInCubic:function t(e){return e*e*e},easeInQuart:function t(e){return e*e*e*e},easeInQuint:function t(e){return e*e*e*e*e},easeOutQuad:function t(e){return e*(2-e)},easeOutCubic:function t(e){return--e*e*e+1},easeOutQuart:function t(e){return 1- --e*e*e*e},easeOutQuint:function t(e){return 1+--e*e*e*e*e},easeInOutQuad:function t(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInOutCubic:function t(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInOutQuart:function t(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInOutQuint:function t(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var a=window.pageYOffset;var u="now"in window.performance?window.performance.now():(new Date).getTime();var n=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);var c=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight;var s=typeof e==="number"?e:e.offsetTop;var f=s;if(n-s<c){f=n-c}var d=Math.round(f);function h(){var t="now"in window.performance?window.performance.now():(new Date).getTime();var e=Math.min(1,(t-u)/i);var n=o[r](e);window.scroll(0,Math.ceil(n*(d-a)+a));if(window.pageYOffset!==d){window.requestAnimationFrame(h)}}window.requestAnimationFrame(h)}}]);return e}();var z=new k;z.hide()}});