<template>
  <div class="content">
    <UserList :routeId="id" @onUserIdSelect="onUserIdSelectHandler" /> 
    <div v-if="selectedUserId === null" class="not-chosen">Ни один из профилей (юзер) не выбран!!!</div>
    <ProfileInfo v-if="selectedUserId !== null" :userId="selectedUserId" @onAlbumsIdSelect="onAlbumsIdSelectHandler"/>
  </div>
</template>

<script>
import UserList from "../components/UserList";
import ProfileInfo from "../components/ProfileInfo";
export default {
  props: ['id'],
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
  async created() {
    await this.userIdInRouteProps();
  },
  methods: {
    async userIdInRouteProps() {
        if ( this.$route.params.id !== undefined) {
        this.selectedUserId = this.id;
      }
    },
    onUserIdSelectHandler(userId) {      
      this.selectedUserId = userId;
      this.$router.push({ name: 'User', params: { id: userId }}).catch(()=>{});
    },
    onAlbumsIdSelectHandler(albumsId) {
      this.$router.push({ name: 'Photos', params: { albumsId: albumsId }}).catch(()=>{});
    }
  },
    watch: {
    async '$route.params.id'() {
      if ( this.$route.params.id === undefined) {
        this.selectedUserId = null;
      }
      await this.userIdInRouteProps();
    },
  }
};
</script>
