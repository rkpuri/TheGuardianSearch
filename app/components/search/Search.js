import axios from 'axios'

import { API_KEY } from '../../constants'
let cancel

function Search (value) {
  if (cancel != undefined) {
    cancel();
  }
  return axios.get('https://content.guardianapis.com/search?api-key='+API_KEY, {
      cancelToken: new axios.CancelToken(function executor(c) {
          cancel = c;
      }),
      params: {
          q: value
      }
    })
    .then(response => {
        return response.data.response;
    })
    .catch(error => {
        const result = error.response;
        return Promise.reject(result);
    })
}

export default Search