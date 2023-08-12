import { Router } from 'express'
import upload from '../common/uploadFile.middleware'
import productController from './product.controller'
import { userVerify } from '../common/user-verify.middleware'
import bodyValidate from './../common/body-validate.middleware'
import productModel from './product.model'

const router = Router()

router.post(
  '/',
  userVerify(['admin']),
  upload.single('img'),
  bodyValidate(productModel.createProduct),
  productController.createProduct
)
router.put(
  '/:id',
  userVerify(['admin']),
  upload.single('img'),
  bodyValidate(productModel.updateProduct),

  productController.updateProduct
)
router.delete('/:id', userVerify(['admin']), productController.deleteProduct)
router.get('/:id', productController.getProductById)


// Rating


export default router
