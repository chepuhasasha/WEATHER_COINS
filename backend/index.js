const { default: consolaGlobalInstance } = require('consola');
const consola = require('consola');
const app = require("express")();
const httpServer = require("http").createServer(app);
const port = process.env.PORT || 3000 

const io = require("socket.io")(httpServer, {
  cors: {
    origin: ["http://localhost:8080", "https://8080-salmon-chameleon-3mhqgvbr.ws-eu18.gitpod.io/"],
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on("connect", socket => {
  consola.info(`SOCKT ID: ${socket.id}`)

  socket.on("disconnect", (reason) => {
    console.log(`disconnect ${socket.id} due to ${reason}`);
  });
});

httpServer.listen(port, () => {
  consola.ready({ message: `SERVER LISTENING ON: ${port}`, badge: true })
});
