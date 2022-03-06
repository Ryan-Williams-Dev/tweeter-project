/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  

  // Takes in a tweet object and returns an entire html element for the tweet
  const createTweetElement = function(tweetData) {
    const $tweet = `
    <article class="tweet">
      <header>
        <div class="user-info">
          <img src="${tweetData.user.avatars}">
          <span class="name">${tweetData.user.name}</span>
        </div>
        <span class="handle">${tweetData.user.handle}</span> 
      </header>
      <div class="tweet-body">
       <p class="tweet-content">${escape(tweetData.content.text)}</p>
      </div>
      <footer>
        <span>${timeago.format(tweetData.created_at)}</span>
        <div class="actions">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
    `;
    return $tweet;
  };
  

  // take in an array of tweet objects, sends each through html processing and appends them to the approriate div
  const renderTweets = function(tweets) {
    for (const article of tweets) {
      const $tweet = createTweetElement(article);
      $('#tweets-container').append($tweet);
    }
  };
  
  // prevents the default refresh behaviour and sends a ajax post request to add in the new tweet, error checking first.
  $('#tweet-form').on('submit', function(event) {
    event.preventDefault();
    $('#error-msg').slideUp(100);

    const formData = ($(this).serialize());
    const text = event.target[0].value;

    if (!text || text.length <= 0) {
      $('#error-msg').text("⚠️ Warning: Tweet cannot be empty. ⚠️").slideDown();
      return setTimeout(() => {
        $('#error-msg').slideUp();
      }, 4000)
    }
    if (text.length > 140) {
      $('#error-msg').text("⚠️ Warning: Tweets cannot be over the maximum of 140 characters long. ⚠️").slideDown();
      return setTimeout(() => {
        $('#error-msg').slideUp();
      }, 4000)
    }

    $('#tweet-text').val('');
    $('.counter').val('140');
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: formData,
    })
    .then(() => {
      getLatestTweet();
    });
  });
  
  // Makes an ajax GET request for the tweets
  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    })
    .then((result) => {
      renderTweets(result);
    });
  };
  

  // an escape function, used by the createTweetElement function to prevent script injection
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  // a function run upon submission of a new tweet to add this latest tweet to the page without a refresh
  const getLatestTweet = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    })
    .then((result) => {
      const $latestTweet = createTweetElement(result[result.length - 1]);
      $('#tweets-container').append($latestTweet);
    });
  };

  loadTweets();
  
});