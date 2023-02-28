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
	})
};


export default tasksSchema;