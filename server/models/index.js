const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/commuteSwap');

const User = db.define('user', {

	userName: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true,
		}
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	}
});


const Vocation = db.define('vocation', {

	yearsExperience: {
		type: Sequelize.FLOAT,
		// allowNull: false,
	}
})

const Title = db.define('title', {

		name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		}
})

const Location = db.define('location', {

	point: {
		type: Sequelize.ARRAY(Sequelize.FLOAT),
	},
	radius: {
		type: Sequelize.INTEGER,
		defaultValue: 5,
	},
	city: {
		type: Sequelize.STRING,
	},
	state: {
		type: Sequelize.STRING,
	},
	zipCode: {
		type: Sequelize.INTEGER,
	}
})

const Message = db.define('message', {

	content: {
		type: Sequelize.STRING(1000),
		allowNull: false,
	},
	senderStatus: {
		type: Sequelize.ENUM('unread', 'read', 'sent'),
		allowNull: false,
		defaultValue: 'sent',
	},
	recipientStatus: {
		type: Sequelize.ENUM('unread', 'read', 'responded'),
		allowNull: false,
		defaultValue: 'unread',
	},
	timestamp: {
		type: Sequelize.STRING, ////THIS WAS CHANEDGES FROM BIGINT- NOT SURE HOW THE STRINGS WILL SORT
		allowNull: false,
	},
	convoNum: {
		type: Sequelize.STRING,
		allowNull: false,
		////FOR SOME REASON THIS WAS CAUSING ALL INCOMING CONVONUMS TO TURN TO "NULL"
		// set(num) {
		// 	if (num === 0){
		// 		return Message.max('convoNum') + 1;
		// 	} else {
		// 		return num;
		// 	}
		// }
	},
}, {
	hooks: {
		beforeValidate: (message, options) => {
			if (message.convoNum === 0){
				message.convoNum = Message.max('convoNum').then(max => (max + 1));
			}
		}
	},
})


Vocation.belongsTo(User);
Location.belongsTo(User);
Location.belongsTo(Vocation);
Vocation.belongsTo(Title);
Message.belongsTo(User, {as: 'sender'})
Message.belongsTo(User, {as: 'recipient'})



module.exports = {
	User,
	Vocation,
	Title,
	Location,
	Message,
	db
}
