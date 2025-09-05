"use client"; 

import { useState } from "react";
import AddRating from "../components/AddRating";
import MovieRating from "../components/MovieRating";

export default function Page() {
  const [rating, setRating] = useState(0);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1> Movie Rating App</h1>
      <MovieRating rating={rating} />
      <AddRating current={rating} onChange={setRating} />
    </main>
  );
}
