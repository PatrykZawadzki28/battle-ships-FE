const initialValues = {
	isloggedIn: false,
	userData: {},
}

const reducers = (state = initialValues, action) => {
  switch (action.type) {
    case 'SET_AUTHORIZATION':
      return {
        ...state,
        isloggedIn: action.value
			}
		case 'ADD_USER_DATA':
			return {
				...state,
				userData: action.value
			}
    default:
      return state
  }
}

export default reducers;