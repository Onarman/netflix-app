import React from "react";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MovieSection from "@/components/movie-section";

function HomeContainer({
  trendMovies = [],
  trendTv = [],
  categories = [],
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie movie={trendMovies?.[0]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MovieSection
          title={
            categories.find(
              (category) => `${category.id}` === selectedCategory.id
            )?.name || ""
          }
          movies={selectedCategory.movies}
        />
      )}

      <MovieSection title="Trend Movies" movies={trendMovies.slice(1, 7)} />
      <MovieSection title="Trend Tv" movies={trendTv.slice(7, 13)} />
    </div>
  );
}

export default HomeContainer;
