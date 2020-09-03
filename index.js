var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var people = {};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



// io.on('connection', (socket) => {
//     socket.on('connection', function (client) {
//         client.on('join', function (name) {
//             people[client.id] = name;
//             client.emit("update", "You have connected to the server.");
//             s

//         })
//     })
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
// });

// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//         console.log('message: ' + msg);
//     });
// });

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

http.listen(process.env.PORT || 3000, () => {
    console.log('listening on *:3000');
});