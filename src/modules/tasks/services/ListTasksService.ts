import { getCustomRepository } from 'typeorm';
import Task from '../typeorm/entities/Tasks';
import { TasksRepository } from '../typeorm/repositories/TasksRepository';

interface IRequest {
  query: {done?: boolean;}
  user_id: string;
}

class ListTasksService {
	public async execute({ query, user_id }: IRequest): Promise<Task[]> {
		const tasksRepository = getCustomRepository(TasksRepository);

		const tasks = await tasksRepository.listTasks({ query, user_id});

		return tasks;
	}
}

export default ListTasksService;
