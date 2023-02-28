import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Task from '../typeorm/entities/Tasks';
import { TasksRepository } from '../typeorm/repositories/TasksRepository';

interface ICreateTask {
  date: string;
  description: string;
  done: boolean;
}

class CreateTaskService {
	public async execute({ date, description, done	}: ICreateTask ): Promise<Task | undefined> {
		const tasksRepository = getCustomRepository(TasksRepository);

		const newTask = tasksRepository.create({ date, description, done });

		const { generatedMaps: [createdTask] } = await tasksRepository.insert(newTask);

		const insertedTask = await tasksRepository.findOne({
			where: { task_id: createdTask.task_id }
		});

		if (!insertedTask) {
			throw new AppError('Task não registrada.');
		}

		return insertedTask;
	}
}

export default CreateTaskService;
