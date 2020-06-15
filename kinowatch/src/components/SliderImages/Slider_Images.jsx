import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import {useSelector} from 'react-redux';
import {Link, Route} from "react-router-dom";
import Header from '../layout/Header'
import  '../../routes';

function Slick2 (props){
    return(
      <div className="block__inner slider__inner">
      <div className="slider__head">{props.name} </div>
      <Carousel 
      slidesPerPage={4}
      slidesPerScroll={1}
      offset={60}
      arrows
      infinite
      >
      {/* Создание элементов слайдера и ссылок на их страницы */}
      {props.images.map(item => (
            console.log(item)
      ))}
      </Carousel>
      </div>
    )
} 
export default Slick2;