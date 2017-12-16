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


// how to make sure there's enough stock_quantity in db
// if (howManyUnits.response > stock_quantity) then update the stock_quantity or else console.log("Insufficient quantity!")
// console.log("You bought " + howManyUnits + " units of " + listOfItems);

// how to update sql database with remaining quantities
// how to show total cost of purchase
	// calculate (how many of item) * (price of item) and log it




