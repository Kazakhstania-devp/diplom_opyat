import React from 'react';
import Slick from '../Slider/Slider'
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import { createSelector } from "reselect";
import {Poster} from "../Poster/Poster";

function HomePage(){
  
    //Селектор для получения фильмов в слайдер
    const rubric = useSelector((state) => state.rubricList);

    
    return(
        <div>
            <Poster name="movies"></Poster>
             <div>
            {Object.keys(rubric).map((key) => (
                <Slick name = {rubric[key].name} genre = {rubric[key].list}/>
            ))}
            </div>
        </div>
    )
    
    
    }
export default HomePage;