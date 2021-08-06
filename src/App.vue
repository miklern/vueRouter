<template>
  <div id="app">
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
    <main class="main"> 
      <component :is="layouts" />
      <router-view />
    </main>
    <footer class="footer">
      <div class="footer__text">Lorem ipsum dolor sit amet.</div>
    </footer>
  </div>
</template>

<script>
import UserList from "./layouts/UserList"
export default {
  components: {
    UserList,
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
    layouts() {
      return this.$route.meta.layout
    }
  }
}
</script>
<style src="./style.css"></style>
