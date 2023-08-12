import { Router } from 'express'
import upload from '../common/uploadFile.middleware'
import productController from './product.controller'
import { userVerify } from '../common/user-verify.middleware'
import bodyValidate from './../common/body-validate.middleware'
import productModel from './product.model'
import ratingModel from '../rating/rating.model'
import ratingController from '../rating/rating.controller'
import reviewModel from '../review/review.model'
import reviewController from '../review/review.controller'

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

router.post('/:id/rating', userVerify(['admin']), bodyValidate(ratingModel.rating), ratingController.createRating)
router.put('/rating/:id', userVerify(['admin']), bodyValidate(ratingModel.updateRating), ratingController.updateRating)
router.delete('/rating/:id', userVerify(['admin']), ratingController.deleteRating)

// Review

router.post('/:id/review', userVerify(['admin']), bodyValidate(reviewModel.review), reviewController.createReview)
router.delete('/review/:id', userVerify(['admin']), reviewController.deleteReview)
router.put('/review/:id', userVerify(['admin']), bodyValidate(reviewModel.updateReview), reviewController.updateReview)

export default router
