class ioConections {

    constructor({ io, socket }) {
        this.io = io;
        this.socket = socket;
        this.socket.connectedRoom = ""
    }
    onJoinRoom(room) {

        this.socket.leave(this.socket.connectedRoom);
        this.socket.join(room);
        this.socket.connectedRoom = room;
    }

    onSendMessage(message) {
        const room = this.socket.connectedRoom
        this.io.to(room).emit("server send message", { message, room })
    }
}


module.exports = ioConections;