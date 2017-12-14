var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "127.0.0.1",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon"
});


connection.connect(function(err) {
	if (err) throw err;
	connection.query("SELECT item_id, product_name, price FROM products GROUP BY item_id", function(err, result, fields) {
		if (err) throw err;
		console.log(JSON.stringify(result));
	promptUser();
	// displayItems();
	});
});

// promptUser();
// var displayItems = function() {
// 	connection.query("SELECT item_id, product_name, price FROM products GROUP BY item_id", promptUser());
// }

function promptUser(err, results) {
	if (err) throw err;
	inquirer
		.prompt([
			{
				name: "listOfItems",
				type: "rawlist",
				choices: function() {
					var choiceArray = [];
					for (var i = 0; i < results.length; i++) {
						choiceArray.push(results[i].item_name);
					};
					return choiceArray;
				},
				message: "What product would you like to buy?"
			},
			{
				name: "howManyUnits",
				type: "input",
				message: "How many units would you like to buy?"
			}
		]);
};

// var promptUserCallback = function() {
// 	// if (promptUser.listOfItems === "Pillow", "Hat", "Book", "Playing Cards", "Lightbulb", "Watch", "Stuffed Animal", "Backpack", "Portable Battery", "Video Game") {
// 	if (err) throw err;
// 	inquirer
// 		.prompt([
// 			{
// 				type: "input",
// 				name: "howManyUnits",
// 				message: "How many units would you like to buy?"
// 			}
// 		])
// 		.then(confirmPurchase())
// };

var confirmPurchase = function(request, response) {
	// if (err) throw err;
	// if (howManyUnits.response > stock_quantity)
	console.log("yay!");
};


// then prompt user with:
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.

// how to have input not matter on capitalizations
// how to keep stock of stuffs/display when it's out of stock


