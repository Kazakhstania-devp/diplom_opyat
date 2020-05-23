import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { createSelector } from "reselect";

let regex1 = /\w/gi;

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
    
 


    return(
        <div>
            <form>
                <input
                onChange={e => setName(e.target.value)}
                />  
                <button onClick={submitValue}>Search</button>
            </form>
        </div>
    )
}
export default Search;