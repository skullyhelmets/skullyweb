function swapImage(e,t){setTimeout(function(){var i=e.children("img").eq(t).attr("src");e.css("background",'url("'+i+'")'),t++,t>e.children("img").length-1&&(t=0),swapImage(e,t)},8e3)}function prepcta(){console.log(document.body);var e=document.getElementsByClassName("wistia_embed");console.log(e);var t=e.contentDocument||e.contentWindow.document;console.log(t.onended);var i=document.getElementById("wistia_14");i.onended=function(){alert("Starting to load video")}}function resizeVid(){$(".fs-vid-background video").each(function(){var e=$(this),t=e.width()/e.height(),i=e.closest("section");i.width()>i.outerHeight()?(e.css("width",i.width()*t*.95),e.css("margin-left",.8*-(i.width()*t/4)),e.css("height","auto")):(e.css("width","auto"),e.css("height",i.outerHeight()*t),e.css("margin-left","0"))})}function detectmob(){return window.innerWidth<=997?!0:!1}function updateNav(){var e=mr_scrollTop;if(0>=e)return mr_navFixed&&(mr_navFixed=!1,mr_nav.removeClass("fixed")),mr_outOfSight&&(mr_outOfSight=!1,mr_nav.removeClass("outOfSight")),void(mr_navScrolled&&(mr_navScrolled=!1,mr_nav.removeClass("scrolled")));if(e>mr_firstSectionHeight){if(!mr_navScrolled)return mr_nav.addClass("scrolled"),void(mr_navScrolled=!0)}else e>mr_navOuterHeight?(mr_navFixed||mobile||(mr_nav.addClass("fixed"),mr_navFixed=!0),e>2*mr_navOuterHeight?(console.log("FFFFF"),mr_outOfSight||mobile||(mr_nav.addClass("outOfSight"),mr_outOfSight=!0)):mr_outOfSight&&(mr_outOfSight=!1,mr_nav.removeClass("outOfSight"))):(mr_navFixed&&(mr_navFixed=!1,mr_nav.removeClass("fixed")),mr_outOfSight&&(mr_outOfSight=!1,mr_nav.removeClass("outOfSight"))),mr_navScrolled&&(mr_navScrolled=!1,mr_nav.removeClass("scrolled"))}function capitaliseFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}function setupFloatingProjectFilters(){mr_floatingProjectSections=[],$(".filters.floating").closest("section").each(function(){var e=$(this);mr_floatingProjectSections.push({section:e.get(0),outerHeight:e.outerHeight(),elemTop:e.offset().top,elemBottom:e.offset().top+e.outerHeight(),filters:e.find(".filters.floating"),filersHeight:e.find(".filters.floating").outerHeight(!0)})})}function updateFloatingFilters(){for(var e=mr_floatingProjectSections.length;e--;){var t=mr_floatingProjectSections[e];t.elemTop<mr_scrollTop?(t.filters.css({position:"fixed",top:"16px",bottom:"auto"}),mr_navScrolled&&t.filters.css({transform:"translate3d(-50%,48px,0)"}),mr_scrollTop>t.elemBottom-70&&(t.filters.css({position:"absolute",bottom:"16px",top:"auto"}),t.filters.css({transform:"translate3d(-50%,0,0)"}))):t.filters.css({position:"absolute",transform:"translate3d(-50%,0,0)"})}}jQuery(document).ready(function(e){function t(t){var i=e('<ul class="cd-slider-pagination"></ul>').insertAfter(t.find(".cd-slider-navigation"));return t.find(".cd-slider li").each(function(t){var n=e(0==t?'<li class="selected"></li>':"<li></li>"),o=e('<a href="#0"></a>').appendTo(n);n.appendTo(i),o.text(t+1)}),i.children("li")}function i(e,t,i){var n=e.find(".cd-slider .selected"),a=e.find(".cd-slider-pagination .selected");"undefined"==typeof i&&(i=n.index()+1),n.removeClass("selected"),e.find(".cd-slider li").eq(i).addClass("selected").prevAll().addClass("move-left"),a.removeClass("selected"),t.eq(i).addClass("selected"),o(e,e.find(".cd-slider li").eq(i))}function n(e,t,i){var n=e.find(".cd-slider .selected"),a=e.find(".cd-slider-pagination .selected");"undefined"==typeof i&&(i=n.index()-1),n.removeClass("selected"),e.find(".cd-slider li").eq(i).addClass("selected").removeClass("move-left").nextAll().removeClass("move-left"),a.removeClass("selected"),t.eq(i).addClass("selected"),o(e,e.find(".cd-slider li").eq(i))}function o(e,t){e.find(".cd-prev").toggleClass("inactive",t.is(":first-child")),e.find(".cd-next").toggleClass("inactive",t.is(":last-child"))}function a(e){var t=window.getComputedStyle(document.querySelector(".cd-slider"),"::before").getPropertyValue("content").replace(/"/g,"").replace(/'/g,"");return"mobile"==t||e.hasClass("cd-slider-active")}e(".cd-btn").on("click",function(t){t.preventDefault(),e(".cd-panel").addClass("is-visible")}),e("body").on("click",function(t){(e(t.target).is(".cd-panel")||e(t.target).is(".cd-panel-close"))&&(e(".cd-panel").removeClass("is-visible"),t.preventDefault())});var s=e(".cd-single-item");s.each(function(){var r=e(this),d=t(r);o(r,r.find(".cd-slider li").eq(0)),r.find(".cd-slider").on("click",function(t){!r.hasClass("cd-slider-active")&&e(t.target).is(".cd-slider")&&(s.removeClass("cd-slider-active"),r.addClass("cd-slider-active").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e("body,html").animate({scrollTop:r.offset().top},200)}))}),r.find(".cd-close").on("click",function(){r.removeClass("cd-slider-active")}),r.find(".cd-next").on("click",function(){i(r,d)}),r.find(".cd-prev").on("click",function(){n(r,d)}),r.find(".cd-slider").on("swipeleft",function(){var t=e(this),n=a(r);!t.find(".selected").is(":last-child")&&n&&i(r,d)}),r.find(".cd-slider").on("swiperight",function(){var t=e(this),i=a(r);!t.find(".selected").is(":first-child")&&i&&n(r,d)}),d.on("click",function(){var t=e(this);if(!t.hasClass("selected")){var o=t.index(),a=r.find(".cd-slider .selected").index();o>a?i(r,d,o):n(r,d,o)}})}),e(document).keyup(function(t){"37"==t.which&&e(".cd-slider-active").length>0&&!e(".cd-slider-active .cd-slider .selected").is(":first-child")?n(e(".cd-slider-active"),e(".cd-slider-active").find(".cd-slider-pagination li")):"39"==t.which&&e(".cd-slider-active").length&&!e(".cd-slider-active .cd-slider .selected").is(":last-child")?i(e(".cd-slider-active"),e(".cd-slider-active").find(".cd-slider-pagination li")):"27"==t.which&&s.removeClass("cd-slider-active")})});var mr_firstSectionHeight,mr_nav,mr_navOuterHeight,mr_navScrolled=!1,mr_navFixed=!1,mr_outOfSight=!1,mr_floatingProjectSections,mr_scrollTop=0,mobile=detectmob();window.mobilecheck=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},$(document).ready(function(){"use strict";function e(e){var t,i;return $(e).find('.validate-required[type="checkbox"]').each(function(){$('[name="'+$(this).attr("name")+'"]:checked').length||(i=1,t=$(this).attr("name").replace("[]",""),e.find(".form-error").text("Please tick at least one "+t+" box."))}),$(e).find(".validate-required").each(function(){""===$(this).val()?($(this).addClass("field-error"),i=1):$(this).removeClass("field-error")}),$(e).find(".validate-email").each(function(){/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())?$(this).removeClass("field-error"):($(this).addClass("field-error"),i=1)}),e.find(".field-error").length||e.find(".form-error").fadeOut(1e3),i}function t(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null}if($(".background-image-holder").each(function(){var e=$(this).children("img").attr("src");$(this).css("background",'url("'+e+'")'),$(this).children("img").hide(),$(this).css("background-position","initial"),$(this).css("opacity","1"),$(this).children("img").length>1&&swapImage($(this),1)}),$('[data-toggle="tooltip"]').tooltip(),$(".radio-option").click(function(){$(this).closest("form").find(".radio-option").removeClass("checked"),$(this).addClass("checked"),$(this).find("input").prop("checked",!0)}),$(".tabbed-content").each(function(){$(this).append('<ul class="content"></ul>')}),$(".tabs li").each(function(){var e=$(this),t="";e.is(".tabs li:first-child")&&(t=' class="active"');var i=e.find(".tab-content").detach().wrap("<li"+t+"></li>").parent();e.closest(".tabbed-content").find(".content").append(i)}),$(".tabs li").click(function(){$(this).closest(".tabs").find("li").removeClass("active"),$(this).addClass("active");var e=$(this).index()+1;$(this).closest(".tabbed-content").find(".content>li").removeClass("active"),$(this).closest(".tabbed-content").find(".content>li:nth-of-type("+e+")").addClass("active")}),$("nav").hasClass("fixed")||$("nav").hasClass("absolute")?$("body").addClass("nav-is-overlay"):($(".nav-container").css("min-height",$("nav").outerHeight(!0)),$(window).resize(function(){$(".nav-container").css("min-height",$("nav").outerHeight(!0))})),$("nav").hasClass("bg-dark")&&$(".nav-container").addClass("bg-dark"),mr_nav=$("body .nav-container nav:first"),mr_navOuterHeight=$("body .nav-container nav:first").outerHeight(),$(".menu > li > ul").each(function(){var e=$(this).offset(),t=e.left+$(this).outerWidth(!0);if(t>$(window).width()&&!$(this).hasClass("mega-menu"))$(this).addClass("make-right");else if(t>$(window).width()&&$(this).hasClass("mega-menu")){var i=$(window).width()-e.left,n=$(this).outerWidth(!0)-i;$(this).css("margin-left",-n)}}),$(".mobile-toggle").click(function(){$(".nav-bar").toggleClass("nav-open"),$(".dropdownfix").toggleClass("toggle-sub"),$(".dropdownfix").toggleClass("has-dropdown"),$(this).toggleClass("active")}),$(".module.widget-handle").click(function(){$(this).toggleClass("toggle-widget-handle")}),$(".tweets-feed").each(function(e){$(this).attr("id","tweets-"+e)}).each(function(e){function t(t){for(var i=t.length,n=0,o=document.getElementById("tweets-"+e),a='<ul class="slides">';i>n;)a+="<li>"+t[n]+"</li>",n++;return a+="</ul>",o.innerHTML=a,a}twitterFetcher.fetch($("#tweets-"+e).attr("data-widget-id"),"",5,!0,!0,!0,"",!1,t)}),$(".instafeed").length&&(jQuery.fn.spectragram.accessData={accessToken:"791988178.2d41dbd.97f234bc6dd248f18807726f637719c2",clientID:"2d41dbd502f7436fa1cc66d4cbe0174c"}),$(".instafeed").each(function(){var e=$(this).attr("data-user-name")+"-";$(this).children("ul").spectragram("getUserFeed",{query:e,max:15})}),$(".logo-carousel").flexslider({minItems:1,maxItems:4,move:1,itemWidth:200,itemMargin:0,animation:"slide",slideshow:!0,slideshowSpeed:3e3,directionNav:!1,controlNav:!1}),$(".lightbox-grid li a").each(function(){var e=$(this).closest(".lightbox-grid").attr("data-gallery-title");$(this).attr("data-lightbox",e)}),$("section").closest("body").find(".modal-video[video-link]").remove(),$(".modal-video-container").each(function(e){$(this).find(".play-button").attr("video-link",e),$(this).find(".modal-video").clone().appendTo("body").attr("video-link",e)}),$(".modal-video-container .play-button").click(function(){var e=$("section").closest("body").find('.modal-video[video-link="'+$(this).attr("video-link")+'"]');if(e.toggleClass("reveal-modal"),e.find("video").length&&e.find("video").get(0).play(),e.find("iframe").length){var t=e.find("iframe"),i=t.attr("data-src")+"&autoplay=1";t.attr("src",i)}}),$("section").closest("body").find(".close-iframe").click(function(){$(this).closest(".modal-video").toggleClass("reveal-modal"),$(this).siblings("iframe").attr("src",""),$(this).siblings("video").get(0).pause()}),$("section").closest("body").find(".local-video-container .play-button").click(function(){$(this).siblings(".background-image-holder").removeClass("fadeIn"),$(this).siblings(".background-image-holder").css("z-index",-1),$(this).css("opacity",0),$(this).siblings("video").get(0).play()}),$("section").closest("body").find(".player").each(function(){var e=$(this).attr("data-video-id"),t=$(this).attr("data-start-at");$(this).attr("data-property","{videoURL:'http://youtu.be/"+e+"',containment:'self',autoPlay:true, mute:true, startAt:"+t+", opacity:1, showControls:false}")}),$("section").closest("body").find(".player").YTPlayer(),$(window).resize(function(){resizeVid()}),$(".map-holder").click(function(){$(this).addClass("interact")}),$(".countdown").length&&$(".countdown").each(function(){var e=$(this).attr("data-date");$(this).countdown(e,function(e){$(this).text(e.strftime("%D days %H:%M:%S"))})}),$("form.form-email, form.form-newsletter").submit(function(t){t.preventDefault?t.preventDefault():t.returnValue=!1;var i,n,o,a,s,r,d,l=$(this).closest("form.form-email, form.form-newsletter"),c=0,f=l.attr("original-error");return n=$(l).find("iframe.mail-list-form"),l.find(".form-error, .form-success").remove(),l.append('<div class="form-error" style="display: none;">'+l.attr("data-error")+"</div>"),l.append('<div class="form-success" style="display: none;">'+l.attr("data-success")+"</div>"),n.length&&"undefined"!=typeof n.attr("srcdoc")&&""!==n.attr("srcdoc")?(console.log("Mail list form signup detected."),o=$(l).find(".signup-email-field").val(),a=$(l).find(".signup-name-field").val(),s=$(l).find("input.signup-first-name-field").length?$(l).find("input.signup-first-name-field").val():$(l).find(".signup-name-field").val(),r=$(l).find(".signup-last-name-field").val(),1!==e(l)?(console.log("Mail list signup form validation passed."),console.log(o),console.log(r),console.log(s),console.log(a),n.contents().find("#mce-EMAIL, #fieldEmail").val(o),n.contents().find("#mce-LNAME, #fieldLastName").val(r),n.contents().find("#mce-FNAME, #fieldFirstName").val(s),n.contents().find("#mce-NAME, #fieldName").val(a),n.contents().find("form").attr("target","_blank").submit(),d=l.attr("success-redirect"),"undefined"!=typeof d&&d!==!1&&""!==d&&(window.location=d)):(l.find(".form-error").fadeIn(1e3),setTimeout(function(){l.find(".form-error").fadeOut(500)},5e3))):(console.log("Send email form detected."),"undefined"!=typeof f&&f!==!1&&l.find(".form-error").text(f),c=e(l),1===c?($(this).closest("form").find(".form-error").fadeIn(200),setTimeout(function(){$(l).find(".form-error").fadeOut(500)},3e3)):($(this).closest("form").find(".form-error").fadeOut(200),i=jQuery("<div />").addClass("form-loading").insertAfter($(l).find('input[type="submit"]')),$(l).find('input[type="submit"]').hide(),jQuery.ajax({type:"POST",url:"mail/mail.php",data:l.serialize(),success:function(e){$(l).find(".form-loading").remove(),d=l.attr("success-redirect"),"undefined"!=typeof d&&d!==!1&&""!==d&&(window.location=d),$(l).find('input[type="submit"]').show(),$.isNumeric(e)?parseInt(e)>0&&(l.find('input[type="text"]').val(""),l.find("textarea").val(""),l.find(".form-success").fadeIn(1e3),l.find(".form-error").fadeOut(1e3),setTimeout(function(){l.find(".form-success").fadeOut(500)},5e3)):(l.find(".form-error").attr("original-error",l.find(".form-error").text()),l.find(".form-error").text(e).fadeIn(1e3),l.find(".form-success").fadeOut(1e3))},error:function(e,t,i){l.find(".form-error").attr("original-error",l.find(".form-error").text()),l.find(".form-error").text(i).fadeIn(1e3),l.find(".form-success").fadeOut(1e3),$(l).find(".form-loading").remove(),$(l).find('input[type="submit"]').show()}}))),!1}),$(".validate-required, .validate-email").on("blur change",function(){e($(this).closest("form"))}),$("form").each(function(){$(this).find(".form-error").length&&$(this).attr("original-error",$(this).find(".form-error").text())}),t("ref")&&$("form.form-email").append('<input type="text" name="referrer" class="hidden" value="'+t("ref")+'"/>'),/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)&&$("section").removeClass("parallax"),$(".disqus-comments").length){var i=$(".disqus-comments").attr("data-shortname");!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//"+i+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}()}}),$(window).load(function(){"use strict";var e=setInterval(function(){return $(".tweets-slider").find("li.flex-active-slide").length?void clearInterval(e):void($(".tweets-slider").length&&$(".tweets-slider").flexslider({directionNav:!1,controlNav:!1}))},500);mr_firstSectionHeight=$(".main-container section:nth-of-type(1)").outerHeight(!0)}),$("document").ready(function(){resizeVid()});