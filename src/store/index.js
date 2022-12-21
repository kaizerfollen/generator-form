import Vue from 'vue';
import Vuex from 'vuex';
import users from '@/store/modules/users';
import customer from '@/store/modules/customer';
import sheme from '@/store/modules/sheme';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    sheme,
    customer,
  },
});
