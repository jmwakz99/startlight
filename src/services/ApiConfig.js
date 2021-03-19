export const optionsSearchHotels = (lat, lon) => (
  {
    method: 'GET',
    url: 'https://rapidapi.com/yahoo.finance.low.latency/api/resy',
    // url: 'https://resy.p.rapidapi.com/4/find',
    params: {
      lat: lat,
      long: lon,
      day: "2021-02-14",
      party_size: "2",
      offset: "0"
    },
    headers: {
      'x-rapidapi-key': 'fa54c73a15mshd49225cae4712cbp1d2097jsnf883dde18db7',
      'x-rapidapi-host': 'resy.p.rapidapi.com'
    }
  }

)




