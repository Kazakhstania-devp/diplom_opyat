import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import {useSelector} from 'react-redux';


function Slick (){
  const movies = useSelector((state) => state.movieList);
    return(
      <Carousel lidesPerPage={5}
      slidesPerScroll={2}
      animationSpeed={1500}
      stopAutoPlayOnHover
      offset={50}
      itemWidth={280}
      itemHeight={180}
      clickToChange
      centered
      rtl>
        {movies.map(item => (
        <img key={item.id} src={item.Images}/>
      ))}
      </Carousel>
    )
}
export default Slick;