import {TOKEN_CREATE, TOKEN_DELETE} from 'vuex/mutation_types';
import actions from '../actions/token';

const state = {
  token: window.sessionStorage.getItem('token')
};

const mutations = {
  [TOKEN_CREATE]: (state, token) => {
    state.token = token;
    window.sessionStorage.setItem('token', token);
  },
  [TOKEN_DELETE]: () => {
    window.sessionStorage.removeItem('token');
    state.token = null;
  }
};

export default {
  state,
  mutations,
  actions
};
