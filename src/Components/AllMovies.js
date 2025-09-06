"use client";

export default function AllMovies({ movies, addRating }) {
  if (movies.length === 0) {
    return <p>No movies left to rate 🎉</p>;
  }

  return (
    <div>
      <h2>🎬 All Movies</h2>
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <p>{movie.name}</p>
          <input
            type="number"
            min="1"
            max="5"
            placeholder="Enter rating (1-5)"
            onChange={(e) => movie.tempRating = e.target.value}
          />
          <button onClick={() => addRating(movie.id, movie.tempRating)}>
            Add Rating
          </button>
        </div>
      ))}
    </div>
  );
}
