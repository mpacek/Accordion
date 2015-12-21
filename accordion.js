"use strict";

(function ($) {

$.fn.accordionSetup = function (settings) {
  settings = jQuery.extend({
      openClass: 'is-open',
      buttonClass: '.accordion-opener',
      containerClass: '.accordion-container',
      onlyOnMobile: false
  }, settings);

  return this.each(function () {

    var $accordion = $(this),
        $accordionButton = $accordion.find(settings.buttonClass),
        $accordionContainer = $accordion.find(settings.containerClass);

    var updateAria = function () {

      $accordionButton.each(function () {
        var _this = $(this);

        if (_this.hasClass(settings.openClass)) {
          _this
          .attr('aria-selected', 'true')
          .attr('aria-expanded', 'true')
            .next(settings.containerClass)
            .attr('aria-hidden', 'false')
              .find('a')
              .attr('tabindex', '0');
        } else {
          _this
          .attr('aria-selected', 'false')
          .attr('aria-expanded', 'false')
            .next(settings.containerClass)
            .attr('aria-hidden', 'true')
              .find('a')
              .attr('tabindex', '-1');
        }
      });
    }


    // INIT ACCORDION
    // ------------------------------------------------

    var accordionInit = function () {

      // Aria settings
      $accordionButton
        .attr('role', 'tab');

      $accordionContainer
        .attr('role', 'tabpanel');

      $accordionButton.on('click.accordion', function (e) {
        e.preventDefault();
        var _this = $(this);

        _this
          .toggleClass(settings.openClass)
            .next(settings.containerClass)
            .slideToggle(200);

        setTimeout( function () {
          updateAria()
        }, 10);
      });
      updateAria();
    }


    // CLEAR ACCORDION STYLES
    // ------------------------------------------------

    var accordionClear = function () {
      $accordionButton.each(function () {
        var _this = $(this);

        _this
        .off('click.accordion')
        .removeAttr('role aria-selected aria-expanded')
        .removeClass(settings.openClass)
          .next(settings.containerClass)
          .removeAttr('role aria-hidden style')
            .find('a')
            .removeAttr('tabindex');
      });
    }

    if (settings.onlyOnMobile) {
      if ($.fn.responsiveSetup) {
        $(document).responsiveSetup({
          onMobile: { callFunction: accordionInit },
          onDesktop: { callFunction: accordionClear }
        });
      }
    } else {
      accordionInit();
    }
  });
}

}(jQuery));
