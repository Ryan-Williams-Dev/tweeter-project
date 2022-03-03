$(document).ready(function () {


  $('#new-tweet-reveal').on('click', () => {
    if ($('.new-tweet').is(':visible')) {
      $('.new-tweet').slideUp();
      $('#error-msg').slideUp();
    } else {
      $('.new-tweet').slideDown();
      $('#tweet-text').focus();
    }
  });

  $(".scroll-up-button").hover(
    function() {
      $(this).addClass('fa-bounce');
    },
    function() {
      $(this).removeClass('fa-bounce');
    }
  )

  $(".scroll-up-button").on('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  })

  $('.scroll-up-button').slideUp();

  $(window).on('scroll', () => {
    /* Changes which buttons are available based on scroll posistion */
    if ($(window).scrollTop() === 0) {
      $('.newTweetPrompt').slideDown();
      $('.scroll-up-button').slideUp();
    } else {
      $('.newTweetPrompt').slideUp();
      $('.scroll-up-button').slideDown();
    }

    /* Changes colour of logo based on scroll posistion */

    if($(window).width() < 1024) {
      if($(window).scrollTop() > 360) {
        $('nav').css('color', "#4057a1");
      } else {
        $('nav').css('color', "#FFFFFF");
      }
    }

  })




});