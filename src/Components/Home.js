// app/page.js OR pages/index.js (depending on Next.js setup)
import MovieCard from "@/Components/MovieCard";

export default function Home() {
  return (
    <section>
      <h1>🎬 Movie List</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <MovieCard
          moviePoster="https://m.media-amazon.com/images/I/81218n6JFgL.jpg"
          movieName="Oppenheimer"
          movieRelease="21 July 2023"
          movieRating={4.7}
        />
        <MovieCard
          moviePoster="https://image.tmdb.org/t/p/original/wWJbBo5yjw22AIjE8isBFoiBI3S.jpg"
          movieName="The Godfather"
          movieRelease="24 March 1972"
          movieRating={4.9}
        />
        <MovieCard
          moviePoster="https://cdn.kinocheck.com/i/m2s0jjjwgk.jpg"
          movieName="Parasite"
          movieRelease="30 May 2019"
          movieRating={4.5}
        />
      </div>
    </section>
  );
}
