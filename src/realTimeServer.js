module.exports = (httpServer) => {

    const { Server } = require("socket.io");
    const io = new Server(httpServer)

    io.on("connection", (socket) => { 
        
        console.log("A user connected");

        socket.on("disconnect", () => {
            console.log("A user disconnected");
        });
    })

}