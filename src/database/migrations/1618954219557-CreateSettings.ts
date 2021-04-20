import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1618954219557 implements MigrationInterface {
    //o que vai ser feito quando rodar a migration
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "uuid", //unic universal id
                        isPrimary: true //definir como pk
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    //o que vai ser feito quando reverter a migration
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings"); //deletar a tabela
    }

}
