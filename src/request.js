const Api_Key = "0429764d692187b263694f808db64838";
const requests = {
  getNetflix: `/discover/tv?api_key=${Api_Key}&with_networks=213`,
  getTrending: `/trending/all/day?api_key=${Api_Key}`,
  getAction: `/discover/movie?api_key=${Api_Key}&with_genres=28`,
  getAdventure: `/discover/movie?api_key=${Api_Key}&with_genres=12`,
  getAnimation: `/discover/movie?api_key=${Api_Key}&with_genres=16`,
  getComdey: `/discover/movie?api_key=${Api_Key}&with_genres=35 `,
  getCrime: `/discover/movie?api_key=${Api_Key}&with_genres=80`,
  getDocumentary: `/discover/movie?api_key=${Api_Key}&with_genres=99`,
  getFantasy: `/discover/movie?api_key=${Api_Key}&with_genres=14`,
  getFamily: `/discover/movie?api_key=${Api_Key}&with_genres=10751`,
  getWestern: `/discover/movie?api_key=${Api_Key}&with_genres=37`,
  getScienceFaction: `/discover/movie?api_key=${Api_Key}&with_genres=878`,
};

export default requests;
