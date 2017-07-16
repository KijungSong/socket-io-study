var app = require('express');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(8000);

io.on('connection', function(socket) {
  socket.emit('alert', 'hello from server');

  socket.on('color', function() {
    socket.broadcast.emit('color', 'orange');
  });

  socket.on('disconnect', function() {
    console.log('client disconnected!');
  });
});
