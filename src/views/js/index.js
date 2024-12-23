const socket = io();

const roomQuantity = 3
const roomsContainer = document.getElementById("rooms-container")
const buttonsContainer = document.getElementById("buttons-container")
const inputsendMessage = document.getElementById("input-send-message");
const buttonSendMessage = document.getElementById("button-send-message");


roomsContainer.style.gridTemplateColumns = `repeat(${roomQuantity}, 1fr)`;
// botones de conexión
const buttonElements = (() => {
    const buttons = []
    for (let i = 1; i <= roomQuantity; i++) {
        const button = document.createElement("button")
        button.id = `button-room-${i}`
        button.setAttribute("room", `room-${i}`)
        button.classList.add("btn", "btn--secondary")
        button.textContent = `Room ${i}`
        buttons.push(button)
    }
    return buttons
})()

// add buttons to the DOM
for (const button of buttonElements) { buttonsContainer.appendChild(button) }

// createing the rooms
const rooms = (() => {
    const rooms = []
    for (let i = 1; i <= roomQuantity; i++) {
        const liElement = document.createElement("li")
        liElement.id = `room-${i}`
        liElement.setAttribute("title", `room ${i}`)
        liElement.classList.add("rooms__element")
        rooms.push(liElement)
    }
    return rooms
})()


// add listeners to the buttons
const buttonListeners = (() => {
    const listeners = []
    for (const button of buttonElements) {
        const listener = button.addEventListener("click", () => {
            const room = button.getAttribute("room");
            buttonElements.forEach(button => {
                button.classList.remove("btn--success");
                button.classList.add("btn--secondary");
            });
            button.classList.remove("btn--secondary");
            button.classList.add("btn--success");
            socket.emit("join room", room)
        })
        listeners.push(listener)
    }
    return listeners
})()

// add rooms to the DOM
for (const room of rooms) { roomsContainer.appendChild(room) }


const sendMessage = () => {
    const message = inputsendMessage.value;
    socket.emit("client send message", { message });
    inputsendMessage.value = "";
};

// send message on Enter key press
inputsendMessage.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// send message listener
buttonSendMessage.addEventListener("click", sendMessage)


socket.on("connect", () => {

    socket.on("server send message", ({ message, room }) => {
        _createMessage(room, message)
    })

})

function _createMessage(room, message) {
    const messagesContainer = document.createElement("p");
    const listElement = document.getElementById(room)
    messagesContainer.textContent = message;
    messagesContainer.classList.add("message")
    listElement.appendChild(messagesContainer)
    return messagesContainer
}






