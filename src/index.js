const express = require("express")
const path = require("path")
const { createServer } = require("http")
const { Server } = require("socket.io")

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const socketsOnline = []

app.use(express.static(path.join(__dirname, "views")))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "views/index.html")
})

io.on("connection", socket => {
    socketsOnline.push(socket.id)
    socket.emit("welcome", "Bienvenido al servidor")

    socket.on("message", (message) => {
        console.log(`Mensaje from user: ${socket.id}`, message);
    })

    socket.on("emit-to-last", (message) => {
        const lastSocket = socketsOnline[socketsOnline.length - 1]
        console.log(`Emitiendo a última conexión: ${lastSocket}`, message)
        socket.to(lastSocket).emit("welcome from other user", message)
    })

    io.emit("new-user", {message:"Un usuario se ha conectado", id: socket.id})

    socket.on("disconnect", () => {
        // console.log("Un usuario se ha desconectado")
    })
})


httpServer.listen(3000)