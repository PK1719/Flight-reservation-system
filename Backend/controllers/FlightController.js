const FlightModel = require("../models/FlightModel");

const FlightController = {
    async getFlights(req, res) {
        try {
            const { origin, destination, date } = req.body;
            const flights = await FlightModel.find({
                departure_location: origin,
                arrival_location: destination,
                departure_date:  date
            }).exec();
            res.send(flights);
            console.log(flights);
        } catch (err) {
            console.log("Error getFlights:", err);
            res.status(500).send("Error fetching flights");
        }  
    }
}

module.exports = FlightController;
