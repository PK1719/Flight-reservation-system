import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Flightitem(props) {
    const origin = props.origin;
    const destination = props.destination;
    const date = props.sdate.split("T")[0];
    const adate = props.adate.split("T")[0];
    const stime=props.stime;
    const atime=props.atime;
    const fid=props.fid
    const [seats,setSeats]=useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    
    useEffect(() => {
        setLoading(true);
        axios.post("http://localhost:4000/seat/searchseat", [fid])
            .then((res) => {
                setSeats(res.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Cannot find seats. Please try again later.");
                setLoading(false);
            });
    }, [fid]);

    return (
        <div className="flightbox">
            <div className="i1">

                <span>{origin} &nbsp;<FontAwesomeIcon icon={faPlaneDeparture} /> &nbsp; {destination}</span><span style={{fontSize:"9px"}}></span> <span style={{fontSize:"15px"}}>F-Id:FLI{fid}</span><br></br>
                <div className='timings1'><span>{stime}</span><span>{atime}</span></div>
                <div className='timings'><span>{date}</span><span>{adate}</span></div>
            </div>
            <div className="i2"><span>First Class</span><br /><br /> <p>$1000</p> <p>Seats Available :</p></div>
            <div className="i3"><span>Business Class</span> <br /><br /> <p>$1000</p><p>Seats Available :</p></div>
            <div className="i4"><span>Economy Class</span><br /><br /> <p>$1000</p><p>Seats Available : </p></div>
            <div className='i5'><input type="submit" value='Select Flight' /></div>
        </div>
    );
}

export default Flightitem;
