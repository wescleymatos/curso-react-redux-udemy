import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGE',
  payload: event.target.value
});

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`);

  return {
    type: 'TODO_SEARCHED',
    payload: request
  };
};

export const add = description => {
  return dispatch => {
    axios.post(URL, { description })
      .then(result => dispatch({ type: 'TODO_ADDED', payload: result.data }))
      .then(() => dispatch(search()));
  };
};

export const markAsDone = todo => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { done: true })
      .then(() => dispatch(search()));
  };
};

export const markAsPending = todo => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { done: false })
      .then(() => dispatch(search()));
  };
};

export const remove = todo => {
  return dispatch => {
    axios.delete(`${URL}/${todo._id}`)
      .then(() => dispatch(search()));
  };
};
