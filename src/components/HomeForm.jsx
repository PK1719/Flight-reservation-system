import '../App.css';
import { useState } from 'react';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomeForm() {
    const istyle = {
        fontSize: "larger",
        color: "#556388"
    };
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

    return (
        <>
            <div className="background">
                <div className="circle4"></div>
                <div className="circles">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                </div>
                <div className="slogan">Discover the world, <br />One flight at a time</div>
                <div className="book">
                    <div className='homeform'><FontAwesomeIcon icon={faPlane} />  Flights</div>
                    <br />
                    <form method='post'>
                        <div className="formHomeLine1">
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
                        <div className="formHomeLine2">
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
            </div>
            <br></br><br></br>
                <div className="offer">
                   {showOfferBox  && (<div id="offerbox">
                        <div className='offerTitle'>Offers</div>
                        <button className="closebutton" onClick={closeOfferBox}>x</button>
                        <div className='offerdiv'></div>
                    </div>
                    )}
            <div className="offertext">Enjoy exclusive offers with My BeeWays Pass</div><br /><br />
            <button className="offerSubmit" onClick={handleOfferBox}> KNOW MORE</button>
                </div>
                
        </>
    );
}

export default HomeForm;
