<template>
  <div class="content">
    <UsersPhotos :albumsId="albumsId"/>
  </div>
</template>

<script>
import UsersPhotos from "../components/UsersPhotos";
export default {
  props: ['albumsId'],
  name: "Photos",
  components: {
    UsersPhotos,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
