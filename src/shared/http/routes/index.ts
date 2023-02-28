import { Router } from 'express';
import tasksRouter from '@modules/tasks/routes/tasks.router';

const routes = Router();

routes.use('/tasks', tasksRouter);

export default routes;
