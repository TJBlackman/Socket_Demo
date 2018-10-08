const express = require('express')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const io_wildcard = require('socketio-wildcard')();

const path = require('path');

app.use(express.static(path.join(__dirname, '../client/build')));



app.get('/', function (req, res) {
  const path_to_index = path.join(__dirname, '../client/build/index.html');
  res.sendFile(path_to_index);
});

io.use(io_wildcard);

io.on('connection', function (socket) {
  socket.on('*', function ({ data }) {
    const roomname = data[0];
    const messagedata = data[1];

    socket.broadcast.emit(roomname, messagedata);
    
  });
});


server.listen(8000);