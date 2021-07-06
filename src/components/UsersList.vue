<template>
  <div class="users-list">
    <div class="users-list__body">
      <div
        v-for="user in names"
        :key="user.id"
        :class="{active: activeName === user.id}"
        class="users-list__name"
      >{{ user.name }}</div>
    </div>
  </div>
</template>

<script>
import { fetchUsersNames } from "../services/users";

export default {
  props: {
    activeName: {
      type: Number,
    },
  },
  name: "UsersList",
  data() {
    return {
      names: [],
    };
  },
  async created() {
    const names = await fetchUsersNames();
    if (names) {
      this.names = names;
    }
  },
};
</script>

