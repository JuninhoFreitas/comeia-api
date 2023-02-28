import { EntityRepository, getRepository, Repository } from 'typeorm';
import Tasks from '../entities/Tasks';

interface ICreateTask {
  date: Date;
  description: string;
  done: boolean;
}

@EntityRepository(Tasks)
export class TasksRepository extends Repository<Tasks> {
	public async createTask({ done, date, description } : ICreateTask): Promise<Tasks | any> {
		const task = await getRepository(Tasks)
			.createQueryBuilder('task')
			.insert()
			.into('tasks')
			.values([
				done, 
				date, 
				description
			])
			.execute();
		return task;
	}
}
