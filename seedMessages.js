// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Sequelize = require('sequelize');

const { Message, db } = require('./server/models/index.js');

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
  // message: [
  //   {content: "Hey, what's up?", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 10, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Not much. You?", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 11, convonum: 1, senderId: 2, recipientId: 1},
  //   {content: "Nothin much.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 12, convonum: 1, senderId: 1, recipientId: 2},
  //   {content: "Hey, this is your downstairs neighbor.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 13, convonum: 2, senderId: 2, recipientId: 3},
  //   {content: "Oh, it is! Hi! What's up?", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 14, convonum: 2, senderId: 3, recipientId: 2},
  //   {content: "Yeah could you stop stomping around your apartment before 6am?", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 15, convonum: 2, senderId: 2, recipientId: 3},
  //   {content: "Oh, yeah, sure! No problem! ", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 16, convonum: 2, senderId: 3, recipientId: 2},
  //   {content: "Thanks. ", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 17, convonum: 2, senderId: 2, recipientId: 3},
  //   {content: "So, I'm tendin' bar there at Ecklund and Swedlin's last Tuesday, and this little guy's drinkin' and he says, So where can a guy find some action? I'm goin' crazy out there at the lake. And I says, What kinda action? and he says, Woman action, what do I look like? And I says, Well, what do I look like? I don't arrange that kinda thing, and he says, But I'm goin' crazy out there at the lake, and I says, Well, this ain't that kinda place.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 18, convonum: 3, senderId: 1, recipientId: 2},
  //   {content: "Uh-huh.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 19, convonum: 3, senderId: 2, recipientId: 1},
  //   {content: "So he angrily says, Oh I get it, so you think I'm some kinda crazy jerk for askin'! only he doesn't use the word jerk.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 20, convonum: 3, senderId: 1, recipientId: 2},
  //   {content: "I understand.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 21, convonum: 3, senderId: 2, recipientId: 1},
  //   {content: "And then he calls me a jerk, and says that the last guy who thought he was a jerk is dead now. So I don't say nothin' and he says, What do ya think about that? So I says, Well, that don't sound like too good a deal for him, then.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 22, convonum: 3, senderId: 1, recipientId: 2},
  //   {content: "Ya got that right.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 23, convonum: 3, senderId: 2, recipientId: 1},
  //   {content: "And he says, Yah, that guy's dead, and I don't mean of old age. And then he just pays his tab and walks out saying, Geez, I'm goin' crazy out there at the lake!", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 24, convonum: 3, senderId: 1, recipientId: 2},
  //   {content: "White Bear Lake?", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 25, convonum: 3, senderId: 2, recipientId: 1},
  //   {content: "Well... Ecklund & Swedlin's, that's closer ta Moose Lake, so I made that assumption.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 26, convonum: 3, senderId: 1, recipientId: 2},
  //   {content: "Oh sure.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 27, convonum: 3, senderId: 2, recipientId: 1},
  //   {content: "So, ya know, he's drinkin', so I don't think a whole great deal of it, but Mrs. Mohra heard about the homicides down here last week and she thought I should call it in. So... I called it in. End o' story.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 28, convonum: 3, senderId: 1, recipientId: 2},
  //   {content: "What'd this guy look like, anyway?", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 29, convonum: 3, senderId: 2, recipientId: 1},
  //   {content: "Oh, he was a little guy... Kinda funny lookin'.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 30, convonum: 3, senderId: 1, recipientId: 2},
  //   {content: "Uh-huh. In what way?", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 31, convonum: 3, senderId: 2, recipientId: 1},
  //   {content: "Oh, just in a general kinda way.", senderStatus: 'sent', recipientStatus: 'unread', timestamp: 32, convonum: 3, senderId: 1, recipientId: 2},
  // ],
  message: [
    {content:"Hey. So you're a Chicago-area astronaut too?",convoNum:1,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219315"},
    {content:"Hey! Sure am!",convoNum:1,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219316"},
    {content:"Been to space yet?",convoNum:1,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219317"},
    {content:"Not yet, no. How about you? How long have you been at this?",convoNum:1,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219318"},
    {content:"Haven't been to space. Been on lots of planes though. About a year and a half.",convoNum:1,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219319"},
    {content:"Hi there! I see you're an astronaut!",convoNum:2,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219320"},
    {content:"Yes I am. Are you looking to work in the area?",convoNum:2,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219321"},
    {content:"I am! Right now my commute is so long, it sucks! : P",convoNum:2,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219322"},
    {content:"Beats going to the moon though.",convoNum:2,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219323"},
    {content:"Haha! So have you been an astronaut for a while now or...?",convoNum:2,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219324"},
    {content:"Not really. I have a telescope, and I work at a duty-free counter at the airport.",convoNum:2,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219325"},
    {content:"Hello! I see you're looking for a developer job near where I work- I thought I'd reach out!",convoNum:3,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219326"},
    {content:"Hi! Thank you! Have you been doing web developement for very long?",convoNum:3,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219327"},
    {content:"Only about a year and a half, but I think the higher-ups are looking for mid-senior level developers now.",convoNum:3,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219328"},
    {content:"Cool! What's the company like?",convoNum:3,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219329"},
    {content:"It's about as boring as it can get. We sell paper. Our boss is mostly harmless but a bit delusional.",convoNum:3,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219330"},
    {content:"Sounds great! Could you pass along my resume to the hiring manager?",convoNum:3,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219331"},
    {content:"Hi there! I'm thinking of jumping ship soon (the company is great, but the commute is awful!). I see you're looking for a developer job in the area?",convoNum:4,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219332"},
    {content:"Thanks! Yes, I am!",convoNum:4,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219333"},
    {content:"Cool, how long have you been programming?",convoNum:4,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219334"},
    {content:"About four years now. How about you?",convoNum:4,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219335"},
    {content:"Around 3 years, mostly front-end javascript type stuff. ",convoNum:4,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219336"},
    {content:"Javascript is great! Does your company have both web and mobile sites?",convoNum:4,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219337"},
    {content:"Hey there, fellow artist! I see you're trying to find work nearby here!",convoNum:5,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219338"},
    {content:"Hi! Yep, that's right! What type of art do you do?",convoNum:5,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219339"},
    {content:"Mostly painting, but I love drawing as well!",convoNum:5,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219340"},
    {content:"Hey Pam! Did you have any luck here yet?",convoNum:6,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219341"},
    {content:"Yeah, actually! I talked to someone today who works at a boring paper company- they need a mid-senior level developer, it's perfect!",convoNum:6,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219342"},
    {content:"Oh, awesome!",convoNum:6,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219343"},
    {content:"How bout you, Ellie? Have any luck?",convoNum:6,senderStatus:"sent",recipientStatus:"unread",timestamp:"1500077219344"},
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
