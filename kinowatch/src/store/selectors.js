import Namespace from './reducers/name-space';
import {createSelector} from 'reselect';



export const findMovieSelector = createSelector(
    (state) => state.movieList,
    (movieList) => (filmName) => {
        console.log(filmName.length);
        var empty = [];
            if(filmName != "" && filmName.length >= 2){
                return movieList.filter((film) => film.title.toLowerCase().includes(filmName.toLowerCase())) 
            }
            return empty;
    }
);
