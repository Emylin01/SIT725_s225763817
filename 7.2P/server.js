const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

const puns = [
    "I only know 25 letters of the alphabet. I don't know y.",
    "I used to hate facial hair... but then it grew on me.",
    "I'm reading a book about anti-gravity. It's impossible to put down.",
    "I would avoid the sushi if I were you. It's a little fishy.",
    "What do you call fake spaghetti? An impasta."
];

// Socket connection
io.on('connection', (socket) => {

    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    // Send random puns every 3 seconds
    setInterval(() => {

        const randomPun =
            puns[Math.floor(Math.random() * puns.length)];

        socket.emit('punUpdate', randomPun);

    }, 3000);

});

//Start server
http.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});