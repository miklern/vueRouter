<template>
    <div class="content">
      <UsersList 
        :activeName="selectedNameId"
      />
      <UserInfo
        :nameId="selectedNameId"
      />
      <UserAlbums
        :albumId="selectedNameId"
      />
    </div>
</template>

<script>
import UsersList from "../components/UsersList";
import UserInfo from "../components/UserInfo";
import UserAlbums from "../components/UserAlbums";

export default {
  props: ['id'],
  name: "App",
  components: {
    UsersList,
    UserInfo,
    UserAlbums,
  },
  data() {
    return {
      selectedNameId: this.id,
    };
  },
  created () {
      this.selectedNameId = this.id;
      this.selectedAlbumId = this.albumId;
    }
};
</script>
<style></style>