const consola = require('consola')
const app = require('express')()
const server = require('http').createServer(app)
const cors = require('cors')


const io = require("socket.io")(server, {
  origins: ["*:*"],

  handlePreflightRequest: (req, res) => {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST",
      "Access-Control-Allow-Headers": "my-custom-header",
      "Access-Control-Allow-Credentials": true
    });
    res.end();
  }
});

const port = process.env.PORT || 3000

server.listen(port, () => {
  consola.ready({
    message: `SERVER LISTENING ON: ${port}`,
    badge: true
  })
})

io.on('connection', (socket) => {
  consola.ready({
    message: `IO CONNECTED`,
    badge: true
  })
  socket.on('createMassage', (data) => {
    io.emit('newMassage', {
      text: data.text + ' SERVER'
    })
  })
})