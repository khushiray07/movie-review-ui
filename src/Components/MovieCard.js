"use client";

import { useState } from "react";

export default function MovieCard({ movie }) {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    alert(`You rated ${movie.name} ⭐ ${value}`);
  };

  const getMessage = () => {
    if (rating === 0) return "Add your Rating";
    if (rating <= 1) return "Bad Movie 😟";
    if (rating <= 2) return "Decent Movie 😐";
    if (rating <= 4) return "Good Movie 🤗";
    return "Great Movie 🥳";
  };

  return (
    <div className="movie-card">
      <div className="card-poster">
        <img
          src={movie.poster}
          alt={movie.name}
          loading="lazy"
          onError={(e) => {
            // fallback (put one in public or assets/images)
            e.currentTarget.src = "/assets/images/movieLoader.svg";
          }}
        />
      </div>

      <div className="card-details">
        <p className="message">{getMessage()}</p>
        <h2>{movie.name}</h2>
        <p className="release">
          {movie.releaseDate} ({movie.releaseYear})
        </p>

        <div className="rating-buttons">
          <p>Rate The Movie</p>
          {[1,2,3,4,5].map((n) => (
            <button
              key={n}
              className={rating === n ? "active" : ""}
              onClick={() => handleRating(n)}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
