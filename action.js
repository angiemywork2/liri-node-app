var fs = require("fs");

var Twitter = require("twitter");

var client = new Twitter({
  consumer_key: 'ZGa0dFh4DWTVD9BUcBGmm195T',
  consumer_secret: 'bEr7zjvpH1JpDdxH8UgS3aQIsALDj2PqKgWRoNETz6lZc13RXN',
  access_token_key: '900482853267546112-zLLAI2Eg4cQroHteSardGrsbMENB7uf',
  access_token_secret: 'wwPGpdX2428pLXa1PgVF1CQAdt3ZVsD7SIab2T98TKEmC',
});

client.post('statuses/update', {status: 'What a Super and Wonderful Day 3!'}, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
    console.log(tweet.text);

    function myAction() {

  // We will read the existing bank file
  fs.appendFile("random.txt", tweet.text, function(err, response) {
    if (err) {
      return console.log(err);

  }

  
   
  })
	}
}
});