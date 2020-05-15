import React from 'react';
import Slick from '../Slider/Slider'
import {useSelector} from 'react-redux';

function HomePage(){
    const rubric = useSelector((state) => state.rubricList);
    return (
        Object.keys(rubric).map((key) => (
            <Slick name = {rubric[key].Name} genre = {rubric[key].List}/>
        )
    )
    )
}
export default HomePage;