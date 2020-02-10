import axios from 'axios';

import url from '../../constants/connection';

const setAuthorization = value => ({
  type: 'SET_AUTHORIZATION',
  value,
});

const setLoading = value => ({
  type: 'SET_LOADING',
  value,
});

const setAuthToken = value => ({
  type: 'SET_AUTH_TOKEN',
  value,
});

const clearUserData = () => ({
  type: 'CLEAR_USER_DATA',
});

const logoutUser = () => ({
  type: 'LOGOUT_USER',
});

const fetchUserData = token => async dispatch => {
  try {
    const response = await axios.get(`${url.get.GET_PLAYER_DATA}`, {
      withCredientials: true,
      headers: {
        Authorization: `${token}`,
      },
    });
    dispatch({
      type: 'ADD_USER_DATA',
      value: response.data.data,
    });
  } catch (error) {
    dispatch(logoutUser());
  }
};

export {
  setAuthorization,
  fetchUserData,
  clearUserData,
  setLoading,
  setAuthToken,
  logoutUser,
};
