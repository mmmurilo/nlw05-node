import { getCustomRepository, Repository } from "typeorm";
import { UsersRepository } from '../repositories/UsersRepository';
import { User } from '../entities/User';

class UsersService{
    private usersRepository: Repository<User>

    construtor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string){
        //Verificar se o usuário existe, se não existir criar
        const userExists = await this.usersRepository.findOne({email});

        if(userExists){
            return userExists;
        }

        const user = this.usersRepository.create({email});

        await this.usersRepository.save(user);

        return user;
    }

}

export { UsersService };