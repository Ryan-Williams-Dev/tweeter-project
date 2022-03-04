$(document).ready(function() {

  // this function is responsible for keeping count of the tweet characters
  $('#tweet-text').keyup(function() {
    const tweetLength = $(this).val().length;
    const counter = $(this).parents().find(".counter");
    counter.val(140 - tweetLength);
    if (counter.val() < 0) {
      $(counter).attr('id', 'neg-count');
    } else {
      $(counter).attr('id', '');
    }
  });

});