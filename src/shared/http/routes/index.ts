import { Router } from 'express';
import tasksRouter from '@modules/tasks/routes/tasks.router';
import usersRouter from '@modules/users/routes/users.router';
import AppError from '@shared/errors/AppError';
import authMiddleware from '../middlewares/AuthMiddleware';

const routes = Router();

routes.use('/tasks', authMiddleware, tasksRouter);
routes.use('/users', usersRouter);
routes.use(()=>{
	throw new AppError('Rota não encontrada', 404);
});

export default routes;
