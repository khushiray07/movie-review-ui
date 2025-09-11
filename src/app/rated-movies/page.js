// import React from 'react'
// const RatedMoviesPage = () => {
//   return (
//     <h1 className='text-xl text-center pt-10'>
//       Rated Movies
//     </h1>
//   )
// }
// export default RatedMoviesPage

"use client"
import React, { useState, useEffect } from "react"
import MovieRating from "@/Components/MovieRating"

const MoviePage = () => {
  const moviePoster = "/assets/images/the-wild-robot.jpg"
  const movieName = "The Wild Robot"
  const releaseDate = "18th October"
  const releaseYear = 2024

  const [rating, setRating] = useState(0)
  const [isRatingAdded, setIsRatingAdded] = useState(false)

  const handlingAddRating = (newRating) => {
    setRating(newRating)
    setIsRatingAdded(true)
  }

  // 👇 Side Effect - hide notification after 5 sec
  useEffect(() => {
    if (!isRatingAdded) return

    const timer = setTimeout(() => {
      setIsRatingAdded(false)
    }, 5000)

    // cleanup when component unmounts or re-runs
    return () => clearTimeout(timer)
  }, [isRatingAdded])

  return (
    <section className="min-h-screen mx-auto flex flex-col items-center justify-center pt-10 relative">
      {/* popup */}
      {isRatingAdded && (
        <div className="notification-popup fixed top-5 bg-green-500 text-white px-4 py-2 rounded">
          <p>Rating Added 🥳</p>
        </div>
      )}

      <div className="card shadow-lg rounded p-4">
        <div className="card-poster">
          <img src={moviePoster} alt="Movie Poster" width={200} />
        </div>
        <div className="card-details text-center mt-4">
          <MovieRating rating={rating} />
          <p className="card-title font-bold text-lg">{movieName}</p>
          <div className="card-release-year flex gap-2 justify-center text-gray-600">
            <p>{releaseDate}</p>
            <p className="release-year">({releaseYear})</p>
          </div>
        </div>
      </div>

      {/* Rating Panel */}
      <section className="give-rating mt-6">
        <h3 className="font-semibold">Rate The Movie</h3>
        <div className="btn-group flex gap-2 mt-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => handlingAddRating(num)}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {num}
            </button>
          ))}
        </div>
      </section>
    </section>
  )
}

export default MoviePage
