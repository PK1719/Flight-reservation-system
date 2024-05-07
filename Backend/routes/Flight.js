const express=require('express');
const router=express.Router();
const FlightController=require("../controllers/FlightController");

router.post("/searchflight",FlightController.getFlights)

module.exports=router