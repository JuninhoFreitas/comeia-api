import AppError from '@shared/errors/AppError';
import { getCustomRepository, UpdateResult } from 'typeorm';
import { TasksRepository } from '../typeorm/repositories/TasksRepository';

interface IRequest {
  task_id: string;
}

class DeleteTaskService {
	public async execute({ task_id }: IRequest): Promise<UpdateResult> {
		const tasksRepository = getCustomRepository(TasksRepository);


		const taskFound = await tasksRepository.findOne({task_id});

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
