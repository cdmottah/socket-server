module.exports = (httpServer) => {

    const { Server } = require("socket.io");
    const io = new Server(httpServer)

    io.on("connection", (socket) => {


        socket.on("disconnect", () => {
            console.log("A user disconnected");
        });

        socket.on("message", (message) => {
            message.date = Date.now().toString();
            io.emit("message", message);
        })
    })

}