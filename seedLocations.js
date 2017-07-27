// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Sequelize = require('sequelize');

const { Location, db } = require('./server/models/index.js');

var Promise = require('bluebird');
// var db = require('./models');
// var Place = require('./models/place');
// var Hotel = require('./models/hotel');
// var Restaurant = require('./models/restaurant');
// var Activity = require('./models/activity');

var data = {
  location: [
    {point: [41.45112,-87.1429943],radius: 2},
    {point: [41.9687413,-87.2504767],radius: 2},
    {point: [41.3266855,-87.1235601],radius: 2},
    {point: [41.4459806,-87.7469116],radius: 2},
    {point: [41.1242056,-87.9242469],radius: 2},
    {point: [41.5522435,-87.372665],radius: 2},
    {point: [41.3618355,-87.8194196],radius: 2},
    {point: [41.260765,-87.9130851],radius: 2},
    {point: [41.5869645,-87.3780554],radius: 2},
    {point: [41.3910725,-87.8578272],radius: 2},
    {point: [41.4953327,-87.7877318],radius: 2},
    {point: [41.3159929,-87.5557237],radius: 2},
    {point: [41.2188056,-87.9207957],radius: 2},
    {point: [41.9831344,-87.0347177],radius: 2},
    {point: [41.0351978,-87.7019253],radius: 2},
    {point: [41.7857824,-87.187578],radius: 2},
    {point: [41.6076291,-87.68972],radius: 2},
    {point: [41.2359653,-87.0022598],radius: 2},
    {point: [41.3511411,-87.5429811],radius: 2},
    {point: [41.8772229,-87.6452243],radius: 2},
  ]
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
