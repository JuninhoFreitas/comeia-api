import { celebrate, Joi, Segments } from 'celebrate';

const tasksSchema = {
	listTasks: celebrate({
		[Segments.QUERY]: {
			done: Joi.boolean().options({convert:true}),
		},
	}),
	createTask: celebrate({
		[Segments.BODY]: {
			done: Joi.boolean().options({convert:true}).required(),
			date: Joi.date().required(),
			description: Joi.string().required(),
		},
	}),
	deleteTask: celebrate({
		[Segments.PARAMS]: {
			task_id: Joi.string().uuid().required()
		},
	}),
	updateTask: celebrate({
		[Segments.BODY]: {
			done: Joi.boolean().options({ convert:true }),
			description: Joi.string(),
			date: Joi.date()
		},
		[Segments.PARAMS]: {
			task_id: Joi.string().uuid().required()
		},
	})
};


export default tasksSchema;