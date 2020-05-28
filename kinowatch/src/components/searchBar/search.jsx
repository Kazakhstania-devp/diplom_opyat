import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { createSelector } from "reselect";
import {Link, Route} from "react-router-dom";

import {ActionCreator} from "../../store/actions"
import { object } from 'prop-types';

  function Search(){

    const dispatch = useDispatch();
    const search = useSelector((state) => state.searchList);



    if (ActionCreator.findMovies && ActionCreator.findMovies != null) {
        return (
         <div>
           <form>
                <input
                onChange={e => dispatch(ActionCreator.findMovies(e.target.value))}
                />  
            </form>
            
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