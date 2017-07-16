var server = require('http').createServer();
var io = require('socket.io')(server);

server.listen(8000);

io.on('connection', function(socket) {
  socket.emit('alert', 'hello from server');

  socket.on('click', function(data) {
    console.log(data);
  });

  socket.on('disconnect', function() {
    console.log('client disconnected!');
  });
});
