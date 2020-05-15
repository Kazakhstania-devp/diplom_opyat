import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import {useSelector} from 'react-redux';
import {Link, Route} from "react-router-dom";
import Header from '../layout/header'
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
          <Link className="carouselItem" to={`/${props.name}/${item.Id}`} number={item.Id} rName = {props.name}>
            <div className="carousel--title">{item.Title}</div>
            <img className="carousel--image" key={item.Id} src={item.Poster}/>
          </Link>
      ))}
      </Carousel>
      </div>
    )
} 
export default Slick;