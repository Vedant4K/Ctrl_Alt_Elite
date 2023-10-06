import express from 'express';
import http from 'http';
import * as SocketIO from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = SocketIO(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('join-room', (roomID, userID) => {
    socket.join(roomID);
    socket.to(roomID).broadcast.emit('user-connected', userID);

    socket.on('disconnect', () => {
      socket.to(roomID).broadcast.emit('user-disconnected', userID);
    });
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});