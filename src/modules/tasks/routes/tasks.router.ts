import { Router } from 'express';
import TasksController from '../controllers/TasksController';

const tasksRouter = Router();
const tasksController = new TasksController();

tasksRouter.get('/', tasksController.list);

export default tasksRouter;
