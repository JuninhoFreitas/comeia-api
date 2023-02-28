import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TasksRepository } from '../typeorm/repositories/TasksRepository';
import _ from 'lodash';
import Task from '../typeorm/entities/Tasks';

interface IRequest {
  task_id: string;
  description?: string;
  done?: boolean;
  date?: Date;
  user: string;
}

class UpdateTaskService {
	public async execute({ task_id, done, description, date, user }: IRequest): Promise<Task | undefined> {
		const tasksRepository = getCustomRepository(TasksRepository);
		const entity = { done, description, date };
		const filteredEntity = _.omitBy(entity, _.isUndefined);

		const [taskFound] = await tasksRepository.find({where:{ task_id, user }});

		if(!taskFound){
			throw new AppError('Task não encontrada', 404);
		}

		const tasks = await tasksRepository.update( { task_id }, filteredEntity );

		if(tasks.raw.affectedRows == 0){
			throw new AppError('Task não atualizada.');
		}

		return await tasksRepository.findOne({ task_id });
	}
}

export default UpdateTaskService;
