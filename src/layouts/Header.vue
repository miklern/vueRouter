<template>
   <header class="header">
      <div class="header-nav">
         <router-link :to="{ name: 'Home'}">
            <div class="header-nav__home">
            Home page
            </div>
         </router-link>
         <router-link :to="{ name: 'User' }">
            <div v-if="$route.params.id !== undefined" class="header-nav__user">
            User name: {{  $route.params.id }}
            </div>
         </router-link>
            <div v-if="$route.params.albumsId !== undefined" class="header-nav__photos">
            User's album: {{ $route.params.albumsId }}
            </div>
      </div>
   </header>
</template>
      
<script>
export default {
   name: "Header",
   components: {
   },
   data() {
      return {
      };
   },
   methods: {
   },
};
</script>