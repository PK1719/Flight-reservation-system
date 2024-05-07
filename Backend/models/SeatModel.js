const mongoose=require("mongoose");

const seatSchema=new mongoose.Schema({
    seat_id:Number,
    f_id: Number,
    class:String,
    price:Number,
    no_of_seats:Number,
    departure_date: { type: Date }
})
const SeatModel=mongoose.model('Seat',seatSchema);
module.exports=SeatModel;