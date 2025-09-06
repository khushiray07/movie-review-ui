"use client";

import MovieCard from "../Components/MovieCard";
import "../app/globals.css";

export default function Page() {
  const movies = [
    {
      name: "Mad Max: Fury Road",
      releaseDate: "15 May",
      releaseYear: 2015,
      poster: "/assets/images/mad-max.jpg",
    },
    {
      name: "Inception",
      releaseDate: "16 July",
      releaseYear: 2010,
      poster: "/assets/images/inception.jpg",
    },
    {
      name: "3 Idiots",
      releaseDate: "7 Nov",
      releaseYear: 2009,
      poster: "/assets/images/idiots.jpg",
    },
  ];

  return (
    <section className="page">
      <h1>🎥 Movie Review App</h1>
      <div className="movie-grid">
        {movies.map((m) => (
          <MovieCard key={m.name} movie={m} />
        ))}
      </div>
    </section>
  );
}
