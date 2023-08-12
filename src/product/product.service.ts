import createHttpError from 'http-errors'
import prisma from '../prisma/prisma.service'
import { unlink } from 'fs'
import { join } from 'path'

type CreateProductType = {
  name: string
  price: number
  description: string
  categoryId: number
}

type UpdateProductType = {
  [key in keyof CreateProductType]?: CreateProductType[key]
}

const createProduct = async (data: CreateProductType) => {
  const product = await prisma.product.create({
    data: {
      ...data,
    },
  })
  return product
}

const updateProduct = async (id: number, data: UpdateProductType) => {
  const findedProduct = await prisma.product.findUnique({
    where: {
      id,
    },
  })

  if (!findedProduct) {
    throw createHttpError(404, 'Product not found')
  }

  const product = await prisma.product.update({
    where: {
      id,
    },
    data: {
      ...data,
    },
  })

  return product
}

const deleteProduct = async (id: number) => {
  const findedProduct = await prisma.product.findUnique({
    where: {
      id,
    },
  })

  if (!findedProduct) {
    throw createHttpError(404, 'Product Not found')
  }

  const deletedProduct = await prisma.product.delete({
    where: {
      id,
    },
  })

  return deletedProduct
}

const getProductById = async (id: number) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      description: true,
      name: true,
      price: true,
    },
  })

  if (!product) {
    throw createHttpError(404, 'Product not found')
  }
  return product
}



export default {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
}
