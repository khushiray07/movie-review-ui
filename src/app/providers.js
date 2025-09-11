"use client";
import { MoviesProvider } from "./lib/movies-context";

export default function Providers({ children }) {
  return <MoviesProvider>{children}</MoviesProvider>;
}


