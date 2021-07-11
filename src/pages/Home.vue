<template>
  <div class="content">
    <UsersList @onUserIdSelect="onUserIdSelectHandler" />
    <div v-if="selectedUserId === null" class="not-chosen">Ни один из профилей (юзер) не выбран!!!</div>
    <ProfileInfo v-if="selectedUserId !== null" :userId="selectedUserId" />
  </div>
</template>

<script>
import UsersList from "../components/UsersList";
import ProfileInfo from "../components/ProfileInfo";
export default {
  name: "Home",
  components: {
    UsersList,
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
