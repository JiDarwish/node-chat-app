import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import socketConfig from './socketHandlers';
import socketIO from 'socket.io';

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

socketConfig(io);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../public')));


server.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`)
});