import { NextFunction, Request, Response } from "express";
import ratingService from "./review.service";

const createReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = res.locals.user
        const { comment } = req.body
        const { id } = req.params

        const review = await ratingService.createReview(user.id, +id, comment)

        res.status(201).send({
            message: "Rating created",
            review
        })
    } catch (err) {
        next(err)
    }
}

const updateReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const { comment } = req.body

        const review = await ratingService.updateReview(+id, comment)

        res.status(200).send({
            message: "Rewiev updated",
            review
        })
    } catch(err) {
        next(err)
    }
}

const deleteReview = async ( req: Request, res: Response, next: NextFunction ) => {
    const { id } = req.params

    const review = await ratingService.deleteReview(+id)

    res.send({
        message: "Rating deleted",
        review
    })
}

export default {
    createReview,
    updateReview,
    deleteReview
}