// -------------------------------
// Import Express
// -------------------------------

var express = require('express');
var app = express();


// -------------------------------
// Routes
// -------------------------------

// Home Route
app.get('/', function(req, res) {
    res.send('Welcome to Home Page');
});


// About Route
app.get('/about', function(req, res) {
    res.send('About Page');
});


// Contact Route
app.get('/contact', function(req, res) {
    res.send('Contact Page');
});


// Student Route
app.get('/student', function(req, res) {
    res.send('I am Student');
});


// Enrolled Student Route
app.get('/enrolled_student', function(req, res) {
   
    res.send('I am enrolled Student');
});


// -------------------------------
// Start Server
// -------------------------------

var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log(
        'Example app listening at http://%s:%s',
        host,
        port
    );
});