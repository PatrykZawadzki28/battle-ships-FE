const setAuthorization = value => ({
  type: 'SET_AUTHORIZATION',
  value
})

const setLoading = value => ({
  type: 'SET_LOADING',
  value
})

const addUserData = value => ({
  type: 'ADD_USER_DATA',
  value
})

export { setAuthorization, addUserData, setLoading };