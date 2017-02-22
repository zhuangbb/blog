import axios from 'axios';

axios.defaults.baseURL = process.env.api;

function parseResponse (res) {
  return Promise.all([res.status, res.statusText, res.data]);
}
function checkStatus ([status, statusText, data]) {
  if (status >= 200 && status < 300) {
    if (data.code === 200) {
      alert(data.msg);
      return data.data;
    } else {
      alert(data.msg);
    }
  }
}
function errHandle (err) {
  alert('Please contact your administrator!');
  console.log(err);
}
export default {
  get (url, params) {
    return axios.get(url, params)
      .then(parseResponse)
      .then(checkStatus)
      .catch(errHandle);
  },
  post (url, data) {
    return axios.post(url, data)
      .then(parseResponse)
      .then(checkStatus)
      .catch(errHandle);
  }
};
