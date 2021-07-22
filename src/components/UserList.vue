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
  props: {
    routeId: {
      type: String,
    }
  },
  name: "UserList",
  data() {
    return {
      userList: [],
      activeUserId: null,
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
      console.log(this.routeId);
      
    }
  },
  watch: {
    async routeId() {
      if ( this.routeId !== null ) {
        await this.onUserIdSelect(this.routeId);
      }
    }
  }
};
</script>
