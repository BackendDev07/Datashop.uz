import createHttpError from "http-errors"
import prisma from "../prisma/prisma.service"

const createReview = async ( id: number, productId: number, comment: string ) => {
    const review = await prisma.review.create({
        data: {
            comment,
            userId: id,
            productId
        }
    })

    return review
}

const updateReview = async ( id: number, comment: string ) => {
    const findReview = await prisma.review.findUnique({
        where: {
            id
        }
    })

    if( !findReview ){
        throw createHttpError(404, "Review not found")
    }

    const review = await prisma.review.update({
        where: {
            id
        },
        data: {
            comment
        }
    })

    return review
}

const deleteReview = async ( id: number ) => {
    const findedReview = await prisma.review.findUnique({
        where: {
            id
        }
    })

    if( !findedReview ) {
        throw createHttpError(404, "Rating not found")
    }

    const review = await prisma.review.delete({
        where: {
            id
        }
    })

    return review
}

export default {
    createReview,
    updateReview,
    deleteReview
}