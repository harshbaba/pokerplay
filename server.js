// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var server     = require('http').createServer(app);
var io         = require('socket.io')(server);
var utils 		= require('./app/utils/utils');

global.$groups = {};
global.$users = [];



// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/app/public'));

var port     = process.env.PORT || 5000; // set our port

//Routes 
var Routes     = require('./app/routes/routes');


// REGISTER OUR ROUTES -------------------------------
app.use('/', Routes);



var dashboardIns = io.of('/');
dashboardIns.on('connection', function(client) {
    
    client.on('join', function(data) {
        console.log('=============join ==============='+ client.id);
        client.join(data.groupId);

        if(data && data.groupId && data.name && $groups[data.groupId]){
            let obj = {
                name        : data.name,
                groupId     : data.groupId,
                instances   : [client.id]   
            }
            let isUser = utils.isUserExist(data.groupId, data.name);
            if(!isUser.isExist){
                $users.push(obj);
            }else{
                $users[isUser.index].instances.push(client.id);
            }
            console.log('===============Users Inside Join=========');
            console.log($users);
            io.in(data.groupId).emit('user-connected', {info: {users: utils.createListOfUsers(data.groupId), groupInfo: $groups[data.groupId]}});
        }
    });
    
    client.on('disconnect', function () {
        console.log('============disconnect============'+ client.id);
        let disconnectedInfo = utils.getDisconnectedUserDetails(client.id);
        if(disconnectedInfo.rootIndex != -1){
            let info =  $users[disconnectedInfo.rootIndex];
            if(disconnectedInfo.instanceslength == 1){
                $users.splice(disconnectedInfo.rootIndex, 1);
            }else{
                $users[disconnectedInfo.rootIndex].instances.splice(disconnectedInfo.instanceIndex, 1);
            }
            
            console.log('===========info inside disconnect===========');
            io.in(info.groupId).emit('user-connected', {info: {users: utils.createListOfUsers(info.groupId), groupInfo: $groups[info.groupId]}});
        }
    });

    client.on('adminAction', function(data){
        console.log('==============Admin Action===================');
        console.log(data);
        if(data.type == "Reset"){
            $groups[data.groupId].votingStatus = "NOT STARTED";
        }
        if(data.type == "Update"){
            $groups[data.groupId][data.key] = data.value;
        }
        //io.in(data.groupId).emit('handleAdminControl', {info: {groupInfo: $groups[data.groupId]}});
        io.in(data.groupId).emit('user-connected', {info: {users: utils.createListOfUsers(data.groupId), groupInfo: $groups[data.groupId]}});
    });

    client.on('registerVote', function(data){
        console.log(data);
        let isUser = utils.isUserExist(data.groupId, data.name);
        if(isUser.isExist){
            $users[isUser.index].vote = data.vote;
        }
        console.log($users[isUser.index]);
        io.in(data.groupId).emit('user-connected', {info: {users: utils.createListOfUsers(data.groupId), groupInfo: $groups[data.groupId]}});
    });


});




// START THE SERVER
// =============================================================================
server.listen(port);
console.log('Magic happens on port ' + port);
