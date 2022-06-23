import { Router } from 'express'
import * as flightCrtl from "../controllers/flights.js"
const router = Router()

/* GET users listing. */
router.get("/",flightCrtl.index)
router.get('/new', flightCrtl.new)
router.get('/:id', flightCrtl.show)
router.get('/:id/edit', flightCrtl.edit )
router.post('/',flightCrtl.create)
router.post('/:id/tickets', flightCrtl.createTicket)
router.post('/:id/meals', flightCrtl.addMeal)
router.delete('/:id', flightCrtl.delete)
router.put('/:id',flightCrtl.update)
export {
  router
}
