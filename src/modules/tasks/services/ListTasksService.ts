import { getCustomRepository } from 'typeorm';
import Task from '../typeorm/entities/Tasks';
import { TasksRepository } from '../typeorm/repositories/TasksRepository';

interface IRequest {
  done?: boolean;
}

class ListTasksService {
	public async execute({ done }: IRequest): Promise<Task[]> {
		const tasksRepository = getCustomRepository(TasksRepository);
		const query = {
			done
		};

		const tasks = await tasksRepository.listTasks({ query });

		return tasks;
	}
}

export default ListTasksService;
