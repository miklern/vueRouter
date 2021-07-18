<template>
  <div id="app">
    <header class="header">
      <div class="header-nav">
        <router-link :to="{ name: 'Home' }">
          <div class="header-nav__home">
            Home page
          </div>
        </router-link>
        <router-link :to="{ name: 'Home' }">
          <div class="header-nav__user">
            User name
          </div>
          </router-link>
        <router-link :to="{ name: 'Home' }">
          <div class="header-nav__photos">
            User's photos
          </div>
        </router-link>
      </div>
    </header>
      <router-view /> 
    <footer class="footer">
      <div class="footer__text">Lorem ipsum dolor sit amet.</div>
    </footer>
  </div>
</template>

<script>

export default {
  props: ['albumsId'],
}
</script>
<style src="./style.css"></style>
