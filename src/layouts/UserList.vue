<template>
  <div class="user-list">
    <div class="user-list__body">
      <div
        v-for="userInlist in userList"
        :key="userInlist.id"
        @click="onUserIdSelect(userInlist.id)"
        :class="{ active: activeUserId === userInlist.id }"
        class="user-list__name"
      >
        {{ userInlist.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { fetchUserList } from "../services/users";
export default {
  name: "UserList",
  data() {
    return {
      userList: [],
      activeUserId: null,
    };
  },
  async created() {
    await this.getUserList();
    await this.activeUserIdInRoute();
  },
  methods: {
    async getUserList() {
      const userList = await fetchUserList();
      if (userList) {
        this.userList = userList;
      }
    },
    onUserIdSelect(id) {
        this.activeUserId = id;
        this.$router.push({ name: 'User', params: { id: id }}).catch(()=>{});
    },
    async activeUserIdInRoute() {
      if ( this.$route.params.id !== undefined ) {
        this.activeUserId = Number( this.$route.params.id ) ;
    }
      }
  },
  watch: {
    async '$route'() {
      if ( this.$route.params.id === undefined ) {
        this.activeUserId = null;
      }
      await this.activeUserIdInRoute();
    } 
  }
};
</script>
