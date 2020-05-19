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

        if (movie != null) {
            for(var key in movie){
            return (
                <div>
                    <div className="movie--title">{movie.title}</div>
                    <img src={movie.poster}/>
                </div>
            );
            }
          }

          return (
            <div>Lol</div>
          );
        }
    
export default ItemPage;
