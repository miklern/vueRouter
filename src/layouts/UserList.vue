<template>
  <main class="main"> 
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

      <slot/>

  </main>
</template>

<script>
import { fetchUserList } from "../services/users";
export default {
  name: "UserList",
  data() {
    return {
      userList: [],
      activeUserId: Number( this.$route.params.id ),
    };
  },
  async created() {
    await this.getUserList();
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
      // this.$emit('onUserIdSelect', id);
      this.$router.push({ name: 'User', params: { id: id }}).catch(()=>{});
    },
      async activeUserIdInRoute() {
        if ( this.$route.params.id !== undefined ) {
          this.activeUserId = Number( this.$route.params.id ) ;
      }
    }
  },
  watch: {
    '$route'( newValue, oldValue ) {
      if ( newValue !== oldValue ) {
        this.activeUserId = Number( this.$route.params.id );
      }
    }
  }
};
</script>
