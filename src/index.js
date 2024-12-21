const express = require("express")
const path = require("path")
const { createServer } = require("http")
const { Server } = require("socket.io")

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, "views")))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "views/index.html")
})

io.on("connection", socket => {
    console.group("Nueva conexion");
    console.log("conectados: ", io.engine.clientsCount);
    console.log("Id:" ,socket.id);
    console.groupEnd("Nueva conexion");
    
    socket.on("disconnect", _socket => {
        console.group("desconexion");
        console.log("conectados: ", io.engine.clientsCount);
        console.log("desconexion Id:" ,socket.id);
        console.groupEnd("desconexion");
    })
    
})


httpServer.listen(3000)