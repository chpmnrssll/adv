(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{296:function(t,i,e){"use strict";e.r(i);e.d(i,"default",function(){return n});function r(t,i){if(!(t instanceof i)){throw new TypeError("Cannot call a class as a function")}}function s(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||false;s.configurable=true;if("value"in s)s.writable=true;Object.defineProperty(t,s.key,s)}}function a(t,i,e){if(i)s(t.prototype,i);if(e)s(t,e);return t}var n=function(){function h(t){var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:256;var e=arguments.length>2&&arguments[2]!==undefined?arguments[2]:256;r(this,h);this.canvas=t;this.canvas.width=i;this.canvas.height=e;this.canvas.centerX=i/2;this.canvas.centerY=e/2;this.context2D=this.canvas.getContext("2d");this.context2D.imageSmoothingEnabled=false;this.buffer=this.context2D.createImageData(i,e);this.buffer.size=i*e*4;this.buffer.lineHeight=i*4;this.yIndex=[];for(var s=0;s<e;s++){this.yIndex[s]=s*i}this.palette={};for(var a=0;a<256;a++){this.palette[a]={};this.palette[a].r=~~(128+128*Math.sin(Math.PI*a/64));this.palette[a].g=~~(128+128*Math.sin(Math.PI*a/96));this.palette[a].b=~~(128+128*Math.sin(Math.PI*a/128))}this.sinc={};for(var n=0;n<1800;n++){this.sinc[n]=Math.sin(Math.PI*n/180)*1024}this.running=true;this.speed=1;this.tick=0;this.update()}a(h,[{key:"update",value:function t(){this.tick=(this.tick+this.speed)%720;for(var i=0;i<this.canvas.height;i++){var e=128+(this.sinc[(i<<1)+(this.tick>>1)]+this.sinc[i+(this.tick<<1)]+(this.sinc[(i>>1)+this.tick]<<1)>>6);for(var s=0;s<this.canvas.width;s++){var a=128+((this.sinc[s+(this.tick<<1)]<<1)+this.sinc[(s<<1)+(this.tick>>1)]+(this.sinc[s+this.tick]<<1)>>6);var n=this.yIndex[i]+s<<2;var h=Math.abs((e*a>>5)%255);this.buffer.data[n++]=this.palette[h].r;this.buffer.data[n++]=this.palette[h].g;this.buffer.data[n++]=this.palette[h].b;this.buffer.data[n++]=255}}this.context2D.putImageData(this.buffer,0,0);if(this.running){window.requestAnimationFrame(this.update.bind(this))}}},{key:"stop",value:function t(){this.running=false}}]);return h}()}}]);