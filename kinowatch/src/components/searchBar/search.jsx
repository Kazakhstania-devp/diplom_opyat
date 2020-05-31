import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { createSelector } from "reselect";
import {Link, Route} from "react-router-dom";
import {ActionCreator} from "../../store/actions"
import { object } from 'prop-types';

  function Search(){
    
    const dispatch = useDispatch();
    //Получение списка после поиска
    const search = useSelector((state) => state.searchList);
    
    if (ActionCreator.findMovies && ActionCreator.findMovies != null) {
        return (
         <div>
           <form>
             {/* Вызывает экшн на поиск фильма */}
                <input
                onChange={e => dispatch(ActionCreator.findMovies(e.target.value))}
                />  
            </form>
            {/* Разбиение найденных фильмов и их вывод */}
            <div>
              {search.map(item =>(
                <div>{item.title}</div>
              ))}
            </div>
        </div> 
        )   
    }
    return(
        <input />  
    );
  }
export default Search;