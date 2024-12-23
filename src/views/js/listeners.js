export const addButtonListener = ({buttonElements, button, socket}) => {
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

    return listener
}