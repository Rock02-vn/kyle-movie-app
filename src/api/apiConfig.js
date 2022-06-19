const apiConfig = {
  baseUrl: process.env.REACT_APP_TMB_BASE_URL,
  apiKey: process.env.REACT_APP_TMB_API_KEY,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;