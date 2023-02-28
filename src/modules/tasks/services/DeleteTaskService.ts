import AppError from '@shared/errors/AppError';
import { getCustomRepository, UpdateResult } from 'typeorm';
import { TasksRepository } from '@modules/tasks/typeorm/repositories/TasksRepository';
import User from '@modules/users/typeorm/entities/Users';

interface IRequest {
  task_id: string;
  user: string;
}

class DeleteTaskService {
	public async execute({ task_id, user }: IRequest): Promise<UpdateResult> {
		const tasksRepository = getCustomRepository(TasksRepository);


		const [taskFound] = await tasksRepository.find({where:{task_id, user}});

		if(!taskFound){
			throw new AppError('Task não encontrada', 404);
		}

		const tasks = await tasksRepository.softDelete({task_id});

		if(tasks.raw.affectedRows == 0){
			throw new AppError('Task não deletada.');
		}

		return tasks;
	}
}

export default DeleteTaskService;
