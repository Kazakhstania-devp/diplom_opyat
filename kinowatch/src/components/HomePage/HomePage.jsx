import React from 'react';
import Slick from '../Slider/Slider'
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import { createSelector } from "reselect";



export const pageByRubricList = createSelector(
    (state) => state.rubricList,
    (rubricList) => (rubricName) => (id) => (
    ( rubricList.length !==0 && rubricList[rubricName].list.find((movie) => movie.id == id)) || null
    ),
);



function HomePage(){

    //Poster
    const poster = useSelector((state) => pageByRubricList(state));


    //Slider
    const rubric = useSelector((state) => state.rubricList);


    return (
        <div>
                <div className="main-poster">
                <div className="image-poster"></div>
        </div>
        <div>
            {Object.keys(rubric).map((key) => (
            <Slick name = {rubric[key].name} genre = {rubric[key].list}/>
            ))}
        </div>
        </div>
    )
}
export default HomePage;