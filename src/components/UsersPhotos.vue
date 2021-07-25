<template>
   <div class="users-photos">
      <div v-for="photos in usersAlbum" :key="photos.id" class="users-photos__image">
      <img :src="`${photos.thumbnailUrl}`" alt />
      <div class="users-photos__title">{{ photos.title }}</div>
      </div>
   </div>
</template>

<script>
import { fetchGetPhotos } from "../services/photos";
export default {
   name: "UsersPhotos",
   props: {
      albumsId: {
         type: Number,
      },
   },
   data() {
      return {
         usersAlbum: [],
      };
   },
   async created() {
      await this.getUsersPhotos();
   },
   methods: {
   async getUsersPhotos() {
      const filters = {};
      if (this.albumsId !== null) {
         filters.albumId = this.albumsId;
      }
      const usersPhotos = await fetchGetPhotos(filters);
      if (usersPhotos) {
         this.usersAlbum = usersPhotos;
      }
      },
   },
   watch: {
      async albumsId(newValue, oldValue) {
      if (newValue !== oldValue) {
            await this.getUsersPhotos();
         }
      },
   },
};
</script>