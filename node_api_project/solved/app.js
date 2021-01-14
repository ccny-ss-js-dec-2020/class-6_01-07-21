/*
	The main page of the application, used to combine your three calls into on central call
*/
//requiring/importing my 3 files used to query 3 different apis
var yelp = require('./yelp.js');
var geocoder = require('./geocoder.js');
var youtube = require('./youtube.js')
//stating that command is going to equal the 3rd argument
//when the user enters into the command line
var command = process.argv[2];

//saying if someone does type in a third argument
if(command){
	//making a switch statement, stating if the word is pressed then run the function
	//for that api
	switch(command){
		case 'yelp':
			yelp();
			break;
		case 'youtube':
			youtube(process.argv.slice(3).join(" "));
			break;
		case 'geocoder':
			geocoder();
			break;
		default:
			//if the 2nd argument does not match the cases above, do this
			console.log("Please type 'yelp, geocoder, or youtube'")
	}
} else {
	//if no third argument, then do this
	console.log("Please type 'node app.js', followed by 'yelp, geocoder, or youtube'")
}
