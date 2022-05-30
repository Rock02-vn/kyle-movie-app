const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '655b52a5dc0b4da2240cb13991496847',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;