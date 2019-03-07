// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('assets'));

// Reservation (DATA)
// =============================================================
var reservations = [
    {
      id: 212,
      name: "flo",
      email: "flo@gmail.com",
      phone: 9004481981
    },
    {
      id: 200,
      name: "jojo",
      email: "Jojo@gmail.com",
      phone: 9001211233
    },
    {
      id: 322,
      name: "Carlos",
      email: "carlos@gmail.com",
      phone: 9003221222
    },
    {
      id: 211,
      name: "lily",
      email: "lily@gmail.com",
      phone: 900323121
    }
  ];
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all Tables
app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

// Create New reservation - takes in JSON input
app.post("/api/reservations", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newReservation
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.id = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});
///hello
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
