import React from 'react';
import Slick from '../Slider/Slider'
import {useSelector} from 'react-redux';

function HomePage(){
    const rubric = useSelector((state) => state.rubricList);
    return (
        Object.keys(rubric).map((key) => (
            <Slick name = {rubric[key].name} genre = {rubric[key].list}/>
        )
    )
    )
}
export default HomePage;