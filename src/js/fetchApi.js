import axios from 'axios';

export default class FetchAPI {
  API_KEY = '53f2c47317a563cd2628c68ceb6a6673';

  constructor() {
    this.searchText = '';
    this.mainSearchString = `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.API_KEY}`;
    this.forNameSearchString = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}`;
    this.genresListSearchString = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.API_KEY}`;
    this.currentPage = 1;
  }

  // запит основної сторніки
  async mainPageRequest(numberPage = 1) {
    const response = await axios.get(this.mainSearchString, {
      params: { page: numberPage },
    });
    console.dir(response);
    return response;
  }

  //  запит через пошук
  async searchForName(text) {
    if (text === '') {
      return;
    }

    const response = await axios.get(this.userSearchString, {
      params: {
        page: this.currentPage,
        query: text,
        include_adult: false,
      },
    });

    console.dir(response);
    return response;
  }

  //  запит повної інфи по ID
  async searchForId(filmId) {
    const idSearchString = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${this.API_KEY}`;

    const response = await axios.get(idSearchString);

    console.dir(response);
    return response;
  }

  //  запит на список жанрів

  async getGenre(genreId) {
    const response = await axios.get(this.genresListSearchString); //`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.API_KEY}`
    const genre = response.data.genres.filter(({ id }) => {
      if (id === genreId) {
        return true;
      }
    });

    return genre[0].name;
  }
}
