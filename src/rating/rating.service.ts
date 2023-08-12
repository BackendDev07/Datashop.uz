import createHttpError from "http-errors"
import prisma from "../prisma/prisma.service"

const createRating = async ( id: number, productId: number, rate: number ) => {
    const rating = await prisma.rating.create({
        data: {
            rate,
            userId: id,
            productId
        }
    })

    return rating
}

const updateRating = async ( id: number, rate: number ) => {
    const findRating = await prisma.rating.findUnique({
        where: {
            id
        }
    })

    if( !findRating ){
        throw createHttpError(404, "Rating not found")
    }

    const rating = await prisma.rating.update({
        where: {
            id
        },
        data: {
            rate
        }
    })

    return rating
}

const deleteRating = async ( id: number ) => {
    const findedDetail = await prisma.rating.findUnique({
        where: {
            id
        }
    })

    if( !findedDetail ) {
        throw createHttpError(404, "Rating not found")
    }

    const rating = await prisma.rating.delete({
        where: {
            id
        }
    })

    return rating
}

export default {
    createRating,
    updateRating,
    deleteRating
}