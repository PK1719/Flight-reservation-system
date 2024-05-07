const mongoose=require('mongoose');
const flightSchema =new mongoose.Schema({
    trip_id:Number,
    f_id: Number,
    departure_location: String,
    arrival_location: String,
    departure_date: { type: Date },
    arrival_date: { type: Date },
    departure_time: String,
    arrival_time:String
})
const FlightModel=mongoose.model('Flight',flightSchema);

module.exports=FlightModel;