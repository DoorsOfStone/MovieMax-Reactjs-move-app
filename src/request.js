const Api_Key = "0429764d692187b263694f808db64838";
const requests = {
  fetchAction: `/discover/movie?api_key=${Api_Key}&with_genres=28`,
  fetchAdventure: `/discover/movie?api_key=${Api_Key}&with_genres=12`,
  fetchAnimation: `/discover/movie?api_key=${Api_Key}&with_genres=16`,
  fetchComdey: `/discover/movie?api_key=${Api_Key}&with_genres=35 `,
  fetchCrime: `/discover/movie?api_key=${Api_Key}&with_genres=80`,
  fetchDocumentary: `/discover/movie?api_key=${Api_Key}&with_genres=99`,
  fetchFantasy: `/discover/movie?api_key=${Api_Key}&with_genres=14`,
};

export default requests;
