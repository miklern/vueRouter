<template>
  <div class="user-ifno">
    <div
      v-for="userInformation in usersInformation"
      :key="userInformation.id"
      class="user-ifno__block"
    >
      <div class="user-info__title">Info about: {{ userInformation.name }}</div>
      <div class="user-info__item">
        <span>Username:</span>
        {{ userInformation.username }}
      </div>
      <div class="user-info__item">
        <span>Email:</span>
        {{ userInformation.email }}
      </div>
      <div class="user-info__item">
        <span>Street:</span>
        {{ userInformation.address.street }}
      </div>
      <div class="user-info__item">
        <span>Suite:</span>
        {{ userInformation.address.suite }}
      </div>
      <div class="user-info__item">
        <span>City:</span>
        {{ userInformation.address.city }}
      </div>
      <div class="user-info__item">
        <span>Phone:</span>
        {{ userInformation.phone }}
      </div>
      <div class="user-info__item">
        <span>Website:</span>
        {{ userInformation.website }}
      </div>
    </div>
  </div>
</template>

<script>
import { fetchOneUser } from "../services/users";

export default {
  name: "UserInfo",
  props: {
    nameId: {
      type: Number,
    },
  },
  data() {
    return {
      usersInformation: [],
    };
  },
  async created() {
    await this.getUsersList();
  },
  methods: {
    async getUsersList() {
      const filters = {};

      if (this.nameId !== null) {
        filters.id = this.nameId;
      }

      const usersInformation = await fetchOneUser(filters);
      if (usersInformation) {
        this.usersInformation = usersInformation;
      }
    },
  },
  watch: {
    async nameId(newValue, oldValue) {
      if (newValue !== oldValue) {
        await this.getUsersList();
      }
    },
  },
};
</script>

