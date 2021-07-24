<template>
  <div class="content">
    <UserList @onUserIdSelect="onUserIdSelectHandler" /> 
    <div v-if="selectedUserId === null" class="not-chosen">Ни один из профилей (юзер) не выбран!!!</div>
    <ProfileInfo v-if="selectedUserId !== null" :userId="selectedUserId" @onAlbumsIdSelect="onAlbumsIdSelectHandler"/>
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
      // routeId: null, :routeId="routeId"
    };
  },
  methods: {
    onUserIdSelectHandler(userId) {
      this.selectedUserId = userId;
      // this.$router.push({ path: `/home/${userId}`}).catch(()=>{});
      this.$router.push({ name: 'User', params: { id: userId }}).catch(()=>{});
    },
    onAlbumsIdSelectHandler(albumsId) {
      // this.$router.push({ path: `/home/${this.selectedUserId}/photos/${albumsId}`});
      this.$router.push({ name: 'Photos', params: { albumsId: albumsId }});
    }
  },
  watch: {
      '$route.params.id'() {
        if ( this.$route.params.id === undefined) {
          this.selectedUserId = null;
        }
      // console.log(to);
      // console.log(from);
    }
    // async selectedUserId() {
    //   if ( this.$route.params.id !== null ) {
    //     this.routeId = this.$route.params.id; 
    //   }
    // }
  }
};
</script>
