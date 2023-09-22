import React from "react";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MovieSection from "@/components/movie-section";

function HomeContainer() {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      <MovieSection
        title="Popular Movies"
        movies={Movies.results.slice(1, 7)}
      />
      <MovieSection
        title="Your Favourites"
        movies={Movies.results.slice(7,13)}
      />
    </div>
  );
}

export default HomeContainer;
