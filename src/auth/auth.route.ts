import { Router } from 'express'
import authController from './auth.controller'
import bodyValidate from '../common/body-validate.middleware'
import registerScheme from './auth.model'
import { errorHandler } from '../common/error-handler'

const router = Router()

router.post('/register', bodyValidate(registerScheme), authController.register)
router.post('/login', bodyValidate(registerScheme), authController.login)
router.get('/verify', authController.verify)
router.post('/verification', authController.verification)
router.post('/resend', authController.resend)
router.use(errorHandler)

export default router
