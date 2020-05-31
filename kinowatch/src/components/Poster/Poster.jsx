import React from 'react';
import Slick from '../Slider/Slider'
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import { createSelector } from "reselect";



//Селектор для получения фильма в соответствии с полученным рандомным числом 
export const randomMovie = createSelector(
    (state) => state.rubricList,
    (rubricList) => (rubricName) => (id) => (
    ( rubricList.length !==0 && rubricList[rubricName].list.find((movie) => movie.id == id)) || null
    ),
);

//Получение рандомного числа
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


    
export function Poster(props){
  
    //Poster
    var rndFilm = 5;
    //Жанр постера
    var name = props.name;
    //Обращение к стору для получения всего списка фильмов
    const poster = useSelector((state) => state.rubricList[name]);

    //Если приходит из стора информация, то получает рандомное число в промежутке от 0 до конца полученного листа
    if(poster != null){
        rndFilm = getRandomInt(0, poster.list.length);
    }

    //Обращение к селектору для получения рандомного фильма
    const rndPoster = useSelector((state) => randomMovie(state)(name)(rndFilm));

    //Проверка наличия данных
    if (rndPoster != null) {
        for(var key in rndPoster){
        return (
        <div>
            <div className="main-poster">
                <img src={rndPoster.poster} className="image-poster"></img>
            </div>  
        </div>
        );
        }
      }
      return (
        <div>404</div>
      );


}