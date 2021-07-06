<template>
  <div id="app">
    <header class="header">
      <div class="header-nav">
        <router-link :to="{ name: 'Home' }">
          <div class="header-nav__home">
            Home page
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
}
</script>
<style src="./style.css"></style>
