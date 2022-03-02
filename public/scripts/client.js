/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
      <p class="tweet-content">${tweetData.content.text}</p>
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
  `
  return $tweet;
}

const renderTweets = function(tweets) {
  for (const article of tweets) {
    const $tweet = createTweetElement(article)
    $('#tweets-container').append($tweet)
  }
}


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

renderTweets(data);



// const $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.