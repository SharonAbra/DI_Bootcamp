import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import one from './1.jpg';
import two from './2.JPG';
import three from './3.JPG';

const MyCarousel = () => {
  const mystyle = {
    margin: "auto",
    width: "400px"
  };

  return (
    <>
        <div style={mystyle}>
          
        
        <Carousel>
          <div>
              <img src={one} />
              <p>Boy on the beach</p>
          </div>
          <div>
              <img src={two} />
              <p>Winter slippers</p>
          </div>
          <div>
              <img src={three} />
              <p>Follow the footsteps</p>
          </div>
        </Carousel>
        </div>
    </>
  )
}
export default MyCarousel
