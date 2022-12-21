<template>
  <div class="about">
    <h1>This is an about page</h1>
    <GeneratorForm :fields="shemeForCustomerForm" @send-form="sendForm" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import GeneratorForm from '@/components/GeneratorForm.vue';

export default {
  name: 'AboutView',
  components: {
    GeneratorForm,
  },

  mounted() {
    this.getShemeForCustomerForm();
  },

  computed: {
    ...mapGetters({
      shemeForCustomerForm: 'sheme/shemeForCustomerForm',
    }),
  },

  methods: {
    ...mapActions({
      getShemeForCustomerForm: 'sheme/getShemeForCustomerForm',
      sendCustomerForm: 'customer/sendCustomerForm',
    }),

    sendForm(form) {
      this.sendCustomerForm(form);
    },
  },
};
</script>
