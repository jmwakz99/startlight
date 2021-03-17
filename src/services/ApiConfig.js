export const optionsSearchHotels = (lat, lon) => (
  {
    method: 'GET',
    url: 'https://hotels-com-free.p.rapidapi.com/srle/listing/v1/brands/hotels.com',
    params: {
      lat: `${lat ? lat : "37.788719679657554"}`,
      lon: `${lon ? lon : "-122.40057774847898"}`,
      checkIn: "2021-02-14",
      checkOut: "2021-02-23",
      rooms: "1",
      locale: "en_US",
      currency: "USD",
      pageNumber: "1"
    },
    headers: {
      'x-rapidapi-key': '0aa058d2c8mshccbda44a55c2a01p1a8a54jsn0ee4bccdf476',
      'x-rapidapi-host': 'hotels-com-free.p.rapidapi.com'
    }
  }

)

export const optionsSearchHotelImages = (id) => (
  {
    method: 'GET',
    url: `https://hotels-com-free.p.rapidapi.com/nice/image-catalog/v2/hotels/${id || 151515}`,
    headers: {
      'x-rapidapi-key': '0aa058d2c8mshccbda44a55c2a01p1a8a54jsn0ee4bccdf476',
      'x-rapidapi-host': 'hotels-com-free.p.rapidapi.com'
    }
  }

)

export const optionsSearchHotelDetails = (id) => (
  {
    method: 'GET',
    url: `https://hotels-com-free.p.rapidapi.com/pde/property-details/v1/hotels.com/${id}`,
    params: {
      rooms: '1',
      checkIn: '2021-01-27',
      checkOut: '2021-01-28',
      locale: 'en_US',
      currency: 'USD',
      include: 'neighborhood'
    },
    headers: {
      'x-rapidapi-key': '0aa058d2c8mshccbda44a55c2a01p1a8a54jsn0ee4bccdf476',
      'x-rapidapi-host': 'hotels-com-free.p.rapidapi.com'
    }
  }

)


