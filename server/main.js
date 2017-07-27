const express = require('express');
const Sequelize = require('sequelize');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mainRouter = require('./routes');
const db = require('./models').db;
const User = require('./models').User;

const path = require('path');

var session = require('express-session');

const app = express();

app.use(morgan('dev')); //logging middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '..', 'public'))) ///this might not be correct

//~~~~session middleware
app.use(session({
  // this mandatory configuration ensures that session IDs are not predictable
  secret: 'tongiscool', // or whatever you like
  // these options are recommended and reduce session concurrency issues
  resave: false,
  saveUninitialized: false
}));


// place right after the session setup middleware
app.use(function (req, res, next) {
  console.log('session', req.session);
  next();
});

///JUST TO MAKE SURE DIFFERENT SESSIONS PERSIST...
// app.use('/api', function (req, res, next) {
//   if (!req.session.counter) req.session.counter = 0;
//   console.log('counter', ++req.session.counter);
//   next();
// });



// make sure this comes after the session middleware, otherwise req.session will not be available
app.post('/login', function (req, res, next) {
  // console.log("REQ.body IS", req.body)
  // console.log("password is", req.body.password)
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    }
  })
  .then(function (user) {
    if (!user) {
      res.json({message: "This email & password combination isn't valid. Try again."}).status(401);
    } else {
      req.session.userId = user.id;
      console.log("SESSION SHOULD NOW HAVE USER ID", req.session)
      // console.log("HERE'S THE USER BEING SENT", user)
      return res.json(user);
    }
  })
  .catch(next);
});

app.get('/logout', function(req, res, next){
  console.log("ABOUT TO LOG OUT! HERE'S SESSION:", req.session)
  req.session.destroy();
  console.log("SHOULD BE LOGGED OUT! HERE'S SESSION:", req.session)
  res.sendStatus(200)
})

//~~~~~~~~





app.use('/api', mainRouter);

app.get('/*', function(req, res, next){
	res.sendFile(path.resolve(__dirname, '..', 'browser', 'index.html'));
})


//ERROR HANDLER
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal Error');
});


db.sync()
	.then(function(){
		app.listen(3030, function(){
			console.log('Listening on 3030!');
		});
	})
