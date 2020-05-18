import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import { createSelector } from "reselect";


export const pageByRubricList = createSelector(
    (state) => state.rubricList.category,
    (category) => (number) => (
        Object.values(category).find((Id) => Id === number)
    ),
);


function ItemPage(props){

    const { Id, Name } = useParams();
    const {
    } = useSelector(pageByRubricList);
  

    return(
        <div className="movie--title"></div>
    )
}
export default ItemPage;
