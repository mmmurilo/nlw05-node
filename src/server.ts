import express from 'express'; //importação com os ... significa que instalou a biblioteca, mas precisa instalar as tipagens

import "./database"; //importar o index.ts do database
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica (alterar apenas a senha do usuário)
 * Posso utilizar a mesma rota com métodos diferentes
 */

app.listen(3333, () => console.log("Server is running on port 3333"))