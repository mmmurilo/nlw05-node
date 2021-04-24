import { Router } from 'express'
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';
import { MessagesController } from './controllers/MessagesController';

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messageController = new MessagesController();

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * http://localhost:3333/settings/1
 * 
 * Query Params => Filtros e Buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body Params => Geralmente para Inserir ou Alterar
 * {
 *  objetos em JSON
 * }
 */

routes.post("/settings",settingsController.create);
routes.get("/settings/:username",settingsController.findByUserName);
routes.put("/settings/:username",settingsController.update);

routes.post("/users",usersController.create);
routes.get("/users/:email",usersController.findByEmail);

routes.post("/messages",messageController.create);
routes.get("/messages/:id",messageController.showByUser);

export { routes };