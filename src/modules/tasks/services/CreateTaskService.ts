import { UsersRepository } from '@modules/users/typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Task from '../typeorm/entities/Tasks';
import { TasksRepository } from '../typeorm/repositories/TasksRepository';

interface ICreateTask {
  date: string;
  description: string;
  done: boolean;
  user_id: string;
}

class CreateTaskService {
	public async execute({ date, description, done, user_id }: ICreateTask ): Promise<Task | undefined> {
		const tasksRepository = getCustomRepository(TasksRepository);
		const usersRepository = getCustomRepository(UsersRepository);
		const user = await usersRepository.findOne({user_id});

		const newTask = tasksRepository.create({ date, description, done, user });
		console.log(newTask);
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
