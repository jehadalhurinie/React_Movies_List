import React from 'react'
import { Row, Card, Col } from "react-bootstrap";
import CardMovie from './CardMovie';
import AdvancedExample from './pagination';
const MovieList = ({movie,pageChange}) => {
  return (
 <Row className='mt-3'>
{movie.length>=1?(
movie.map((item)=>{
return(<CardMovie  key={item.id} movies={item}/>
)


})


):(<h2>No Movies</h2>)}
  <AdvancedExample pageChange={pageChange}  />
 </Row>
 
  )
}

export default MovieList