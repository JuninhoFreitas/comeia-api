import { Request, Response } from 'express';
import CreateTaskService from '../services/CreateTaskService';
import DeleteTaskService from '../services/DeleteTaskService';
import ListTasksService from '../services/ListTasksService';
import UpdateTaskService from '../services/UpdateTaskService';

export default class TasksController {
	public async list(request: Request, response: Response): Promise<Response> {
		const { query } = request;

		const listTasksService = new ListTasksService();

		const tasks = await listTasksService.execute(query);

		return response.json({
			success: true,
			data: tasks
		});
	}
	public async create(request: Request, response: Response): Promise<Response> {
		const { date, description, done } = request.body;

		const createTaskService = new CreateTaskService();

		const createdTask = await createTaskService.execute({ date, description, done });

		return response.status(201).json({
			success: true,
			data: createdTask,
		});
	}
	public async delete(request: Request, response: Response): Promise<Response> {
		const { task_id } = request.params;

		const deleteTaskService = new DeleteTaskService();

		await deleteTaskService.execute({ task_id });

		return response.status(204).json({
			success: true
		});
	}
	public async update(request: Request, response: Response): Promise<Response> {
		const { task_id } = request.params;
		const { done, description, date } = request.body;

		const updateTaskService = new UpdateTaskService();

		const updatedTask = await updateTaskService.execute({ task_id, done, description, date });

		return response.status(200).json({
			success: true,
			data: updatedTask,
		});
	}
}
