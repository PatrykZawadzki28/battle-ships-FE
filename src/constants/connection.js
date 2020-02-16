export const env = `http://localhost:8081`;
// export const env = `http://appunites-mac-112.local:8081`;

const url = {
  headers: { 'content-type': 'application/json' },
  post: {
    REGISTER: `${env}/players/register`,
    LOGIN: `${env}/players/login`,
    ADD_STATS: `${env}/players/stats`,
    ADD_COINS: `${env}/store/coins`,
    ADD_ITEM: `${env}/store/item`,
  },
  get: {
    GET_PLAYER_DATA: `${env}/players/me`,
    GET_STATS: `${env}/players/stats`,
    GET_ALL_ITEMS: `${env}/store/item`,
  },
};

export default url;
