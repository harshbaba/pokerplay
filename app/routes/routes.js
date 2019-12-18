// ROUTES FOR OUR API
// =============================================================================

// create our router
var express    	= require('express');
var router 		= express.Router();
const fs 		= require('fs');
var path       	= require('path');
var utils 		= require('../utils/utils');

// Dummy Data here
var MockData     = require('../models/mock_data');
var publicPath = path.join(__dirname, '..', 'public/');

// middleware to use for all requests
router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	//res.json({ message: 'hooray! welcome to our api!' });
	res.sendFile( publicPath + '/html/index.html');
});

router.get('/:groupId', function(req, res) {
	console.log('=================================Group ID======================');
	let groupId = req.params.groupId;
	let grpInfo = utils.isGroupExist(req.params.groupId);
	if(groupId){
		if(grpInfo.isExist){
			res.sendFile( publicPath + '/html/dashboard.html');
		}else{
			console.log('GroupId does not exist, Redirect');
			res.redirect('/');
		}
	}
	else{
		console.log('GroupId has not provided from url, Redirect');
		res.redirect('/');
	}
	
});

router.post('/createGroup', function(req,res){
	let grpInfo = utils.isGroupExist(req.body.groupId);
	if(grpInfo.isExist){
		res.json({success: false, message: grpInfo.groupName +' Group Already Exist', groupId: grpInfo.groupName});
	}else{
		$groups[req.body.groupId] = {
			groupId: req.body.groupId,
			adminName: req.body.userName,
			createdAt: new Date(),
			isStartVoting: false,
			isShowResult: false,
			isDeclareResult: false
		};
		res.json({success: true, message: grpInfo.groupName +' Group Created Succesfully', groupId: grpInfo.groupName});
	}
	
});

router.post('/enterGroup', function(req,res){
	let grpInfo = utils.isGroupExist(req.body.groupId);
	if(grpInfo.isExist){
		res.json({success: true, message: grpInfo.groupName +' Group Exist.', groupId: grpInfo.groupName});
		//res.redirect('/dashboard/'+req.body.groupId);
	}else{
		res.json({success: false, message: grpInfo.groupName +' Group does not Exist.', groupId: grpInfo.groupName});
	}
});

module.exports = router;


	


