import React from 'react';

import '../css/Movie.css'


const Movie = ({movieInfo}) => {
    return ( <>
        <section className='movie-all'>
            <img src={movieInfo.poster} alt="" className="movie-poster" />
            <div className="movie-text">
                <h3 className="movie-text-title">{movieInfo.title}</h3>
                <p className="movie-text-synopsis">{movieInfo.synopsis}</p>
            </div>
        </section>
    </> );
}
 
export default Movie;