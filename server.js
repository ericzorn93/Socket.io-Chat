const express = require('express');
const socket = require('socket.io');

// App Setup
const app = express();
const server = app.listen(4000, () => {
    console.log(`Server is running on port ${4000}`);
});

// Static files setup
app.use(express.static('public'));

// Socket Setup
const io = socket(server);

io.on('connection', (socket) => {
    console.log("Made socket connection", socket.id);
});