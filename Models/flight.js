import mongoose from "mongoose";

const Schema = mongoose.Schema

const flightSchema = new Schema({
  arline:String,
  airport:String,
  flightNo:Number,
  departs:Date
})

const Flight = mongoose.model("Flight",flightSchema)
export{
Flight
}