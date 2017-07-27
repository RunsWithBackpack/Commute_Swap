// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Sequelize = require('sequelize');

const { User, Vocation, Location, Message, db } = require('./server/models/index.js');

var Promise = require('bluebird');
// var db = require('./models');
// var Place = require('./models/place');
// var Hotel = require('./models/hotel');
// var Restaurant = require('./models/restaurant');
// var Activity = require('./models/activity');

var data = {


  // location: [
  //   { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600},
  //   { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600},
  //   { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600},
  //   { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600},
  //   { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600},
  //   { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600},
  //   { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600},
  //
  // ],
  user: [
    // { userName: 'Dwight', email: 'DwightScrhute@dunder_mifflin.com', password: '123', location: { zipCode: 60607, point: [41.9282715, -87.7090501] }, vocationId: { jobTitle: 'Astronaut', yearsExperience: 0.2 } },
    // { userName: 'JimH', email: 'Jim_Halpert@dunder_mifflin.com', password: '123', location: { zipCode: 60617, point: [41.9282725, -87.7090521] }, vocationId: { jobTitle: 'Aspiring Developer', yearsExperience: 0.5 } },
    // { userName: 'PBeesly', email: 'Pam_Beesly@dunder_mifflin.com', password: '123', location: { zipCode: 60627, point: [41.9282735, -87.7090511] }, vocationId: { jobTitle: 'Aspiring Developer', yearsExperience: 1.2 } },
    // { userName: 'MichaelS', email: 'Michael_Scott@dunder_mifflin.com', password: '123', location: { zipCode: 60637, point: [41.9282745, -87.7090501] }, vocationId: { jobTitle: 'Astronaut', yearsExperience: 1.2 } },
    // { userName: 'ErinH', email: 'Erin_Hannon@dunder_mifflin.com', password: '123', location: { zipCode: 60647, point: [41.9282755, -87.7090521] }, vocationId: { jobTitle: 'Artist', yearsExperience: 3 } },
    // { userName: 'ABernard', email: 'Andy_Bernard@dunder_mifflin.com', password: '123', location: { zipCode: 60657, point: [41.9282765, -87.7090511] }, vocationId: { jobTitle: 'Administrative Assistant', yearsExperience: 1.5 } },
    // { userName: 'Kevin', email: 'Kevin_Malone@dunder_mifflin.com', password: '123', location: { zipCode: 60657, point: [41.9282765, -87.7090511] }, vocationId: { jobTitle: 'Administrative Assistant', yearsExperience: 5 } },
    // { userName: 'KellyK', email: 'Kelly_Kapoor_mifflin.com', password: '123', location: { zipCode: 60657, point: [41.9282765, -87.7090511] }, vocationId: { jobTitle: 'Astronaut', yearsExperience: 5 } },
    // { userName: 'DPhilbin', email: 'Darryl_Philbin@dunder_mifflin.com', password: '123', location: { zipCode: 60657, point: [41.9282765, -87.7090511] }, vocationId: { jobTitle: 'Aspiring Developer', yearsExperience: 3 } },
    // { userName: 'OscarM', email: 'Oscar_Martinez@dunder_mifflin.com', password: '123', location: { zipCode: 60657, point: [41.9282765, -87.7090511] }, vocationId: { jobTitle: 'Artist', yearsExperience: 2 } },
    // { userName: 'Phyllis', email: 'Phyllis_Vance@dunder_mifflin.com', password: '123', location: { zipCode: 60657, point: [41.9282765, -87.7090511] }, vocationId: { jobTitle: 'Administrative Assistant', yearsExperience: 4 } },
    // { userName: 'StanleyH', email: 'Stanley_Hudson@dunder_mifflin.com', password: '123', location: { zipCode: 60657, point: [41.9282765, -87.7090511] }, vocationId: { jobTitle: 'Artist', yearsExperience: 5 } },

    // { userName: 'Dwight', email: 'DwightScrhute@dundermifflin.com', password: '123', location: { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600}, vocation: {jobtitle:"Astronaut"}, titleId: 2},
    // { userName: 'JimH', email: 'JimHalpert@dundermifflin.com', password: '123', location: { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600}, vocation:{jobtitle: "Aspiring Developer"}, titleId: 2},
    // { userName: 'PBeesly', email: 'PamBeesly@dundermifflin.com', password: '123', location: { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600}, vocation:{jobtitle: "Aspiring Developer"}, titleId: 2},
    // { userName: 'MichaelS', email: 'MichaelScott@dundermifflin.com', password: '123', location: { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600}, vocation: {jobtitle:"Astronaut"}, titleId: 2},
    // { userName: 'ErinH', email: 'ErinHannon@dundermifflin.com', password: '123', location: { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600}, vocation:{jobtitle: "Artist"}, titleId: 2},
    // { userName: 'ABernard', email: 'AndyBernard@dundermifflin.com', password: '123', location: { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600}, vocation:{jobtitle: "Administrative Assistant"}, titleId: 2},
    // { userName: 'Kevin', email: 'KevinMalone@dundermifflin.com', password: '123', location: { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600}, vocation:{jobtitle: "Administrative Assistant"}, titleId: 2},
    // { userName: 'KellyK', email: 'KellyKapoor@dundermifflin.com', password: '123', location: { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600}, vocation: {jobtitle: "Astronaut"}, titleId: 2},
    // { userName: 'DPhilbin', email: 'DarrylPhilbin@dundermifflin.com', password: '123', location: { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600}, vocation:{jobtitle: "Aspiring Developer"}, titleId: 2},
    // { userName: 'OscarM', email: 'OscarMartinez@dundermifflin.com', password: '123', location: { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600}, vocation:{jobtitle: "Artist"}, titleId: 2},
    // { userName: 'Phyllis', email: 'PhyllisVance@dundermifflin.com', password: '123', location: { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600}, vocation:{jobtitle: "Administrative Assistant"}, titleId: 2},
    // { userName: 'StanleyH', email: 'StanleyHudson@dundermifflin.com', password: '123', location: { point: [41.9282715, -87.7090501], radius: 5, zipCode: 60600}, vocation:{jobtitle: "Artist"}, titleId: 2},

    { userName: 'Dwight', email: 'DwightScrhute@dundermifflin.com', password: '123'},
    { userName: 'JimH', email: 'JimHalpert@dundermifflin.com', password: '123'},
    { userName: 'PBeesly', email: 'PamBeesly@dundermifflin.com', password: '123'},
    { userName: 'MichaelS', email: 'MichaelScott@dundermifflin.com', password: '123'},
    { userName: 'ErinH', email: 'ErinHannon@dundermifflin.com', password: '123'},
    { userName: 'ABernard', email: 'AndyBernard@dundermifflin.com', password: '123'},
    { userName: 'Kevin', email: 'KevinMalone@dundermifflin.com', password: '123'},
    { userName: 'KellyK', email: 'KellyKapoor@dundermifflin.com', password: '123'},
    { userName: 'DPhilbin', email: 'DarrylPhilbin@dundermifflin.com', password: '123'},
    { userName: 'OscarM', email: 'OscarMartinez@dundermifflin.com', password: '123'},
    { userName: 'Phyllis', email: 'PhyllisVance@dundermifflin.com', password: '123'},
    { userName: 'StanleyH', email: 'StanleyHudson@dundermifflin.com', password: '123'},

  ],
  // message: [
  //   {content: "Hey, what's up?", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 10, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Not much. You?", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 11, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Nothin much.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 12, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Hey, this is your downstairs neighbor.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 13, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Oh, it is! Hi! What's up?", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 14, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Yeah could you stop stomping around your apartment before 6am?", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 15, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Oh, yeah, sure! No problem! ", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 16, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Thanks. ", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 17, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "So, I'm tendin' bar there at Ecklund and Swedlin's last Tuesday, and this little guy's drinkin' and he says, So where can a guy find some action? I'm goin' crazy out there at the lake. And I says, What kinda action? and he says, Woman action, what do I look like? And I says, Well, what do I look like? I don't arrange that kinda thing, and he says, But I'm goin' crazy out there at the lake, and I says, Well, this ain't that kinda place.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 18, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Uh-huh.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 19, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "So he angrily says, Oh I get it, so you think I'm some kinda crazy jerk for askin'! only he doesn't use the word jerk.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 20, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "I understand.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 21, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "And then he calls me a jerk, and says that the last guy who thought he was a jerk is dead now. So I don't say nothin' and he says, What do ya think about that? So I says, Well, that don't sound like too good a deal for him, then.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 22, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Ya got that right.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 23, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "And he says, Yah, that guy's dead, and I don't mean of old age. And then he just pays his tab and walks out saying, Geez, I'm goin' crazy out there at the lake!", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 24, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "White Bear Lake?", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 25, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Well... Ecklund & Swedlin's, that's closer ta Moose Lake, so I made that assumption.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 26, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Oh sure.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 27, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "So, ya know, he's drinkin', so I don't think a whole great deal of it, but Mrs. Mohra heard about the homicides down here last week and she thought I should call it in. So... I called it in. End o' story.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 28, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "What'd this guy look like, anyway?", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 29, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Oh, he was a little guy... Kinda funny lookin'.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 30, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Uh-huh. In what way?", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 31, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Oh, just in a general kinda way.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 32, convonum: 1, senderId: 1, recipientId: 2},
  // ],
  // vocation: [
  //   { id: 1, jobTitle: 'Aspiring Developer', yearsExperience: 0.2, locationID: 2, userId: 1 }
  // ],
  // title: [    ///////THIS DOESN'T WORK, POSSIBLY BECAUSE THERE IS NO "LOCATION/VOCATION" TO INCLUDE
  //   { name: 'Aspiring Developer' },
  //   { name: 'Administrative Assistant'},
  //   { name: 'Artist' },
  //   { name: 'Astronaut' }
  // ],
  // location: [
  //   { id: 2, zipCode: 60654, point: [41.888543, -87.6354435] },
  // ]
};

db.sync({force:true})
.then(function () {
  console.log('Dropped old data, now inserting data');
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      return db.model(name)
      .create(item)
      ////the above line replaces the three commented out below
      // .create(item, {
      //   include: [Location, Vocation]
      // })
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
