const API_KEY="4e6bdde5a9d0ef6611d12d3fb13d2e73";

const requests={
  fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals:`discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedayMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMoives:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;