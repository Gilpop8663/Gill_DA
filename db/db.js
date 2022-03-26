import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let RESPONSE_URL = API_URL;
  if (limit > 0) {
    RESPONSE_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    RESPONSE_URL += `&minimum_rating=${rating}`;
  }

  return fetch(RESPONSE_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
