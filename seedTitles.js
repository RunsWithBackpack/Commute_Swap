// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Sequelize = require('sequelize');

const { Title, db } = require('./server/models/index.js');

var Promise = require('bluebird');
// var db = require('./models');
// var Place = require('./models/place');
// var Hotel = require('./models/hotel');
// var Restaurant = require('./models/restaurant');
// var Activity = require('./models/activity');

var data = {
  // user: [
  //   { userName: 'UserAly1', name: 'Alyssa1', email: 'aly1FakeEmail@gmail.com', location: { zipCode: 60607, point: [41.9282715, -87.7090501] }, vocation: { jobTitle: 'Aspiring Developer', yearsExperience: 0.2 } },
  //   { userName: 'UserAly2', name: 'Alyssa2', email: 'aly2FakeEmail@gmail.com', location: { zipCode: 60617, point: [41.9282725, -87.7090521] }, vocation: { jobTitle: 'Astronaut', yearsExperience: 5.5 } },
  //   { userName: 'UserAly3', name: 'Alyssa3', email: 'aly3FakeEmail@gmail.com', location: { zipCode: 60627, point: [41.9282735, -87.7090511] }, vocation: { jobTitle: 'Aspiring Developer', yearsExperience: 1.2 } },
  //   { userName: 'UserAly4', name: 'Alyssa4', email: 'aly4FakeEmail@gmail.com', location: { zipCode: 60637, point: [41.9282745, -87.7090501] }, vocation: { jobTitle: 'Administrative Assistant', yearsExperience: 1.2 } },
  //   { userName: 'UserAly5', name: 'Alyssa5', email: 'aly5FakeEmail@gmail.com', location: { zipCode: 60647, point: [41.9282755, -87.7090521] }, vocation: { jobTitle: 'Artist', yearsExperience: 0.2 } },
  //   { userName: 'UserAly6', name: 'Alyssa6', email: 'aly6FakeEmail@gmail.com', location: { zipCode: 60657, point: [41.9282765, -87.7090511] }, vocation: { jobTitle: 'Administrative Assistant', yearsExperience: 1.5 } },
  //
  // ],
  // vocation: [
  //   { id: 1, jobTitle: 'Aspiring Developer', yearsExperience: 0.2, locationID: 2, userId: 1 }
  // ],
  title: [    ///////THIS DOESN'T WORK, POSSIBLY BECAUSE THERE IS NO "LOCATION/VOCATION" TO INCLUDE
    { name: 'Aspiring Developer' },
    { name: 'Astronaut' },
    { name: 'Artist' },
    { name: 'Administrative Assistant'},

  ],
  // location: [
  //   { id: 2, zipCode: 60654, point: [41.888543, -87.6354435] },
  // ]
};

db.sync()
.then(function () {
  console.log('Dropped old data, now inserting data');
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      return db.model(name)
      .create(item, {
        // include: [Location, Vocation]
      })
    })
    // .then(function(item){
    //
    // })
  });
})
.then(function () {
  console.log('Finished inserting data (press ctrl-c to exit)');
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});
