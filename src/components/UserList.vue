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
  // props: {
  //   routeId: {
  //     type: String,
  //   }
  // },
  name: "UserList",
  data() {
    return {
      userList: [],
      activeUserId: null,
      activeRoute: this.$route.params.id,
    };
  },
  async created() {
    const userList = await fetchUserList();
    if (userList) {
      this.userList = userList;
    }
  },
  methods: {
    onUserIdSelect(id) {
      this.activeUserId = id;
      this.$emit('onUserIdSelect', id);
    }
  },
  watch: {
    async '$route.params.id'() {
      if ( this.$route.params.id === undefined) {
        await this.onUserIdSelect(null);
      } else {
        await this.onUserIdSelect(this.$route.params.id);
        console.log(this.$route.params.id);
        
      }
    },
  }
};
</script>
