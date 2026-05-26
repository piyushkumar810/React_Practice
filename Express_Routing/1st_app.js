// Import express
const express = require('express');

// Create app
const app = express();


// ---------------- ROUTES ----------------

// Home Route
app.get('/', (req, res) => {
    res.send('Home Page');
});

// About Route
app.get('/about', (req, res) => {
    res.send('About Page');
});

// Contact Route
app.get('/contact', (req, res) => {
    res.send('Contact Page');
});


// ---------------- SERVER ----------------

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});


// -------------------------- help

/*
5. Run the Program
Open terminal inside project folder and run:
node app.js

Output:
Server running on port 3000


6. Open Browser
Visit:  http://localhost:3000/

You will see:
Home Page


7. Test Different Routes
About Route
http://localhost:3000/about

Output:
About Page

Contact Route
http://localhost:3000/contact

Output:
Contact Page



Explanation of Routing
app.get('/about', (req, res) => {
    res.send('About Page');
});
Meaning


// ----------------------------------------- meaning
Part	            Meaning
app.get()	        Handle GET request
'/about'	        URL path
(req, res)	        Request and response objects
res.send()	        Sends response to browser

If node app.js Does Not Work

Try:
node .\app.js

or check Node installation:


node -v
Optional: Auto Restart Server

Install nodemon:
npm install -g nodemon

Run:
nodemon app.js

Now server restarts automatically after saving changes.
*/