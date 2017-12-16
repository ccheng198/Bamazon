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
		console.log(result);
	promptUser();
	});
});

function promptUser(err, results) {
	if (err) throw err;
	inquirer
		.prompt([
			{
				name: "listOfItems",
				type: "rawlist",
				choices: [
					"1",
					"2",
					"3",
					"4",
					"5",
					"6",
					"7",
					"8",
					"9",
					"10"
				],
				message: "What product would you like to buy (product id)?"
			},
			{
				name: "howManyUnits",
				type: "input",
				message: "How many units would you like to purchase?"
			}
		])
		.then(function() {
				if (err) throw err;
				connection.query("UPDATE products SET stock_quantity = 100 WHERE item_id = 1", function(err, result, fields) {
					if (err) throw err;
					console.log(result);
				})
		})
}


	// how to make sure there's stuff in inventory
	// if (howManyUnits.response > stock_quantity)

	// console.log("You bought " + howManyUnits + " units of " + listOfItems);



// then prompt user with:
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.

// how to have input not matter on capitalizations
// how to keep stock of stuffs/display when it's out of stock







