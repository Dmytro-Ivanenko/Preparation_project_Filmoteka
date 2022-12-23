import FetchAPI from './js/fetchApi';

const refs = {
  text: document.querySelector('#searchText'),
  SearchBtn: document.querySelector('#searchBtn'),
};
const filmAPI = new FetchAPI(refs.searchText);

filmAPI.mainPageFetch();

filmAPI.mainPageFetch(3);

function onSearch() {
  console.dir(refs.text);
  filmAPI.searchForNameFetch(refs.text.value.trim());
}

refs.SearchBtn.addEventListener('click', onSearch);
