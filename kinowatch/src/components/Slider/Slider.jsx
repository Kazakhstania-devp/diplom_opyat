import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import {useSelector} from 'react-redux';


function Slick (props){
  const movies = useSelector((state) => state.movieList);
    return(
      <div className="block__inner slider__inner">
      <div className="slider__head">{props.name} ></div>
      <Carousel 
      slidesPerPage={7}
      slidesPerScroll={1}
      offset={60}
      arrows
      infinite
      >
        {movies.map(item => (
          <div className="carouselItem">
            <div className="carousel--title">{item.Title}</div>
            <img className="carousel--image" key={item.ID} src={item.Poster}/>
          </div>
      ))}
      </Carousel>
      </div>
    )
} 
export default Slick;