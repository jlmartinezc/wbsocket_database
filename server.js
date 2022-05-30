const  express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer, Socket } = require('socket.io');
const initListeners = require('./src/listeners/connected')

const app = express();
const PORT = 8080 || process.env.PORT;

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

require('./src/routes/index')(app, express);
initListeners(io);
httpServer.listen(PORT, () => console.log(`Server ON`));