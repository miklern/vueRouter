<template>
<div class="wrapper">
  <Header>
  </Header>
  <main class="main">
    <div class="content">
      <UsersPhotos :albumsId="albumsId"/>
    </div>
  </main>
  <Footer>
  </Footer>
</div>
</template>

<script>
import UsersPhotos from "../components/UsersPhotos";
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
export default {
  props: ['albumsId'],
  name: "Photos",
  components: {
    UsersPhotos,
    Header,
    Footer,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
