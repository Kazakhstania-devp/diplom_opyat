import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { createSelector } from "reselect";
import {Link, Route} from "react-router-dom";

import {ActionCreator} from "../../store/actions"

  function Search(){

    const dispatch = useDispatch();



    if (ActionCreator.findMovies && ActionCreator.findMovies != null) {
        return (
         <div>
           <form>
                <input
                onChange={e => dispatch(ActionCreator.findMovies(e.target.value))}
                />  
            </form>

        </div> 
        )   
    }
    return(
        <input />  
    );
  }
export default Search;