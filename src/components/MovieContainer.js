import React,  { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useParams, } from 'react-router-dom';
const MovieContainer = () => {
    const { id } = useParams();
    console.log(id);
    const[movie,setMovie]=useState([]);
    const fetch=async()=>{
 const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=ef3ac6ad`);
    // console.log(response.data);
    setMovie(response.data);
    console.log(movie.Title);
}
    useEffect(() => {
     fetch();
    }, [])
    
    return (
      <div className="container">
      
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-light my-5 text-dark">
            <div className="col-md-12">
              <Link to="/" className="btn btn-default text-dark">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}



export default MovieContainer
