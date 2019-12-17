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
global.$groups = [];



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



var dashboardIns = io.of('/dashboard');
dashboardIns.on('connection', function(client) {
    //sendUpdatedClientToDashboard();
   
    var userId = "";
    var groupId = "";
    var grpInfo = null;
    var userInfo = null;
    client.on('join', function(data) {
        grpInfo = utils.isGroupExist(data.groupId);
        if(grpInfo.isExist){
            userInfo = utils.isUserExist(grpInfo.index, data.name);
            console.log('userinfo');
            console.log(userInfo);
            if(userInfo.isExist){
                //update the user instances + 1
                $groups[grpInfo.index].members[userInfo.index].instances = $groups[grpInfo.index].members[userInfo.index].instances + 1;
            }else{
                //add new user
                let user = {
                    userName:data.name,
                    isAdmin: false,
                    instances: 1
                }
                if(data.name == grpInfo.obj.adminName){
                    user.isAdmin = true;
                }
                $groups[grpInfo.index].members.push(user);
                userInfo = utils.isUserExist(grpInfo.index, data.name);
            }
        }
	
        userId = data.name;
        groupId = data.groupId;
        if(grpInfo.isExist){
            sendUpdatedClientToDashboard($groups[grpInfo.index].members);
        }
    });
    
    client.on('disconnect', function () {
        if(grpInfo.isExist){
            userInfo = utils.isUserExist(grpInfo.index, userId);
            console.log(userInfo);
            console.log($groups[grpInfo.index].members[userInfo.index]);
            let instances = $groups[grpInfo.index].members[userInfo.index].instances;
            if(instances < 2){
                $groups[grpInfo.index].members.splice(userInfo.index, 1);
            }else{
                $groups[grpInfo.index].members[userInfo.index].instances = $groups[grpInfo.index].members[userInfo.index].instances - 1;
            }
            sendUpdatedClientToDashboard($groups[grpInfo.index].members);
        }
    });
});

function sendUpdatedClientToDashboard(data){
    dashboardIns.emit('onlineUsers', data);
}



// START THE SERVER
// =============================================================================
server.listen(port);
console.log('Magic happens on port ' + port);
