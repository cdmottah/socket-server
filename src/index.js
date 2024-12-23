
const express = require("express");
const { createServer } = require("http");
const realTimeServer = require("./realTimeServer");
const path = require("path");

const app = express();
const httpServer = createServer(app);

app.set("port", process.env.PORT || 3000);
app.use(require("./routes"));


app.use(express.static(path.join(__dirname, "views")));


httpServer.listen(app.get("port"), (port) => {
    console.log(`Server is running on port ${app.get("port")}`);
});

realTimeServer(httpServer);