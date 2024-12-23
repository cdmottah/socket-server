const { teacherConections, studentsConections } = require("./routes");
const express = require("express");
const path = require("path");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { instrument } = require('@socket.io/admin-ui');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: ["https://admin.socket.io"],
        credentials: true,

    }
});

instrument(io, {
    auth: false
});

app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

const teachers = io.of("/teachers");
const students = io.of("/students");

teachers.on("connection", (socket) => {
    console.log("Teacher connected:", socket.id);
    teacherConections({ io: teachers, socket });
});

students.on("connection", (socket) => {
    console.log("Student connected:", socket.id);
    studentsConections({ io: students, socket });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});