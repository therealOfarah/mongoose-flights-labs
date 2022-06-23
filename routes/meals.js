import { Router } from 'express'
import * as mealCrtl from "../controllers/meals.js"
const router = Router()

router.get('/new',mealCrtl.new)

router.post('/',mealCrtl.create)

export { 
  router
}
