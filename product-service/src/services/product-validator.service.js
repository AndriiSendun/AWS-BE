import Joi from 'joi';

export const validateProduct = (product) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    count: Joi.number().required(),
  });

  return schema.validate(product, { abortEarly: false });
}
