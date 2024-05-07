import '../App.css'
import 'react-social-icons/twitter'
import 'react-social-icons/google'
import 'react-social-icons/linkedin'
import { SocialIcon } from 'react-social-icons/component'

function Footer(){
    return(
        <div className="footer">
      <div className="footerdiv">BeeWays</div>
      <p class="fpara">BeeWays, we're dedicated to providing you with a seamless booking experience, offering a vast array <br />
        of destinations and airlines to suit your travel needs.Our commitment to customer satisfaction means <br />
         you can trust us to help you find the best flights at the best prices. </p>
         <div class="icons">
           <SocialIcon url="www.twitter.com" className='socialmedia' />
           <SocialIcon url="www.google.com" className='socialmedia' />
           <SocialIcon url="www.linkedin.com" className='socialmedia' />
         </div>
         <br />
    </div>
    )
}
export default Footer;