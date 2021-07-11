<template>
  <div class="content">
    <UserList @onUserIdSelect="onUserIdSelectHandler" />
    <div v-if="selectedUserId === null" class="not-chosen">Ни один из профилей (юзер) не выбран!!!</div>
    <ProfileInfo v-if="selectedUserId !== null" :userId="selectedUserId" />
  </div>
</template>

<script>
import UserList from "../components/UserList";
import ProfileInfo from "../components/ProfileInfo";
export default {
  name: "Home",
  components: {
    UserList,
    ProfileInfo,
  },
  data() {
    return {
      selectedUserId: null,
    };
  },
  methods: {
    onUserIdSelectHandler(userId) {
      this.selectedUserId = userId;
    },
  },
};
</script>
