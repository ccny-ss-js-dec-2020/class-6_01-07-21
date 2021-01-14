var fs = require('fs');

// apiResponseBody is being passed in as a parameter
// it will represent the response from the api that is being passed in to this function and then to the text file
module.exports = (apiResponseBody) => {
	var fileNameAndPath = './app.txt';
	//console.log(apiResponseBody)
	// if the file exists then do this
	if(fs.existsSync(fileNameAndPath)){
		fs.readFile(fileNameAndPath, 'utf-8', function(err, body){
			if(err) throw err;
			//console.log(body)
			fs.writeFile(fileNameAndPath, body + "\n" + apiResponseBody, function(err){
				if(err) throw err;
			})
		})
		//if the file does not exist, then do what is in the else statement
	} else {
		fs.writeFile(fileNameAndPath, apiResponseBody, function(err){
			if(err) throw err;
		})
	}
}
