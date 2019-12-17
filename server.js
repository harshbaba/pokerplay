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
                socketId    : client.id,
                name        : data.name,
                groupId     : data.groupId,
                isAdmin     : false      
            }
            if(data.groupId == $groups[data.groupId].groupId){
                obj.isAdmin = true;
            }
            $users.push(obj);
            io.in(data.groupId).emit('user-connected', utils.createListOfUsers(data.groupId));
        }
    });
    
    client.on('disconnect', function () {
        console.log('============disconnect============'+ client.id);
        let index = utils.getDisconnectedUserDetails(client.id);
        if(index != -1){
            let info = $users[index];
            $users.splice(index, 1);
            console.log('===========info===========');
            console.log(info);
            io.in(info.groupId).emit('user-connected', utils.createListOfUsers(info.groupId));
        }
    });
});




// START THE SERVER
// =============================================================================
server.listen(port);
console.log('Magic happens on port ' + port);
