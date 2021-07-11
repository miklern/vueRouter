import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com';

const SLUG = 'users';

async function fetchUserList() {
   try {
      const result = await axios.get(`${URL}/${SLUG}`);
      return result.data;
   } catch (e) {
      console.log({ ...e });
   }
}

async function fetchOneUser(id) {

   if (!id){
      return null;
    }
  
    try {
      const result = await axios.get(`${URL}/${SLUG}/${id}`);
      return result.data;
    } catch (e) {
      console.log({ ...e });
    }
}

export {
   fetchUserList,
   fetchOneUser,
};
