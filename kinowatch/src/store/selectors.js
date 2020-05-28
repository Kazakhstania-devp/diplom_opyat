import Namespace from './reducers/name-space';
import {createSelector} from 'reselect';



export const findMovieSelector = createSelector(
    (state) => state.movieList,
    (movieList) => (filmName) => {
        var empty = [];
            if(filmName != ""){
                return movieList.filter((film) => film.title.toLowerCase().includes(filmName.toLowerCase()))
            }
            return empty;
    }
);
