import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import Registration from './pages/Registration'
import Booking from './pages/Booking'
import AboutUs from './pages/AboutUs'
import MyBooking from './pages/MyBooking';
import SearchFlights from './pages/SearchFlight';
import ConfirmPage from './pages/ConfirmPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<Registration />}></Route>
        <Route path='/booking' element={<Booking />}></Route>
        <Route path='/mybooking' element={<MyBooking />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/flights/:origin/:destination/:date' element={<SearchFlights />}></Route>
        <Route path='/confirm' element={<ConfirmPage />}></Route>
        
    
      </Routes>
    </Router>
  );
}

export default App;
