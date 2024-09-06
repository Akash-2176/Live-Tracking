const express = require('express');
const WebSocket = require('ws');
const app = express();
const http = require('http');
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let clients = [];

app.use(express.static('public'));

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const locationData = JSON.parse(data);
    clients.forEach(client => client.send(JSON.stringify(locationData)));
  });

  clients.push(ws);

  ws.on('close', () => {
    clients = clients.filter(client => client !== ws);
  });
});

server.listen(3000, () => {
  console.log('Main web app is running on port 3000');
});
