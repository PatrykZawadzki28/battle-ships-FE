const url = {
	headers: { 'content-type': 'application/json' },
	post: {
		REGISTER: 'http://localhost:8081/players/register',
		LOGIN: 'http://localhost:8081/players/login'
	}
}

export default url;