import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

function Success(){
    return(
    <>
    <div className="successbox">
        <div className='sbox'>
        <FontAwesomeIcon icon={faCheckCircle}  style={{color: "white",fontSize:"8em",margin:"30px 170px"}} />
        <h1 style={{textAlign:"center"}}>Successfull</h1>
        </div>
        <h3 style={{padding:"30px"}}>Congratulations on joining our journey</h3>
        <a href='/login'><button>Log in</button></a>
    </div>
    </>
    )
}
export default Success;