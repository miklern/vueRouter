<template>
   <div class="content">
      <UsersList 
         :activeName="selectedNameId" 
      />
      <UserImages 
         :imagesId="selectedAlbumId" 
      />
      </div>
</template>

<script>
import UsersList from "../components/UsersList";
import UserImages from "../components/UserImages";

export default {
   props: ['id', 'albumId'],
   name: "App",
   components: {
      UsersList,
      UserImages,
   },
   data() {
      return {
         selectedNameId: this.id,
         selectedAlbumId: this.albumId,
      };
   },
   created () {
      this.selectedNameId = this.id;
      this.selectedAlbumId = this.albumId;
   },
};
</script>
<style></style>