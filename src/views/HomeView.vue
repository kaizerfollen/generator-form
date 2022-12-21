<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <GeneratorForm :fields="shemeForUsersForm" :user="user" @send-form="sendForm" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';
import GeneratorForm from '@/components/GeneratorForm.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    GeneratorForm,
  },

  mounted() {
    this.getShemeForUserForm();
    this.getUsers();
  },

  computed: {
    ...mapGetters({
      shemeForUsersForm: 'sheme/shemeForUserForm',
      user: 'users/users',
    }),
  },

  methods: {
    ...mapActions({
      getShemeForUserForm: 'sheme/getShemeForUserForm',
      getUsers: 'users/getUsers',
      sendUserForm: 'users/sendUserForm',
    }),

    sendForm(form) {
      this.sendUserForm(form);
    },
  },
};
</script>
