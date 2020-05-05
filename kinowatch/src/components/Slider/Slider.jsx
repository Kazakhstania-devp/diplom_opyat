import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import {useSelector} from 'react-redux';


function Slick (){
  const movies = useSelector((state) => state.movieList);
    return(
      
      <Carousel 
      slidesPerPage={6}
      slidesPerScroll={2}
      offset={50}
      arrows
      infinite
      clickToChange
      centered
      >
        {movies.map(item => (
          <div className="carouselItem">
            <img  key={item.id} src={item.Images[1]}/>
          </div>
      ))}
      </Carousel>
    )
}
export default Slick;