// Make connection
const socket = io.connect('http://localhost:4000');

// Query DOM
const message = document.querySelector("#message");
const handle = document.querySelector("#handle");
const btn = document.querySelector("#send");
const output = document.querySelector("#output");

// Emmit Events
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});