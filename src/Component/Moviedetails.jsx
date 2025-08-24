import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
const Moviedetails = () => {
  const [data,setdata]=useState([]);
  const useparms=useParams();
  const getdata= async()=>{
    const res= await axios.get(`https://api.themoviedb.org/3/movie/${useparms.id}?api_key=3e06f8805ca95d2a2b03771643787367&language=ar`)
    setdata(res.data);

  }
useEffect(()=>{
getdata();



},[])


  return (<div>
    <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
            <div className="card-detalis  d-flex align-items-center ">
                <img
                    className="img-movie w-30"
                    src={`https://image.tmdb.org/t/p/w500/`+data.poster_path}
                    alt="non"
                />
                <div className="justify-content-center text-center  mx-auto">
                    <p className="card-text-details border-bottom"> Film Name:{data.original_title}
                    </p>
                    <p className="card-text-details border-bottom">
                      DATE:{data.release_date}
                    </p>
                    <p className="card-text-details border-bottom">
                      Number OF Voiting:{data.vote_count}
                    </p>
                    <p className="card-text-details border-bottom">
                      RATE:{data.vote_average}
                    </p>
                </div>
            </div>
        </Col>
    </Row>

    <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
            <div className="card-story  d-flex flex-column align-items-start">
                <div className="text-end p-4 ">
                    <p className="card-text-title border-bottom">Story</p>
                </div>
                <div className="text-end px-2">
                    <p className="card-text-story"></p>
                </div>
            </div>
        </Col>
    </Row>
    <Row className="justify-content-center">
        <Col
            md="10"
            xs="12"
            sm="12"
            className="mt-2 d-flex justify-content-center ">
            <Link to="/">
                <button
                    style={{ backgroundColor: "#b45b35", border: "none" }}
                    className="btn btn-primary mx-2">
                    Back to main page
                </button>
            </Link>
            <a href={data.homepage} >
                <button
                    style={{ backgroundColor: "#b45b35", border: "none" }}
                    className="btn btn-primary">
                    Watch the movie
                </button>
            </a>
        </Col>
    </Row>
</div>
  )
}

export default Moviedetails