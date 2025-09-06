export default function Home() {
  const moviePoster = "/assets/images/mad-max.jpg";
  const movieName = "Mad Max: Fury Road";
  const releaseDate = "15 May";
  const releaseYear = 2015;
  const rating = 5;
  const handlingAddRating = (movie) => {
    alert("Rating Added for " + movie + " 🥳");
  };
  return (
    <section className="min-h-screen mx-auto flex flex-col items-center mt-10">
      <div className="card">
        <div className="card-poster">
          <img src={moviePoster} alt="Movie Poster" />
        </div>
        <div className="card-details">
          <p>Rating: {rating}</p>
          <p className="card-title">{movieName}</p>
          <div className="card-release-year">
            <p>{releaseDate}</p>
            <p className="release-year">({releaseYear})</p>
          </div>
        </div>
      </div>
      {/* Button to add rating */}
      <button className="add-rating-button" onClick={() => handlingAddRating(movieName)}>
        Add Rating
      </button>
    </section>
  );
}