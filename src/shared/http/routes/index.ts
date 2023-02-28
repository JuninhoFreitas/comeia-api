import { Router } from 'express';
import tasksRouter from '@modules/tasks/routes/tasks.router';
import AppError from '@shared/errors/AppError';

const routes = Router();

routes.use('/tasks', tasksRouter);
routes.use(()=>{
	throw new AppError('Rota não encontrada', 404);
});

export default routes;
