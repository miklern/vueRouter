<template>
   <div class="content">
      <div class="users-list">
         <div v-for="user in names" :key="user.id" class="users-list__body">
            <router-link :to=" { name: 'Info', params: { id: user.id }}">
               <div         
                  @click="activeName = user.id"
                  :class="{active: activeName === user.id}"
                  class="users-list__name"
                  >{{ user.name }}
               </div>
            </router-link>
         </div>
      </div>
   </div>
</template>

<script>
import { fetchUsersNames } from "../services/users";

export default {
   name: "UsersList",
   data() {
      return {
      names: [],
      activeName: null,
      };
   },
   async created() {
      const names = await fetchUsersNames();
         if (names) {
         this.names = names;
      }
   },
};
</script>
