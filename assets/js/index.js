window._wq = window._wq || [];
_wq.push({
    "1nw": function(video) {
        // console.log(video.name())
        video.bind("play", function() {
            // console.log("START THIS BISH");
        })
    }
});

window.wistiaEmbedShepherdReady = function() {
    // console.log("THE SHEPHERD IS READY MOFO");
}

var hudSwap = 1;

function test() {
    if (count < 5) {
        console.log($(".explosive-active")[0] + " STARTED")
        document.getElementsByClassName("explosive-active")[0].addEventListener('ended', function() {
            console.log($(".explosive-active")[0] + " ENDED")
            nextExplosion();
        })
    }
}

//  var vid = document.getElementById("explosive-vid2")
var hudvid = $("#hudvid")[0];
// hudvid.pause();
// hudvid.currentTime = 1;

var nextButton = $('#explosive-next');
var prevButton = $('#explosive-previous');
var explosiveTop = $('#explosive').offset().top;
var explosiveBot = explosiveTop + $('#explosive-vid').height();
var appTop = $('#app').offset().top;
var appBot = appTop + $('#app').height();
var signupTop = $('#signup').offset().top;
var signupBot = signupTop + $('#signup').height();
var hudTop = $('#hudvid').offset().top;
var povTop = $('#pov').offset().top;
var nextSectionTop = $('#explosive').next('section').offset().top;
var hudPlaying = 0;
var povComplete = 0;
var count = 1;
var inExplosive = false;
var forwards = true;
// document.getElementsByClassName("explosive-active")[0].addEventListener('ended', function() {
//     nextExplosion();
// });
// document.getElementsByClassName("explosive-active")[0].addEventListener('play', test);

if (!window.mobilecheck()) {
    document.getElementById("explosive").innerHTML = 
        '<div id="explosive-previous-holder"> <a id="explosive-previous" onclick="prevExplosion()"> <i class="icon-uparrow icon-md"></i> </a> </div> <div id="explosive-next-holder"> <a id="explosive-next" onclick="nextExplosion()"> <i class="icon-downarrow icon-md"></i> </a> </div> <video id="explosive-vid1" class="explosive-active"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive1.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive1.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive1.mp4" type="video/mp4"> </video> <video id="explosive-vid2"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive2.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive2.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive2.mp4" type="video/mp4"> </video> <video id="explosive-vid3"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive3.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive3.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive3.mp4" type="video/mp4"> </video> <video id="explosive-vid4"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive4.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive4.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive4.mp4" type="video/mp4"> </video> <video id="explosive-vid5"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive5.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive5.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive5.mp4" type="video/mp4"> </video> <video id="explosive-vid1b"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive1backwards.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive1backwards.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive1backwards.mp4" type="video/mp4"> </video> <video id="explosive-vid2b"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive2backwards.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive2backwards.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive2backwards.mp4" type="video/mp4"> </video> <video id="explosive-vid3b"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive3backwards.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive3backwards.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive3backwards.mp4" type="video/mp4"> </video> <video id="explosive-vid4b"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive4backwards.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive4backwards.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive4backwards.mp4" type="video/mp4"> </video> <video id="explosive-vid5b"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive5backwards.webm" type="video/webm"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive5backwards.ogv" type="video/ogv"> <source class="lazy" data-src="http://dg6vcgn2vehm4.cloudfront.net/videos/Explosive5backwards.mp4" type="video/mp4"> </video>'
    $(window).scroll(function() { // assign scroll event listener
        var currentScroll = $(window).scrollTop(); // get current position
        if (currentScroll >= explosiveTop - 55 && currentScroll <= explosiveBot && !inExplosive) {
            inExplosive = true;
            // console.log("IN EXPLOSIVE")
            // nextExplosion();
        }

        if (currentScroll >= hudTop - 55 && hudPlaying === 0) {
            hudPlaying = 1;
            hudvid.play();
            $("#hudtext").fadeIn(100);
            $("#hudheader").fadeIn(500, function() {
                $(".hudbody").fadeIn(500);
                $("#hudbuttons").fadeIn(500);
            });
            $("#hudvid").on("ended", swapHUD);
        }

        if (currentScroll >= povTop - 55 && currentScroll <= explosiveTop - 55 && povComplete === 0) {
            povComplete = 1;
            TweenLite.set(".hud-animation", {
                perspective: 500
            });
            TweenMax.to("#hud-bg", 1.5, {
                rotationY: 20,
                transformOrigin: "left 50%",
                left: "-=20%",
                opacity: .7,
                ease: Power1.easeInOut
            });
            TweenMax.to("#hud-nose", 1.5, {
                rotationY: 20,
                transformOrigin: "left 50%",
                left: "-=20%",
                opacity: .9,
                ease: Power1.easeInOut
            });
            TweenMax.to("#hud-rear", 1.5, {
                rotationY: 20,
                transformOrigin: "left 50%",
                left: "-=20%",
                ease: Power1.easeInOut
            });
            TweenMax.to("#hud-mph", 1.5, {
                rotationY: 20,
                transformOrigin: "left 50%",
                left: "-=20%",
                ease: Power1.easeInOut
            });

            TweenMax.to("#hud-nose", 1, {
                left: "+=1%",
                delay: 1,
                ease: Power2.easeInOut
            });
            TweenMax.to("#hud-rear", 1.5, {
                scale: 2,
                top: "-=35%",
                left: "-=55%",
                ease: Power2.easeInOut,
                delay: .5
            });
            TweenMax.to("#hud-mph", 1.5, {
                scale: 2.5,
                top: "-=55%",
                left: "-=80%",
                ease: Power2.easeInOut,
                delay: .5
            });
        }
    })
}

function swapHUD() {
    if (!window.mobilecheck()) {
        hudSwap *= -1;
        if (hudSwap < 0) {
            $("#hudvid").find("#hudwebm").attr("src", "http://dg6vcgn2vehm4.cloudfront.net/videos/HUD2.webm")
            $("#hudvid").find("#hudmp4").attr("src", "http://dg6vcgn2vehm4.cloudfront.net/videos/HUD2.mp4")
            $("#hudvid").find("#hudogv").attr("src", "http://dg6vcgn2vehm4.cloudfront.net/videos/HUD2.ogv")
            $("#hudvid").load();
            $("#hudvid")[0].play();
            $("#hudtext").fadeOut(600);
            $("#hudtext2").fadeIn(600);
        } else {
            $("#hudvid").find("#hudwebm").attr("src", "http://dg6vcgn2vehm4.cloudfront.net/videos/HUD1.webm")
            $("#hudvid").find("#hudmp4").attr("src", "http://dg6vcgn2vehm4.cloudfront.net/videos/HUD1.mp4")
            $("#hudvid").find("#hudogv").attr("src", "http://dg6vcgn2vehm4.cloudfront.net/videos/HUD1.ogv")
            $("#hudvid").load();
            $("#hudvid")[0].play();
            $("#hudtext2").fadeOut(600);
            $("#hudtext").fadeIn(600);
        }
    } else {
        hudSwap *= -1;
        if (hudSwap < 0) {
            $("#hudmobile-background").fadeOut(600);
            $("#hudmobile-background2").fadeIn(600);
            $("#hudmobiletext").fadeOut(600);
            $("#hudmobiletext2").fadeIn(600);
            $("#hudmobile-slide1").removeClass("active-hud");
            $("#hudmobile-slide2").addClass("active-hud");
        } else {
            $("#hudmobile-background2").fadeOut(600);
            $("#hudmobile-background").fadeIn(600);
            $("#hudmobiletext2").fadeOut(600);
            $("#hudmobiletext").fadeIn(600);
            $("#hudmobile-slide2").removeClass("active-hud");
            $("#hudmobile-slide1").addClass("active-hud");
        }
    }
}

window.swapHUD = swapHUD

var minipress = document.getElementsByClassName("minipress");
for (i = 0; i < minipress.length; i++) {
    minipress[i].addEventListener("mouseover", function() {
        this.setAttribute("src", this.getAttribute("src").replace("-black", "-red"));
    })
    minipress[i].addEventListener("mouseout", function() {
        this.setAttribute("src", this.getAttribute("src").replace("-red", "-black"));
    })
}

function nextExplosion() {
    console.log(count);
    inExplosive = true;
    if (count > 0) {
        if ($(".explosive-active").length != 0) {
            var exp = $(".explosive-active")[0]
            exp.pause();
            setTimeout(function() {
                exp.currentTime = 0;
            }, 3000)
        }
        if (forwards) {
            $("#explosive-vid" + (count)).removeClass("explosive-active");
            count++;
        } else {
            $("#explosive-vid" + count + "b").removeClass("explosive-active");
        }
    } else {
        count++;
    }
    $("#explosive-vid" + count).addClass("explosive-active");
    // document.getElementsByClassName("explosive-active")[0].addEventListener('play', test);
    $(".explosive-active")[0].currentTime = 0;
    $(".explosive-active")[0].play();
    if (count === 5) {
        nextButton.css('display', 'none');
    } else if (count >= 1) {
        prevButton.css('display', 'inline');
    }
    forwards = true;
}

// document.getElementById("explosive").addEventListener("click", function() {
//     document.getElementsByClassName("explosive-active")[0].removeEventListener('ended');
// });

window.nextExplosion = nextExplosion

function prevExplosion() {
    if (count < 6) {
        var exp = $(".explosive-active")[0]
        exp.pause();
        setTimeout(function() {
            exp.currentTime = 0;
        }, 3000)
        if (forwards) {
            $("#explosive-vid" + (count)).removeClass("explosive-active");
        } else {
            $("#explosive-vid" + (count) + "b").removeClass("explosive-active");
            count--;
        }
    }
    $("#explosive-vid" + count + "b").addClass("explosive-active");
    $(".explosive-active")[0].play();
    if (count === 1) {
        prevButton.css('display', 'none');
    } else if (count <= 5) {
        nextButton.css('display', 'inline');
    }
    forwards = false;
}

window.prevExplosion = prevExplosion

function goToExplosion(i) {
    // console.log(count-i);
    // if (count-i == 1) {
    //     $("#explosive-vid" + (count) + "b").attr("class", "");
    //     $("#exp" + (count)).removeClass("active");
    //     count = i;
    //     console.log("PREV")
    //     prevExplosion();
    // }
    // if (count-i == -1) {
    //     count++;
    //     nextExplosion();
    // } else {
    var exp = $(".explosive-active")[0]
    exp.pause();
    setTimeout(function() {
        exp.currentTime = 0;
    }, 3000)
    $("#explosive-vid" + (count)).attr("class", "");
    $("#exp" + (count)).removeClass("active");
    count = i;
    console.log(count)
    nextExplosion();
    // }
}

window.goToExplosion = goToExplosion

// HOVER SOUND
var audio = $("#hoversound")[0];
$("#hovertext").mouseenter(function() {
    audio.play();
});

// SCATMAN!!! (Bottom right)
var audio2 = $("#scatman")[0];
$(".scatbutton").click(function() {

    audio2.volume = .3;
    audio2.play();

    alert("ITS SCATMAN TIME!!!!");

});

$(function() {
    $("#hudmobile").swipe({
        //Generic swipe handler for all directions
        swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {
            console.log("You swiped " + direction);
            swapHUD();
        },
        swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData) {
            console.log("You swiped " + direction);
            swapHUD();
        },
        allowPageScroll: 'vertical',
        preventDefaultEvents: false
    });
});

require('./lazyload')
