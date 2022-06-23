import { Meal } from "../models/meal.js";

function newMeal(req,res){
  Meal.find({})
  .then(meals => {
    res.render("meals/new",{
      meals,
      title:"Meals"
    })
  })
}

function create(req,res){
  Meal.create(req.body)
  .then(meals =>{
    res.redirect('/meals/new')
  })
}

export{
create,
newMeal as new
}
