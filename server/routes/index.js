const express = require('express');
const router = express.Router();
const { User, Vocation, Title, Location, Message, db } = require('../models')
// const models = require('../models');
const Sequelize = require('sequelize');


module.exports = router;


router.get('/allJobtitles', function(req, res, next){
	Title.findAll({})
	.then(titles => {
		res.json(titles);
	})
})

router.get('/desJobs', function(req, res, next){
	Vocation.findAll({
		where: {
			jobTitle: req.query.title
		},
		include: [Location]
	})
	.then(matchingJobs => {
		res.json(matchingJobs)
	})
})


router.post('/messages', function(req, res, next){
	console.log("In Routes, req.body is: ", req.body)
	User.findOne({
		where: {
			userName: req.body.recipient,
		}
	})
	.then(recipient => {
		console.log("convoNum isssss!!! in routes:",req.body.convoNum)
		return Message.create({
			convoNum: req.body.convoNum,
			senderId: req.body.sender,
			recipientId: recipient.id,
			senderStatus: req.body.senderStatus,
			recipientStatus: req.body.recipientStatus,
			timestamp: req.body.timestamp,
			content: req.body.content,
		})
	})
	.then(res.json("Message created!").status(200))
	.catch(next);
})

router.get('/messages/:currentUserId', function(req, res, next){
	Message.findAll({
		where: {
			$or: [
				{ recipientId: req.params.currentUserId},
				{ senderId: req.params.currentUserId}
			]
		},
		include: [
			{ model: User, as: 'sender'},
			{ model: User, as: 'recipient'}
		],
	})
	.then(messages =>{
		var justUserNames = messages.map(function(message){
			return {
				content: message.content,
				convoNum: message.convoNum,
				id: message.id,
				recipient: message.recipient.userName,
				recipientStatus: message.recipientStatus,
				sender: message.sender.userName,
				senderStatus: message.senderStatus,
				timestamp: message.timestamp * 1,
			};
		})
		return justUserNames;
	})
	.then(messagesWithUserNames =>{
		res.json(messagesWithUserNames)
	})
	.catch(next);
})

//get main page on arrival
router.get('/', function(req, res, next){

	res.send('you reached the NEW get route!');

});

//get request for displaying other user&vocation locations in the area
router.get('/:vocationId/:userDesiredLocation', function(req, res, next){

//note to self: the User model will need a virtual that sets the location of the zoomed-out map


})


router.get('/newUserForm', function(req, res, next){
	res.send('hit newUserForm route!')
})

//create new user and new vocation if not already in database
router.post('/newUser', function(req, res, next){

	// User.create({req.body})
	// .then(createdUser => {

	// })


});


//update user info
router.put('/:userId', function(req, res, next){


});

//retrieves complete list of job titles from db, or displays selected title(s) for a query
router.get('/jobTitles', function(req, res, next){


});
