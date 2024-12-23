
const express = require("express")
const path = require("path")
const { createServer } = require("http")
const { Server } = require("socket.io")

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);


app.use(express.static(path.join(__dirname, "views")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"))
})


io.on("connection", (socket) => {

    socket.on("is conected", console.log)
    socket.on("disconnect", console.log)
    socket.on("connect", console.log)
})


httpServer.listen(3000)