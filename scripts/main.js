$(document).ready(function () {
    // ===========================
    $('.menu .navbar-nav .dropdown').mouseenter(function () {
        if ($(window).width() >= 1200) {
            $(this).addClass('show');
            $(this).children('.dropdown-menu').addClass('show');
        }
    })
    $('.menu .navbar-nav .dropdown').mouseleave(function () {
        if ($(window).width() >= 1200) {
            $(this).removeClass('show');
            $(this).children('.dropdown-menu').removeClass('show');
        }
    })
    // ----------------------------
    // ============================
    $(".mfa ul li").click(function (argument) {
        var drop = $(this).children(".mfa-dropdown");
        var all_drop = $(".mfa-dropdown");
        all_drop.fadeOut();
        drop.fadeIn();
    })
    $(".mfa").mouseleave(function (argument) {
        var all_drop = $(".mfa-dropdown");
        all_drop.fadeOut();
    })
    // ----------------------------
    // ============================
    $('.owl-news .owl-carousel').owlCarousel({
        loop: true,
        margin: 2,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    // ----------------------------
    // ============================
    $('.owl-statis .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        navText: [`<img src="/img/sleft.png">`, `<img src="/img/sright.png">`],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1500: {
                items: 5
            },
            1700: {
                items: 6
            }
        }
    })
    // ----------------------------
    // ============================
    $('.owl-statis-page .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        dots: false,
        navText: [`<img src="/img/sleft.png">`, `<img src="/img/sright.png">`],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            },
            1500: {
                items: 1
            },
            1700: {
                items: 1
            }
        }
    })
    // ----------------------------
    // ============================
    $('#header-search-btn').click(function (argument) {
        $('#my-search').addClass('active');
    })
    $('#cancel').click(function (argument) {
        $('#my-search').removeClass('active');
    })
    // ----------------------------
    // ============================
    $('.owl-page .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoHeight: true,
        autoplay: true,
        dots: false,
        navText: [`<img src="/img/pleft.png">`, `<img src="/img/pright.png">`],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    // ----------------------------
    // ============================
    var i = 1;
    $('#menu-bars').click(function (argument) {
        if (i) {
            $('#full').addClass('active');
            i = 0;
        } else {
            $('#full').removeClass('active');
            i = 1;
        }
    })
    // ----------------------------
    // ============================
    $('#region svg path').mouseenter(function (argument) {
        var id = $(this).data('id');
        $('#' + id).show();
        console.log(id);
    })
    $('#region svg path').mouseleave(function (argument) {
        $('.map-card').hide();
    })
    // ----------------------------
    // ============================
    $('.owl-service .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: true,
        navText: [`<img src="/img/sleft.png">`, `<img src="/img/sright.png">`],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1500: {
                items: 5
            }
        }
    })
    // ----------------------------
})

// ===============================
$(function () {

    let visibilityIds = ['#counters_appeal'];
    let counterClass = '.counter';
    let defaultSpeed = 10;

    $(window).on('scroll', function () {
        getVisibilityStatus();
    });

    getVisibilityStatus();

    function getVisibilityStatus() {
        elValFromTop = [];
        var windowHeight = $(window).height(),
            windowScrollValFromTop = $(this).scrollTop();

        visibilityIds.forEach(function (item, index) {
            try {
                elValFromTop[index] = Math.ceil($(item).offset().top);
            } catch (err) {
                return;
            }

            if ((windowHeight + windowScrollValFromTop) > elValFromTop[index]) {
                counter_init(item);
                progress_init();
            }
        });
    }

    function counter_init(groupId) {
        let num, speed, direction, index = 0;
        $(counterClass).each(function () {
            num = $(this).attr('data-TargetNum');
            speed = $(this).attr('data-Speed');
            direction = $(this).attr('data-Direction');
            easing = $(this).attr('data-Easing');
            if (speed == undefined) speed = defaultSpeed;
            $(this).addClass('c_' + index);
            doCount(num, index, speed, groupId, direction, easing);
            index++;
        });
    }

    function progress_init(argument) {
        $('.progress-bar').each(function (argument) {
            var width = $(this).data('width') + '%';
            $(this).css({'width': width})
        })
    }

    function doCount(num, index, speed, groupClass, direction, easing) {
        let className = groupClass + ' ' + counterClass + '.' + 'c_' + index;
        if (easing == undefined) easing = "swing";
        $(className).animate({
            num
        }, {
            duration: +speed,
            easing: easing,
            step: function (now) {
                if (direction == 'reverse') {
                    $(this).text(num - Math.floor(now));
                } else {
                    $(this).text(Math.floor(now));
                }
            },
            complete: doCount
        });
    }
})
// ----------------------------------------------------
// ====================================================
$(document).ready(function () {

    (function (e) {
        e.fn.extend({
            acarousel: function (t) {
                function f(e) {
                    if (s == 0) return;
                    for (var t = 0; t < s; t++) {
                        var n = l(e + t);
                        var a = l(e + 1 + t);
                        var f = o[n.index];
                        var c = o[a.index];
                        if (t == 0) u = n.index + n.point;
                        var h = {
                            width: p(f.width, c.width, n.point),
                            height: p(f.height, c.height, n.point),
                            left: p(f.left, c.left, n.point),
                            top: p(f.top, c.top, n.point),
                            zIndex: n.point < .5 ? f.zIndex : c.zIndex
                        };
                        if (f.opacity != null) h.opacity = p(f.opacity, c.opacity, n.point);
                        i.eq(t).css(h);
                        if (f.visible) {
                            i.eq(t).show()
                        } else {
                            i.eq(t).hide()
                        }
                        r.option.moveStep(i.eq(t), t, n.index, n.point)
                    }
                }

                function l(e) {
                    if (s == 0) return {index: 0, point: 0};
                    var t = h(e);
                    e = t.int + (e < 0 ? -t.point : t.point);
                    var n = Math.floor(e);
                    if (e < 0) {
                        return {index: (s + n % s) % s, point: e - n}
                    } else {
                        return {index: n % s, point: e - n}
                    }
                }

                function c(e) {
                    if (s == 0) return 0;
                    var t = r.getPos();
                    t = t.index + t.point;
                    var n = l(t - e);
                    n = n.index + n.point;
                    var i = l(e - t);
                    i = -(i.index + i.point);
                    return Math.abs(n) > Math.abs(i) ? i : n
                }

                function h(e) {
                    var t = e < 0 ? Math.ceil(e) : Math.floor(e);
                    var n = Math.abs(e - t);
                    if (n < 1e-10) {
                        n = 0
                    } else if (n > .9999999999) {
                        t += e < 0 ? -1 : 1;
                        n = 0
                    }
                    return {"int": t, point: n}
                }

                function p(e, t, n) {
                    return (t - e) * n + e
                }

                var n = e(this).eq(0);
                var r = n.data("el_func");
                if (r != null) {
                    r.option = e.extend(r.option, t);
                    r.init();
                    return r
                }
                var i, s;
                var o, u = 0;
                var a = null;
                if (n.css("position") == "static") n.css("position", "relative");
                r = {
                    option: {
                        move_minimum: false, moveBefore: function () {
                        }, moveStep: function (e, t, n, r) {
                        }, moveAfter: function () {
                        }
                    }, init: function () {
                        i = n.children().removeAttr("style");
                        s = i.length;
                        o = [];
                        if (s == 0) return;
                        var e;
                        var t = false;
                        var r = i.eq(0).css("opacity");
                        for (e = 1; e < s; e++) {
                            if (r == i.eq(e).css("opacity")) continue;
                            t = true;
                            break
                        }
                        for (e = 0; e < s; e++) {
                            var a = {
                                width: parseFloat(i.eq(e).width()),
                                height: parseFloat(i.eq(e).height()),
                                left: parseFloat(i.eq(e).css("left")),
                                top: parseFloat(i.eq(e).css("top")),
                                zIndex: i.eq(e).css("zIndex"),
                                visible: i.eq(e).is(":visible")
                            };
                            if (t) a.opacity = parseFloat(i.eq(e).css("opacity"));
                            o.push(a)
                        }
                        f(u)
                    }, move: function (t, n, r) {
                        function h() {
                            l = l == null ? n > 1 ? 0 : 1 : l + ((new Date).getTime() - c);
                            c = (new Date).getTime();
                            if (l < 0 || l > n) l = n;
                            f(i + t * r(l / n, l, 0, 1, n));
                            if (l < n) {
                                a = setTimeout(h, e.fx.interval)
                            } else {
                                o.stop();
                                o.option.moveAfter()
                            }
                        }

                        if (s == 0 || !e.isNumeric(t)) return 0;
                        this.stop();
                        if (this.option.move_minimum) t %= s;
                        r = e.easing[r in e.easing && r || r == null && n in e.easing && !(n in e.fx.speeds) && n || "swing"];
                        if (t == 0) {
                            n = 1
                        } else if (e.isNumeric(n)) {
                            if (n <= 0) n = 1
                        } else {
                            n = e.fx.speeds[n in e.fx.speeds && n || "_default"]
                        }
                        var i = u;
                        var o = this;
                        var l = null, c;
                        this.option.moveBefore();
                        h();
                        return t
                    }, moveByIndex: function (e, t, n) {
                        if (e < 0) return 0;
                        return this.move(c(e), t, n)
                    }, moveByElem: function (e, t, n) {
                        var r = i.index(e);
                        if (r < 0) return 0;
                        return this.move(c(r), t, n)
                    }, slide: function (t) {
                        function l() {
                            i = i == null ? 0 : i + ((new Date).getTime() - o);
                            o = (new Date).getTime();
                            f(n + i / t);
                            a = setTimeout(l, e.fx.interval)
                        }

                        if (s == 0 || !e.isNumeric(t) || t == 0) return;
                        this.stop();
                        var n = u;
                        var r = this;
                        var i = null, o;
                        this.option.moveBefore();
                        l()
                    }, stop: function () {
                        if (a == null) return;
                        clearTimeout(a);
                        a = null
                    }, isAnim: function () {
                        return a != null
                    }, count: function () {
                        return s
                    }, getPos: function (t) {
                        return l(-(u + (e.isNumeric(t) ? t : 0)))
                    }
                };
                r.option = e.extend(r.option, t);
                r.init();
                n.data("el_func", r);
                return r
            }
        })
    })(jQuery)

    $(function () {
        var acarousel = $("#carousel").acarousel();

        changeActive();

        var loopnum = -1;

        $("#carousel li a").click(function () {
            if (acarousel.isAnim()) return false;

            loopnum = 0;

            var move = acarousel.moveByElem($(this).parent());

            if (move == 0) {
                console.log(1);

                var type = $(this).data('type');

                if (type == "foto") {
                    var src = $(this).attr('href');
                    var html = `<img src="` + src + `" id="my-fancybox-img">`;
                    $('#my-fancybox-content').html(html);
                    $('#my-fancybox').fadeIn('slow');
                }

                if (type == "youtube") {
                    var src = $(this).data('src');
                    var html = `<iframe width="80%" height="80%" src="https://www.youtube.com/embed/` + src + `" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                    $('#my-fancybox-content').html(html);
                    $('#my-fancybox').fadeIn('slow');
                }

                if (type == "utube") {
                    var src = $(this).data('src');
                    var html = `<iframe src="https://utube.uz/embed/` + src + `" width="80%" height="80%" frameborder="0" allowfullscreen></iframe>`;
                    $('#my-fancybox-content').html(html);
                    $('#my-fancybox').fadeIn('slow');
                }

                if (type == "local") {
                    var src = $(this).data('src');
                    var html = `<video src="` + src + `" controls="controls"></video>`;
                    $('#my-fancybox-content').html(html);
                    $('#my-fancybox').fadeIn('slow');
                }

            } else {
                changeActive(move);
            }
            return false;

        });

        (function myLoop(i) {
            setTimeout(function () {

                var move = acarousel.move(loopnum);
                changeActive(move);

                if (--i) myLoop(i);

            }, 3000)

        })(700);

        // $('#carousel').mouseleave(function (argument) {
        // 	loopnum = 0;
        // });

        $("#move_back").click(function () {
            if (acarousel.isAnim()) return false;

            var move = acarousel.move(1);
            changeActive(move);
            return false;
        });

        $("#move_next").click(function () {
            if (acarousel.isAnim()) return false;

            var move = acarousel.move(-1);
            changeActive(move);
            return false;
        });

        $(".move").click(function () {
            if (acarousel.isAnim()) return false;

            var index = $(".move").index(this);
            var move = acarousel.moveByIndex(index);
            changeActive(move);
            return false;
        });

        function changeActive(move) {
            var index = acarousel.getPos(move).index;
            $(".move").removeClass("active").eq(index).addClass("active");
        }

        $(window).resize(function () {
            var parent = $("#carousel_container");
            var self = $("#carousel");
            self.css({
                left: parent.width() / 2 - self.width() / 2
                , top: parent.height() / 2 - self.height() / 2
            });
        }).trigger("resize");

        $('#my-fancybox-exit').click(function (argument) {
            $('.my-fancybox').fadeOut('slow');
        });
    });
})
// ----------------------------------------------------
// ====================================================
$(document).ready(function (argument) {
    document.addEventListener('keydown', function (event) {
        if (event.code == 'Enter' && (event.ctrlKey || event.metaKey)) {
            let text = "";
            if (window.getSelection) {
                text = window.getSelection().toString();
            } else {
                if (document.selection && document.selection.type != "Control") {
                    text = document.selection.createRange().text;
                }
            }

            if (text.length > 20) {
                alert("So'z 20 ta belgidan katta bo'lmasligi kerak")
            } else {
                $('div.hid').css({'display': 'block'})
                $('#xato-matn').val(text)
            }
        }
    })
    $('button#bekor-btn').click(function () {
        $('div.hid').css({'display': 'none'})
    })

})
// ----------------------------------------------------

//------------------ Abdurasulov Shuhratjon 20.05.2021 -----------------------//

// add text speech
$(document).ready(function () {

    // Text to speech
    readTextButton = $('.s-read-text');
    readTextTooltip = $('.s-wrapper .s-tooltip');
    text = "";
    var curUrl = window.location.href;
    var arCurUrl = curUrl.split('/');
    var speaker = "UK English Female";
    if (arCurUrl[3] == 'uz' || arCurUrl[3] == 'ru') {
        speaker = "Russian Female";
    }
    readTextButton.on('click', function () {
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        if (responsiveVoice.isPlaying()) {
            responsiveVoice.cancel();
        } else {
            responsiveVoice.speak(text, speaker);
        }
    });
// Text to speech tooltip
    readTextButton.on('mouseenter', function () {
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        if (text === '') {
            readTextTooltip.css({
                'opacity': 1
            });
        } else {
            readTextTooltip.css({
                'opacity': 0
            });
        }
    }).on('mouseout', function () {
        readTextTooltip.css({
            'opacity': 0
        });
    });


    // to top scrollUp
    $('body').append('<div class="scrollUp"></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollUp').fadeIn();
        } else {
            $('.scrollUp').fadeOut();
        }
    });
    $('.scrollUp').click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


});

// ============================
$('.owl-service-page .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    navText:[`<img src="/img/sleft.png">`, `<img src="/img/sright.png">`],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        },
        1200:{
            items:1
        },
        1500:{
            items:1
        }
    }
})
// ----------------------------

// ====================================================
let i = 0;
$('#myTab a').on('click', function (event) {
    event.preventDefault()
    var mytab = $(this).attr('aria-controls')
    if (i == 0) {
        $('#' + mytab).css({'display': 'block'})
        i = 1;
    } else {
        $('#' + mytab).css({'display': 'none'})
        i = 0;
    }
})
// ----------------------------------------------------