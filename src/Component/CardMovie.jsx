import React from 'react'
import { Container, Row,Col,} from 'react-bootstrap'
import Photo from '../imges/man.jpeg'
import { Link } from 'react-router-dom'
const CardMovie = ({movies}) => {
  return (
    
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${movies.id}`}>
        <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500/`+movies.poster_path} className='card__image ' alt='hu'/>
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p> {movies.original_title}</p>
              <p>{movies.release_date}</p>
              <p>{movies.vote_count}</p>
              <p>{movies.vote_average}</p>
            </div>
          </div>
        </div>
        </Link>
    </Col >
    
    
   
  )
}

export default CardMovie