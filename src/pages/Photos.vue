<template>
  <div class="content">
    <UsersPhotos :albumId="albumsId"/>
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
      // albumsId: this.route.params.albumsId,
    };
  },
  methods: {
  },
};
</script>
