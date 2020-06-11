import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import { createSelector } from "reselect";
import  Play from '../../images/play.png';
import Add from '../../images/add.png'

export const pageByRubricList = createSelector(
    (state) => state.rubricList,
    (rubricList) => (rubricName) => (id) => (
    ( rubricList.length !==0 && rubricList[rubricName].list.find((movie) => movie.id == id)) || null
    ),
);


function ItemPage(props){

    const { name, id } = useParams();
    const movie = useSelector((state) => pageByRubricList(state)(name)(id));
 

        if (movie != null) {
            for(var key in movie){
            return (
                <div> 
                    
                    <div className="movie-page-poster">
                        
                        <img className="movie-page-poster-img" alt={movie.name} src={movie.poster}/>
                    </div>
                    <div className="movie-page-main">
                        <div className="movie-page-poster-mini image-flex">
                            <img className="movie-page-poster-mini-img" src={movie.poster}></img>
                        </div>
                        <div className="movie-page-poster-solid-shadow"></div>
                        <div className="movie-page-boxname">
                            <button className="movie-page-play">
                                <img src={Play} className="Button-poster-img-play"></img>
                                <h1 className="button-poster-text-play">PLAY</h1>
                            </button>
                            <button className="movie-page-add">
                                <img src={Add} className="Button-poster-img-add"></img>
                                <h1 className="button-poster-text-add">Add to me</h1>
                            </button>
                            <div className="movie--title">{movie.title}</div>
                            <div src={movie.discription}></div>
                            <div>

                            </div>
                        </div>
                        

                    </div>
                    
                </div>
            );
            }
          }
          return (
            <div>404</div>
          );
        }
    
export default ItemPage;
