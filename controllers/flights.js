import { Flight } from "../models/flight.js"
import { Meal } from "../models/meal.js"

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add New Flight"
  })
}
function create(req, res) {
  Flight.create(req.body)
    .then(flights => {
      res.redirect('/flights')
    })
}
function index(req, res) {
  Flight.find({})
    .then(flights => {
      res.render("flights/index", {
        title: "All Flights",
        flights: flights
      })
    })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('meals')
  .then(flight => {
    Meal.find({_id: {$nin: flight.meals}})
    .then(meals => {
      res.render('flights/show', {
        title: 'Meal Option', 
        meals,
        flight,
      })
    })
  })
}

function remove(req,res){
  Flight.findByIdAndDelete(req.params.id)
  .then(()=>{
    res.redirect('/flights')
  })
}
function edit(req,res){
  Flight.findById(req.params.id)
  .then(flight =>{
    res.render('flights/edit',{
      flight,
      title:"Edit Flight"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}
function update(req,res){
  Flight.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(flight=>{
    res.redirect(`/flights`)
  })
}
function createTicket(req,res){
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(()=>{
      res.redirect(`/flights/${flight._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function addMeal(req,res){
  Flight.findById(req.params.id)
  .then(flight =>{
    flight.meals.push(req.body.mealId)
    flight.save()
    .then(()=>{
      res.redirect(`/flights/${flight._id}`)
    })
  })
}
export {
  index,
  newFlight as new,
  create,
  show,
  remove as delete,
  edit,
  update,
  createTicket,

  addMeal
}