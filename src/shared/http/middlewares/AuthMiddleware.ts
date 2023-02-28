import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
}




interface ReqModified extends Request{
    user?: UserPayload;
}
  
const authMiddleware = (req: ReqModified, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		throw new AppError('Token not provided', 401);
	}

	const parts = authHeader.split(' ');

	if (parts.length !== 2) {
		throw new AppError('Token error', 401);
	}

	const [scheme, token] = parts;

	if (!/^Bearer$/i.test(scheme)) {
		throw new AppError('Token malformatted', 401);
	}

	verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
		if (err) {
			throw new AppError('Token invalid', 401);
		}

		const user = decoded as UserPayload;
		req.user = user;

		return next();
	});
};

export default authMiddleware;
