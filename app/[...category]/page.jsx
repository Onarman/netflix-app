import HomeContainer from "@/containers/home";
import React from "react";

const API_URL = "https://api.themoviedb.org/3";
const getSingleCategory = async (genreId) => {
  const res = await fetch(
    `${API_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genre=${genreId}`
  );

  return res.json();
};

const getCategories = async () => {
  const res = await fetch(
    `${API_URL}/genre/movie/list?api_key=${process.env.API_KEY}`
  );

  return res.json();
};

const getTrendMovies = async () => {
  const res = await fetch(
    `${API_URL}/trending/movie/day?api_key=${process.env.API_KEY}`
  );

  return res.json();
};

const getTrendTv = async () => {
  const res = await fetch(
    `${API_URL}/trending/tv/day?api_key=${process.env.API_KEY}`
  );
  return res.json();
};

async function HomePage({ params }) {
  let selectedCategory;

  const trendMoviesPromise = getTrendMovies();
  const trendTvPromise = getTrendTv();
  const categoryPromise = getCategories();

  const [
    { results: trendMovies },
    { results: trendTv },
    { genres: categories },
  ] = await Promise.all([trendMoviesPromise, trendTvPromise, categoryPromise]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  } else {
    selectedCategory = {
      id: "",
      movies: [],
    };
  }
  console.log(selectedCategory);

  return (
    <HomeContainer
      trendMovies={trendMovies}
      trendTv={trendTv}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
      categories={categories}
    />
  );
}

export default HomePage;
