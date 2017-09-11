//toggle the all button
$('#all').click(function(){
	$('#allcontent').show();
	$('#all').css('background-color', '#1A237E');

	$('#online').css('background-color', '#3f51b5');
	$('#onlinecontent').hide();
	
	$('#offline').css('background-color', '#3f51b5');
	$('#offlinecontent').hide();
});

//toggle the online button
$('#online').click(function(){
	$('#onlinecontent').show();
	$('#online').css('background-color', '#1A237E');

	$('#all').css('background-color', '#3f51b5');
	$('#allcontent').hide();

	$('#offline').css('background-color', '#3f51b5');
	$('#offlinecontent').hide();
});

//toggle the offline button
$('#offline').click(function(){
	$('#offlinecontent').show();
	$('#offline').css('background-color', '#1A237E');

	$('#all').css('background-color', '#3f51b5');
	$('#allcontent').hide();

	$('#online').css('background-color', '#3f51b5');
	$('#onlinecontent').hide();
});


//use this twitch api:
//https://wind-bow.glitch.me/twitch-api/users/freecodecamp

//STREAMS
//https://wind-bow.glitch.me/twitch-api/streams/freecodecamp

var userNames = ["ESL_SC2", "cretetion", "freecodecamp"];

var twitchNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas", "rocketleague", "eleaguetv", "Cirouss"];
var url = 'https://wind-bow.glitch.me/twitch-api/users/'; 
var streamURL = 'https://wind-bow.glitch.me/twitch-api/streams/';

function getURL(){
	//itterates through each user and adds them to the url
	for (var i = 0; i < twitchNames.length; i ++){
		//channel url
		var twitchURL = url + twitchNames[i] + '?callback=?';
		//stream url
		var twitchStreamURL = streamURL + twitchNames[i] + '?callback=?';

		//returns each users JSON file
		$.getJSON(twitchURL, function(data){
			var image = data['logo'];
			//writes the user name, logo, and href for each user
			$('#all-users').append('<li>' + '<img src="' + image + '"' + '/>' + '<a target="_blank" href=https://www.twitch.tv/' + data['display_name'] + '>' + data['display_name'] + '</li>' + '</a>');
			$('#offline-users').append('<li class="offline">' + '<img src="' + image + '"' + '/>' + '<a target="_blank" href=https://www.twitch.tv/' + data['display_name'] + '>' + data['display_name'] + '</li>' + '</a>');
		});

		$.getJSON(twitchStreamURL, function(data){
			console.log(data);
			//sets the image for online users
			var image = data.stream.channel.logo;
			//appends the online users' info and logo
			if(data['stream'] !== null){
				$('#online-users').append('<li id="onlineJSON">' + '<img src="' + image + '"' + '/>' + '<a target="_blank" href=https://www.twitch.tv/' + data.stream.channel.display_name + '>' + data.stream.channel.display_name + '</li>' + '</a>' + '<h4>' + data.stream.channel.status + '</h4>');
			};
		});
	};
};

window.onload = getURL();	