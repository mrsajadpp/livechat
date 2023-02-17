var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(3000, () => {
    console.log('Server is up.')
});

app.get('/sajad', (req, res) => {
    res.sendFile(__dirname + '/sajad.html')
})

app.get('/mishal', (req, res) => {
    res.sendFile(__dirname + '/mishal.html')
})

io.sockets.on('connection', (socket) => {
    console.log("new client connected");
    socket.on('disconnect', () => {
        console.log("connection lost")
    })
    socket.on('mishal', (msg) => {
        io.emit('sajad', msg)
    })
    socket.on('sajad', (msg) => {
        io.emit('mishal', msg)
    })
});
