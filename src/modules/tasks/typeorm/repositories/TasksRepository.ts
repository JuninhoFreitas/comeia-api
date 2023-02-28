import { EntityRepository, getRepository, Repository } from 'typeorm';
import Tasks from '../entities/Tasks';
import _ from 'lodash';
interface ICreateTask {
  date: Date;
  description: string;
  done: boolean;
}

interface IQuery {
	query: object;
	user_id: string;
}

@EntityRepository(Tasks)
export class TasksRepository extends Repository<Tasks> {
	public async createTask({ done, date, description }: ICreateTask): Promise<Tasks | any> {
		const task = await getRepository(Tasks)
			.createQueryBuilder()
			.insert()
			.into('tasks')
			.values([done, date, description])
			.execute();

		return task;
	}

	public async listTasks({query, user_id}: IQuery): Promise<Tasks | any> {
		const filteredQuery = _.omitBy(query, _.isUndefined);
		
		const task = await getRepository(Tasks)
			.createQueryBuilder().select('*').where({ ...filteredQuery, user: user_id, deleted_at: null }).execute();

		return task;
	}
}
