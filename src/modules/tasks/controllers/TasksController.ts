import { Request, Response } from 'express';
import CreateTaskService from '../services/CreateTaskService';

export default class TasksController {
	public async list(_request: Request, response: Response): Promise<Response> {
		return response.json({
			success: true,
			data: {
				res: 'OK'
			},
		});
	}
	public async create(request: Request, response: Response): Promise<Response> {
		const { date, description, done } = request.body;

		const createTaskService = new CreateTaskService();

		const createdTask = await createTaskService.execute({ date, description, done });

		return response.json({
			success: true,
			data: {
				...createdTask
			},
		});
	}
}
