import Namespace from './reducers/name-space';
import {createSelector} from 'reselect';



export const findMovieSelector = createSelector(
    (state) => state.movieList,
    (movieList) => (filmName) => (
    (movieList.length !==0  && movieList.filter((film) => film.title.toLowerCase().includes(filmName.toLowerCase()))) || null)
);
