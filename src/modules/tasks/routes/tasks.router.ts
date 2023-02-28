import { Router } from 'express';
import TasksController from '../controllers/TasksController';
import tasksSchema from '../schema/tasks.schema';

const tasksRouter = Router();
const tasksController = new TasksController();

tasksRouter.get('/', tasksSchema.listTasks, tasksController.list);
tasksRouter.post('/', tasksSchema.createTask, tasksController.create);

export default tasksRouter;