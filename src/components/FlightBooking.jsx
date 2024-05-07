import { useState } from "react";
import back from '../images/back.jpg'

function FlightBooking(){
    const [date, setDate] = useState(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    });
    
    const [errorMessage, setErrorMessage] = useState('');

    const handleDateChange = (event) => {
        const selectedDate = new Date(event.target.value);
        const currentDate = new Date();

        if (selectedDate < currentDate) {
            setErrorMessage('Please select a date after the current date.');
        } else {
            setDate(event.target.value);
            setErrorMessage('');
        }
    };

    const [showOfferBox, setShowOfferBox] = useState(false);

    function handleOfferBox() {
        setShowOfferBox(true);
    }

    function closeOfferBox() {
        setShowOfferBox(false);
    }
    function handleSubmit(event) {
        event.preventDefault();
        const boarding = document.getElementById('boarding').value;
        const destination = document.getElementById('destination').value;
        const date = document.getElementById('date').value;
        const seattype = document.getElementById('seattype').value;
        if (!boarding || !destination || !date || !seattype) {
            alert("Please fill in all fields");
            return;
        }
        window.location.href=`/flights/${boarding}/${destination}/${date}`
    }

    return(
        <>
        <br></br>
        <div style={{marginLeft: '50px',fontSize:'14px'}}><a style={{textDecoration: "none",color: "gray"}} href="Home.html">Home</a><span style={{color: "rgb(0,0,93)"}}> - Flight Search</span></div><br/>
        <h1 style={{fontWeight: "bold", color: "rgb(0,0,93)",marginLeft: '100px'}}>Flight Search</h1><br />
        <div class="booking">
        <img src={back}></img>
        <h1>Book a Flight</h1>
        <h3>Search for Emirates flights and book online. See our routes and schedules, and discover more about the experience you can look forward to on board.</h3>
        <br></br><br></br><br></br><br></br>
        <form method='post'>
        <h4 className="booktitle">Flights:</h4>
                        <div className="formhomeline1">
                            <select name="boarding" id="boarding" required>
                                <option value="" disabled selected hidden>From</option>
                                <option value="Amsterdam">Amsterdam</option>
                                <option value="New York">New York</option>
                                <option value="Dubai">Dubai</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Japan">Japan</option>
                                <option value="Los Angeles">Los Angeles</option>
                            </select>
                            <select name="destination" id="destination" required>
                                <option value="" disabled selected hidden>To</option>
                                <option value="Amsterdam">Amsterdam</option>
                                <option value="New York">New York</option>
                                <option value="Dubai">Dubai</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Japan">Japan</option>
                                <option value="Los Angeles">Los Angeles</option>
                            </select>
                            <input type="date" id="date" name="date" value={date} onChange={handleDateChange} required/>
                            {errorMessage && <p className='error' style={{position:"absolute",marginLeft:"500px",marginTop:'43px'}}>{errorMessage}</p>}
                        </div><br />
                        <div className="formhomeline2">
                            <select name="seattype" id="seattype" required >
                                <option value="" disabled selected hidden>Select Travel class</option>
                                <option value="First">First class</option>
                                <option value="Business">Business class</option>
                                <option value="Economy">Economy</option>
                            </select>
                            <input type="submit" value="Search for Flights" onClick={handleSubmit}/>
                        </div>
                    </form>
    </div>
    </>
    )
}
export default FlightBooking;