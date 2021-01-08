/*

Create a basic command line Node application using the inquirer package.
Your application should ask the user any five questions of your choosing.
The question set should include at least one:

- Basic input
- Password
- List
- Checkbox
- Confirm

If a user's password matches a pre-defined password, re-display the data back to the user with some text.

Remember to be creative!

*/

var pass = "hello"

var inquirer = require('inquirer');

inquirer.prompt([
		{
			type: "input",
			message: "What is your sign?",
			name: "sign"
		},
		{
			type: "password",
			message: "What is your password?",
			name: "password"
		},
		{
			type: "list",
			message: "Which would you rather?",
			choices: ["Eat", "Sleep", "Code"],
			name: "activity"
		},
		{
			type: "confirm",
			message: "Are you sure you want to continue?",
			name: "confirm",
			default: true

		},
		{
			type: "checkbox",
			message: "Which sport(s) do you like?",
			choices: ["soccer", "baseball", "football", "basketball", "hockey"],
			name: "sports"
		}
	]).then(function(answers){
		if(answers.password === pass){
			console.log(answers.password + " is the correct password");
			console.log("---- Here are your answers ----")
			console.log(answers)
		} else {
			console.log(answers.password + " is the incorrect password");
		}
});
