import { NextFunction, Request, Response } from 'express'
import productService from './product.service'

type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, price, description, categoryId } = req.body

    const product = await productService.createProduct({
      name,
      price: +price,
      description,
      categoryId: +categoryId,
    })

    res.status(201).send({
      message: 'Product Created',
      product,
    })
  } catch (e) {
    next(e)
  }
}

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const { name, price, categoryId, description } = req.body

    const product = await productService.updateProduct(+id, {
      name,
      price: +price || price,
      categoryId: +categoryId || categoryId,
      description,
    })

    res.send({
      message: 'Product Updated',
      product,
    })
  } catch (e) {
    next(e)
  }
}

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params

    const deletedProduct = await productService.deleteProduct(+id)
    res.send({
      message: 'Product Deleted',
      product: deletedProduct,
    })
  } catch (e) {
    next(e)
  }
}

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const product = await productService.getProductById(+id)
    res.send({
      message: 'Product Details',
      product,
    })
  } catch (e) {
    next(e)
  }
}





export default {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
}
