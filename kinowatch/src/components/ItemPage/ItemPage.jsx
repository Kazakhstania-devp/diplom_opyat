import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import { createSelector } from "reselect";


export const pageByRubricList = createSelector(
    (state) => state.rubricList,
    (rubricList) => (rubricName) => (id) => (
     rubricList[rubricName].list.find((movie) => movie.id === id)
    ),
);


function ItemPage(props){

    const { name, id } = useParams();

    const movie = useSelector((state) => pageByRubricList(state)(name)(id));
    return(
        <div className="movie--title"></div>
    )
}
export default ItemPage;
