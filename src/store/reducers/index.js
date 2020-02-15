const initialValues = {
  isloggedIn: false,
  isLoading: false,
	userData: {},
	enemyData: {},
	token: '',
};

const reducers = (state = initialValues, action) => {
  switch (action.type) {
    case 'SET_AUTHORIZATION':
      return {
        ...state,
        isloggedIn: action.value,
      };
    case 'ADD_USER_DATA':
      return {
        ...state,
        userData: action.value,
      };
    case 'CLEAR_USER_DATA':
      return {
        ...state,
        userData: {},
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        userData: {},
        token: '',
        isloggedIn: false,
      };
    case 'SET_AUTH_TOKEN':
      return {
        ...state,
        token: action.value,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.value,
			};
    default:
      return state;
  }
};

export default reducers;

// case 'SET_PLAYER_ONE':
// 	return {
// 		player1: {
// 			...this.state.player1,
// 			ships: updatedShips,
// 			shipsSet: true
// 		},
// 		activePlayer: 'player2'
// 	}
// case 'SET_PLAYER_TWO':
// 	return {
// 		player1: {
// 			...this.state.player2,
// 			ships: updatedShips,
// 			shipsSet: true
// 		},
// 		allShipsSet: true,
// 		gameStarting: true	
// 	}
// case 'START_GAME':
// 	return {
// 		activePlayer: "player1", // timeout could be set also
// 		gameStarting: false
// 	}
// case 'SET_SHIP':
// 	const updatedPlayer = {
// 		...this.state[player],
// 		ships: updatedShips,
// 		currentShip: currentShip + 1
// 	};

// 	return {
// 		[player]: updatedPlayer
// 	}