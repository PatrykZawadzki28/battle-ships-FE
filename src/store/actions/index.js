const setAuthorization = value => ({
  type: 'SET_AUTHORIZATION',
  value
})

const addUserData = value => ({
  type: 'ADD_USER_DATA',
  value
})

export { setAuthorization, addUserData };