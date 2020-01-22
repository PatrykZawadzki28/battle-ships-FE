const initialValues = {
	isloggedIn: false
}

const reducers = (state = initialValues, action) => {
  switch (action.type) {
    case 'SET_AUTHORIZARION':
      return [
        ...state,
        {
          isloggedIn: action.value,
        }
      ]
    default:
      return state
  }
}

export default reducers;