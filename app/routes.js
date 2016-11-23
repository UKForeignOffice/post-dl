var express = require('express')
var router = express.Router()
var request = require('request')
var json2csv = require('json2csv')
var fs = require('fs')


// Route index page
router.get('/', function (req, res) {

  res.render('index')
})

// add your routes here


	

router.get('/usa', function (req, res) {

var fields = ['title', 'format', 'web_url']

request('https://www.gov.uk/api/world-locations/usa/organisations', function(error, response, body){
	var results = JSON.parse(body).results

	console.dir(results)
	console.dir(results[0].title)

var csv = json2csv({ data: results, fields: fields });

	console.dir(csv)

fs.writeFileSync('usa.csv', csv)
	console.dir('file saved');
;

	res.download ('usa.csv');

});

});

module.exports = router;
