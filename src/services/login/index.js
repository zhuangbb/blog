import api from '../index.js';
export default {
  login (userName, userPass) {
    return api.post('/Login/UserLogin', {userName, userPass});
  },
  register (userName, userPass, code) {
    return api.post('/Login/LoginRegister', {userName, userPass, code});
  },
  regiserCode (userName) {
    return api.get('/Code/SendRegisterCode', {userName});
  }
};
