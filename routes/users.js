var express = require('express');
var router = express.Router();
var userModel = require('../model/UserModel.js')
var _log = require('../util/Logger');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var usr = new userModel.User();
	usr.generateRandomUser();
	_log.debug("User model returned", usr);
	_log.error("Faking an error");
  	res.json(usr).end();
});


/* GET users listing. */
router.get('/list', function(req, res, next) {
	var usrList = [];

	for (var i = 0; i< 50; i++){
		var usr = new userModel.User();
		usr.generateRandomUser();
		usrList.push(usr);
	}
	
  	res.json(usrList).end();
});

/* GET users listing. */
router.get('/throwError', function(req, res, next) {
  	throw new Error("Throwing error on demand")
});



module.exports = router;
