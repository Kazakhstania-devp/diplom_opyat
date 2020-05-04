import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import {useSelector} from 'react-redux';


function Slick (){
  const movies = useSelector((state) => state.movieList);
    return(
      <Carousel 
      lidesPerPage={2}
      itemWidth={500}
      >
        {movies.map(item => (
        <img key={item.id} src={item.Images}/>
      ))}
      </Carousel>
    )
}
export default Slick;