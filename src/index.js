import { onFormSubmit, onLoadMoreInfo } from './js/formSubmit';
import { refs } from './js/refs';

refs.btnLoadMore.style.display = 'none';
refs.form.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreInfo);
