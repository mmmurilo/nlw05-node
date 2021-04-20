import { Repository, EntityRepository } from 'typeorm';
import { Setting } from '../entities/Setting';

@EntityRepository(Setting)
class SettingsRepository extends Repository <Setting> {
    //extends permite acessar todas funções da extensão
    
}

export { SettingsRepository };