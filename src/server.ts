import { http } from './http';
import './websocket/client';
import './websocket/admin';

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica (alterar apenas a senha do usuário)
 * Posso utilizar a mesma rota com métodos diferentes
 */

http.listen(3333, () => console.log("Server is running on port 3333"))
//app.listen(3333, () => console.log("Server is running on port 3333"))