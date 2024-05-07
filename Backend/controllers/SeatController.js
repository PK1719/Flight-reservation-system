const SeatModel=require('../models/SeatModel');

const SeatController={
    async getSeats(req,res){
        try{
            const newSeat=new SeatModel({
                seat_id:Number,
                f_id: Number,
                class:String,
                price:Number,
                no_of_seats:Number,
                departure_date: { type: Date }
            })
            const [fid]=req.body;
            console.log(fid);
            const seats=await SeatModel.find({
                f_id:fid
            }).exec();
            res.send(seats);
            console.log(seats);
        }
        catch(err){
            console.log("Error getSeats:", err);
            res.status(500).send("Error fetching seats");
        }
    }
}
module.exports=SeatController;