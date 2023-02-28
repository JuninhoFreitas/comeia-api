import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../../typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';

interface IUser {
  email: string;
  password: string;
}

class AuthenticateUserService {
	public async execute({ email, password }: IUser): Promise<string> {
		const usersRepository = getCustomRepository(UsersRepository);

		const user = await usersRepository.findOne({ email });
		if (!user) {
			throw new AppError('Credenciais inválidas.', 401);
		}

		const isMatch = await compare(password, user.password);
		if (!isMatch) {
			throw new AppError('Credenciais inválidas.', 401);
		}

		const token = sign({ id: user.user_id }, process.env.JWT_SECRET || '', {
			expiresIn: '1d',
		});

		return token;
	}
}

export default AuthenticateUserService;
