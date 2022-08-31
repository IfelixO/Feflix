import React from 'react';
import { useState } from 'react'
import axios from 'axios';

import {API_KEY, BASE_URL } from '../api.js'

import Header from './assets/components/Header';
import Button from './assets/components/Button';
import Description from './assets/components/Description';
import Movie from './assets/components/Movie';

import './App.css'

import code from './assets/img/code.png'


function App() {

  const [poster, setPoster] = useState ('')
  const [title, setTitle] = useState ('')
  const [synopsis, SetSynopsis] = useState ('')
  const [movieCod, SetMovieCod] = useState ('')

  const [movieVisibity, setMovieVisibity] = useState(false)

  var movieInfo = {
    poster: poster,
    title: title,
    synopsis: synopsis,
  }

  function generateCod () {
    let num = ''

    for (let i =0; i<3; i++){
      num += Math.floor(Math.random() * 9)
    }

    let cod = `${num}?`

    handleShuffle(cod)
  }

  
  const handleShuffle = (cod) => {

    axios.get (BASE_URL + cod + API_KEY).then ((res) => {
      console.log(res.data)

      setTitle(res.data.title)
      SetSynopsis(res.data.overview)
      setPoster(`https://image.tmdb.org/t/p/w200${res.data.poster_path}`)
      
      setMovieVisibity(true)
    }).catch((err) => {
      console.log(err)
      setTitle("It's not time to watch a movie!")
      SetSynopsis("Let's code baby")
      setPoster(code)

      setMovieVisibity(true)
    })
  }


  return (
    <>
      <main className='all'>
        <section className='header'><Header/></section>
        {movieVisibity ? (<section className="movie"><Movie movieInfo={movieInfo}/></section>):null}
        <section className="button"><Button generateCod={generateCod}/></section>
        <section className="description"><Description/></section>
      </main>
          </>
  )
}

export default App
