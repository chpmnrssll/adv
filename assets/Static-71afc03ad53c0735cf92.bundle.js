(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{296:function(t,e,n){"use strict";n.r(e);n.d(e,"default",function(){return s});function a(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function i(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(t,a.key,a)}}function r(t,e,n){if(e)i(t.prototype,e);if(n)i(t,n);return t}var s=function(){function n(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:256;var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:256;a(this,n);this.canvas=document.querySelector(".canvasDemo");this.canvas.width=t;this.canvas.height=e;this.canvas.centerX=t/2;this.canvas.centerY=e/2;this.context2D=this.canvas.getContext("2d");this.context2D.imageSmoothingEnabled=false;this.buffer=this.context2D.createImageData(t,e);this.buffer.size=t*e*4;this.buffer.lineHeight=t*4;this.running=true;this.update()}r(n,[{key:"update",value:function t(){for(var e=0;e<this.buffer.size;e++){var n=Math.floor(Math.random()*255);var a=e*4;this.buffer.data[a++]=n;this.buffer.data[a++]=n;this.buffer.data[a++]=n;this.buffer.data[a++]=255}this.context2D.putImageData(this.buffer,0,0);if(this.running){window.requestAnimationFrame(this.update.bind(this))}}},{key:"stop",value:function t(){this.running=false}}]);return n}()}}]);