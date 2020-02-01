

const url = {
	headers: { 'content-type': 'application/json' },
	post: {
		REGISTER: 'http://arksoil.net:8081/players/register',
		LOGIN: 'http://arksoil.net:8081/players/login',
		ADD_COINS: 'http://arksoil.net:8081/store',
		ADD_ITEM: 'http://arksoil.net:8081/store/item'
	},
	get: {
		GET_PLAYER_DATA: 'http://arksoil.net:8081/players',
		GET_ALL_ITEMS: 'http://arksoil.net:8081/store/item'
	}
}

export default url;