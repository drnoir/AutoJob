var express = require('express');
var router = express.Router();

// Figure out how to communicate with the GoogleJobs API

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AutoJob', yourCV: null, postcode:  '', radius: 25, frequency : 100000, tags: ['Javascript, Typescript, Developer, Programming']     });
});

module.exports = router;
