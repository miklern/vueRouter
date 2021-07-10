<template>
  <div class="users-list">
    <div class="users-list__body">
      <div
        v-for="user in usersInfo"
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
import { fetchUsersList } from "../services/users";
export default {
  name: "UsersList",
  data() {
    return {
      usersInfo: [],
      activeName: null,
    };
  },
  async created() {
    const usersInfo = await fetchUsersList();
    if (usersInfo) {
      this.usersInfo = usersInfo;
    }
  },
};
</script>
