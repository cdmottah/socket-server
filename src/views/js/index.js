const socket = io();

const buttonElement = document.getElementById("button");
const inputElement = document.getElementById("message");
let myId
buttonElement.addEventListener("click", sendMessage);


function sendMessage() {
    const message = inputElement.value;
    socket.emit("message", message);
    inputElement.value = "";
}

socket.on("connect", () => {
    console.log("El socket se ha conectado: ", socket.id);

    socket.on("new-user", ({ message, id }) => {
        if (myId === id) return;
        if (document.getElementById("emit-to-last") === null) {
            _createButtonEmitToLast()
        }
    })

    socket.on("welcome from other user", (message) => {
        console.log("Mensaje recibido de otro usuario: ", message)
    })

    myId = socket.id
})

socket.on("emit-to-last", console.log)




function _createButtonEmitToLast() {

    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("id", "emit-to-last");
    buttonElement.innerText = "Emit to last";
    const _emitToLastListener = buttonElement.addEventListener("click", () => {
        console.log("Emitiendo a última conexión: ");
        socket.emit("emit-to-last", "Hola desde el cliente");
        _dropButtonEmitToLast(_emitToLastListener)
    })
    document.body.appendChild(buttonElement);
    return _emitToLastListener
}

function _dropButtonEmitToLast(eventListener) {
    const buttonElement = document.getElementById("emit-to-last");
    buttonElement.removeEventListener("click", eventListener);
    buttonElement.remove();
}


