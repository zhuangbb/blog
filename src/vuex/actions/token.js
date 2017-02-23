import {TOKEN_CREATE, TOKEN_DELETE} from 'vuex/mutation_types';
import sev from 'services/login';

const actions = {
  userCreate: ({commit}, {userName, userPass, router}) => {
    return sev.login(userName, userPass).then(data => {
      let token = {token: data.token};
      commit(TOKEN_CREATE, token);
      window.sessionStorage.setItem('info', data.info);
      router.push('/posts');
    });
  }
};

export default actions;
