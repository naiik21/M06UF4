import React from "react";
import './styles/MovieCard.css'

function Card({ imageUrl, title }) {

    return (<div className="movie-card">
        <img src={imageUrl} alt={title} />
        <h6>{title}</h6>
    </div>)
}

export default Card;