import 'whatwg-fetch';

export const fetchSampleData = (uri) => {
  return dispatch => {
    fetch(uri)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.text();
      })
      .then(function(text) {
        dispatch({
          type: 'RECEIVE_SAMPLE',
          path: uri,
          code: text
        })
      })
  }
}

export const fetchSamples = (uri) => {
  return dispatch => {
    fetch(uri)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(json) {
        dispatch({
          type: 'RECEIVE_SAMPLES',
          samples: json
        })
      })
  }
}

export const showEditor = (path) => {
  return {
    type: 'SHOW_EDITOR',
    path: path
  }
}

export const hideEditor = (path) => {
  return {
    type: 'HIDE_EDITOR',
    path: path
  }
}

export const updateEditor = (path, code) => {
  return {
    type: 'UPDATE_EDITOR',
    path: path,
    code: code
  }
}