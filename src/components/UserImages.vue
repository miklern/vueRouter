<template>
  <div class="user-images">
    <div v-for="image in userImages" :key="image.id" class="user-images__image">
      <img :src="`${image.thumbnailUrl}`" alt />
      <div class="user-images__title">{{ image.title }}</div>
    </div>
  </div>
</template>

<script>
import { fetchPhotos } from "../services/photos";

export default {
  name: "UserImages",
  props: {
    imagesId: {
      type: Number,
    },
  },
  data() {
    return {
      userImages: [],
    };
  },
  async created() {
    await this.getUserImages();
  },
  methods: {
    async getUserImages() {
      const filters = {};

      if (this.imagesId !== null) {
        filters.albumId = this.imagesId;
      }
      console.log(filters.albumId);
      const userImages = await fetchPhotos(filters);
      if (userImages) {
        this.userImages = userImages;
        console.log(userImages);
      }
    },
  },
  watch: {
    async imagesId(newValue, oldValue) {
      if (newValue !== oldValue) {
        await this.getUserImages();
      }
    },
  },
};
</script>