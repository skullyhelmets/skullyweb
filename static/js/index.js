!function e(t,o,i){function s(n,a){if(!o[n]){if(!t[n]){var c="function"==typeof require&&require;if(!a&&c)return c(n,!0);if(d)return d(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var v=o[n]={exports:{}};t[n][0].call(v.exports,function(e){var o=t[n][1][e];return s(o?o:e)},v,v.exports,e,t,o,i)}return o[n].exports}for(var d="function"==typeof require&&require,n=0;n<i.length;n++)s(i[n]);return s}({1:[function(e,t,o){function s(){window.mobilecheck()||(c*=-1,0>c?($("#hudvid").find("#hudwebm").attr("src","http://dg6vcgn2vehm4.cloudfront.net/videos/HUD2.webm"),$("#hudvid").find("#hudmp4").attr("src","http://dg6vcgn2vehm4.cloudfront.net/videos/HUD2.mp4"),$("#hudvid").find("#hudogv").attr("src","http://dg6vcgn2vehm4.cloudfront.net/videos/HUD2.ogv"),$("#hudvid").load(),$("#hudvid")[0].play(),$("#hudtext").fadeOut(600),$("#hudtext2").fadeIn(600)):($("#hudvid").find("#hudwebm").attr("src","http://dg6vcgn2vehm4.cloudfront.net/videos/HUD1.webm"),$("#hudvid").find("#hudmp4").attr("src","http://dg6vcgn2vehm4.cloudfront.net/videos/HUD1.mp4"),$("#hudvid").find("#hudogv").attr("src","http://dg6vcgn2vehm4.cloudfront.net/videos/HUD1.ogv"),$("#hudvid").load(),$("#hudvid")[0].play(),$("#hudtext2").fadeOut(600),$("#hudtext").fadeIn(600)))}function d(){if(console.log(u),h=!0,u>0){if(0!=$(".explosive-active").length){var e=$(".explosive-active")[0];e.pause(),setTimeout(function(){e.currentTime=0},3e3)}g?($("#explosive-vid"+u).removeClass("explosive-active"),u++):$("#explosive-vid"+u+"b").removeClass("explosive-active")}else u++;$("#explosive-vid"+u).addClass("explosive-active"),$(".explosive-active")[0].currentTime=0,$(".explosive-active")[0].play(),5===u?y.css("display","none"):u>=1&&b.css("display","inline"),g=!0}function n(){if(6>u){var e=$(".explosive-active")[0];e.pause(),setTimeout(function(){e.currentTime=0},3e3),g?$("#explosive-vid"+u).removeClass("explosive-active"):($("#explosive-vid"+u+"b").removeClass("explosive-active"),u--)}$("#explosive-vid"+u+"b").addClass("explosive-active"),$(".explosive-active")[0].play(),1===u?b.css("display","none"):5>=u&&y.css("display","inline"),g=!1}function a(e){var t=$(".explosive-active")[0];t.pause(),setTimeout(function(){t.currentTime=0},3e3),$("#explosive-vid"+u).attr("class",""),$("#exp"+u).removeClass("active"),u=e,console.log(u),d()}window._wq=window._wq||[],_wq.push({"1nw":function(e){e.bind("play",function(){})}}),window.wistiaEmbedShepherdReady=function(){};var c=1,r=$("#explosive").offset().top,v=r+$("#explosive-vid").height(),l=$("#signup").offset().top,p=(l+$("#signup").height(),$("#pov").offset().top,$("#explosive").next("section").offset().top,0),u=1,h=!1,g=!0;if(!window.mobilecheck()){document.getElementById("explosive").innerHTML=' <div id="explosive-previous-holder"> <a id="explosive-previous" onclick="prevExplosion()"> <i class="icon-uparrow icon-md"></i> </a> </div> <div id="explosive-next-holder"> <a id="explosive-next" onclick="nextExplosion()"> <i class="icon-downarrow icon-md"></i> </a> </div> <video id="explosive-vid1" class="explosive-active"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive1.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive1.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive1.mp4" type="video/mp4"> </video> <video id="explosive-vid2"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive2.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive2.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive2.mp4" type="video/mp4"> </video> <video id="explosive-vid3"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive3.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive3.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive3.mp4" type="video/mp4"> </video> <video id="explosive-vid4"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive4.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive4.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive4.mp4" type="video/mp4"> </video> <video id="explosive-vid5"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive5.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive5.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive5.mp4" type="video/mp4"> </video> <video id="explosive-vid1b"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive1backwards.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive1backwards.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive1backwards.mp4" type="video/mp4"> </video> <video id="explosive-vid2b"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive2backwards.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive2backwards.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive2backwards.mp4" type="video/mp4"> </video> <video id="explosive-vid3b"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive3backwards.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive3backwards.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive3backwards.mp4" type="video/mp4"> </video> <video id="explosive-vid4b"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive4backwards.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive4backwards.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive4backwards.mp4" type="video/mp4"> </video> <video id="explosive-vid5b"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive5backwards.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive5backwards.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive5backwards.mp4" type="video/mp4"> </video>',document.getElementById("indexhero").innerHTML='<video autoplay loop class="fillWidth"> <source src="http://dg6vcgn2vehm4.cloudfront.net/videos/indexvid.mp4" type="video/mp4"> <source src="http://dg6vcgn2vehm4.cloudfront.net/videos/indexvid.webm" type="video/webm"> <source src="http://dg6vcgn2vehm4.cloudfront.net/videos/indexvid.ogv" type="video/ogv"> Your browser does not support the video tag. I suggest you upgrade your browser. </video>',document.getElementById("hud").innerHTML='<video id="hudvid" muted style="height:100%; position:absolute; right: 0; top: 0;"> <source id="hudwebm" class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/HUD1.webm" type="video/webm"> <source id="hudmp4" class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/HUD1.mp4" type="video/mp4"> <source id="hudogv" class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/HUD1.ogv" type="video/ogv"> </video> <div class="container" id="hudtext"> <div id="hudheader" class="mb56 row"> <div class="col-md-12"> <h2 class="xbold uppercase">360&deg; Awareness, <br>Every Second</h2> </div> </div> <div class="hudbody row"> <div class="col-md-4"> <h5 class="uppercase xbold"> <i class="icon-HUD_3 icon-sm2"></i> Heads-Up Display</h5> <p class="subheader">Always in focus and floating <br>right in front of you.</p> <hr> </div> </div> <div class="hudbody row"> <div class="col-md-4"> <h5 class="uppercase xbold"> <i class="icon-blindspot_w2 icon-sm2"></i> 180° Blindspot Camera</h5> <p class="subheader">Ultra-wide to show you more <br> than conventional mirrors.</p> <hr> </div> </div> <div class="mb32" id="hudbuttons"> <a class="btn btn-hud active-hud" onclick="swapHUD()"></a> <a class="btn btn-hud" onclick="swapHUD()"></a> </div> </div> <div class="container" id="hudtext2"> <div class="row mb56"> <div class="col-md-12"> <h2 class="xbold uppercase">Vital, Real-time Data <br> at a Glance</h2> </div> </div> <div class="row"> <div class="col-md-4"> <h5 class="xbold uppercase"> <i class="icon-mph_w2 icon-sm2"></i> Speed</h5> <p class="subheader">Instantly glanceable MPH in <br>your Heads-Up Display. </p> <hr> </div> </div> <div class="row"> <div class="col-md-4"> <h5 class="bold uppercase"> <i class="icon-checktech_w2 icon-sm2"></i> Turn-by-Turn GPS</h5> <p class="subheader">Audio and visual navigation <br>when you need it.</p> <hr> </div> </div> <a class="btn btn-hud" onclick="swapHUD()"></a> <a class="btn btn-hud active-hud" onclick="swapHUD()"></a> </div>',document.getElementById("pov-vid").innerHTML='<video autoplay loop class="fillWidth"> <source src="http://dg6vcgn2vehm4.cloudfront.net/videos/pov.webm" type="video/webm"> <source src="http://dg6vcgn2vehm4.cloudfront.net/videos/pov.ogv" type="video/ogv"> <source src="http://dg6vcgn2vehm4.cloudfront.net/videos/pov.mp4" type="video/mp4"> </video>',$("#pov").addClass("video-background");var m=$("#hudvid").offset().top,f=$("#hudvid")[0],y=$("#explosive-next"),b=$("#explosive-previous");$(window).scroll(function(){var e=$(window).scrollTop();e>=r-55&&v>=e&&!h&&(h=!0),e>=m-55&&0===p&&(p=1,f.play(),$("#hudtext").fadeIn(100),$("#hudheader").fadeIn(500,function(){$(".hudbody").fadeIn(500),$("#hudbuttons").fadeIn(500)}),$("#hudvid").on("ended",s))})}window.swapHUD=s;var w=document.getElementsByClassName("minipress");for(i=0;i<w.length;i++)w[i].addEventListener("mouseover",function(){this.setAttribute("src",this.getAttribute("src").replace("-black","-red"))}),w[i].addEventListener("mouseout",function(){this.setAttribute("src",this.getAttribute("src").replace("-red","-black"))});window.nextExplosion=d,window.prevExplosion=n,window.goToExplosion=a;var x=$("#hoversound")[0];$("#hovertext").mouseenter(function(){x.play()});var _=$("#scatman")[0];$(".scatbutton").click(function(){_.volume=.3,_.play(),alert("ITS SCATMAN TIME!!!!")}),$(function(){$("#hudmobile").swipe({swipeRight:function(e,t,o,i,d,n){console.log("You swiped "+t),s()},swipeLeft:function(e,t,o,i,d,n){console.log("You swiped "+t),s()},allowPageScroll:"vertical",preventDefaultEvents:!1})}),e("./lazyload")},{"./lazyload":2}],2:[function(e,t,o){var i=e("layzr.js");i.prototype._getOffset=function(e){var t=e;if("SOURCE"==e.tagName)for(;0===t.getBoundingClientRect().top&&"BODY"!=t.tagName;)t=t.parentNode;return t.getBoundingClientRect().top+window.pageYOffset},$(document).ready(function(){new i({attr:"data-src",selector:"[data-src]",threshold:50,callback:function(){var e=$(this);if("SOURCE"==e.prop("tagName")){var t=e.closest("video")[0];t&&(t.load(),t.play()),$(t).css("opacity",1)}else e.css("opacity",1);return this.classList.add("loaded")}})})},{"layzr.js":3}],3:[function(e,t,o){!function(e,i){"function"==typeof define&&define.amd?define([],i):"object"==typeof o?t.exports=i():e.Layzr=i()}(this,function(){"use strict";function e(e){this._lastScroll=0,this._ticking=!1,e=e||{},this._optionsContainer=document.querySelector(e.container)||window,this._optionsSelector=e.selector||"[data-layzr]",this._optionsAttr=e.attr||"data-layzr",this._optionsAttrRetina=e.retinaAttr||"data-layzr-retina",this._optionsAttrBg=e.bgAttr||"data-layzr-bg",this._optionsAttrHidden=e.hiddenAttr||"data-layzr-hidden",this._optionsThreshold=e.threshold||0,this._optionsCallback=e.callback||null,this._retina=window.devicePixelRatio>1,this._srcAttr=this._retina?this._optionsAttrRetina:this._optionsAttr,this._nodes=document.querySelectorAll(this._optionsSelector),this._handlerBind=this._requestScroll.bind(this),this._create()}return e.prototype._requestScroll=function(){this._optionsContainer===window?this._lastScroll=window.pageYOffset:this._lastScroll=this._optionsContainer.scrollTop+this._getOffset(this._optionsContainer),this._requestTick()},e.prototype._requestTick=function(){this._ticking||(requestAnimationFrame(this.update.bind(this)),this._ticking=!0)},e.prototype._getOffset=function(e){return e.getBoundingClientRect().top+window.pageYOffset},e.prototype._getContainerHeight=function(){return this._optionsContainer.innerHeight||this._optionsContainer.offsetHeight},e.prototype._create=function(){this._handlerBind(),this._optionsContainer.addEventListener("scroll",this._handlerBind,!1),this._optionsContainer.addEventListener("resize",this._handlerBind,!1)},e.prototype._destroy=function(){this._optionsContainer.removeEventListener("scroll",this._handlerBind,!1),this._optionsContainer.removeEventListener("resize",this._handlerBind,!1)},e.prototype._inViewport=function(e){var t=this._lastScroll,o=t+this._getContainerHeight(),i=this._getOffset(e),s=i+this._getContainerHeight(),d=this._optionsThreshold/100*window.innerHeight;return s>=t-d&&o+d>=i&&!e.hasAttribute(this._optionsAttrHidden)},e.prototype._reveal=function(e){var t=e.getAttribute(this._srcAttr)||e.getAttribute(this._optionsAttr);e.hasAttribute(this._optionsAttrBg)?e.style.backgroundImage="url("+t+")":e.setAttribute("src",t),"function"==typeof this._optionsCallback&&this._optionsCallback.call(e),e.removeAttribute(this._optionsAttr),e.removeAttribute(this._optionsAttrRetina),e.removeAttribute(this._optionsAttrBg),e.removeAttribute(this._optionsAttrHidden)},e.prototype.updateSelector=function(){this._nodes=document.querySelectorAll(this._optionsSelector)},e.prototype.update=function(){for(var e=this._nodes.length,t=0;e>t;t++){var o=this._nodes[t];o.hasAttribute(this._optionsAttr)&&this._inViewport(o)&&this._reveal(o)}this._ticking=!1},e})},{}]},{},[1]);