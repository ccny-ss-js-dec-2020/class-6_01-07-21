//importing a function that i created to read and write to a file
var read_and_write = require('./file_read_and_write.js');
//exporting this function
//Look at argThree throughout the function, see what it's doing
//Then, when this method is called in app.js, see what is put in place of argThree
module.exports = () => {
	//console.log(argThree);
	//requiring request to make an api call
	const request = require('request');
	const inquirer = require('inquirer');

	//calling the inquirer prompt function and setting what we would like to prompt
	inquirer.prompt([
		{
			type: "input",
			message: "Location?",
			name: "location"
		}
	]).then(function(answers){
		//google maps api string, you see address=, that's where the address is going
		const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
		//my api key to get access to the api
		//look at where this is being inserted, right after "&key=", that is how google
		//set up their string
		//https://developers.google.com/maps/documentation/geocoding/get-api-key
		const api_key = '';

		// if answers.location is a defined value and it does not equal a blank value
		if(answers.location && answers.location != ""){
			//starting an empty string to be appended to later on,
			//this is for writing to the .txt file
			var response_string = "";
			//using my imported request module to make a call to the internet,
			//concatanating variables with the "+"
			//my callback function (function(err, res, body))
				//err is the first param, which recognizes an err
				//res has details about the response, such as the status code
				//body is what comes from the response
			request(url + answers.location + "&key=" + api_key, function(err, res, body){
				//JSON.parse makes your object able to be looped and parsed through
				//console.log(body.results[0].address_components)
				var addressComponents = JSON.parse(body).results[0].address_components;
				// console.log(addressComponents)
				//using this variable which stores a part of the object for later on
				//console.log(body.results[0].geometry)
				// console.log(JSON.parse(body).results[0])
				var geometry = JSON.parse(body).results[0].geometry;
				//merely logging it to the terminal
				console.log("-------------Geocoder Search Result-----------");
				//appending this to the response_string to be added to the txt file
				response_string += "-------------Geocoder Search Result-----------\n";

				//looping through the addressComponents array,
				//setting conditional to find the items i want
				//logging each item and appending to 'str'
				for(var i = 0; i < addressComponents.length; i++){
					// console.log('----- this is the type -----')
					// console.log(addressComponents[i].types[0])
					// console.log('-----                  -----')
					if(addressComponents[i].types[0] === 'route'){
						console.log("Street: " + addressComponents[i].long_name);
						response_string += "Street: " + addressComponents[i].long_name + "\n";
					}
					if(addressComponents[i].types[0] === 'neighborhood'){
						console.log("Neighborhood: " + addressComponents[i].long_name);
						response_string += "Neighborhood: " + addressComponents[i].long_name + "\n";
					}
					if(addressComponents[i].types[0] === 'administrative_area_level_2'){
						console.log("City/County: " + addressComponents[i].long_name);
						response_string += "City/County: " + addressComponents[i].long_name + "\n";
					}
					if(addressComponents[i].types[0] === 'administrative_area_level_1'){
						console.log("Country: " + addressComponents[i].long_name);
						response_string += "Country: " + addressComponents[i].long_name + "\n";
					}
					if(addressComponents[i].types[0] === 'postal_code'){
						console.log("Zip Code: " + addressComponents[i].long_name);
						response_string += "Zip Code: " + addressComponents[i].long_name + "\n";
					}
				}

				//remember the geometry variable, its an object, not an array
				//no need to loop through
				console.log("Latitude: " + geometry.location.lat + ", Longitude: " + geometry.location.lng);
				//appending the latitude and longitude to the string
				response_string += "Latitude: " + geometry.location.lat + ", Longitude: " + geometry.location.lng + "\n";
				//sending that fully appended string to my function that i created
				//go to that file and look what that function does, look at the transformation of string
				//from nothing to full item
				read_and_write(response_string);
			});
		} else {
			//if the command is not entered correctly, then do this
			console.log("Please enter address, city, etc.")
		}
	});

}
