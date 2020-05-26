import React from 'react';
import Slick from '../Slider/Slider'
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import { createSelector } from "reselect";




export const randomMovie = createSelector(
    (state) => state.rubricList,
    (rubricList) => (rubricName) => (id) => (
    ( rubricList.length !==0 && rubricList[rubricName].list.find((movie) => movie.id == id)) || null
    ),
);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function HomePage(){
    //Poster
    var rndFilm = 5;
    var name = "movies";
    const poster = useSelector((state) => state.rubricList[name]);
    if(poster != null){
        rndFilm = getRandomInt(0, poster.list.length);
    }

    const rndPoster = useSelector((state) => randomMovie(state)(name)(rndFilm));
  
    //Slider
    const rubric = useSelector((state) => state.rubricList);

    

    if (rndPoster != null) {
        for(var key in rndPoster){
        return (
            
        <div>
            <div className="main-poster">
                <img src={rndPoster.poster} className="image-poster"></img>
            </div>
            <div>
            {Object.keys(rubric).map((key) => (
                <Slick name = {rubric[key].name} genre = {rubric[key].list}/>
            ))}
            </div>
        </div>
        );
        }
      }
      return (
        <div>404</div>
      );
    }
export default HomePage;