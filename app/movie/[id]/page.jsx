import MovieContainer from "@/containers/movie";
import React from "react";
import Movies from "@/mocks/movies.json";
import { notFound } from "next/navigation";

function MoviePage({ params, searchParams }) {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );

  if (!movieDetail) {
    notFound();
  }
  if (searchParams?.error === "true") {
    console.log("error uctu");
    throw new Error("Error happened");
  }

  return (
    <div>
      {console.log(searchParams)}
      <MovieContainer movie={movieDetail} />
    </div>
  );
}

export default MoviePage;
