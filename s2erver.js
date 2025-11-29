require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());
app.get('/', (req, res) => res.send('NotifyHub WebSocket server 🔔'));

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-room', (room) => {
    socket.join(room);
    socket.to(room).emit('system-message', `User ${socket.id} joined room ${room}`);
  });

  socket.on('chat-message', ({ room, message }) => {
    io.to(room).emit('chat-message', {
      from: socket.id,
      message,
      at: new Date().toISOString()
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5002;
server.listen(PORT, () => console.log(`NotifyHub running on ${PORT}`));
