import FetchAPI from './js/fetchApi';

const refs = {
  text: document.querySelector('#searchText'),
  SearchBtn: document.querySelector('#searchBtn'),
};
const filmAPI = new FetchAPI(refs.searchText);

filmAPI.mainPageRequest();

filmAPI.mainPageRequest(3); // в параметрах передаэмо номер сторінки

function onSearch() {
  filmAPI.searchForName(refs.text.value.trim());
}

refs.SearchBtn.addEventListener('click', onSearch);

filmAPI.getGenre(16);
