// components/MovieCard.js
import MovieRating from "./MovieRating";

function MovieCard({ moviePoster, movieName, movieRelease, movieRating }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8, width: 250 }}>
      <img src={moviePoster} alt={`${movieName} poster`} style={{ width: "100%", borderRadius: 6 }} />
      <h3>{movieName}</h3>
      <p>Released: {movieRelease}</p>
      <MovieRating rating={movieRating} />
    </div>
  );
}

export default MovieCard;
