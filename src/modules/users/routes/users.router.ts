import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import usersSchema from '../schema/users.schema';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/register', usersSchema.register, usersController.register);
usersRouter.post('/login', usersSchema.login, usersController.login);

export default usersRouter;