const socket = io();
let myId
const circleElement = document.querySelector("#circle");

const moveCircle = (event) => {
    circleElement.style.left = `${event.clientX}px`;
    circleElement.style.top = `${event.clientY}px`;

}
const emitMoveCircle = (event) => {
    const { clientX, clientY } = event;
    moveCircle({ clientX, clientY })
    socket.emit("move circle", { clientX, clientY })
}

document.addEventListener("mousedown", (event) => {
    document.addEventListener("mousemove", emitMoveCircle);
})

document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", emitMoveCircle);
})


socket.on("connect", () => {
    myId = socket.id
    socket.on("move circle", moveCircle)
})








