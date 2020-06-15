import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import { createSelector } from "reselect";
import Play from '../../images/play.png';
import Add from '../../images/add.png'
import Carousel from '@brainhubeu/react-carousel';
import {Link, Route} from "react-router-dom";
import Slick from '../Slider/Slider'

export const pageByRubricList = createSelector(
    (state) => state.rubricList,
    (rubricList) => (rubricName) => (id) => (
    ( rubricList.length !==0 && rubricList[rubricName].list.find((movie) => movie.id == id)) || null
    ),
);


function ItemPage(props){

 
    const rubric = useSelector((state) => state.rubricList);
    const { name, id } = useParams();
    const movie = useSelector((state) => pageByRubricList(state)(name)(id));
 

        if (movie != null) {
            for(var key in movie){
               
            return (
                <div> 
                    <div className="movie-page-poster"> 
                        <img className="movie-page-poster-img" alt={movie.name} src={movie.poster}/>
                    </div>
                    <div className="movie-page-main">
                        <div className="movie-page-poster-mini">
                            <img className="movie-page-poster-mini-img" src={movie.icons}></img>
                        </div>
                        <div className="movie-page-poster-solid-shadow"></div>
                        <div className="movie-page-boxname">
                            <button className="movie-page-play">
                                <img src={Play} className="Button-poster-img-play"></img>
                                <h1 className="button-poster-text-play">PLAY</h1>
                            </button>
                            <button className="movie-page-add">
                                <img src={Add} className="Button-poster-img-add"></img>
                                <h1 className="button-poster-text-add">Add to me</h1>
                            </button>
                            <div className="movie--title">{movie.title}</div>
                        </div>
                        <div className="movie-page-info">
                            <div className="movie--info">
                                <h4 className="movie--info--text">Оригинальное название: <h4 className="movie--info--text-2">{movie.metascore}</h4></h4>
                                <h4 className="movie--info--text">Рейтинг: <h4 className="movie--info--text-2">{movie.rated}</h4></h4>
                                <h4 className="movie--info--text">Дата выхода: <h4 className="movie--info--text-2">{movie.relesed}</h4></h4>
                                <h4 className="movie--info--text">Длительность: <h4 className="movie--info--text-2">{movie.runtime}</h4></h4>
                                <h4 className="movie--info--text">Жанры: <h4 className="movie--info--text-2">{movie.genre}</h4></h4>
                                <h4 className="movie--info--text">Режиссер: <h4 className="movie--info--text-2">{movie.director}</h4></h4>
                                <h4 className="movie--info--text">Страна: <h4 className="movie--info--text-2">{movie.country}</h4></h4>
                                <h4 className="movie--info--text">Язык: <h4 className="movie--info--text-2">{movie.language}</h4></h4>
                                <h4 className="movie--info--text">Тип: <h4 className="movie--info--text-2">{movie.type}</h4></h4>
                            </div>
                            <div className="movie--description">
                                <h2 className="movie--description-name">Описание</h2>
                                <div className="movie--description-next">{movie.plot}</div>
                            </div>
                        </div>
                        <div>
                            <div className="movie-slider">
                            <Carousel 
                            slidesPerPage={1}
                            slidesPerScroll={1}
                            offset={70}
                            arrows
                            infinite
                            itemWidth={1500}
                            >
                                {/* Создание элементов слайдера и ссылок на их страницы */}
                                {movie.images.map(item =>(
                                        <img className="movie-slider-img" src={item}></img>
                                    ))};
                            </Carousel>
                            </div>
                        </div>
                    </div>
                    
                </div>
            );
            }
          }
          return (
            <div>404</div>
          );
        }
    
export default ItemPage;
