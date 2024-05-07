import Flightitem from "./Flightitem";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Flightsearch() {
    const { origin, destination, date } = useParams();
    const dest = {
        origin: origin,
        destination: destination,
        date: date
    };
    const [flights, setFlights] = useState([]);
    const [seats, setSeats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        axios.post("http://localhost:4000/flights/searchflight", dest)
            .then((res) => {
                setFlights(res.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Cannot find flights. Please try again later.");
                setLoading(false);
            });
    }, [origin, destination, date]);

    
    return (
        <>
            <div style={{ marginLeft: '90px', fontSize: '14px', marginTop: '40px' }}>
                <a style={{ textDecoration: "none", color: "gray" }} href="/">Home</a>
                <span style={{ color: "rgb(0,0,93)" }}> - Flights</span>
            </div>
            <h1 className="bookingtitle">Flights</h1>
            <div className="displayflight">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && flights.map((flight) => (
                    <Flightitem
                        fid={flight.f_id}
                        origin={flight.departure_location}
                        destination={flight.arrival_location}
                        sdate={flight.departure_date}
                        adate={flight.arrival_date}
                        stime={flight.departure_time}
                        atime={flight.arrival_time}
                    />
                ))}
            </div>
        </>
    );
}

export default Flightsearch;
