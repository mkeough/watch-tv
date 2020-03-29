import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShowDetailsPage = (props) => {
  const showID = props.match.params.showId
  console.log(showID)

  const [details, setDetails] = useState([])
  const [summary, setSummary] = useState({})

  const getShowDetails = async () => {
    const detailsResp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showID}/credits?api_key=2a24adb4db0e1e8ed7467cfffd3ce76d&language=en-US&page=1`
    )
    setDetails(detailsResp.data.cast)
    console.log('details' + detailsResp)
  }

  const getShowSummary = async () => {
    console.log(showID)
    const summaryResp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showID}?api_key=2a24adb4db0e1e8ed7467cfffd3ce76d&language=en-US&page=1`
    )
    setSummary(summaryResp.data)
    console.log(summaryResp.data)
  }

  useEffect(() => {
    getShowDetails()
    getShowSummary()
  }, [])

  return (
    <>
      <section className="details">
        <h1>{summary.name}</h1>
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${summary.backdrop_path}`}
          alt="Movie Poster"
        />
        <p>{summary.overview}</p>
        <ul>
          <li>
            <p className="rating">Average Rating </p>
            <p>{summary.vote_average}</p>
          </li>
        </ul>
        <h2>Actors</h2>
        <ul>
          {details.map((actor) => {
            return <li className="actors">{actor.name}</li>
          })}
        </ul>
      </section>
    </>
  )
}
export default ShowDetailsPage
