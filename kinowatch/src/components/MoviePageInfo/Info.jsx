import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import { createSelector } from "reselect";
import {Link, Route} from "react-router-dom";


function info(){

    const movie = useSelector((state) => pageByRubricList(state)(name)(id));

    if (movie.type = "TV Сериал"){
        return(
            <h4 className="movie--info--text">Оригинальное название: <h4 className="movie--info--text-2">{movie.metascore}</h4></h4>
            <h4 className="movie--info--text">Рейтинг: <h4 className="movie--info--text-2">{movie.rated}</h4></h4>
            <h4 className="movie--info--text">Дата выхода: <h4 className="movie--info--text-2">{movie.relesed}</h4></h4>
            <h4 className="movie--info--text">Длительность: <h4 className="movie--info--text-2">{movie.runtime}</h4></h4>
            <h4 className="movie--info--text">Жанры: <h4 className="movie--info--text-2">{movie.genre}</h4></h4>
            <h4 className="movie--info--text">Режиссер: <h4 className="movie--info--text-2">{movie.director}</h4></h4>
            <h4 className="movie--info--text">Страна: <h4 className="movie--info--text-2">{movie.country}</h4></h4>
            <h4 className="movie--info--text">Язык: <h4 className="movie--info--text-2">{movie.language}</h4></h4>
            <h4 className="movie--info--text">Тип: <h4 className="movie--info--text-2">{movie.type}</h4></h4>
        )
        }
    else{

    }
    


}
export default info;