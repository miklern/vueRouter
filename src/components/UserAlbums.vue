<template>
  <div class="user-albums">
    <div class="user-albums__block">
      <div class="user-albums__title">Albums</div>
      <div class="user-albums__items"> 
            <div
                v-for="albums in userAlbums"
                :key="albums.id"
                @click="$emit('onAlbumsSelect', albums.id)"
                class="user-albums__item"
                >
                  <router-link :to=" { name: 'Images', params: { albumId: albums.id }}">
                  <div class="user-albums__label">{{ albums.title }}</div>
                  </router-link>  
            </div>     
        </div>
      </div>
    </div>
</template>

<script>
import { fetchOneAlbum } from "../services/albums";

export default {
  name: "UserAlbums",
  props: {
    albumId: {
      type: Number,
    },
  },
  data() {
    return {
      userAlbums: [],
    };
  },
  async created() {
    await this.getUserAlbum();
  },
  methods: {
    async getUserAlbum() {
      const filters = {};

      if (this.albumId !== null) {
        filters.userId = this.albumId;
      }

      const userAlbums = await fetchOneAlbum(filters);
      if (userAlbums) {
        this.userAlbums = userAlbums;
      }
    },
  },
  watch: {
    async albumId(newValue, oldValue) {
      if (newValue !== oldValue) {
        await this.getUserAlbum();
      }
    },
  },
};
</script>