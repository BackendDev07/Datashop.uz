import Joi from "joi";

const review = Joi.object({
    comment: Joi.number().required()
})

const updateReview = Joi.object({
    comment: Joi.number()
})

export default {
    review,
    updateReview
}