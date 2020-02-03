import axios from 'axios';

import url from '../../constants/connection';

const setAuthorization = value => ({
  type: 'SET_AUTHORIZATION',
  value
})

const setLoading = value => ({
  type: 'SET_LOADING',
  value
})

const setAuthToken = value => ({
  type: 'SET_AUTH_TOKEN',
  value
})

const addUserData = (token, id) => async dispatch => {
	try {
		const response = await axios.get(`${url.get.GET_PLAYER_DATA}/${id}`, {
			withCredientials: true,
			headers: {
				Authorization: `${token}`
			}
		});
		dispatch({ 
			type: 'ADD_USER_DATA',
			value: response.data.data
		});
	} catch (error) {
		console.log(error);
	}
}

export { setAuthorization, addUserData, setLoading, setAuthToken };