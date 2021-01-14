// 'use strict';
/*
	google npm yelp-fusion
*/

//importing my read_and_write function to be used later on
var read_and_write = require('./file_read_and_write.js');
//exporting this function to be used in app.js
module.exports = () => {

		const yelp = require('yelp-fusion');
    const inquirer = require('inquirer');

		//inserting my created token into the built in client 'yelp.client(<API KEY>)'
		//yelp-fusion built a nice little tool for you to easily
		//access their api instead of you having to use a url string
		//look at how nice they made their tool
		//you store your info and the client, and if you're authorized to use the api,
		//then the client.search makes the call for you with the parameters of your choice
		//https://www.yelp.com/developers/documentation/v3/business_search
		const client = yelp.client("");

    //calling the inquirer prompt function and setting what we would like to prompt
    inquirer.prompt([
      {
  			type: "input",
  			message: "Location?",
  			name: "location"
  		},
      {
        type: "input",
        message: "Type of Food?",
        name: "type"
      }
    ]).then(function(answers){
      //i chose to use these parameters, yelp-fusion api offers a few more
  		client.search({
  		  term: answers.type,
  		  location: answers.location
  		}).then(response => {
  			//console.log(response)
  			//parse through this, have fun with ;)

  			//empty string to be appended onto later on
  			var str = "";
  			for(var i = 0; i < 5; i++){
  				//logging items from the api
  				console.log("-------------Yelp Search Result " + (i + 1) + "-----------")
  				console.log("Name: " + response.jsonBody.businesses[i].name);
  				console.log("Rating: " + response.jsonBody.businesses[i].rating);
  				console.log("Price: " + response.jsonBody.businesses[i].price);
  				console.log("Phone: " + response.jsonBody.businesses[i].phone);
  				console.log("Closed Right Now: " + isClosed(response.jsonBody.businesses[i].is_closed));
  				console.log("")

  				//appending the result to the string
  				str += "-------------Yelp Search Result " + (i + 1) + "-----------" + "\n";
  				str += "Name: " + response.jsonBody.businesses[i].name + "\n";
  				str += "Rating: " + response.jsonBody.businesses[i].rating + "\n";
  				str += "Price: " + response.jsonBody.businesses[i].price + "\n";
  				str += "Phone: " + response.jsonBody.businesses[i].phone + "\n";
  				str += "Closed Right Now: " + isClosed(response.jsonBody.businesses[i].is_closed) + "\n";
  				str += "\n";

  				//storing the fully created string into this function
  				//look at the function in that file to see what goes in with that string
  				read_and_write(str)
  			}
				// if there is an error
  		}).catch(e => {
				// then throw the error
  		  throw new Error(e)
  		});
  		//this is a function that i am creating in order to translate the response
  		//from the object to equal either yes or no. the response from the object
  		//returns a boolean. so im stating that if it is true, return "Yes", else return "No"
  		//this is a ternary operator, it's a nifty way to write a simple if/else statement that
  		//returns an item
  		//look at where it is being called in this method
    });

    var isClosed = (obj) => {
			// this is called a ternary operator
			// it's a shortened 'if' statement
      return obj ? "Yes" : "No";
			// if obj exists, then return "Yes"
			// if obj does not exist, then return "No"
			/*
				if(obj){
				  return "Yes"
			  } else {
			    return "No"
		    }
			*/
    }

}
