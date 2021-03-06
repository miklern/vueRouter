import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com';

const SLUG = 'photos';

async function fetchGetPhotos(filters = {}) {

   try {
      const result = await axios.get(`${URL}/${SLUG}`, { params: filters });
      return result.data;
   } catch (e) {
      console.log({ ...e });
   }
}

export {
   fetchGetPhotos,
};
