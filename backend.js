const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

app.use(express.static('public'));


server.listen(8000, function() {
  console.log('listening on *:8000');
});
