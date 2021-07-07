<template>
<div class="profile-info">
   <div class="user-ifno">
      <div
         v-for="userInformation in usersInformation"
         :key="userInformation.id"
         class="user-ifno__block"
      >
         <div class="user-info__title">Info about: {{ userInformation.name }}</div>
         <div class="user-info__item">
         <span>Username:</span>
         {{ userInformation.username }}
         </div>
         <div class="user-info__item">
         <span>Email:</span>
         {{ userInformation.email }}
         </div>
         <div class="user-info__item">
         <span>Street:</span>
         {{ userInformation.address.street }}
         </div>
         <div class="user-info__item">
         <span>Suite:</span>
         {{ userInformation.address.suite }}
         </div>
         <div class="user-info__item">
         <span>City:</span>
         {{ userInformation.address.city }}
         </div>
         <div class="user-info__item">
         <span>Phone:</span>
         {{ userInformation.phone }}
         </div>
         <div class="user-info__item">
         <span>Website:</span>
         {{ userInformation.website }}
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
      usersInformation: [],
      userAlbums: [],
    };
  },
  async created() {
    await this.getUsersList();
    await this.getUserAlbum();
  },
  methods: {
    async getUsersList() {
      const filters = {};

      if (this.userId !== null) {
        filters.id = this.userId;
      }

      const usersInformation = await fetchOneUser(filters);
      if (usersInformation) {
        this.usersInformation = usersInformation;
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
        await this.getUsersList();
        await this.getUserAlbum();
      }
    },
  },
};
</script>

