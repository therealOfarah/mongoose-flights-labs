import mongoose from "mongoose";

const Schema = mongoose.Schema
const ticketSchema = new Schema({
  seat:{type: String},
  price:{type:Number, min:0}
})
const flightSchema = new Schema({
  airline:{type:String, enum:["American", "Southwest", "United"]},
  airport:{type:String, enum:["AUS", "‘DFW", "DEN", "LAX", "SAN"],default:"DEN"},
  flightNo:{type: Number,require:10-1000},
  departs:{type:Date, defualt: function(){
    const today = new Date()
    const oneYear = today.getFullYear() + 1
    today.setFullYear(oneYear)
    return today
  }},
  tickets:[ticketSchema],
  meals:[{type:Schema.Types.ObjectId, ref:"Meal"}]
})

const Flight = mongoose.model("Flight",flightSchema)
export{
Flight
}