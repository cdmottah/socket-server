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
    
    socket.emit("mensaje-bienvenida", "Bienvenido al servidor")

    socket.on("message", (message) => {
        console.log(`Mensaje from user: ${socket.id}`, message);
    })
    
   io.emit("mensaje-bienvenida", "Un usuario se ha conectado")
    
    socket.on("disconnect", () => {
        console.log("Un usuario se ha desconectado")
    })
    
    console.log("Un usuario se ha conectado")
    
})


httpServer.listen(3000)