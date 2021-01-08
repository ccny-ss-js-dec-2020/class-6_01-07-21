# API APP
Develop a command line tool that takes a command as an argument to know which api to call and what information to input into the api call to have a proper response returned.

## Assignment
Use the yelp, youtube, and geocoder api in node.js to make api calls to have information returned from these apis and then append the results to a text file.

You will need to research how to implement each of these api's from npm into your application.

## Instructions

Run 'npm install' to install of the modules from npm into your project

* API Instructions
  * Geocoder
    * To get API Key:  https://developers.google.com/maps/documentation/geocoding/get-api-key
    * API Url String to input into 'request' module: "https://maps.googleapis.com/maps/api/geocode/json?address=<INPUT_ADDRESS>&key=<API_KEY>"
  * Youtube
    * To get API Key: https://developers.google.com/youtube/v3
    * Setup for app in Node: https://www.npmjs.com/package/youtube-search
  * Yelp
    * To get API Key: https://www.yelp.com/developers/documentation/v3/business_search
    * Setup for app in Node: https://www.npmjs.com/package/yelp-fusion

* For the Youtube API:
  * Your command line should take four commands for the Youtube API:
    * node
    * ```<File Name>```
    * youtube
    * Search Query
  * You will be using process.argv and the 'youtube-search' npm module
* For the Geocoder API:
  * Your command line should take four commands for the Youtube API:
    * node
    * ```<File Name>```
    * geocoder
  * You will be using the 'inquirer' & the 'request' npm modules
* For the Yelp API:
  * Your command line should take four commands for the Youtube API:
    * node
    * ```<File Name>```
    * yelp
  * You will be using the 'inquirer' & the 'yelp-fusion' npm modules

After the command is entered, parse information from the api in neat and organized console.logs</br>

<strong>Bonus:</strong></br>
* Export/import each different api as a function from another .js file</br>
* Write these items to a text file in a nice format (You can export this function and import it into each API .js file)</br>
* Make sure to append to the text file and not overwrrite it after every write.
* Error Handling

## Advice
* Remember to go one step at a time. Think of each single task as a step. Finish that step and then move onto the next step. If you want, list out the instructions/steps in your head and get an understanding how you're going to approach the app before starting to develop the application.
