import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import {useSelector} from 'react-redux';


function Slick (props){
  const movies = useSelector((state) => state.movieList);
    return(
      <div>
      <div>{props.name}</div>
      <Carousel 
      slidesPerPage={6}
      slidesPerScroll={2}
      offset={50}
      arrows
      infinite
      clickToChange
      >
        {movies.map(item => (
          <div className="carouselItem">
            <img  key={item.id} src={item.Images[1]}/>
          </div>
      ))}
      </Carousel>
      </div>
    )
}
export default Slick;