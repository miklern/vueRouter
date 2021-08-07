<template>
  <div class="wrapper">
    <Header>
    </Header>
    <UserList>
        <div class="content">
      <div class="not-chosen">Ни один из профилей (юзер) не выбран!!!</div>
        </div>
    </UserList>
    <Footer>
    </Footer>
  </div>
</template>

<script>

import UserList from '../layouts/UserList';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

export default {
  name: "Home",
  components: {
    UserList,
    Footer,
    Header,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
