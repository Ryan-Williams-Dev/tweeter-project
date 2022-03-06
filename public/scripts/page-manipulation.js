$(document).ready(function() {

  // this function shows or hides the new tweet form via the 'write a new tweet' arrow button
  $('#new-tweet-reveal').on('click', () => {
    if ($('.new-tweet').is(':visible')) {
      $('.new-tweet').slideUp();
      $('#error-msg').slideUp();
    } else {
      $('.new-tweet').slideDown();
      $('#tweet-text').focus();
    }
  });


  // animates the scroll up button that appears down the page
  $(".scroll-up-button").hover(
    function() {
      $(this).addClass('fa-bounce');
    },
    function() {
      $(this).removeClass('fa-bounce');
    }
  );

  $(".scroll-up-button").on('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* hides the scroll up button initially, for some reason I could not get it working with a hidden class,
  athough with more time it would have been done with css instead */
  $('.scroll-up-button').slideUp();


  $(window).on('scroll', () => {
    /* Changes which buttons are available based on scroll posistion */
    if ($(window).scrollTop() === 0) {
      $('.scroll-up-button').slideUp();
      $('nav').slideDown();
    } else {
      $('nav').slideUp();
      $('.scroll-up-button').slideDown();
    }

    /* Changes colour of logo based on scroll posistion */

    if ($(window).width() < 1024) {
      if ($(window).scrollTop() > 360) {
        $('nav').css('color', "#4057a1");
      } else {
        $('nav').css('color', "#FFFFFF");
      }
    }

  });




});