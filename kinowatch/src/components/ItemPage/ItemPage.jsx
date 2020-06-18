import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import { createSelector } from "reselect";
import Play from '../../images/play.png';
import Add from '../../images/add.png'
import Carousel from '@brainhubeu/react-carousel';
import {Link, Route} from "react-router-dom";
import Slick from '../Slider/Slider'
import ReactPlayer from 'react-player'

// Вывод необходимого фильма
export const pageByRubricList = createSelector(
    (state) => state.rubricList,
    (rubricList) => (rubricName) => (id) => (
    ( rubricList.length !==0 && rubricList[rubricName].list.find((movie) => movie.id == id)) || null
    ),
);


function ItemPage(props){

    // Создание констант для вывода информации *
    const rubric = useSelector((state) => state.rubricList);
    const { name, id } = useParams();
    const movie = useSelector((state) => pageByRubricList(state)(name)(id));
 
    
        // Вывод на страницу фильма информации из файла rubric.json
        if (movie != null) {
            for(var key in movie){
                
            return (
                <div className="MainPage"> 
                    {/* Большой постер на странице */}
                    <div className="movie-page-poster"> 
                        {/* Изображение постера */}
                        <ReactPlayer>url={movie.trailer}</ReactPlayer>
                        <img className="movie-page-poster-img" alt={movie.name} src={movie.mainposter}/>
                    </div>
                    {/* Основная страница */}
                    <div className="movie-page-main">
                        {/* Маленький постер */}
                        <div className="movie-page-poster-mini">
                            {/* Изображение маленького постера */}
                            <img className="movie-page-poster-mini-img" src={movie.miniposter}></img>
                        </div>
                        {/* Затемнение фона большого постера */}
                        <div className="movie-page-poster-solid-shadow"></div>
                        {/* Маленькая полоса в ширину на всю страницу для отображения названия и кнопок */}
                        <div className="movie-page-boxname">
                            {/* Кнока "Play" */}
                            <a href={movie.ivi}><button className="movie-page-play"> 
                                {/* Иконка в кнопке */}
                                <img src={Play} className="Button-poster-img-play"></img>
                                {/* Текст в кнопке */}
                                <h1 className="button-poster-text-play">PLAY</h1>
                            </button>
                            </a>
                            {/* Кнопка "Add" */}
                            <button className="movie-page-add">
                                {/* Иконка в кнопке */}
                                <img src={Add} className="Button-poster-img-add"></img>
                                {/* Текст в кнопке */}
                                <h1 className="button-poster-text-add">Add to me</h1>
                            </button>
                            {/* Название фильма */}
                            <div className="movie--title">{movie.title}</div>
                        </div>
                        {/* Инфомрация о фильме на странице */}
                        <div className="movie-page-info">
                            {/* Подробности о фильме */}
                            <div className="movie--info">
                                {/* Тут и так все понятно */}
                                <div className="movie--info--text">Оригинальное название: <div className="movie--info--text-2">{movie.metascore}</div></div>
                                <div className="movie--info--text">Рейтинг: <div className="movie--info--text-2">{movie.rated}</div></div>
                                <div className="movie--info--text">Дата выхода: <div className="movie--info--text-2">{movie.relesed}</div></div>
                                <div className="movie--info--text">Длительность: <div className="movie--info--text-2">{movie.runtime}</div></div>
                                <div className="movie--info--text">Жанры: <div className="movie--info--text-2">{movie.genre}</div></div>
                                <div className="movie--info--text">Режиссер: <div className="movie--info--text-2">{movie.director}</div></div>
                                <div className="movie--info--text">Страна: <div className="movie--info--text-2">{movie.country}</div></div>
                                <div className="movie--info--text">Язык: <div className="movie--info--text-2">{movie.language}</div></div>
                                <div className="movie--info--text">Тип: <div className="movie--info--text-2">{movie.type}</div></div>
                            </div>
                            {/* Описание фильма */}
                            <div className="movie--description">
                                {/* Слово описание */}
                                <h2 className="movie--description-name">Описание</h2>
                                {/* Само описание */}
                                <div className="movie--description-next">{movie.plot}</div>
                            </div>
                        </div>
                        <div>
                            {/* Слайдер для отображения изображений */}
                            <div className="movie-slider">
                            <Carousel 
                            slidesPerPage={1}
                            slidesPerScroll={1}
                            offset={0}
                            arrows
                            dots
                            draggable={false}
                            infinite
                            itemWidth={1500}
                            >
                            {/* Создание элементов слайдера и ссылок на их страницы */}
                            {movie.images.map(item => (
                            <div className="movie-slider-block" >
                            <img className="movie-slider-img" src={item}></img>
                            </div>
                            ))}
                            </Carousel>
                            </div>
                        </div>
                        <div className="movie-page-player">
                            <div id="yohoho" data-title="Тайна Коко"></div>
                            <script src="//yohoho.cc/yo.js"></script>
                        </div>
                        <div className="footer">
                            <div>
                                <h1>Как жизнь?</h1>
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
