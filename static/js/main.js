!function e(i,t,n){function a(s,d){if(!t[s]){if(!i[s]){var r="function"==typeof require&&require;if(!d&&r)return r(s,!0);if(o)return o(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var c=t[s]={exports:{}};i[s][0].call(c.exports,function(e){var t=i[s][1][e];return a(t?t:e)},c,c.exports,e,i,t,n)}return t[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(e,i,t){e("./scripts"),jQuery(document).ready(function(e){function i(i){var t=e('<ul class="cd-slider-pagination"></ul>').insertAfter(i.find(".cd-slider-navigation"));return i.find(".cd-slider li").each(function(i){var n=e(0==i?'<li class="selected"></li>':"<li></li>"),a=e('<a href="#0"></a>').appendTo(n);n.appendTo(t),a.text(i+1)}),t.children("li")}function t(e,i,t){var n=e.find(".cd-slider .selected"),o=e.find(".cd-slider-pagination .selected");"undefined"==typeof t&&(t=n.index()+1),n.removeClass("selected"),e.find(".cd-slider li").eq(t).addClass("selected").prevAll().addClass("move-left"),o.removeClass("selected"),i.eq(t).addClass("selected"),a(e,e.find(".cd-slider li").eq(t))}function n(e,i,t){var n=e.find(".cd-slider .selected"),o=e.find(".cd-slider-pagination .selected");"undefined"==typeof t&&(t=n.index()-1),n.removeClass("selected"),e.find(".cd-slider li").eq(t).addClass("selected").removeClass("move-left").nextAll().removeClass("move-left"),o.removeClass("selected"),i.eq(t).addClass("selected"),a(e,e.find(".cd-slider li").eq(t))}function a(e,i){e.find(".cd-prev").toggleClass("inactive",i.is(":first-child")),e.find(".cd-next").toggleClass("inactive",i.is(":last-child"))}function o(e){var i=window.getComputedStyle(document.querySelector(".cd-slider"),"::before").getPropertyValue("content").replace(/"/g,"").replace(/'/g,"");return"mobile"==i||e.hasClass("cd-slider-active")}e(".cd-btn").on("click",function(i){i.preventDefault(),e(".cd-panel").addClass("is-visible")}),e("body").on("click",function(i){(e(i.target).is(".cd-panel")||e(i.target).is(".cd-panel-close"))&&(e(".cd-panel").removeClass("is-visible"),i.preventDefault())});var s=e(".cd-single-item");s.each(function(){var d=e(this),r=i(d);a(d,d.find(".cd-slider li").eq(0)),d.find(".cd-slider").on("click",function(i){!d.hasClass("cd-slider-active")&&e(i.target).is(".cd-slider")&&(s.removeClass("cd-slider-active"),d.addClass("cd-slider-active").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e("body,html").animate({scrollTop:d.offset().top},200)}))}),d.find(".cd-close").on("click",function(){d.removeClass("cd-slider-active")}),d.find(".cd-next").on("click",function(){t(d,r)}),d.find(".cd-prev").on("click",function(){n(d,r)}),d.find(".cd-slider").on("swipeleft",function(){var i=e(this),n=o(d);!i.find(".selected").is(":last-child")&&n&&t(d,r)}),d.find(".cd-slider").on("swiperight",function(){var i=e(this),t=o(d);!i.find(".selected").is(":first-child")&&t&&n(d,r)}),r.on("click",function(){var i=e(this);if(!i.hasClass("selected")){var a=i.index(),o=d.find(".cd-slider .selected").index();a>o?t(d,r,a):n(d,r,a)}})}),e(document).keyup(function(i){"37"==i.which&&e(".cd-slider-active").length>0&&!e(".cd-slider-active .cd-slider .selected").is(":first-child")?n(e(".cd-slider-active"),e(".cd-slider-active").find(".cd-slider-pagination li")):"39"==i.which&&e(".cd-slider-active").length&&!e(".cd-slider-active .cd-slider .selected").is(":last-child")?t(e(".cd-slider-active"),e(".cd-slider-active").find(".cd-slider-pagination li")):"27"==i.which&&s.removeClass("cd-slider-active")})})},{"./scripts":2}],2:[function(e,i,t){function n(){var e=$(window).height(),i=parseInt(e)+"px";$(".video-background").css("height",i)}function a(e){$(e).each(function(){$(this).data("height",$(this).height()),$(this).data("width",$(this).width())}),o(e)}function o(e){var i,t,n=$(window).width(),a=$(window).height();$(e).each(function(){var e=$(this).data("height")/$(this).data("width"),o=a/n;e>o?(i=n,t=i*e,console.log(n),console.log(i),$(this).css({top:-(t-a)/2+"px","margin-left":0})):(t=a,i=t/e,$(this).css({"margin-top":0,"margin-left":-(i-n)/2+"px"})),$(this).width(i).height(t),$(".video-background .video-container video").addClass("fadeIn animated")})}function s(){return window.innerWidth<=997?!0:!1}var d,r,l;s();window.mobilecheck=function(){var e=!1;return function(i){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},$(document).ready(function(){n(),a(".video-container video"),$(window).on("resize",function(){n(),o(".video-container video")})}),$(document).ready(function(){"use strict";function e(e){var i,t;return $(e).find('.validate-required[type="checkbox"]').each(function(){$('[name="'+$(this).attr("name")+'"]:checked').length||(t=1,i=$(this).attr("name").replace("[]",""),e.find(".form-error").text("Please tick at least one "+i+" box."))}),$(e).find(".validate-required").each(function(){""===$(this).val()?($(this).addClass("field-error"),t=1):$(this).removeClass("field-error")}),$(e).find(".validate-email").each(function(){/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())?$(this).removeClass("field-error"):($(this).addClass("field-error"),t=1)}),e.find(".field-error").length||e.find(".form-error").fadeOut(1e3),t}function i(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null}if($('[data-toggle="tooltip"]').tooltip(),$(".radio-option").click(function(){$(this).closest("form").find(".radio-option").removeClass("checked"),$(this).addClass("checked"),$(this).find("input").prop("checked",!0)}),$(".tabbed-content").each(function(){$(this).append('<ul class="content"></ul>')}),$(".tabs li").each(function(){var e=$(this),i="";e.is(".tabs li:first-child")&&(i=' class="active"');var t=e.find(".tab-content").detach().wrap("<li"+i+"></li>").parent();e.closest(".tabbed-content").find(".content").append(t)}),$(".tabs li").click(function(){$(this).closest(".tabs").find("li").removeClass("active"),$(this).addClass("active");var e=$(this).index()+1;$(this).closest(".tabbed-content").find(".content>li").removeClass("active"),$(this).closest(".tabbed-content").find(".content>li:nth-of-type("+e+")").addClass("active")}),$("nav").hasClass("fixed")||$("nav").hasClass("absolute")?$("body").addClass("nav-is-overlay"):($(".nav-container").css("min-height",$("nav").outerHeight(!0)),$(window).resize(function(){$(".nav-container").css("min-height",$("nav").outerHeight(!0))})),$("nav").hasClass("bg-dark")&&$(".nav-container").addClass("bg-dark"),r=$("body .nav-container nav:first"),l=$("body .nav-container nav:first").outerHeight(),$(".menu > li > ul").each(function(){var e=$(this).offset(),i=e.left+$(this).outerWidth(!0);if(i>$(window).width()&&!$(this).hasClass("mega-menu"))$(this).addClass("make-right");else if(i>$(window).width()&&$(this).hasClass("mega-menu")){var t=$(window).width()-e.left,n=$(this).outerWidth(!0)-t;$(this).css("margin-left",-n)}}),$(".mobile-toggle").click(function(){$(".nav-bar").toggleClass("nav-open"),$(".dropdownfix").toggleClass("toggle-sub"),$(".dropdownfix").toggleClass("has-dropdown"),$(this).toggleClass("active")}),$(".module.widget-handle").click(function(){$(this).toggleClass("toggle-widget-handle")}),$(".tweets-feed").each(function(e){$(this).attr("id","tweets-"+e)}).each(function(e){function i(i){for(var t=i.length,n=0,a=document.getElementById("tweets-"+e),o='<ul class="slides">';t>n;)o+="<li>"+i[n]+"</li>",n++;return o+="</ul>",a.innerHTML=o,o}twitterFetcher.fetch($("#tweets-"+e).attr("data-widget-id"),"",5,!0,!0,!0,"",!1,i)}),$(".instafeed").length&&(jQuery.fn.spectragram.accessData={accessToken:"791988178.2d41dbd.97f234bc6dd248f18807726f637719c2",clientID:"2d41dbd502f7436fa1cc66d4cbe0174c"}),$(".instafeed").each(function(){var e=$(this).attr("data-user-name")+"-";$(this).children("ul").spectragram("getUserFeed",{query:e,max:15})}),$(".logo-carousel").flexslider({minItems:1,maxItems:4,move:1,itemWidth:200,itemMargin:0,animation:"slide",slideshow:!0,slideshowSpeed:3e3,directionNav:!1,controlNav:!1}),$(".lightbox-grid li a").each(function(){var e=$(this).closest(".lightbox-grid").attr("data-gallery-title");$(this).attr("data-lightbox",e)}),$("section").closest("body").find(".modal-video[video-link]").remove(),$(".modal-video-container").each(function(e){$(this).find(".play-button").attr("video-link",e),$(this).find(".modal-video").clone().appendTo("body").attr("video-link",e)}),$(".modal-video-container .play-button").click(function(){var e=$("section").closest("body").find('.modal-video[video-link="'+$(this).attr("video-link")+'"]');if(e.toggleClass("reveal-modal"),e.find("video").length&&e.find("video").get(0).play(),e.find("iframe").length){var i=e.find("iframe"),t=i.attr("data-src")+"&autoplay=1";i.attr("src",t)}}),$("section").closest("body").find(".close-iframe").click(function(){$(this).closest(".modal-video").toggleClass("reveal-modal"),$(this).siblings("iframe").attr("src",""),$(this).siblings("video").get(0).pause()}),$("section").closest("body").find(".local-video-container .play-button").click(function(){$(this).siblings(".background-image-holder").removeClass("fadeIn"),$(this).siblings(".background-image-holder").css("z-index",-1),$(this).css("opacity",0),$(this).siblings("video").get(0).play()}),$("section").closest("body").find(".player").each(function(){var e=$(this).attr("data-video-id"),i=$(this).attr("data-start-at");$(this).attr("data-property","{videoURL:'http://youtu.be/"+e+"',containment:'self',autoPlay:true, mute:true, startAt:"+i+", opacity:1, showControls:false}")}),$("section").closest("body").find(".player").YTPlayer(),$(".map-holder").click(function(){$(this).addClass("interact")}),$(".countdown").length&&$(".countdown").each(function(){var e=$(this).attr("data-date");$(this).countdown(e,function(e){$(this).text(e.strftime("%D days %H:%M:%S"))})}),$("form.form-email, form.form-newsletter").submit(function(i){i.preventDefault?i.preventDefault():i.returnValue=!1;var t,n,a,o,s,d,r,l=$(this).closest("form.form-email, form.form-newsletter"),c=0,f=l.attr("original-error");return n=$(l).find("iframe.mail-list-form"),l.find(".form-error, .form-success").remove(),l.append('<div class="form-error" style="display: none;">'+l.attr("data-error")+"</div>"),l.append('<div class="form-success" style="display: none;">'+l.attr("data-success")+"</div>"),n.length&&"undefined"!=typeof n.attr("srcdoc")&&""!==n.attr("srcdoc")?(console.log("Mail list form signup detected."),a=$(l).find(".signup-email-field").val(),o=$(l).find(".signup-name-field").val(),s=$(l).find("input.signup-first-name-field").length?$(l).find("input.signup-first-name-field").val():$(l).find(".signup-name-field").val(),d=$(l).find(".signup-last-name-field").val(),1!==e(l)?(console.log("Mail list signup form validation passed."),console.log(a),console.log(d),console.log(s),console.log(o),n.contents().find("#mce-EMAIL, #fieldEmail").val(a),n.contents().find("#mce-LNAME, #fieldLastName").val(d),n.contents().find("#mce-FNAME, #fieldFirstName").val(s),n.contents().find("#mce-NAME, #fieldName").val(o),n.contents().find("form").attr("target","_blank").submit(),r=l.attr("success-redirect"),"undefined"!=typeof r&&r!==!1&&""!==r&&(window.location=r)):(l.find(".form-error").fadeIn(1e3),setTimeout(function(){l.find(".form-error").fadeOut(500)},5e3))):(console.log("Send email form detected."),"undefined"!=typeof f&&f!==!1&&l.find(".form-error").text(f),c=e(l),1===c?($(this).closest("form").find(".form-error").fadeIn(200),setTimeout(function(){$(l).find(".form-error").fadeOut(500)},3e3)):($(this).closest("form").find(".form-error").fadeOut(200),t=jQuery("<div />").addClass("form-loading").insertAfter($(l).find('input[type="submit"]')),$(l).find('input[type="submit"]').hide(),jQuery.ajax({type:"POST",url:"mail/mail.php",data:l.serialize(),success:function(e){$(l).find(".form-loading").remove(),r=l.attr("success-redirect"),"undefined"!=typeof r&&r!==!1&&""!==r&&(window.location=r),$(l).find('input[type="submit"]').show(),$.isNumeric(e)?parseInt(e)>0&&(l.find('input[type="text"]').val(""),l.find("textarea").val(""),l.find(".form-success").fadeIn(1e3),l.find(".form-error").fadeOut(1e3),setTimeout(function(){l.find(".form-success").fadeOut(500)},5e3)):(l.find(".form-error").attr("original-error",l.find(".form-error").text()),l.find(".form-error").text(e).fadeIn(1e3),l.find(".form-success").fadeOut(1e3))},error:function(e,i,t){l.find(".form-error").attr("original-error",l.find(".form-error").text()),l.find(".form-error").text(t).fadeIn(1e3),l.find(".form-success").fadeOut(1e3),$(l).find(".form-loading").remove(),$(l).find('input[type="submit"]').show()}}))),!1}),$(".validate-required, .validate-email").on("blur change",function(){e($(this).closest("form"))}),$("form").each(function(){$(this).find(".form-error").length&&$(this).attr("original-error",$(this).find(".form-error").text())}),i("ref")&&$("form.form-email").append('<input type="text" name="referrer" class="hidden" value="'+i("ref")+'"/>'),/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)&&$("section").removeClass("parallax"),$(".disqus-comments").length){var t=$(".disqus-comments").attr("data-shortname");!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//"+t+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}()}}),$(window).load(function(){"use strict";var e=setInterval(function(){return $(".tweets-slider").find("li.flex-active-slide").length?void clearInterval(e):void($(".tweets-slider").length&&$(".tweets-slider").flexslider({directionNav:!1,controlNav:!1}))},500);d=$(".main-container section:nth-of-type(1)").outerHeight(!0)})},{}]},{},[1]);