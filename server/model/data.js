import mongoose from "mongoose"

const dataSchema = new mongoose.Schema({
    temp: Number,
    humidity: Number,
    color: String,
    date: { type: Date, default: Date.now }
},{collection: 'data'})

const Data = mongoose.model("Data", dataSchema)

export default Data