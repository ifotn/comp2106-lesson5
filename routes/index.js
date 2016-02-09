var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 5' });
});

/* GET about page */
router.get('/about', function(req, res, next) {

  // show the about.ejs view
  res.render('about', {
        myName: "Rich",
        month: "February",
        title: "About"}
  );
});

/* GET random page */
router.get('/random', function(req, res, next) {
    // calculates a random number and passes it to view called "random"
    res.render('random', {
        random: Math.random(),
        title: "Random Number Generator" }
    );
});

// make this file public within the rest of the application
module.exports = router;
