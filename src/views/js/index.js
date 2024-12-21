const socket = io();

const buttonElement = document.getElementById("button");
const inputElement = document.getElementById("message");

buttonElement.addEventListener("click", sendMessage);


function sendMessage() {
    const message = inputElement.value;
    socket.emit("message", message);
    inputElement.value = "";
}

socket.on("connect", () => {
    console.log("El socket se ha conectado: ", socket.id);
    socket.on("mensaje-bienvenida", console.log)

})





