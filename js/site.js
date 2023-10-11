"use strict";

// navbar

var Layout = function () {
    function e(e) {
        $(".sidenav-toggler").addClass("active"), $(".sidenav-toggler").data("action", "sidenav-unpin"), $("body").addClass("sidenav-pinned ready"), $("body").find(".main-content").append('<div class="sidenav-mask mask-body d-xl-none" data-action="sidenav-unpin" data-target=' + e.data("target") + " />"), $(e.data("target")).addClass("show"), localStorage.setItem("sidenav-state", "pinned")
    }

    function t(e) {
        $(".sidenav-toggler").removeClass("active"), $(".sidenav-toggler").data("action", "sidenav-pin"), $("body").removeClass("sidenav-pinned"), $("body").addClass("ready"), $("body").find(".sidenav-mask").remove(), $(e.data("target")).removeClass("show"), localStorage.setItem("sidenav-state", "unpinned")
    }

    var a = localStorage.getItem("sidenav-state") ? localStorage.getItem("sidenav-state") : "pinned";
    if ($(window).on({
        "load resize": function () {
            $(window).width() < 1200 ? t($(".sidenav-toggler")) : "pinned" == a ? e($(".sidenav-toggler")) : "unpinned" == a && t($(".sidenav-toggler"))
        }
    }), $("body").on("click", "[data-action]", function (a) {
        a.preventDefault();
        var n = $(this), o = n.data("action"), i = n.data("target");
        switch (o) {
            case"offcanvas-open":
                i = n.data("target"), $(i).addClass("open"), $("body").append('<div class="body-backdrop" data-action="offcanvas-close" data-target=' + i + " />");
                break;
            case"offcanvas-close":
                i = n.data("target"), $(i).removeClass("open"), $("body").find(".body-backdrop").remove();
                break;
            case"aside-open":
                i = n.data("target"), n.addClass("active"), $(i).addClass("show"), $("body").append('<div class="mask-body mask-body-light" data-action="aside-close" data-target=' + i + " />");
                break;
            case"aside-close":
                i = n.data("target"), n.removeClass("active"), $(i).removeClass("show"), $("body").find(".body-backdrop").remove();
                break;
            case"omnisearch-open":
                i = n.data("target"), n.addClass("active"), $(i).addClass("show"), $(i).find(".form-control").focus(), $("body").addClass("omnisearch-open").append('<div class="mask-body mask-body-dark" data-action="omnisearch-close" data-target="' + i + '" />');
                break;
            case"omnisearch-close":
                i = n.data("target"), $('[data-action="search-open"]').removeClass("active"), $(i).removeClass("show"), $("body").removeClass("omnisearch-open").find(".mask-body").remove();
                break;
            case"search-open":
                i = n.data("target"), n.addClass("active"), $(i).addClass("show"), $(i).find(".form-control").focus();
                break;
            case"search-close":
                i = n.data("target"), $('[data-action="search-open"]').removeClass("active"), $(i).removeClass("show");
                break;
            case"sidenav-pin":
                e(n);
                break;
            case"sidenav-unpin":
                t(n)
        }
    }), $("[data-offset-top]").length) {
        var n = $("[data-offset-top]"), o = $(n.data("offset-top")).height();
        n.css({"padding-top": o + "px"})
    }
}
(), Popover = function () {
    var e = $('[data-toggle="popover"]');
    e.length && e.each(function () {
        !function (e) {
            var t = "";
            e.data("color") && (t = " popover-" + e.data("color"));
            var a = {trigger: "focus", template: '<div class="popover' + t + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'};
            e.popover(a)
        }($(this))
    })

}
// progress
(), SiteStyle = function () {
    var e = getComputedStyle(document.body);
    return {
        colors: {
            gray: {100: "#f6f9fc", 200: "#e9ecef", 300: "#dee2e6", 400: "#ced4da", 500: "#adb5bd", 600: "#8898aa", 700: "#525f7f", 800: "#32325d", 900: "#212529"},
            theme: {
                primary: e.getPropertyValue("--primary") ? e.getPropertyValue("--primary").replace(" ", "") : "#6e00ff",
                info: e.getPropertyValue("--info") ? e.getPropertyValue("--info").replace(" ", "") : "#00B8D9",
                success: e.getPropertyValue("--success") ? e.getPropertyValue("--success").replace(" ", "") : "#36B37E",
                danger: e.getPropertyValue("--danger") ? e.getPropertyValue("--danger").replace(" ", "") : "#FF5630",
                warning: e.getPropertyValue("--warning") ? e.getPropertyValue("--warning").replace(" ", "") : "#FFAB00",
                dark: e.getPropertyValue("--dark") ? e.getPropertyValue("--dark").replace(" ", "") : "#212529"
            },
            transparent: "transparent"
        }, fonts: {base: "Nunito"}
    }
}(), Shape = function () {
    var e = $(".shape-container");
    $(window).on({
        "load resize": function () {
            e.length && e.each(function () {
                var e, t;
                e = $(this), t = e.find("svg").height(), e.css({height: t + "px"})
            })
        }
    })
}
!function (e) {
    var t = function () {
        this.$body = e("body")
    };
    t.prototype.init = function () {
        e('[data-toggle="dragula"]').each(function () {
            var t = e(this).data("containers"), a = [];
            if (t) for (var n = 0; n < t.length; n++) a.push(e("#" + t[n])[0]); else a = [e(this)[0]];
            var o = e(this).data("handle-class");
            o ? dragula(a, {
                moves: function (e, t, a) {
                    return a.classList.contains(o)
                }
            }) : dragula(a)
        })
    }, e.Dragula = new t, e.Dragula.Constructor = t
}(window.jQuery), window.jQuery.Dragula.init();
var Dropzones = function () {
    var e = $('[data-toggle="dropzone"]'), t = $(".dz-preview");
    e.length && (Dropzone.autoDiscover = !1, e.each(function () {
        var e, a, n, o, i;
        e = $(this), a = void 0 !== e.data("dropzone-multiple"), n = e.find(t), o = void 0, i = {
            url: e.data("dropzone-url"), thumbnailWidth: null, thumbnailHeight: null, previewsContainer: n.get(0), previewTemplate: n.html(), maxFiles: a ? null : 1, acceptedFiles: a ? null : "image/*", init: function () {
                this.on("addedfile", function (e) {
                    !a && o && this.removeFile(o), o = e
                })
            }
        }, n.html(""), e.dropzone(i)
    }))
}(), ProgressCircle = (Popover = function () {
    var e = $('[data-toggle="popover"]'), t = "";
    e.length && e.each(function () {
        !function (e) {
            e.data("color") && (t = "popover-" + e.data("color"));
            var a = {template: '<div class="popover ' + t + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'};
            e.popover(a)
        }($(this))
    })
}(), function () {
    var e = $(".progress-circle");
    e.length && e.each(function () {
        var e, t, a, n, o, i;
        e = $(this), t = e.data().progress, a = e.data().text ? e.data().text : "", n = e.data().textclass ? e.data().textclass : "progressbar-text", o = e.data().color ? e.data().color : "primary", i = {color: SiteStyle.colors.theme[o], strokeWidth: 7, trailWidth: 2, text: {value: a, className: n}, svgStyle: {display: "block"}, duration: 1500, easing: "easeInOut"}, new ProgressBar.Circle(e[0], i).animate(t / 100)
    })
}()), QuillEditor = function () {
    var e = $('[data-toggle="quill"]');
    e.length && e.each(function () {
        var e, t;
        e = $(this), t = e.data("quill-placeholder"), new Quill(e.get(0), {modules: {toolbar: [["bold", "italic"], ["link", "blockquote", "code", "image"], [{list: "ordered"}, {list: "bullet"}]]}, placeholder: t, theme: "snow"})
    })
}();