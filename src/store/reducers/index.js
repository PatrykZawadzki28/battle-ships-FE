const initialValues = {
	isloggedIn: false,
	isLoading: false,
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
		case 'SET_LOADING':
			return {
				...state,
				isLoading: action.value
			}
    default:
      return state
  }
}

export default reducers;