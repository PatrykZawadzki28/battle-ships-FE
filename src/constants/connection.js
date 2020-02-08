const url = {
  headers: { 'content-type': 'application/json' },
  post: {
    REGISTER: 'http://localhost:8081/players/register',
    LOGIN: 'http://localhost:8081/players/login',
    ADD_COINS: 'http://localhost:8081/store',
    ADD_ITEM: 'http://localhost:8081/store/item',
  },
  get: {
    GET_PLAYER_DATA: 'http://localhost:8081/players/me',
    GET_ALL_ITEMS: 'http://localhost:8081/store/item',
  },
};

export default url;
