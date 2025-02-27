import { Router } from 'express'
import { ventaLoad, ventaAdd } from '../controllers/index.controller.js'

const router = Router()

router.get('/', ventaLoad)

router.post('/', ventaAdd)

export default router