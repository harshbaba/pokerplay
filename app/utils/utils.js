var _ = require('underscore');
var utils = {
    isGroupExist: function(groupId){
        let groupName = groupId;
        if($groups[groupName] !== undefined){
            return {isExist: true, obj: $groups[groupName], groupName: groupName};
        }else{
            return {isExist: false, groupName: groupName};
        }
        
    },
    isUserExist: function(groupId, userId){
        var index = _.findIndex($users, {name: userId, groupId: groupId});
        if(index !== -1){
            return {isExist: true, index: index};
        }else{
            return {isExist: false};
        }
        
    },
    createListOfUsers: function(groupId){
        var usersArr = _.filter($users, function(item) {
            return item.groupId == groupId
        });

        var finalUsers = _.uniq(usersArr, function(x){
            return x.name;
        });
        return finalUsers;
    },
    getDisconnectedUserDetails: function(socketId){
        for(let rootIndex = 0; rootIndex< $users.length; rootIndex++){
            let item = $users[rootIndex];
            let instanceIndex = item.instances.indexOf(socketId);
            if(instanceIndex != -1){
                return {rootIndex: rootIndex, instanceslength: item.instances.length, instanceIndex: instanceIndex}
            }
        }
        return {rootIndex: -1}
    },
    resetVoteOfUsers: function(users){
        let updatedUserData = users.map((item) =>{
            item.vote = 0;
            item.isVoteDone = false;
            return item;
        });

        return updatedUserData;
    }
}

module.exports = utils;


