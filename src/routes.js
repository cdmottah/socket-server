const ioConections = require("./services/io.class.js")

const teacherConections = ({io,socket}) => {
    // console.log(`El usuario ${socket.id} se ha conectado al grupo de ${socket.connectedRoom}`)
    const _ioConections = new ioConections({io, socket})
    socket.on("join room", room => {
        // console.log(`El usuario ${socket.id} se ha unido a la sala ${room}`)
        _ioConections.onJoinRoom(room)
    })
    socket.on("client send message", ({message}) => {
        console.log(`El usuario ${socket.id} ha enviado el  mensaje ${message} a la sala ${socket.connectedRoom}`)
        _ioConections.onSendMessage(message)
    })
}

const studentsConections = ({io,socket}) => {
    // console.log(`El usuario ${socket.id} se ha conectado al grupo de ${socket.connectedRoom}`)
    const _ioConections = new ioConections({io, socket})
    socket.on("join room", room => {
        // console.log(`El usuario ${socket.id} se ha unido a la sala ${room}`)
        _ioConections.onJoinRoom(room)
    })
    socket.on("client send message", ({message}) => {
        console.log(`El usuario ${socket.id} ha enviado el  mensaje ${message} a la sala ${socket.connectedRoom}`)
        _ioConections.onSendMessage(message)
    })
}

module.exports = { teacherConections, studentsConections }