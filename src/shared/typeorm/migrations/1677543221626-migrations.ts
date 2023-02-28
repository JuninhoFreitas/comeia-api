import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class migrations1677543221626 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'tasks',
            columns: [
              {
                name: 'task_id',
                type: 'varchar',
              },
              {
                name: 'date',
                type: 'timestamp',
              },
              {
                name: 'description',
                type: 'varchar',
              },
              {
                name: 'done',
                type: 'boolean',
              },
            ],
          }),
        );
      }

      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tasks');
      }

}