import Joi from 'joi'

const registerScheme = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

export default registerScheme
