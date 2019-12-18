var mockData = {
	"sample1_api": [1,2,3],
	"sample2_api":{
		"username": "Harsh"
	},
	"test":["harsh","jack"],
	"groups":[{
		groupId: 'apache',
		adminName: 'harsh',
		createdAt: new Date(),
		members:[{
			userName:'harsh',
			isAdmin: true,
			instances: 0
		},
		{
			userName:'ankush',
			isAdmin: false,
		}]
	}],

	newGroupData:{
		Apache:{
			groupId: 'Apache',
			adminName: 'Harsh',
			createdAt:'',
			isStartVoting: false,
			isShowResult: false,
			isDeclareResult: false
		},
		Creata:{
			groupId: 'Creata',
			adminName: 'Ankush',
			createdAt:''
		},
		Js:{
			groupId: 'Js',
			adminName: 'Harsh',
			createdAt:''
		}
	},

	newUsersData:[
		{
			socketId:'abc12',
			name: 'Harsh',
			groupId:'Apache'
		},
		{
			socketId:'abc1234',
			name: 'Harsh',
			groupId:'Apache'
		},
		{
			socketId:'abc12345',
			name: 'Harsh',
			groupId:'Apache'
		},
		{
			socketId:'xy123',
			name: 'Ankush',
			groupId:'Apache'
		},
		{
			socketId:'xy1234',
			name: 'Ankush',
			groupId:'Creata'
		},
		{
			socketId:'xy12345',
			name: 'Rahul',
			groupId:'Apache'
		}
	]
}

// var usersArr = _.filter(users, function(item) {
// 	return item.groupId == 'Apache'
// });

// var finalUsers = _.uniq(usersArr, function(x){
//     return x.name;
// });

module.exports = mockData;