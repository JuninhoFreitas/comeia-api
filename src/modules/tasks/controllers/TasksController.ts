import { Request, Response } from 'express';
import CreateTaskService from '../services/CreateTaskService';
import ListTasksService from '../services/ListTasksService';

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

		return response.json({
			success: true,
			data: createdTask,
		});
	}
}
