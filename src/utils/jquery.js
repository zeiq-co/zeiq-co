const jqueryLoad = () => {
  // console.log('page loaded');
  !(function (i) {
    'use strict';

    function e() {
      var o = document.querySelector('.scroll-progress path'),
        s = o.getTotalLength();
        if(!o) return null;
      (o.style.transition = o.style.WebkitTransition = 'none'),
        (o.style.strokeDasharray = s + ' ' + s),
        (o.style.strokeDashoffset = s),
        o.getBoundingClientRect(),
        (o.style.transition = o.style.WebkitTransition =
          'stroke-dashoffset 10ms linear');

      function e() {
        var e = i(window).scrollTop(),
          t = i(document).height() - i(window).height();
        o.style.strokeDashoffset = s - (e * s) / t;
      }
      e(), i(window).scroll(e);
      jQuery(window).on('scroll', function () {
        50 < jQuery(this).scrollTop()
          ? jQuery('.scroll-progress').addClass('active-progress')
          : jQuery('.scroll-progress').removeClass('active-progress');
      }),
        jQuery('.scroll-progress').on('click', function (e) {
          return (
            e.preventDefault(),
            jQuery('html, body').animate(
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
      i('.has-anim').each(function () {
        var e, t, o, s;
        !0 ==
          ((e = this),
          (t = i(window).scrollTop()),
          (o = t + i(window).height()),
          (s = i(e).offset().top) + i(e).height() / 4 <= o && t <= s) &&
          i(this).addClass('visible');
      });
    }
    $(document).ready(function () {
      $('.is-hero-fade').fadeIn(2000).removeClass('.is-hero-fade');
    });
    (i.fn.nextOrFirst = function (e) {
      var t = this.next(e);
      return t.length ? t : this.prevAll(e).last();
    }),
      i('.work-process-item').hover(function () {
        i('.work-process-item').removeClass('focus'), i(this).addClass('focus');
      }),
      i(document).ready(function () {
        var t;
        (t = 0),
          (window.onscroll = function () {
            var e =
              document.documentElement.scrollTop || document.body.scrollTop;
            300 < e && t <= e
              ? ((t = e), i('.navigation').addClass('header-unpinned'))
              : ((t = e), i('.navigation').removeClass('header-unpinned'));
          }),
          i('[data-toggle="navbar-menu"]').on('click', function () {
            i(this).attr('data-navbar', 'visible'),
              i('.navigation').addClass('visible'),
              i('#navbar-menu').addClass('show'),
              i('.sidenav-overlay').addClass('show');
          }),
          i('[data-toggle="navbar-menu-close"], .sidenav-overlay').on(
            'click',
            function () {
              i('[data-toggle="navbar-menu"]').attr('data-navbar', 'hidden'),
                i('.navigation').removeClass('visible'),
                i('#navbar-menu').removeClass('show'),
                i('.sidenav-overlay').removeClass('show');
            },
          ),
          e(),
          i(window).scroll(function () {
            var e;
            s(),
              (e = 0 + i(window).scrollTop() / 3 + 'deg'),
              i('.user-image .shape').css({
                '-webkit-transform': 'rotateZ(' + e + ')',
                '-moz-transform': 'rotateZ(' + e + ')',
                '-ms-transform': 'rotateZ(' + e + ')',
                '-o-transform': 'rotateZ(' + e + ')',
                transform: 'rotateZ(' + e + ')',
              });
          });
      }),
      i(window).on('load', function () {
        var t, o, e;
        i('.mesonaryInit').isotope(),
          i('.floating-info-block').each(function () {
            i(this)
              .on('mouseenter', function () {
                i(this).data('title') &&
                  (i('.floating-info-block-tile').html(
                    '<span class="card-subtitle font-weight-500 small mb-1">' +
                      i(this).data('category') +
                      '</span><h4 class="card-title mb-0 font-weight-bold">' +
                      i(this).data('title') +
                      '</h4>',
                  ),
                  i('.floating-info-block-tile').addClass('visible')),
                  i(document).on('mousemove', function (e) {
                    i('.floating-info-block-tile').css({
                      left: e.clientX + 15,
                      top: e.clientY + 20,
                    });
                  });
              })
              .on('mouseleave', function () {
                i('.floating-info-block-tile').removeClass('visible');
              });
          }),
          i('.floating-image-block .block').each(function () {
            i(this)
              .on('mouseenter', function () {
                i(this).addClass('enter'),
                  i(document).on('mousemove', function (e) {
                    i('.floating-image').css({
                      left: e.clientX - 50,
                      top: e.clientY - 50,
                    });
                  });
              })
              .on('mouseleave', function () {
                i(this).removeClass('enter');
              });
          }),
          (e = i('.fade-slider .slider-item:eq(0)').height()),
          i('.fade-slider').css('height', e),
          i('.fade-slider .slider-item:eq(0)').addClass('active'),
          i('.fade-slider .slider-item:gt(0)').hide(),
          setInterval(function () {
            i('.active:eq(0)')
              .fadeOut(1e3)
              .removeClass('active')
              .nextOrFirst('.slider-item')
              .addClass('active')
              .fadeIn(1e3)
              .end();
          }, 3e3),
          s();
      });
  })(jQuery);
};

export default jqueryLoad;
