import React from 'react'
import { Router, Link, Route, Switch } from 'react-router-dom'

const Show = (props) => {
  const { id, name, image } = props
  return (
    <>
      <li key={id}>
        <section className="show">
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${image}`}
            alt={name}
          />
          <p>
            <Link to={`/tv/${id}`}>{name}</Link>
          </p>
        </section>
      </li>
    </>
  )
}

export default Show
