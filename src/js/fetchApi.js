import axios from 'axios';

export default class FetchAPI {
  API_KEY = '53f2c47317a563cd2628c68ceb6a6673';

  constructor(searchInput) {
    this.searchText = '';
    this.searchString = `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.API_KEY}`;
    this.currentPage = 1;
  }

  // запит основної сторніки
  async mainPageFetch(numberPage = 1) {
    const response = await axios.get(this.searchString, {
      params: { page: numberPage },
    });
    console.dir(response);
    return response; // вуртає об'єкт де є масив фільмів
  }

  //  запит через пошук - не готовий
  async searchForNameFetch(text) {
    debugger;
    if (text === '') {
      return;
    }

    const response = await axios.get(this.searchString, {
      params: {
        // page: this.currentPage,
        query: text,
      },
    });

    console.dir(response);
    return response;
  }
}
