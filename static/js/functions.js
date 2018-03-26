/* enable CSS features that have JavaScript */
jQuery('html').removeClass('no-js');

/* determine if screen can handle touch events */
if (
  !(
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  )
) {
  jQuery('html').addClass('no-touch');
}

/* simple way of determining if user is using a mouse */
var screenHasMouse = false;
function themeMouseMove() {
  'use strict';
  screenHasMouse = true;
}
function themeTouchStart() {
  'use strict';
  jQuery(window).off('mousemove');
  screenHasMouse = false;
  setTimeout(function() {
    jQuery(window).on('mousemove', themeMouseMove);
  }, 250);
}
if (!/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
  jQuery(window)
    .on('touchstart', themeTouchStart)
    .on('mousemove', themeMouseMove);
  if (window.navigator.msPointerEnabled) {
    document.addEventListener('MSPointerDown', themeTouchStart, false);
  }
}

jQuery(document).ready(function() {
  'use strict';

  /* handle both mouse hover and touch events for traditional menu + mobile hamburger */
  jQuery('#top .site-menu-toggle').on('click', function(e) {
    jQuery('#top').toggleClass('open-mobile-menu');
    e.preventDefault();
  });

  jQuery('#site-menu .menu-expand').on('click', function(e) {
    var $parent = jQuery(this).parent();
    $parent.toggleClass('collapse');
    e.preventDefault();
  });
  jQuery('#site-menu .current-menu-parent').addClass('collapse');

  jQuery(document).on(
    {
      mouseenter: function() {
        if (screenHasMouse) {
          jQuery(this).addClass('hover');
        }
      },
      mouseleave: function() {
        if (screenHasMouse) {
          jQuery(this).removeClass('hover');
        }
      },
    },
    '#site-menu li:not(.menu-item-search)',
  );

  if (!jQuery('html').hasClass('no-touch')) {
    jQuery('#site-menu li.menu-item-has-children > a').on('click', function(e) {
      if (
        !screenHasMouse &&
        !window.navigator.msPointerEnabled &&
        !jQuery('#top .site-menu-toggle').is(':visible')
      ) {
        var $parent = jQuery(this).parent();
        if (!$parent.parents('.hover').length) {
          jQuery('#site-menu li.menu-item-has-children')
            .not($parent)
            .removeClass('hover');
        }
        $parent.toggleClass('hover');
        e.preventDefault();
      }
    });

    /* toggle visibile dropdowns if touched outside the menu area */
    jQuery(document).on('click', function(e) {
      if (jQuery(e.target).parents('#site-menu').length > 0) {
        return;
      }
      jQuery(
        '#site-menu li.menu-item-has-children, #site-menu li.menu-item-search',
      ).removeClass('hover');
    });
  }

  jQuery('#site-menu li.menu-item-search > a').on('click', function(e) {
    var $parent = jQuery(this).parent();
    if (!$parent.parents('.hover').length) {
      jQuery('#site-menu li.menu-item-has-children')
        .not($parent)
        .removeClass('hover');
    }
    $parent.toggleClass('hover');
    if ($parent.hasClass('hover')) {
      window.setTimeout(function() {
        jQuery('#site-menu .searchform input[type=search]').focus();
      }, 150);
    }
    e.preventDefault();
  });

  jQuery('.tab-links a').on('click', function(e) {
    var $this = jQuery(this),
      $parent = $this.parent();
    e.preventDefault();
    if ($this.hasClass('active')) {
      return;
    }
    $parent.siblings('li').each(function() {
      var $link = jQuery('a', this);
      $link.removeClass('active');
      jQuery($link.attr('href')).removeClass('active');
    });
    $this.addClass('active');
    jQuery($this.attr('href')).addClass('active');
  });

  jQuery('#address-selector .bottom-button').on('click', function(e) {
    e.preventDefault();
    jQuery('#address-selector').toggleClass('show-map');
  });

  jQuery('#address-selector .change-address').on('click', function(e) {
    e.preventDefault();
    // check if parent is clicked
    var $target = jQuery(e.target),
      $parent = $target.parent();
    if ($target.hasClass('address-list') || $parent.hasClass('address-list')) {
      if ($target.hasClass('address-code')) {
        jQuery('#address-selector .change-address').removeClass('show-list');
        jQuery('#address-selector .address-container')
          .not('#address-' + $target.data('address-code'))
          .removeClass('active');
        jQuery(
          '#address-selector #address-' + $target.data('address-code'),
        ).addClass('active');
        if (jQuery.fn.matchHeight) {
          jQuery.fn.matchHeight._update();
        }
      }
    } else {
      jQuery('#address-selector .change-address').toggleClass('show-list');
    }
  });

  if (jQuery.fn.matchHeight) {
    jQuery('.eq-height-container .eq-height').matchHeight();
  }

  if (jQuery.fn.masonry) {
    var $grid = jQuery('.blog-listing .grid').masonry();
    $grid.imagesLoaded().progress(function() {
      $grid.masonry('layout');
    });
  }

  jQuery(window).bind('beforeunload', function() {
    jQuery('body').addClass('before-unload');
  });

  /* fallback for text gradients, enable if really needed */
  jQuery('.no-backgroundcliptext span.gradient-text-clip').each(function() {
    var ns = 'http://www.w3.org/2000/svg',
      svg = document.createElementNS(ns, 'svg'),
      text = document.createElementNS(ns, 'text'),
      grad = document.createElementNS(ns, 'linearGradient'),
      stop1 = document.createElementNS(ns, 'stop'),
      stop2 = document.createElementNS(ns, 'stop');

    svg.setAttribute('width', jQuery(this).width());
    svg.setAttribute('height', jQuery(this).height() - 1);
    svg.setAttribute('class', 'gradient-text-clip-svg');

    grad.setAttribute('id', 'g');
    grad.setAttribute('y2', 1);
    grad.setAttribute('x2', 1);
    grad.setAttribute('spreadMethod', 'reflect');
    stop1.setAttribute('stop-color', '#ff2052');
    stop1.setAttribute('offset', 0);
    stop2.setAttribute('stop-color', '#0000ff');
    stop2.setAttribute('offset', 1);
    grad.appendChild(stop1);
    grad.appendChild(stop2);
    svg.appendChild(grad);

    text.setAttribute('x', 0);
    text.setAttribute('y', '0.7em');
    text.setAttribute('style', 'fill:url(#g);');
    text.textContent = jQuery(this).text();
    svg.appendChild(text);

    jQuery(this).replaceWith(svg);
  });
});
