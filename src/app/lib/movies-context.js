"use client";
import { createContext, useContext, useEffect, useState } from "react";

const seedMovies = [
  {
    id: "wild-robot",
    title: "The Wild Robot",
    releaseDate: "18th October",
    releaseYear: 2024,
    poster: "/assets/images/the-wild-robot.jpg",
    rating: 0,
    review: ""
  },
  {
    id: "dune2",
    title: "Dune: Part Two",
    releaseDate: "1 March",
    releaseYear: 2024,
    poster: "/assets/images/dune2.jpg",
    rating: 0,
    review: ""
  },
  {
    id: "inside-out-2",
    title: "Inside Out 2",
    releaseDate: "14 June",
    releaseYear: 2024,
    poster: "/assets/images/inside-out-2.jpg",
    rating: 0,
    review: ""
  }
];

const MoviesContext = createContext(null);

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem("movies");
        if (raw) return JSON.parse(raw);
      } catch {}
    }
    return seedMovies;
  });

  useEffect(() => {
    try {
      localStorage.setItem("movies", JSON.stringify(movies));
    } catch {}
  }, [movies]);

  const rateMovie = (id, rating) =>
    setMovies(ms => ms.map(m => (m.id === id ? { ...m, rating } : m)));

  const reviewMovie = (id, review) =>
    setMovies(ms => ms.map(m => (m.id === id ? { ...m, review } : m)));

  const value = { movies, rateMovie, reviewMovie };
  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
}

export function useMovies() {
  const ctx = useContext(MoviesContext);
  if (!ctx) throw new Error("useMovies must be used inside MoviesProvider");
  return ctx;
}
