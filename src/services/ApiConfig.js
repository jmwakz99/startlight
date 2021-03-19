

export const optionsSearchHotels = (lat, lon) => (
  {
    method: 'GET',
    url: 'https://resy.p.rapidapi.com/4/find',
    params: {
      lat: lat,
      long: lon,
      day: "2021-02-14",
      party_size: "2",
      offset: "0"
    },
    headers: {
      'x-rapidapi-key': "0aa058d2c8mshccbda44a55c2a01p1a8a54jsn0ee4bccdf476",
      'x-rapidapi-host': 'resy.p.rapidapi.com'
    }
  }

)




