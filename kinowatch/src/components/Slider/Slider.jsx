import React from 'react';
import Slider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2
  };

function Slick (){
    return(
        <Slider {...settings}>
        <div>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
      </Slider>
    )
}
export default Slick;