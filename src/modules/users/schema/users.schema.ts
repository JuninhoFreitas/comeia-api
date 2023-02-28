import { celebrate, Joi, Segments } from 'celebrate';

const tasksSchema = {
	register: celebrate({
		[Segments.BODY]: Joi.object().keys({
			email: Joi.string().email().required(),
			password: Joi.string().min(6).required(),
		}),
	}),
	login: celebrate({
		[Segments.BODY]: {
			email: Joi.string().email().required(),
			password: Joi.string().min(6).required(),
		},
	}),
};

export default tasksSchema;
