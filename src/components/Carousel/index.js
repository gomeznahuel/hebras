import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export const CarouselContainer = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} showIndicators={true} autoPlay={true} interval={2000} showArrows={true} infiniteLoop={true} useKeyboardArrows={true}>
      <div>
        <img src={"/assets/images/carousel01.jpg"} alt="First slide" />
      </div>
      <div>
        <img src={"/assets/images/carousel02.jpg"} alt="Second slide" />
      </div>
      <div>
        <img src={"/assets/images/carousel03.jpg"} alt="Third slide" />
      </div>
    </Carousel>
  );
};
