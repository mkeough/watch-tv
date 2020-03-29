import React, { useState, useEffect } from 'react'
import Show from '../components/Show'
import axios from 'axios'
import { Router, Link, Route, Switch } from 'react-router-dom'

const HomePage = () => {
  const [tvShows, setTvShows] = useState([])
  const [featured, setFeatured] = useState([])

  const getAllShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=2a24adb4db0e1e8ed7467cfffd3ce76d&language=en-US&page=1'
    )
    setTvShows(resp.data.results)
    const random = Math.floor(Math.random() * 20)
    setFeatured(resp.data.results[random])
  }
  useEffect(() => {
    getAllShows()
  }, [])
  return (
    <>
      <section className="home">
        <h1>Shows to Watch While Quarantined</h1>
        <section className="featured">
          <h2>Todays Featured Show</h2>
          <li>
            <img
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${featured.poster_path}`}
              alt={featured.name}
            />
            <p>{featured.overview}</p>
            <Link to={`/tv/${featured.id}`}>{featured.name}</Link>
          </li>
        </section>

        <h3>The Rest</h3>
        <section className="rest">
          <ul>
            {tvShows.map((show) => {
              return (
                <Show
                  key={show.id}
                  id={show.id}
                  name={show.name}
                  image={show.poster_path}
                />
              )
            })}
          </ul>
        </section>
      </section>
    </>
  )
}

export default HomePage
