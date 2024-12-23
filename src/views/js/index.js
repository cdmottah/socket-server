const socket = io()

const sendButton = document.getElementById("send");
const connectButton = document.getElementById("connect");
const disconnectButton = document.getElementById("disconnect");


sendButton.addEventListener("click", () => {
    if (socket.connected) socket.emit("is conected", "is conected");
})

connectButton.addEventListener("click", () => {
    socket.connect()
})

disconnectButton.addEventListener("click", () => {
    socket.disconnect()
})

socket.on("connect", () => {

})

