const MovieCard = () => {
  const movie = {
    poster: "https://m.media-amazon.com/images/I/81218n6JFgL.jpg",
    name: "Oppenheimer",
    releaseDate: "21 July 2023",
    rating: "9/10",
  };
return (
    <div style={styles.card}>
      <img src={movie.poster} alt={movie.name} style={styles.poster} />
      <h2>{movie.name}</h2>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};
const styles = {
  card: {
    border: "10px solid #FFF",
    borderRadius: "10px",
    padding: "10px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0px 10px 6px rgba(0,0,0,0.1)",
    margin: "20px auto",
  },
  poster: {
    width: "100%",
    borderRadius: "10px",
  },
};


export default MovieCard;
