import express from 'express';
import socketIO from 'socket.io';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../public')));


server.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`)
});