const defaultState = {
  shemeForUserForm: [],
  shemeForCustomerForm: [],
};

const getters = {
  shemeForUserForm: (state) => state.shemeForUserForm,
  shemeForCustomerForm: (state) => state.shemeForCustomerForm,
};

const actions = {
  getShemeForUserForm({ commit }) {
    // допустим получили здесь данные полей для юзер формы
    try {
      const fieldsForUserForm = [
        {
          id: 1,
          type: 'input',
          inputType: 'text',
          label: 'Name',
          model: 'name',
          required: true,
          placeholder: 'Name',
        },
        {
          id: 2,
          type: 'select',
          label: 'Language',
          model: 'language',
          required: true,
          values: ['English', 'Russian'],
        },
        {
          id: 3,
          type: 'checkbox',
          label: 'Activated',
          model: 'isActive',
          checked: true,
        },
        {
          id: 4,
          type: 'textarea',
          label: 'About yourself',
          model: 'about',
          placeholder: 'Write about yourself',
          minLength: '1',
          maxLength: '500',
        },
      ];
      commit('setShemeForUserForm', fieldsForUserForm);
    } catch (error) {
      console.error(error);
    }
  },

  getShemeForCustomerForm({ commit }) {
    try {
      const fieldsForCustomerForm = [
        {
          id: 1,
          type: 'input',
          inputType: 'text',
          label: 'Name',
          model: 'name',
          required: true,
          placeholder: 'Name',
        },
        {
          id: 2,
          type: 'select',
          label: 'Language',
          model: 'language',
          required: true,
          values: ['English', 'Russian'],
        },
        {
          id: 3,
          type: 'input',
          inputType: 'text',
          label: 'Surname',
          model: 'surname',
          required: true,
          placeholder: 'Surname',
        },
        {
          id: 4,
          type: 'input',
          inputType: 'password',
          label: 'Password',
          model: 'password',
          required: true,
          placeholder: 'Password',
        },
        {
          id: 5,
          type: 'input',
          inputType: 'email',
          label: 'Email',
          model: 'email',
          required: true,
          placeholder: 'Email',
        },
        {
          id: 6,
          type: 'tag',
          label: 'Email',
          model: 'email',
        },
      ];
      commit('setShemeForCustomerForm', fieldsForCustomerForm);
    } catch (error) {
      console.log(error, 'error');
    }
  },
};

const mutations = {
  setShemeForUserForm(state, payload) {
    state.shemeForUserForm = payload;
  },

  setShemeForCustomerForm(state, payload) {
    state.shemeForCustomerForm = payload;
  },
};

export default {
  namespaced: true,
  state: defaultState,
  actions,
  mutations,
  getters,
};
