
const express = require("express");
const { createServer } = require("http");
const realTimeServer = require("./realTimeServer");
const path = require("path");
const routerApi = require('./routes');
const cors = require('cors');
const app = express();
const httpServer = createServer(app);

app.set("port", process.env.PORT || 3000);

const whitelist = ['http://localhost:4200'];

const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('no permitido'));
        }
    }
}
app.use(cors(options));

app.use(express.json());
routerApi(app)


app.use(express.static(path.join(__dirname, "views")));


httpServer.listen(app.get("port"), (port) => {
    console.log(`Server is running on port ${app.get("port")}`);
});

realTimeServer(httpServer);