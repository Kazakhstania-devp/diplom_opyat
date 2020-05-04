import React from 'react';
import Slider from "react-slick";
import {useSelector} from 'react-redux';
var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2
  };

function Slick (){
  const movies = useSelector((state) => state.moviesList);
  console.log(movies);
    return(
        <Slider {...settings}>
        <div>
        <h1>Home</h1>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <h1>Home</h1>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <h1>Home</h1>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <h1>Home</h1>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <h1>Home</h1>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <h1>Home</h1>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <h1>Home</h1>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <h1>Home</h1>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <h1>Home</h1>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <h1>Home</h1>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <h1>Home</h1>
        <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
        <div>
        <h1>Home</h1>
            <img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"></img>
        </div>
      </Slider>
    )
}
export default Slick;