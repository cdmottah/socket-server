export const createRoomElement = (i) => {
    const liElement = document.createElement("li")
    liElement.id = `room-${i}`
    liElement.setAttribute("title", `room ${i}`)
    liElement.classList.add("rooms__element")
    return liElement
}

export const createButtonElement = (i) => {
    const button = document.createElement("button")
    button.id = `button-room-${i}`
    button.setAttribute("room", `room-${i}`)
    button.classList.add("btn", "btn--secondary")
    button.textContent = `Room ${i}`
    return button
}

export const createMessageElement = (message) => {
    const messagesContainer = document.createElement("p");
    messagesContainer.textContent = message;
    messagesContainer.classList.add("message")
    return messagesContainer
}

