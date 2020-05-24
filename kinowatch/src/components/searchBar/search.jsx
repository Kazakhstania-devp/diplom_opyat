import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { createSelector } from "reselect";
import {Link, Route} from "react-router-dom";


export const findMovie = createSelector(
    (state) => state.movieList,
    (movieList) => (filmName) => (
    (movieList.length !==0  && movieList.filter((film) => film.title.toLowerCase().includes(filmName.toLowerCase()))) || null)
);


  function Search(){

    const [name, setName] = useState('');

    const submitValue = (e) => {
        const movieDetails = {
            'Movie' : name,
        }
        e.preventDefault();
    }
    const film = useSelector((state) => findMovie(state)(name));
    console.log(film);
    
 


    if (film && film != null) {
        return (
         <div>
           <form>
                <input
                onChange={e => setName(e.target.value)}
                />  
            </form>
            {film.map(item =>(
                <div className="movie--title">{item.title}</div>
            ))}
        </div> 
        )   
    }
    return(
        <input onChange={e => setName(e.target.value)} />  
    );
  }
export default Search;