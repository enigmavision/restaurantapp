// user sees html page - view reservations - make reservations
// view will display current reservations (max of 5)
	// otherwise they will go on the waiting list (max of 2)
		// otherwise they will not be put on any list
// make will bring up a form - user name, email, phone number, unique id, submit



// DEPENDENCIES 
var express = ("express");
var bodyParser = ("body-parser");
var path = ("path");

// SETS UP THE EXRESS APP
var app = express();
var PORT = 3000;

// LISTENING
app.listen(PORT, function() {
	console.log("App lsitening on PORT " + PORT);
});

// SET UP THE EXPRESS APP TO HANDLE DATA PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// DATA
var reservations = [];

// ROUTES

// basic route that sends user to main page
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

// route to view reservations
app.get("/app/:reservations?", function(req, res) {
	res.sendFile(path.join(__dirname, "view.html"));
});

// route to add specific reservations
app.get("/add", function(req, res) {
	res.sendFilr(path.join(__dirname, "make.html"));
});

// create new characters - takes in JSON input
app.post("/app/new", function(req, res) {
	var newReservation = req.body;
	newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
		console.log(newReservation);
		reservations.push(newReservation);
		res.json(newReservation);
});

