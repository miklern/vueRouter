<template>
  <div class="content">
    <UsersList @onUserSelect="onUserSelectName" />
    <div v-if="selectedNameId === null" class="not-chosen">Ни один из профилей (юзер) не выбран!!!</div>
    <ProfileInfo v-if="selectedNameId !== null" :userId="selectedNameId" />
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
      selectedNameId: null,
    };
  },
  methods: {
    onUserSelectName(nameId) {
      this.selectedNameId = nameId;
    },
  },
};
</script>
