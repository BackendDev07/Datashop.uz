import Joi from 'joi'

const createProduct = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
})

const updateProduct = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
  description: Joi.string(),
})

export default {
  createProduct,
  updateProduct,
}
