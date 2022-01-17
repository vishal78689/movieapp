import React from 'react';
import "./NavStyle.css";
import img from "./images/img_nta.png";
import { Link } from 'react-router-dom';

const Moviecard = ({movie}) => {

    return (
      
            <div className="col-md-3 mb-5 contA mov">
        <Link className='link-sty' to={'/movie/' + movie.imdbID} style={{ textDecoration: 'none' }}>
          <img className="w-100 mb-2" 
          src={movie.Poster==='N/A'?img:movie.Poster } alt="Movie Cover" />
         <div className='.bottom-left'>
         <h5 className="card-title card-titStyle">
            {movie.Title} - {movie.Year}
          </h5>
         </div>
          </Link>
        </div>
         
    )
}

export default Moviecard;

