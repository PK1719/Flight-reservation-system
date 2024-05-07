import '../App.css';
import logo from '../images/logo.png'
function NavBar(){
        const title={
            textDecoration:"none",
            color: "white"
        }
    return(
        <div class="navbar">
      <div>
        <img src={logo} className='logo' />
        <div className='logoTitle'><a href="/" style={title}>BeeWays</a></div>
    </div><div>
            <ul>
                <li><a href="/booking">Book & Prepare</a></li>
                <li><a href="/mybooking">My Booking</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    </div>
    )
}
export default NavBar;