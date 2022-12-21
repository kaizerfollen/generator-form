import http from '@/api/http';

const actions = {
  sendCustomerForm(_, payload) {
    try {
      // отправляем форму
      http.post('/user', payload);
    } catch (err) {
      console.log(err, 'error');
    }
  },
};

export default {
  namespaced: true,
  actions,
};
