<template>
  <div class="users-list">
    <div class="users-list__body">
      <div
        v-for="user in userInList"
        :key="user.id"
        @click="onUserIdSelect(user.id)"
        :class="{ active: activeUserId === user.id }"
        class="users-list__name"
      >
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { fetchUsersList } from "../services/users";
export default {
  name: "UsersList",
  data() {
    return {
      userInList: [],
      activeUserId: null,
    };
  },
  async created() {
    const userInList = await fetchUsersList();
    if (userInList) {
      this.userInList = userInList;
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
