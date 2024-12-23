const { createServer } = require("http")
const { Server } = require("socket.io");
const Client = require('socket.io-client');

describe('testing for Socket.io ', () => {

    const setup = async () => {
        return new Promise((resolve) => {
            const server = CreateServer();
            const io = new Server(server);
            server.listen(() => {
                const port = server.address().port;
                const mockClientSocket = new Client(`http://localhost:${port}`);
                
                io.on('connection', (serverSocket) => {
                    resolve({ io, mockClientSocket, serverSocket });
                });
            });
        });
    }

    const teardown = async ({mockClientSocket,serverSocket}) => {
        serverSocket.close();
        mockClientSocket.close();
    }


})