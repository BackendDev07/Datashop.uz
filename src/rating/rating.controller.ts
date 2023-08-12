import { NextFunction, Request, Response } from "express";
import ratingService from "./rating.service";

const createRating = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = res.locals.user
        const { rate } = req.body
        const { id } = req.params

        const rating = await ratingService.createRating(user.id, +id, rate)

        res.status(201).send({
            message: "Rating created",
            rating
        })
    } catch (err) {
        next(err)
    }
}

const updateRating = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const { rate } = req.body

        const rating = await ratingService.updateRating(+id, rate)

        res.status(200).send({
            message: "Rating updated",
            rating
        })
    } catch(err) {
        next(err)
    }
}

const deleteRating = async ( req: Request, res: Response, next: NextFunction ) => {
    const { id } = req.params

    const rating = await ratingService.deleteRating(+id)

    res.send({
        message: "Rating deleted",
        rating
    })
}

export default {
    createRating,
    updateRating,
    deleteRating
}