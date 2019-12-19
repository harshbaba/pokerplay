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
			votingStatus:"NOT STARTED || USER VOTING IN PROGRESS || ADMIN VOTING IN PROGRESS || VOTING DONE || RESULT DECLARED"
		},
		Creata:{
			groupId: 'Creata',
			adminName: 'Ankush',
			createdAt:'',
			votingStatus:"NOT STARTED || USER VOTING IN PROGRESS || ADMIN VOTING IN PROGRESS || VOTING DONE || RESULT DECLARED"
		},
		Js:{
			groupId: 'Js',
			adminName: 'Harsh',
			createdAt:'',
			votingStatus:"NOT STARTED || USER VOTING IN PROGRESS || ADMIN VOTING IN PROGRESS || VOTING DONE || RESULT DECLARED"
		}
	},

	newUsersData:[
		{
			name: 'Harsh',
			groupId:'Apache',
			instances:['abc12', 'abc1234', 'abc12345']
		},
		{
			name: 'Ankush',
			groupId:'Apache',
			instances:['xy123']
		},
		{
			name: 'Harsh',
			groupId:'Creata',
			instances:['xyz123', 'xyz1234', 'xyz12345']
		},
		{
			name: 'Ankush',
			groupId:'Creata',
			instances: ['xy1234']
		},
		{
			name: 'Rahul',
			groupId:'Apache',
			instances: ['xy12345']
		}
	]
}
// for(let i = 0; i< arr.length; i++){
// 	let item = arr[i];
// 	console.log(i);
// 	if(item.instances.indexOf(instaceId) != -1){
// 		return {rootIndex: i, instanceslength: item.instances.length}
// 	}
// }
// var usersArr = _.filter(users, function(item) {
// 	return item.groupId == 'Apache'
// });

// var finalUsers = _.uniq(usersArr, function(x){
//     return x.name;
// });

module.exports = mockData;