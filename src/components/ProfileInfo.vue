<template>
  <div class="profile-info">
    <div class="user-ifno">
      <div
        class="user-ifno__block"
      >
        <div class="user-info__title">
          Info about: {{ usersInformation.name }}
        </div>
        <div class="user-info__item">
          <span>Username:</span>
          {{ usersInformation.username }}
        </div>
        <div class="user-info__item">
          <span>Email:</span>
          {{ usersInformation.email }}
        </div>
        <div class="user-info__item">
          <span>Street:</span>
          {{ usersInformation.address.street }}
        </div>
        <div class="user-info__item">
          <span>Suite:</span>
          {{ usersInformation.address.suite }}
        </div>
        <div class="user-info__item">
          <span>City:</span>
          {{ usersInformation.address.city }}
        </div>
        <div class="user-info__item">
          <span>Phone:</span>
          {{ usersInformation.phone }}
        </div>
        <div class="user-info__item">
          <span>Website:</span>
          {{ usersInformation.website }}
        </div>
      </div>
    </div>
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
            <div class="user-albums__label">{{ albums.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchOneUser } from "../services/users";
import { fetchOneAlbum } from "../services/albums";
export default {
  name: "ProfileInfo",
  props: {
    userId: {
      type: Number,
    },
  },
  data() {
    return {
      usersInformation: {},
      userAlbums: [],
    };
  },
  async created() {
    await this.getUserInfo();
    await this.getUserAlbum();
  },
  methods: {
    async getUserInfo() {
      const filters = {};
      if (this.userId !== null) {
        filters.id = this.userId;
      }
      const usersInformation = await fetchOneUser(filters);
      if (usersInformation) {
        this.usersInformation = usersInformation.shift();    
      }
    },
    async getUserAlbum() {
      const filters = {};
      if (this.userId !== null) {
        filters.userId = this.userId;
      }
      const userAlbums = await fetchOneAlbum(filters);
      if (userAlbums) {
        this.userAlbums = userAlbums;
      }
    },
  },
  watch: {
    async userId(newValue, oldValue) {
      if (newValue !== oldValue) {
        await this.getUserInfo();
        await this.getUserAlbum();
      }
    },
  },
};
</script>
