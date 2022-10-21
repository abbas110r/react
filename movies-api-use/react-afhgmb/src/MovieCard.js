import React from 'react';
import './MovieCard.css';
function MovieCard(props){
  return(
    <div className="card">
        <h3>{props.name}</h3>
        <p>{props.releaseDate}</p>
        <p>{props.description}</p>

    </div>
  ) 
}
export default MovieCard;