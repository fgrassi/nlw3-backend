import express from 'express';
import path from 'path';
import cors from 'cors';


import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads',express.static(path.join(__dirname,'..','uploads')));
app.use(errorHandler);

app.listen(3333);



//EXPLICACOES
// driver nativo, query builder, ORM


//Rota = conjunto
//Recurso = usuarios

//Metodos HTTP = GET, POST, PUT, DELETE

//GET = Bsucar informacao
//POST = Criando informacao nova
//PUT = Editando informacao
//DELETE = Deletar informacao

//Parametros
// Query params: http://localhost:3333/user?search=diego&page=2
// Route params: http://localhost:3333/users/1 (identificar um recurso)
// Body: 

// app.post('/users/:id', (request, response) => {
//     console.log(request.query);
//     console.log(request.params);
//     console.log(request.body);

//     return response.json({ message: 'Hello World' });
// })