(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{305:function(t,e,i){"use strict";i.r(e);i.d(e,"default",function(){return r});var a=i(293);var n=i.n(a);function o(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function h(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(t,a.key,a)}}function s(t,e,i){if(e)h(t.prototype,e);if(i)h(t,i);return t}var v={up:"w",right:"d",down:"s",left:"a",rotateRight:"e",rotateLeft:"q",zoomOut:"x",zoomIn:"z"};function u(t,e){var i=t-e;var a=t+e>>1;return{x:i,y:a}}function g(t,e,i){return e*(i<<2)+(t<<2)}var r=function(){function r(t,e,i){o(this,r);this.viewport={angle:0,scale:1.25,heightScale:.25,x:0,y:0};this.canvas=t;this.canvas.width=e;this.canvas.height=i;this.context2D=this.canvas.getContext("2d");this.context2D.imageSmoothingEnabled=false;this.viewport.canvas=document.createElement("canvas");this.viewport.canvas.style.imageRendering="pixelated";this.viewport.canvas.width=e/2;this.viewport.canvas.height=i;this.viewport.canvas.centerX=this.viewport.canvas.width/2;this.viewport.canvas.centerY=this.viewport.canvas.height/2;this.viewport.context2D=this.viewport.canvas.getContext("2d");this.viewport.context2D.imageSmoothingEnabled=false;this.buffer=this.context2D.createImageData(e,i);this.buffer.size=e*i*4;this.buffer.lineHeight=e*4;this.keyboard={};document.addEventListener("keydown",this.keydownHandler.bind(this));document.addEventListener("keyup",this.keyupHandler.bind(this));this.generator=new n.a.MapGenerator;this.noiseMap=this.generator.createMap(400,200,{type:"simplex",amplitude:1,frequency:.5,amplitudeCoef:.5,frequencyCoef:.5,elevation:.5,step:false,stepValue:30});this.noiseMap.draw(this.viewport.context2D,this.viewport.canvas.width,this.viewport.canvas.height,n.a.STYLE.GRAY);var a=this.viewport.context2D.getImageData(0,0,this.viewport.canvas.width,this.viewport.canvas.height);this.noiseMap.draw(this.viewport.context2D,this.viewport.canvas.width,this.viewport.canvas.height,n.a.STYLE.REALISTIC,true);var h=this.viewport.context2D.getImageData(0,0,this.viewport.canvas.width,this.viewport.canvas.height);for(var s=0;s<a.data.length;s+=4){a.data[s+3]=a.data[s];a.data[s+2]=h.data[s+2];a.data[s+1]=h.data[s+1];a.data[s]=h.data[s]}this.viewport.context2D.putImageData(a,0,0);this.heightmap=new window.Image;this.heightmap.src=this.viewport.canvas.toDataURL();this.running=true;this.updateViewport();this.update()}s(r,[{key:"stop",value:function t(){this.running=false;document.removeEventListener("keydown",this.keydownHandler);document.removeEventListener("keyup",this.keyupHandler)}},{key:"keydownHandler",value:function t(e){if(!e.repeat){this.keyboard[e.key]=true}}},{key:"keyupHandler",value:function t(e){this.keyboard[e.key]=false}},{key:"checkKeys",value:function t(){var e=2/this.viewport.scale;var i=0;var a=0;if(this.keyboard[v.right]){i+=e;a-=e}if(this.keyboard[v.left]){i-=e;a+=e}if(this.keyboard[v.down]){i+=e;a+=e}if(this.keyboard[v.up]){i-=e;a-=e}if(this.keyboard[v.zoomIn]){this.viewport.scale+=.0025;this.viewport.heightScale+=5e-4}if(this.keyboard[v.zoomOut]){if(this.viewport.scale>0){this.viewport.scale-=.0025;this.viewport.heightScale-=5e-4}}if(this.keyboard[v.rotateLeft]){this.viewport.angle=(this.viewport.angle-1)%360}if(this.keyboard[v.rotateRight]){this.viewport.angle=(this.viewport.angle+1)%360}this.viewport.angle=(this.viewport.angle-.2)%360;this.setViewport(this.viewport.x+i,this.viewport.y+a)}},{key:"setViewport",value:function t(e,i){if(e>0&&e<this.heightmap.width-this.viewport.canvas.width){this.viewport.x=e}if(i>0&&i<this.heightmap.height-this.viewport.canvas.height){this.viewport.y=i}this.updateViewport()}},{key:"updateViewport",value:function t(){this.viewport.context2D.clearRect(0,0,this.viewport.canvas.width,this.viewport.canvas.height);this.viewport.context2D.save();this.viewport.context2D.translate(this.viewport.canvas.centerX,this.viewport.canvas.centerY);this.viewport.context2D.scale(this.viewport.scale,this.viewport.scale);this.viewport.context2D.rotate(this.viewport.angle*Math.PI/180);this.viewport.context2D.translate(-this.viewport.canvas.centerX,-this.viewport.canvas.centerY);this.viewport.context2D.drawImage(this.heightmap,this.viewport.x,this.viewport.y,this.viewport.canvas.width,this.viewport.canvas.height,0,0,this.viewport.canvas.width,this.viewport.canvas.height);this.viewport.map=this.viewport.context2D.getImageData(0,0,this.viewport.canvas.width,this.viewport.canvas.height);for(var e=0;e<this.viewport.map.data.length;e+=4){this.viewport.map.data[e+3]*=this.viewport.heightScale}this.viewport.context2D.restore()}},{key:"update",value:function t(){for(var e=0;e<this.buffer.data.length;e+=4){this.buffer.data[e]=0;this.buffer.data[e+1]=0;this.buffer.data[e+2]=0;this.buffer.data[e+3]=0}for(var i=this.viewport.map.height-1;i>0;i--){for(var a=this.viewport.map.width-1;a>0;a--){var h=g(a,i,this.viewport.map.width);var s=this.viewport.map.data[h];var r=this.viewport.map.data[h+1];var n=this.viewport.map.data[h+2];var o=this.viewport.map.data[h+3];var v=u(a,i);var p=g(v.x-this.viewport.canvas.width,v.y-o+this.viewport.canvas.centerY/4,this.buffer.width);var w=0;while(o>0){if(p>this.buffer.length||p<this.buffer.lineHeight){break}if(this.buffer.data[p+3]!==0){break}this.buffer.data[p]=s-w;this.buffer.data[p+1]=r-w;this.buffer.data[p+2]=n-w;this.buffer.data[p+3]=255-(w<<1);p+=this.buffer.lineHeight;o--;if(w<255){w+=4}}}}this.context2D.putImageData(this.buffer,0,0);var c=this.canvas.width/16;var d=this.canvas.height/9;var f={x:this.canvas.centerX+c,y:this.canvas.centerY+d,w:c,h:d};this.context2D.drawImage(this.heightmap,f.x,f.y,f.w,f.h,0,0,this.viewport.canvas.width,this.viewport.canvas.height);this.checkKeys();if(this.running){window.requestAnimationFrame(this.update.bind(this))}}}]);return r}()}}]);