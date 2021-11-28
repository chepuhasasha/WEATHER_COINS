const consola = require('consola');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "localhost:8080",
    methods: ["GET", "POST"]
  }
});

io.on('connection', socket => {
  consola.ready({ message: `IO CONNECTED || ID: ${socket.id}`, badge: true })
  socket.emit('newMassage', {
    text: 'test'
  })
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  consola.ready({ message: `SERVER LISTENING ON: ${port}`, badge: true })
});
