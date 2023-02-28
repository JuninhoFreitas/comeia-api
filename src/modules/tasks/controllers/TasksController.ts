import { Request, Response } from 'express';
import CreateTaskService from '../services/CreateTaskService';
import DeleteTaskService from '../services/DeleteTaskService';
import ListTasksService from '../services/ListTasksService';
import UpdateTaskService from '../services/UpdateTaskService';

interface IAuthenticateRequest extends Request{
	user: {
		id: string;
	};
}
export default class TasksController {
	public async list(request: IAuthenticateRequest, response: Response): Promise<Response> {
		const { query } = request;
		const { id: user_id } = request.user;
		const listTasksService = new ListTasksService();

		const tasks = await listTasksService.execute({query, user_id});

		return response.json({
			success: true,
			data: tasks
		});
	}
	public async create(request: IAuthenticateRequest, response: Response): Promise<Response> {
		const { date, description, done } = request.body;
		const { id: user_id } = request.user;
		const createTaskService = new CreateTaskService();

		const createdTask = await createTaskService.execute({ date, description, done, user_id });

		return response.status(201).json({
			success: true,
			data: createdTask,
		});
	}
	public async delete(request: IAuthenticateRequest, response: Response): Promise<Response> {
		const { task_id } = request.params;
		const { id: user } = request.user;
		const deleteTaskService = new DeleteTaskService();

		await deleteTaskService.execute({ task_id, user });

		return response.status(204).json({
			success: true
		});
	}
	public async update(request: IAuthenticateRequest, response: Response): Promise<Response> {
		const { task_id } = request.params;
		const { done, description, date } = request.body;
		const { id: user } = request.user;

		const updateTaskService = new UpdateTaskService();

		const updatedTask = await updateTaskService.execute({ task_id, done, description, date, user });

		return response.status(200).json({
			success: true,
			data: updatedTask,
		});
	}
}
