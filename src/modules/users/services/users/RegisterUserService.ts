import { hash } from 'bcrypt';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../../typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import User from '../../typeorm/entities/Users';


interface IUser{
    email: string;
    password: string;
}

class RegisterUserService {
	public async execute({ email, password	} : IUser): Promise<User> {
		const usersRepository = getCustomRepository(UsersRepository);

		const userExists = await usersRepository.findOne({ email });

		if (userExists) {
			throw new AppError('Email já registrado.', 400);
		}

		const hashedPassword = await hash(password, 8);

		const user = usersRepository.create({
			email,
			password: hashedPassword,
		});

		await usersRepository.save(user);

		return user;
	}
}

export default RegisterUserService;
