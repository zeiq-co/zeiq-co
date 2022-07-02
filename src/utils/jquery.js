const jqueryLoad = () => {
  console.log("page loaded");
  !(function (i) {
    "use strict";

    function e() {
      var o = document.querySelector(".scroll-progress path"),
        s = o.getTotalLength();
      (o.style.transition = o.style.WebkitTransition = "none"),
        (o.style.strokeDasharray = s + " " + s),
        (o.style.strokeDashoffset = s),
        o.getBoundingClientRect(),
        (o.style.transition = o.style.WebkitTransition =
          "stroke-dashoffset 10ms linear");

      function e() {
        var e = i(window).scrollTop(),
          t = i(document).height() - i(window).height();
        o.style.strokeDashoffset = s - (e * s) / t;
      }
      e(), i(window).scroll(e);
      jQuery(window).on("scroll", function () {
        50 < jQuery(this).scrollTop()
          ? jQuery(".scroll-progress").addClass("active-progress")
          : jQuery(".scroll-progress").removeClass("active-progress");
      }),
        jQuery(".scroll-progress").on("click", function (e) {
          return (
            e.preventDefault(),
            jQuery("html, body").animate(
              {
                scrollTop: 0,
              },
              500,
            ),
            !1
          );
        });
    }

    function s() {
      i(".has-anim").each(function () {
        var e, t, o, s;
        !0 ==
          ((e = this),
          (t = i(window).scrollTop()),
          (o = t + i(window).height()),
          (s = i(e).offset().top) + i(e).height() / 4 <= o && t <= s) &&
          i(this).addClass("visible");
      });
    }
    (i.fn.nextOrFirst = function (e) {
      var t = this.next(e);
      return t.length ? t : this.prevAll(e).last();
    }),
      i(".work-process-item").hover(function () {
        i(".work-process-item").removeClass("focus"), i(this).addClass("focus");
      }),
      i(document).ready(function () {
        var t;
        (t = 0),
          (window.onscroll = function () {
            var e =
              document.documentElement.scrollTop || document.body.scrollTop;
            300 < e && t <= e
              ? ((t = e), i(".navigation").addClass("header-unpinned"))
              : ((t = e), i(".navigation").removeClass("header-unpinned"));
          }),
          i('[data-toggle="navbar-menu"]').on("click", function () {
            i(this).attr("data-navbar", "visible"),
              i(".navigation").addClass("visible"),
              i("#navbar-menu").addClass("show"),
              i(".sidenav-overlay").addClass("show");
          }),
          i('[data-toggle="navbar-menu-close"], .sidenav-overlay').on(
            "click",
            function () {
              i('[data-toggle="navbar-menu"]').attr("data-navbar", "hidden"),
                i(".navigation").removeClass("visible"),
                i("#navbar-menu").removeClass("show"),
                i(".sidenav-overlay").removeClass("show");
            },
          ),
          e(),
          i(window).scroll(function () {
            var e;
            s(),
              (e = 0 + i(window).scrollTop() / 3 + "deg"),
              i(".user-image .shape").css({
                "-webkit-transform": "rotateZ(" + e + ")",
                "-moz-transform": "rotateZ(" + e + ")",
                "-ms-transform": "rotateZ(" + e + ")",
                "-o-transform": "rotateZ(" + e + ")",
                transform: "rotateZ(" + e + ")",
              });
          });
      });
  })(jQuery);
};

export default jqueryLoad;
