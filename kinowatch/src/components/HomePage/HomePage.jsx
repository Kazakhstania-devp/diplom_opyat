import React from 'react';
import Slick from '../Slider/Slider'
function HomePage(){
    return (
        <div>
        <Slick name="Popular"/>
        <Slick name="Anime" genre="animeList"/>
        </div>
    )
}
export default HomePage;