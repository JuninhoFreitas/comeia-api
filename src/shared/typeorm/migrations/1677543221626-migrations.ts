import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class migrations1677543221626 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					{
						name: 'user_id',
						type: 'varchar',
						isPrimary: true,
						generationStrategy: 'uuid',
					},
					{
						name: 'email',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'password',
						type: 'varchar',
						isNullable: false
					},
					
				],
			}),
		);
		await queryRunner.createTable(
			new Table({
				name: 'tasks',
				columns: [
					{
						name: 'task_id',
						type: 'varchar',
						isPrimary: true,
						generationStrategy: 'uuid',
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
					{
						name: 'deleted_at',
						type: 'timestamp',
						isNullable: true,
					},
					{
						name: 'user_id',
						type: 'varchar',
					}
				],
			}),
		);
		
		await queryRunner.createForeignKey('tasks', new TableForeignKey({
			columnNames: ['user_id'],
			referencedColumnNames: ['user_id'],
			referencedTableName: 'users',
			onDelete: 'CASCADE'
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('tasks');
		await queryRunner.dropTable('users');
	}

}