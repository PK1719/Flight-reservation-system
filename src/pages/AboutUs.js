    import NavBar from "../components/NavBar";
    import Footer from "../components/Footer";
    import image1 from '../images/about1.jpg'
    import image2 from '../images/about2.jpg'
    import image3 from '../images/about3.jpg'
    import image4 from '../images/about4.jpg'
    import image5 from '../images/about5.jpg'
    import image6 from '../images/about6.jpg'
    import image7 from '../images/about7.jpg'
    import '../App.css'

function AboutUs(){
    return(
        <>
        <NavBar />
        <div style={{marginLeft: '90px',fontSize:'14px',marginTop:'40px'}}><a style={{textDecoration: "none",color: "gray"}} href="/">Home</a><span style={{color: "rgb(0,0,93)"}}> - About Us</span></div>
        <div class=" slog" >Discover our journey</div>
        <br /><br />

        <div class="cards">
            <div class="carder">
                <img src={image1} /><br /><br />
                <h4>On-board entertainment</h4>
                <p>On long-haul flights, you can look forward to our wide range of in-flight entertainment. The very latest movies, international radio stations and a large selection of TV programmes await you. Just lean back and enjoy your flight.</p>
            </div>
            <div class="carder">
                <img src={image2} /><br /><br />
                <h4>Food and beverages</h4>
                <p>We offer you menus that suit your departure time and destination. Our wide selection of drinks perfectly complements your meals. On selected routes, we also serve you a ‘movie snack’ during the in-flight entertainment.</p>
            </div>
            <div class="carder">
                <img src={image3} /><br /><br />
                <h4>Premium flights</h4>
                <p>Embark on a journey with our flight booking system, where excellence takes flight. Our commitment to providing the finest travel experience is evident in our premier selection of flights, ensuring you soar in comfort and style.</p>
            </div>
            <div class="carder">
                <img src={image4} /><br /><br />
                <h4>Flight attendants</h4>
                <p>From takeoff to landing, our flight attendants are here to ensure your journey is not only safe but also filled with genuine warmth and personalized attention.</p>
            </div>
            </div>
            <br />
            <div class="cards2">
                <div class="carder1">
                    <img src={image5} /><br /><br />
                    <h4>First Class</h4>
                    <p>Enjoy unparalleled comfort, exquisite cuisine, and personalized service as you soar to your destination in style.</p>
                </div>
                <div class="carder1">
                    <img src={image6} /><br /><br />
                    <h4>Business Class</h4>
                    <p>Elevate your journey with our Business Class flights, where sophistication meets efficiency. </p>
                </div>
                <div class="carder1">
                    <img src={image7} /><br /><br />
                    <h4>Economy Class</h4>
                    <p>Discover affordability without compromising comfort in our Economy Class flights.</p>
                </div>
            </div>
            <br /><br /><br />
            <Footer />
        </>
    )
}
export default AboutUs;