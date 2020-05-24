import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import {useSelector} from 'react-redux';
import {Link, Route} from "react-router-dom";
import Header from '../layout/Header'
import  '../../routes';

function Slick (props){
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
        {props.genre.map(item => (
          <Link className="carouselItem" to={`/movies/${props.name}/${item.id}`}>
            <div className="carousel--title">{item.title}</div>
            <img className="carousel--image" key={item.id} src={item.poster}/>
          </Link>
      ))}
      </Carousel>
      </div>
    )
} 
export default Slick;