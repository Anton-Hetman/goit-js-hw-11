import axios from 'axios';
const MY_KEY = '37224475-2fbe6a97e47a663545bf2faa6';
const BASE_URL = 'https://pixabay.com/api/';
let pageNr = 1;
export async function fetchImages(value, pageNr) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${MY_KEY}&q=${value}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
