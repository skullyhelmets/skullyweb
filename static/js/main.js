function swapImage(e,t){setTimeout(function(){var i=e.children("img").eq(t).attr("src");e.css("background",'url("'+i+'")'),t++,t>e.children("img").length-1&&(t=0),swapImage(e,t)},8e3)}function prepcta(){console.log(document.body);var e=document.getElementsByClassName("wistia_embed");console.log(e);var t=e.contentDocument||e.contentWindow.document;console.log(t.onended);var i=document.getElementById("wistia_14");i.onended=function(){alert("Starting to load video")}}function resizeVid(){$(".fs-vid-background video").each(function(){var e=$(this),t=e.width()/e.height(),i=e.closest("section");i.width()>i.outerHeight()?(e.css("width",i.width()*t),e.css("margin-left",-(i.width()*t/4)),e.css("height","auto")):(e.css("width","auto"),e.css("height",i.outerHeight()*t),e.css("margin-left","0"))})}function detectmob(){return window.innerWidth<=997?!0:!1}function updateNav(){var e=mr_scrollTop;if(0>=e)return mr_navFixed&&(mr_navFixed=!1,mr_nav.removeClass("fixed")),mr_outOfSight&&(mr_outOfSight=!1,mr_nav.removeClass("outOfSight")),void(mr_navScrolled&&(mr_navScrolled=!1,mr_nav.removeClass("scrolled")));if(e>mr_firstSectionHeight){if(!mr_navScrolled)return mr_nav.addClass("scrolled"),void(mr_navScrolled=!0)}else e>mr_navOuterHeight?(mr_navFixed||mobile||(mr_nav.addClass("fixed"),mr_navFixed=!0),e>2*mr_navOuterHeight?(console.log("FFFFF"),mr_outOfSight||mobile||(mr_nav.addClass("outOfSight"),mr_outOfSight=!0)):mr_outOfSight&&(mr_outOfSight=!1,mr_nav.removeClass("outOfSight"))):(mr_navFixed&&(mr_navFixed=!1,mr_nav.removeClass("fixed")),mr_outOfSight&&(mr_outOfSight=!1,mr_nav.removeClass("outOfSight"))),mr_navScrolled&&(mr_navScrolled=!1,mr_nav.removeClass("scrolled"))}function capitaliseFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}function setupFloatingProjectFilters(){mr_floatingProjectSections=[],$(".filters.floating").closest("section").each(function(){var e=$(this);mr_floatingProjectSections.push({section:e.get(0),outerHeight:e.outerHeight(),elemTop:e.offset().top,elemBottom:e.offset().top+e.outerHeight(),filters:e.find(".filters.floating"),filersHeight:e.find(".filters.floating").outerHeight(!0)})})}function updateFloatingFilters(){for(var e=mr_floatingProjectSections.length;e--;){var t=mr_floatingProjectSections[e];t.elemTop<mr_scrollTop?(t.filters.css({position:"fixed",top:"16px",bottom:"auto"}),mr_navScrolled&&t.filters.css({transform:"translate3d(-50%,48px,0)"}),mr_scrollTop>t.elemBottom-70&&(t.filters.css({position:"absolute",bottom:"16px",top:"auto"}),t.filters.css({transform:"translate3d(-50%,0,0)"}))):t.filters.css({position:"absolute",transform:"translate3d(-50%,0,0)"})}}jQuery(document).ready(function(e){function t(t){var i=e('<ul class="cd-slider-pagination"></ul>').insertAfter(t.find(".cd-slider-navigation"));return t.find(".cd-slider li").each(function(t){var n=e(0==t?'<li class="selected"></li>':"<li></li>"),s=e('<a href="#0"></a>').appendTo(n);n.appendTo(i),s.text(t+1)}),i.children("li")}function i(e,t,i){var n=e.find(".cd-slider .selected"),o=e.find(".cd-slider-pagination .selected");"undefined"==typeof i&&(i=n.index()+1),n.removeClass("selected"),e.find(".cd-slider li").eq(i).addClass("selected").prevAll().addClass("move-left"),o.removeClass("selected"),t.eq(i).addClass("selected"),s(e,e.find(".cd-slider li").eq(i))}function n(e,t,i){var n=e.find(".cd-slider .selected"),o=e.find(".cd-slider-pagination .selected");"undefined"==typeof i&&(i=n.index()-1),n.removeClass("selected"),e.find(".cd-slider li").eq(i).addClass("selected").removeClass("move-left").nextAll().removeClass("move-left"),o.removeClass("selected"),t.eq(i).addClass("selected"),s(e,e.find(".cd-slider li").eq(i))}function s(e,t){e.find(".cd-prev").toggleClass("inactive",t.is(":first-child")),e.find(".cd-next").toggleClass("inactive",t.is(":last-child"))}function o(e){var t=window.getComputedStyle(document.querySelector(".cd-slider"),"::before").getPropertyValue("content").replace(/"/g,"").replace(/'/g,"");return"mobile"==t||e.hasClass("cd-slider-active")}e(".cd-btn").on("click",function(t){t.preventDefault(),e(".cd-panel").addClass("is-visible")}),e("body").on("click",function(t){(e(t.target).is(".cd-panel")||e(t.target).is(".cd-panel-close"))&&(e(".cd-panel").removeClass("is-visible"),t.preventDefault())});var r=e(".cd-single-item");r.each(function(){var a=e(this),d=t(a);s(a,a.find(".cd-slider li").eq(0)),a.find(".cd-slider").on("click",function(t){!a.hasClass("cd-slider-active")&&e(t.target).is(".cd-slider")&&(r.removeClass("cd-slider-active"),a.addClass("cd-slider-active").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e("body,html").animate({scrollTop:a.offset().top},200)}))}),a.find(".cd-close").on("click",function(){a.removeClass("cd-slider-active")}),a.find(".cd-next").on("click",function(){i(a,d)}),a.find(".cd-prev").on("click",function(){n(a,d)}),a.find(".cd-slider").on("swipeleft",function(){var t=e(this),n=o(a);!t.find(".selected").is(":last-child")&&n&&i(a,d)}),a.find(".cd-slider").on("swiperight",function(){var t=e(this),i=o(a);!t.find(".selected").is(":first-child")&&i&&n(a,d)}),d.on("click",function(){var t=e(this);if(!t.hasClass("selected")){var s=t.index(),o=a.find(".cd-slider .selected").index();s>o?i(a,d,s):n(a,d,s)}})}),e(document).keyup(function(t){"37"==t.which&&e(".cd-slider-active").length>0&&!e(".cd-slider-active .cd-slider .selected").is(":first-child")?n(e(".cd-slider-active"),e(".cd-slider-active").find(".cd-slider-pagination li")):"39"==t.which&&e(".cd-slider-active").length&&!e(".cd-slider-active .cd-slider .selected").is(":last-child")?i(e(".cd-slider-active"),e(".cd-slider-active").find(".cd-slider-pagination li")):"27"==t.which&&r.removeClass("cd-slider-active")})});var mr_firstSectionHeight,mr_nav,mr_navOuterHeight,mr_navScrolled=!1,mr_navFixed=!1,mr_outOfSight=!1,mr_floatingProjectSections,mr_scrollTop=0,mobile=detectmob();$(document).ready(function(){"use strict";function e(e){var t,i;return $(e).find('.validate-required[type="checkbox"]').each(function(){$('[name="'+$(this).attr("name")+'"]:checked').length||(i=1,t=$(this).attr("name").replace("[]",""),e.find(".form-error").text("Please tick at least one "+t+" box."))}),$(e).find(".validate-required").each(function(){""===$(this).val()?($(this).addClass("field-error"),i=1):$(this).removeClass("field-error")}),$(e).find(".validate-email").each(function(){/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())?$(this).removeClass("field-error"):($(this).addClass("field-error"),i=1)}),e.find(".field-error").length||e.find(".form-error").fadeOut(1e3),i}function t(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null}if($(".background-image-holder").each(function(){var e=$(this).children("img").attr("src");$(this).css("background",'url("'+e+'")'),$(this).children("img").hide(),$(this).css("background-position","initial"),$(this).css("opacity","1"),$(this).children("img").length>1&&swapImage($(this),1)}),$('[data-toggle="tooltip"]').tooltip(),$(".radio-option").click(function(){$(this).closest("form").find(".radio-option").removeClass("checked"),$(this).addClass("checked"),$(this).find("input").prop("checked",!0)}),$(".tabbed-content").each(function(){$(this).append('<ul class="content"></ul>')}),$(".tabs li").each(function(){var e=$(this),t="";e.is(".tabs li:first-child")&&(t=' class="active"');var i=e.find(".tab-content").detach().wrap("<li"+t+"></li>").parent();e.closest(".tabbed-content").find(".content").append(i)}),$(".tabs li").hover(function(){$(this).closest(".tabs").find("li").removeClass("active"),$(this).addClass("active");var e=$(this).index()+1;$(this).closest(".tabbed-content").find(".content>li").removeClass("active"),$(this).closest(".tabbed-content").find(".content>li:nth-of-type("+e+")").addClass("active")}),$("nav").hasClass("fixed")||$("nav").hasClass("absolute")?$("body").addClass("nav-is-overlay"):($(".nav-container").css("min-height",$("nav").outerHeight(!0)),$(window).resize(function(){$(".nav-container").css("min-height",$("nav").outerHeight(!0))})),$("nav").hasClass("bg-dark")&&$(".nav-container").addClass("bg-dark"),mr_nav=$("body .nav-container nav:first"),mr_navOuterHeight=$("body .nav-container nav:first").outerHeight(),$(".menu > li > ul").each(function(){var e=$(this).offset(),t=e.left+$(this).outerWidth(!0);if(t>$(window).width()&&!$(this).hasClass("mega-menu"))$(this).addClass("make-right");else if(t>$(window).width()&&$(this).hasClass("mega-menu")){var i=$(window).width()-e.left,n=$(this).outerWidth(!0)-i;$(this).css("margin-left",-n)}}),$(".mobile-toggle").click(function(){$(".nav-bar").toggleClass("nav-open"),$(".dropdownfix").toggleClass("toggle-sub"),$(".dropdownfix").toggleClass("has-dropdown"),$(this).toggleClass("active")}),$(".module.widget-handle").click(function(){$(this).toggleClass("toggle-widget-handle")}),$(".instafeed").length&&(jQuery.fn.spectragram.accessData={accessToken:"791988178.2d41dbd.97f234bc6dd248f18807726f637719c2",clientID:"2d41dbd502f7436fa1cc66d4cbe0174c"}),$(".instafeed").each(function(){var e=$(this).attr("data-user-name")+"-";$(this).children("ul").spectragram("getUserFeed",{query:e,max:12})}),$(".logo-carousel").flexslider({minItems:1,maxItems:4,move:1,itemWidth:200,itemMargin:0,animation:"slide",slideshow:!0,slideshowSpeed:3e3,directionNav:!1,controlNav:!1}),$(".lightbox-grid li a").each(function(){var e=$(this).closest(".lightbox-grid").attr("data-gallery-title");$(this).attr("data-lightbox",e)}),$("section").closest("body").find(".modal-video[video-link]").remove(),$(".modal-video-container").each(function(e){$(this).find(".play-button").attr("video-link",e),$(this).find(".modal-video").clone().appendTo("body").attr("video-link",e)}),$(".modal-video-container .play-button").click(function(){var e=$("section").closest("body").find('.modal-video[video-link="'+$(this).attr("video-link")+'"]');if(e.toggleClass("reveal-modal"),e.find("video").length&&e.find("video").get(0).play(),e.find("iframe").length){var t=e.find("iframe"),i=t.attr("data-src")+"&autoplay=1";t.attr("src",i)}}),$("section").closest("body").find(".close-iframe").click(function(){$(this).closest(".modal-video").toggleClass("reveal-modal"),$(this).siblings("iframe").attr("src",""),$(this).siblings("video").get(0).pause()}),$("section").closest("body").find(".local-video-container .play-button").click(function(){$(this).siblings(".background-image-holder").removeClass("fadeIn"),$(this).siblings(".background-image-holder").css("z-index",-1),$(this).css("opacity",0),$(this).siblings("video").get(0).play()}),$("section").closest("body").find(".player").each(function(){var e=$(this).attr("data-video-id"),t=$(this).attr("data-start-at");$(this).attr("data-property","{videoURL:'http://youtu.be/"+e+"',containment:'self',autoPlay:true, mute:true, startAt:"+t+", opacity:1, showControls:false}")}),$("section").closest("body").find(".player").YTPlayer(),$(window).resize(function(){resizeVid()}),$(".map-holder").click(function(){$(this).addClass("interact")}),$(".countdown").length&&$(".countdown").each(function(){var e=$(this).attr("data-date");$(this).countdown(e,function(e){$(this).text(e.strftime("%D days %H:%M:%S"))})}),$("form.form-email, form.form-newsletter").submit(function(t){t.preventDefault?t.preventDefault():t.returnValue=!1;var i,n,s,o,r,a,d,l=$(this).closest("form.form-email, form.form-newsletter"),c=0,f=l.attr("original-error");return n=$(l).find("iframe.mail-list-form"),l.find(".form-error, .form-success").remove(),l.append('<div class="form-error" style="display: none;">'+l.attr("data-error")+"</div>"),l.append('<div class="form-success" style="display: none;">'+l.attr("data-success")+"</div>"),n.length&&"undefined"!=typeof n.attr("srcdoc")&&""!==n.attr("srcdoc")?(console.log("Mail list form signup detected."),s=$(l).find(".signup-email-field").val(),o=$(l).find(".signup-name-field").val(),r=$(l).find("input.signup-first-name-field").length?$(l).find("input.signup-first-name-field").val():$(l).find(".signup-name-field").val(),a=$(l).find(".signup-last-name-field").val(),1!==e(l)?(console.log("Mail list signup form validation passed."),console.log(s),console.log(a),console.log(r),console.log(o),n.contents().find("#mce-EMAIL, #fieldEmail").val(s),n.contents().find("#mce-LNAME, #fieldLastName").val(a),n.contents().find("#mce-FNAME, #fieldFirstName").val(r),n.contents().find("#mce-NAME, #fieldName").val(o),n.contents().find("form").attr("target","_blank").submit(),d=l.attr("success-redirect"),"undefined"!=typeof d&&d!==!1&&""!==d&&(window.location=d)):(l.find(".form-error").fadeIn(1e3),setTimeout(function(){l.find(".form-error").fadeOut(500)},5e3))):(console.log("Send email form detected."),"undefined"!=typeof f&&f!==!1&&l.find(".form-error").text(f),c=e(l),1===c?($(this).closest("form").find(".form-error").fadeIn(200),setTimeout(function(){$(l).find(".form-error").fadeOut(500)},3e3)):($(this).closest("form").find(".form-error").fadeOut(200),i=jQuery("<div />").addClass("form-loading").insertAfter($(l).find('input[type="submit"]')),$(l).find('input[type="submit"]').hide(),jQuery.ajax({type:"POST",url:"mail/mail.php",data:l.serialize(),success:function(e){$(l).find(".form-loading").remove(),d=l.attr("success-redirect"),"undefined"!=typeof d&&d!==!1&&""!==d&&(window.location=d),$(l).find('input[type="submit"]').show(),$.isNumeric(e)?parseInt(e)>0&&(l.find('input[type="text"]').val(""),l.find("textarea").val(""),l.find(".form-success").fadeIn(1e3),l.find(".form-error").fadeOut(1e3),setTimeout(function(){l.find(".form-success").fadeOut(500)},5e3)):(l.find(".form-error").attr("original-error",l.find(".form-error").text()),l.find(".form-error").text(e).fadeIn(1e3),l.find(".form-success").fadeOut(1e3))},error:function(e,t,i){l.find(".form-error").attr("original-error",l.find(".form-error").text()),l.find(".form-error").text(i).fadeIn(1e3),l.find(".form-success").fadeOut(1e3),$(l).find(".form-loading").remove(),$(l).find('input[type="submit"]').show()}}))),!1}),$(".validate-required, .validate-email").on("blur change",function(){e($(this).closest("form"))}),$("form").each(function(){$(this).find(".form-error").length&&$(this).attr("original-error",$(this).find(".form-error").text())}),t("ref")&&$("form.form-email").append('<input type="text" name="referrer" class="hidden" value="'+t("ref")+'"/>'),/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)&&$("section").removeClass("parallax"),$(".disqus-comments").length){var i=$(".disqus-comments").attr("data-shortname");!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//"+i+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}()}}),$(window).load(function(){"use strict";var e=setInterval(function(){return $(".tweets-slider").find("li.flex-active-slide").length?void clearInterval(e):void($(".tweets-slider").length&&$(".tweets-slider").flexslider({directionNav:!1,controlNav:!1}))},500);mr_firstSectionHeight=$(".main-container section:nth-of-type(1)").outerHeight(!0)}),$("document").ready(function(){resizeVid()});