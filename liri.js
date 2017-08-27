var liri = require("./keys.js");
var fs = require("fs");
var request = require('request');
//console.log(liri);


var Twitter = require("twitter");
var Spotify = require('node-spotify-api');

var consumer_key = liri.twitterKeys.consumer_key;
var consumer_secret = liri.twitterKeys.consumer_secret;
var access_token_key = liri.twitterKeys.access_token_key;
var access_token_secret = liri.twitterKeys.access_token_secret;

var client = new Twitter({
  consumer_key: consumer_key,
  consumer_secret: consumer_secret,
  access_token_key: access_token_key,
  access_token_secret: access_token_secret
});


//console.log(consumer_key);

var liriList = liri.twitterKeys;
//console.log(liriList);

var myCommand = process.argv[2];
//var = process.argv[3];


if (myCommand === "my-tweets") {
	console.log("YAY!");
	
	var params = {screen_name: 'Aragin922Test', count: 20};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  	if (!error) {
     	for (i = 0; i<tweets.length; i++) {
    		var tweetData = ("Tweet Number: " + (i+1)+ "\n" + tweets[i].created_at + "\n" + tweets[1].text + "\n");
    		console.log(tweetData);
    	}
    
  	} else {
  	console.log(error);
  	}
	})
};


if (myCommand === "spotify-this-song") {
	var song = process.argv[3];
	fs.readFile("random.txt", "utf8", function(error, data) {
		if (error) {
			return console.log(error);
		}
		console.log(data);
		console.log("Song: " +song);
	} )
		var spotify = new Spotify({
  	id: "dd77a7c486d84375b8c9cd3e4c41781c",
  	secret: "5a8810263489475f9ca02730a36c5a9b"
		});
 
	spotify.search({ type: 'track', query: song, limit:1}, function(err, data) {
  	if (err) {
    	return console.log('Error occurred: ' + err);
  	}
 
	var songName = data.tracks.items[0].name;
	var artistName = data.tracks.items[0].artists[0].name;
	var albumName = data.tracks.items[0].album.name;
	var preview_url = data.tracks.items[0].preview_url;

	console.log("Song Name: " +songName);
	console.log("Artist: " +artistName);
	console.log("Album: " +albumName);
	console.log("Preview URL: " +preview_url);
	});
}

if (myCommand === "movie-this"){
	var movie = process.argv[3];
	var url = "http://www.omdbapi.com/?t=" +movie+ "&y=&plot=short&apikey=40e9cece";

	request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            console.log("Title: " + JSON.parse(body)["Title"]);
            console.log("Year: " + JSON.parse(body)["Year"]);
            console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
            console.log("Country: " + JSON.parse(body)["Country"]);
            console.log("Language: " + JSON.parse(body)["Language"]);
            console.log("Plot: " + JSON.parse(body)["Plot"]);
            console.log("Actors: " + JSON.parse(body)["Actors"]);
            var rater = JSON.parse(body).Ratings[1].Source;
            var value = JSON.parse(body).Ratings[1].Value;
            console.log(rater+" rating is:  "+value);
            	//if (body.
        }
      } )

}