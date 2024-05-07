import '../App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
import Flightsearch from '../components/Flightsearch';
import { useParams } from 'react-router-dom';

function SearchFlights() {
    
  return (
    <>
    <NavBar />
    <Flightsearch />
    <Footer />
    </>
  );
}

export default SearchFlights;
