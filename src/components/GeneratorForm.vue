<template>
  <form class="form" name="generator-form">
    <component v-for="field in fields" :key="field.id" :is="getFieldType(field.type)">
      <template #input>
        <label class="label-wrapper" :for="field.type">
          <span class="label">{{ field.label }}</span>
          <input
            :value="field.model"
            :required="field.required"
            v-model="form[field.model]"
            class="input"
            :id="field.type"
            :type="field.inputType"
            :name="field.label"
            :placeholder="field.placeholder"
          >
        </label>
      </template>
      <template #select>
        <label class="label-wrapper" :for="field.type">
          <span class="label">{{ field.label }}</span>
          <select class="select" :id="field.type" v-model="form[field.model]">
            <option disabled value="">Please select language</option>
            <option v-for="value in field.values" :key="value">
              {{ value }}
            </option>
          </select>
        </label>
      </template>
      <template #checkbox>
        <label class="label-wrapper" :for="field.type">
          <span class="label">{{ field.label }}</span>
          <input
            :id="field.type"
            v-model="form[field.model]"
            type="checkbox"
            :name="field.label"
            :value="field.model"
          >
        </label>
      </template>
      <template #textarea>
        <label class="label-wrapper" :for="field.type">
          <span class="label">{{ field.label }}</span>
          <textarea
            class="textarea"
            v-model="form[field.model]"
            :name="field.type"
            :id="field.type"
            :minLength="field.minLength"
            :maxLength="field.maxLength">
          </textarea>
        </label>
      </template>
      <template #abstract>
        <p>hello i'm abstract </p>
      </template>
    </component>
    <div class="wrapper-btn">
      <button class="btn" @click.prevent="sendForm">Send form</button>
      <button class="btn" @click.prevent="clearForm">Clear form</button>
    </div>
  </form>
</template>

<script>

import { mapActions } from 'vuex';
import InputFields from './components-generators/InputFields.vue';
import SelectFields from './components-generators/SelectFields.vue';
import CheckboxFields from './components-generators/CheckboxFields.vue';
import AbstractFields from './components-generators/AbstractFields.vue';
import TextareaFields from './components-generators/TextareaFields.vue';

export default {
  name: 'GeneratorForm',
  components: {
    InputFields,
    SelectFields,
    CheckboxFields,
    AbstractFields,
    TextareaFields,
  },

  props: {
    fields: {
      type: Array,
      default: () => [],
      required: true,
    },

    user: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      form: null,
    };
  },

  watch: {
    user(newVal) {
      if (newVal) {
        this.form = newVal;
      }
    },
  },

  created() {
    if (this.user) {
      this.form = this.user;
    } else {
      this.form = {};
    }
  },

  methods: {
    ...mapActions({
      sendUserForm: 'sheme/sendUserForm',
    }),

    getFieldType(type) {
      switch (type) {
        case 'input':
          return 'InputFields';
        case 'select':
          return 'SelectFields';
        case 'checkbox':
          return 'CheckboxFields';
        case 'textarea':
          return 'TextareaFields';
        default:
          return 'AbstractFields';
      }
    },

    sendForm() {
      this.$emit('send-form', this.form);
      this.clearForm();
    },

    clearForm() {
      this.form = {};
    },
  },

  beforeDestroy() {
    this.clearForm();
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/index.scss';

.input {
  @include input;
}

.checkbox {
  @include checkbox;
}

.select {
  @include select;
}

.textarea {
  @include textarea;
}

</style>
