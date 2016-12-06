// user sees html page - view reservations - make reservations
// view will display current reservations (max of 5)
	// otherwise they will go on the waiting list (max of 2)
		// otherwise they will not be put on any list
// make will bring up a form - user name, email, phone number, unique id, submit



// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// SETS UP THE EXRESS APP
var app = express();
var PORT = 3000;

// LISTENING
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});

// SET UP THE EXPRESS APP TO HANDLE DATA PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// DATA
var reservations = [
	{
	  username: "darthmaul",
	  name: "Darth Maul",
	  phone: "123-432543",
	  email: "hi@aol.com"
	},
	{
	  username: "darthmaul",
	  name: "Darth Maul",
	  phone: "123-432543",
	  email: "hi@aol.com"
	},
	{
	  username: "darthmaul",
	  name: "Darth Maul",
	  phone: "123-432543",
	  email: "hi@aol.com"
	},
	{
	  username: "darthmaul",
	  name: "Darth Maul",
	  phone: "123-432543",
	  email: "hi@aol.com"
	},
	{
	  username: "darthmaul",
	  name: "Darth Maul",
	  phone: "123-432543",
	  email: "hi@aol.com"
	},
];
var waitlist = [
	{
	  username: "yoda",
	  name: "Yoda",
	  phone: "123-432543",
	  email: "hi@aol.com"
	}
];

// ROUTES

// basic route that sends user to main page
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

// route to view reservations
app.get("/view", function(req, res) {
	res.sendFile(path.join(__dirname, "viewTable.html"));
	//res.send(reservations);
});

// route to add specific reservations
app.get("/add", function(req, res) {
	res.sendFile(path.join(__dirname, "makeRes.html"));
});

// create new characters - takes in JSON input
app.post("/api/new", function(req, res) {
	var newReservation = req.body;
	newReservation.userName = newReservation.name.replace(/\s+/g, "").toLowerCase();
		alert(newReservation);
		if (reservations.length <=5) {
			reservations.push(newReservation);
			res.json(newReservation);
			alert("You've made a reservation")
		} else if (waitlist.length <=2) {
			waitlist.push(newReservation);
			res.json(newReservation);
			alert("You've been added to the waitlist!")
		} else {
			alert("Sorry, waitlist full!")
		};
});
