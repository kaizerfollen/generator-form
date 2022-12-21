import http from '@/api/http';

const defaultState = {
  users: {},
};

const getters = {
  users: (state) => state.users,
};

const actions = {
  // получаем какие то данные
  async getUsers({ commit }) {
    try {
      const data = {
        name: 'Ivan',
        about: 'This text about me',
        isActive: true,
        language: 'English',
      };

      commit('setUsers', data);
    } catch (err) {
      console.error(err, 'error getting users');
    }
  },

  sendUserForm(_, payload) {
    try {
      // отправляем форму
      http.post('/user', payload);
    } catch (err) {
      console.log(err, 'error');
    }
  },
};

const mutations = {
  setUsers(state, payload) {
    state.users = payload;
  },
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  actions,
  mutations,
};
