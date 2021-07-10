<template>
  <div class="users-list">
    <div class="users-list__body">
      <div
        v-for="user in userInfo"
        :key="user.id"
        @click="$emit('onUserSelect', user.id), (activeName = user.id)"
        :class="{ active: activeName === user.id }"
        class="users-list__name"
      >
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { fetchUsersInfo } from "../services/users";
export default {
  name: "UsersList",
  data() {
    return {
      userInfo: [],
      activeName: null,
    };
  },
  async created() {
    const userInfo = await fetchUsersInfo();
    if (userInfo) {
      this.userInfo = userInfo;
    }
  },
};
</script>
