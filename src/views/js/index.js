const socket = io();

function getSocketStatus(){
   console.log("Estado del socket: ", socket.connected);
}

socket.on("connect", () => { 
    console.log("El socket se ha conectado: ", socket.id);
    getSocketStatus()


})

socket.on("disconnect", () => {
    console.log("El socket se ha desconectado: ", socket.id);
    getSocketStatus()
})

socket.on("connect_error", () => {
    console.warn("Error de conexion");
})

socket.io.on("reconnect", () => {
    console.log("Reconectado");
})
socket.io.on("reconnect_attempt", () => {
    console.log("Intento de reconexion");
})