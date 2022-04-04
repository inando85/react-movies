import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { APIKey } from '../../config/key'

import { Container } from './styles'

function Details () {
  const { id } = useParams()

  const [movie, setMovie] = useState({})

  const image_path = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR`)
      .then(response => response.json())
      .then(data => {
        const { title, overview, poster_path } = data

        const movie = {
          id,
          title,
          overview,
          image: `${image_path}${poster_path}`,
        }
        setMovie(movie)
      })
  }, [id])

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.title}/>
        <div className="details">
          <h2>{ movie.title }</h2>
          <h3>Sinopse:</h3>
          <p>{ movie.overview }</p>
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Details;