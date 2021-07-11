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
  }
};
</script>
