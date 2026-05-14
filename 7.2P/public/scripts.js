//Connect to the server
const socket = io();

//Listen to the 'musicUpdate' event
socket.on('punUpdate', (msg) => {

  console.log('Pun received:', msg);

  document.getElementById('pun').innerText = msg;

});