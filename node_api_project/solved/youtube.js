//importing my read and write file to be used later on
var read_and_write = require('./file_read_and_write.js');
//exporting this whole function to be used in my app.js file
module.exports = (inputToYoutubeApi) => {
	//requiring the youtube-search npm package, which was built by youtube
	//for you to search their api easily
	var youtubeSearch = require('youtube-search');

	//look in their documentation: google npm youtube-search
	//they want you to store this information in an object
	var opts = youtubeSearch.YouTubeSearchOptions = {
  	maxResults: 10,
  	key: ""
	};

	//to get the api key go here: https://developers.google.com/youtube/v3

	//look in their documentation, this is how it's done
	youtubeSearch(inputToYoutubeApi, opts, (err, results) => {
		//logging an error if there is one
		if(err) {
			console.error(err)
		}

		if(results.length > 0){
			//creating a string to append to later on
			var str = "";
			//parsing through the results array
			for(var i = 0; i < results.length; i++){
				//console.log(results)
				//and logging them
				console.log("-------------Youtube Search Result " + (i + 1) + " ---------------")
				console.log("Link: " + results[i].link);
				console.log("Title: " + results[i].title);
				console.log("Description: " + results[i].description);
				console.log("")
				//appending the results to the string...\n equals a new line, which
				//reflects in the write file
				str += "-------------Youtube Search Result " + (i + 1) + " ---------------\n";
				str += "Link: " + results[i].link + "\n";
				str += "Title: " + results[i].title + "\n";
				str += "Description: " + results[i].description + "\n";
				str += "\n";
				//console.log(str)
				//calling this function that i imported from another file
				//inserting the string in there. look what happens to that string
				//by going to that function from the imported file
				read_and_write(str);
			}
		} else {
			console.error("No Result for Search")
		}
	});
}
