import Joi from "joi";

const rating = Joi.object({
    rate: Joi.number().required()
})

const updateRating = Joi.object({
    rate: Joi.number()
})

export default {
    rating,
    updateRating
}