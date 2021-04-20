import { Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import { CreateSettings1618954219557 } from '../database/migrations/1618954219557-CreateSettings';

@Entity("settings")
class Setting{
    //se o name fosse diferente colocava em json {} dentro da annotation
    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){ //verificar se já possui id
            this.id = uuid(); //se não tiver preencher o id
        }
    }

}

export { Setting }