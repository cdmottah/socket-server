import { createButtonElement,createRoomElement, createMessageElement } from './elements.js';
import { addButtonListener } from './listeners.js';

const user = prompt("escribe tu usuario");
const teachers = ['julio', 'nicolas', 'kevin', 'Dmytro'];
const group = (teachers.includes(user)) ? 'teachers' : 'students';
const socketNameSpace = io(`/${group}`);

const roomQuantity = 3
const nameSpaceElement = document.getElementById("name-space")
const roomsContainer = document.getElementById("rooms-container")
const buttonsContainer = document.getElementById("buttons-container")
const inputsendMessage = document.getElementById("input-send-message");
const buttonSendMessage = document.getElementById("button-send-message");


roomsContainer.style.gridTemplateColumns = `repeat(${roomQuantity}, 1fr)`;

(() => {
    const [buttonElements, roomElements] = [[], []]
    for (let i = 1; i <= roomQuantity; i++) {

        // createing the buttons
        const button = createButtonElement(i)
        buttonsContainer.appendChild(button)
        buttonElements.push(button);

        // createing the rooms
        const room = createRoomElement(i)
        roomsContainer.appendChild(room)
        roomElements.push(room)
    }
    for (let button of buttonElements) {
        addButtonListener({ buttonElements, button, socket: socketNameSpace })
    }
    return { buttonElements, roomElements }
})()



// *********************** envio de mensajes ***********************
const _sendMessage = (socket) => {
    const message = inputsendMessage.value;
    socket.emit("client send message", { message });
    inputsendMessage.value = "";
};


inputsendMessage.addEventListener("keydown", ({ key }) => (key === "Enter") ? _sendMessage(socketNameSpace) : null)
buttonSendMessage.addEventListener("click", () => _sendMessage(socketNameSpace))


socketNameSpace.on("connect", () => {
    console.log("conectado: ", socketNameSpace.id)

    nameSpaceElement.textContent = group;

    socketNameSpace.on("server send message", ({ message, room }) => {
        console.log({ message, room })
        const listElement = document.getElementById(room);
        const messageElement = createMessageElement(message);
        listElement.appendChild(messageElement);
    })

})

