import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/carousel1.jpg'
import image2 from '../images/carousel2.jpg'
import image3 from '../images/carousel3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function HomeCarousel() {
   
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselimage"
          src={image2}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselimage"
          src={image3}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselimage"
          src={image1}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default  HomeCarousel;