import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com';

const SLUG = 'users';

async function fetchUsersNames() {
   try {
      const result = await axios.get(`${URL}/${SLUG}`);
      return result.data;
   } catch (e) {
      console.log({ ...e });
   }
}

async function fetchOneUser(filters = {}) {

   try {
      const result = await axios.get(`${URL}/${SLUG}`, { params: filters });
      return result.data;
   } catch (e) {
      console.log({ ...e });
   }
}

export {
   fetchUsersNames,
   fetchOneUser,
};
