import { Router } from 'express'
import { SettingsController } from './controllers/SettingsController';

const routes = Router();

const settingsController = new SettingsController();

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

export { routes };