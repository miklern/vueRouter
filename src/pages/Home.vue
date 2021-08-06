<template>
  <div class="content">
    <div class="not-chosen">Ни один из профилей (юзер) не выбран!!!</div>
  </div>
</template>

<script>

export default {
  props: ['id'],
  name: "Home",
  components: {
  },
  data() {
    return {
      selectedUserId: null,
    };
  },
  methods: {
  },
};
</script>
