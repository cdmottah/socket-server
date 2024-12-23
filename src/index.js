const express = require("express")
const path = require("path")
const { createServer } = require("http")
const { Server } = require("socket.io")

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);


app.use(express.static(path.join(__dirname, "views")))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "views/index.html")
})

io.on("connection", socket => {

    socket.connectedRoom = ""

    socket.on("join room", room => {
        socket.leave(socket.connectedRoom);
        socket.join(room);
        socket.connectedRoom = room;
    })

    socket.on("client send message", ({ message }) => {
        const room = socket.connectedRoom
        console.log("data: ", { message, room })
        io.to(room).emit("server send message", { message, room })
    })
})



httpServer.listen(3000)