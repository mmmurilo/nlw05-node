import express from 'express'; //importação com os ... significa que instalou a biblioteca, mas precisa instalar as tipagens
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import path from 'path';

import "./database"; //importar o index.ts do database
import { routes } from './routes';

const app = express();

app.use(express.static(path.join(__dirname,"..","public")));
app.set('views', path.join(__dirname,"..","public"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/pages/client', (request,response) => {
    return response.render('html/client.html')
})

app.get('/pages/admin', (request,response) => {
    return response.render('html/admin.html')
})

const http = createServer(app); //criando o protocolo http
const io = new Server(http); //criando o protocolo websocket

io.on("connection",(socket: Socket) => { //connection pra primeira conexão
    console.log("Se conectou", socket.id)
});

app.use(express.json());
app.use(routes);

export { http, io };