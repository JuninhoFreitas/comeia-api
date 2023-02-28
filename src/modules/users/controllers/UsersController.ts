import { Request, Response } from 'express';
import AuthenticateUserService from '../services/users/AuthenticateUserService';
import RegisterUserService from '../services/users/RegisterUserService';

interface IRegisterUser {
  user_id: string;
  email: string;
  password: string;
}

interface ISerializedUser {
  user_id?: string;
}

const serializeRegister = ({ user_id }: IRegisterUser ): ISerializedUser => {
	return { user_id };
};

export default class UsersController {
	public async login(request: Request, response: Response): Promise<Response> {
		const { email, password } = request.body;

		const authenticateUserService = new AuthenticateUserService();

		const token = await authenticateUserService.execute({
			email,
			password,
		});
		
		return response.status(200).json({
			success: true,
			data: token,
		});
	}
	public async register(
		request: Request,
		response: Response
	): Promise<Response> {
		const { email, password } = request.body;

		const registerUserService = new RegisterUserService();

		const registeredUser = await registerUserService.execute({
			email,
			password,
		});
		const serializedUser = serializeRegister(registeredUser);

		return response.status(201).json({
			success: true,
			data: serializedUser,
		});
	}
}
