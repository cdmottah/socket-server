const { createServer } = require("http")
const { Server } = require("socket.io");
const Client = require('socket.io-client');

describe('testing for Socket.io ', () => {

    const setup = () => {
        return new Promise((resolve) => {
            const server = createServer();
            const io = new Server(server);
            server.listen(() => {
                const port = server.address().port;
                const mockClientSocket = new Client(`http://localhost:${port}`);

                io.on('connection', (serverSocket) => {
                    resolve({ io, mockClientSocket, serverSocket, server });
                });
            });
        });
    };

    const teardown = async ({ mockClientSocket, serverSocket, io, server }) => {
        serverSocket.disconnect();
        mockClientSocket.close();
        io.close();
        server.close();
    };

     it('should connect to the server', async () => {
        const { mockClientSocket, serverSocket, io, server } = await setup();
        await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => reject(new Error('Connection timeout')), 5000);
            mockClientSocket.on('connect', () => {
                clearTimeout(timeout);
                resolve();
            });
        });
        expect(mockClientSocket.connected).toBe(true);
        await teardown({ mockClientSocket, serverSocket, io, server });
    });

    it('should receive a message from the server', async () => {
        const { mockClientSocket, serverSocket, io, server } = await setup();
        const mockMessage = 'Hello, World!';
        await new Promise((resolve) => {
            mockClientSocket.on('message', (data) => {
                expect(data).toBe(mockMessage);
                resolve();
            });
            serverSocket.emit('message', mockMessage);
        });
        await teardown({ mockClientSocket, serverSocket, io, server });
    });

    it('should receive a message from the client', async () => {
        const { mockClientSocket, serverSocket, io, server } = await setup();
        const mockMessage = 'Hello, World!';
        await new Promise((resolve) => {
            serverSocket.on('message', (data) => {
                expect(data).toBe(mockMessage);
                resolve();
            });
            mockClientSocket.send(mockMessage);
        });
        await teardown({ mockClientSocket, serverSocket, io, server });
    });
})