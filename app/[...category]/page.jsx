import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";
import React from "react";

function HomePage({ params }) {
  let selectedCategory;
  if (params.category.length > 0) {
    selectedCategory = {
      id: params?.category?.[0] ?? "",
      movies: Movies.results.slice(0, 7),
    };
  } else {
    selectedCategory = {
      id: "",
      movies: [],
    };
  }

  return (
    <HomeContainer
      selectedCategory={selectedCategory}
    />
  );
}

export default HomePage;
