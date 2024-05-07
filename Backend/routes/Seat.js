const express=require('express');
const router=express.Router();
const SeatController=require('../controllers/SeatController')

router.post("/searchseat",SeatController.getSeats);

module.exports=router