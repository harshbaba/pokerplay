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
        let index = _.findIndex($users, {socketId: socketId});
        return index;
    }
}

module.exports = utils;


