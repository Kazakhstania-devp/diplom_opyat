import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import { createSelector } from "reselect";


export const pageByRubricList = createSelector(
    (state) => state.rubricList,
    (rubricList) => (rubricName) => (id) => (
    ( rubricList.length !==0 && rubricList[rubricName].list.find((movie) => movie.id == id)) || null
    ),
);


function ItemPage(props){

    const { name, id } = useParams();
    const movie = useSelector((state) => pageByRubricList(state)(name)(id));

    console.log(movie);

    return (
        <div>
            {movie && movie.map(item =>(
                <div>{movie.title}</div>
            )
            )}
        </div>
    )
}
export default ItemPage;
