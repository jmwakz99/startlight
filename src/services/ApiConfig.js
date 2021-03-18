
export const optionsSearchHotels = (lat, lon) => (
  {
    method: 'GET',
    url: 'https://resy.p.rapidapi.com/4/find',
    params: {
      lat: `${lat ? lat : "37.788719679657554"}`,
      long: `${lon ? lon : "-122.40057774847898"}`,
      day: "2021-02-14",
      party_size: "2",
      offset: "0"
    },
    headers: {
      // 'x-rapidapi-key': '1ec36d5faamshc14c23f6b087ba0p115c04jsne719b9609efe',
      'x-rapidapi-host': 'resy.p.rapidapi.com'
    }
  }

)

// export const optionsSearchHotelImages = (id) => (
//   {
//     method: 'GET',
//     url: `https://hotels-com-free.p.rapidapi.com/nice/image-catalog/v2/hotels/${id || 151515}`,
//     headers: {
//       'x-rapidapi-key': '0aa058d2c8mshccbda44a55c2a01p1a8a54jsn0ee4bccdf476',
//       'x-rapidapi-host': 'hotels-com-free.p.rapidapi.com'
//     }
//   }

// )


// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation',
//   params: { cityName: 'Berlin', countryName: 'Germany' },
//   headers: {
//     'x-rapidapi-key': '0aa058d2c8mshccbda44a55c2a01p1a8a54jsn0ee4bccdf476',
//     'x-rapidapi-host': 'best-booking-com-hotel.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

// export const optionsSearchHotelDetails = (id) => (
//   {
//     method: 'GET',
//     url: `https://hotels-com-free.p.rapidapi.com/pde/property-details/v1/hotels.com/${id}`,
//     params: {
//       rooms: '1',
//       checkIn: '2021-01-27',
//       checkOut: '2021-01-28',
//       locale: 'en_US',
//       currency: 'USD',
//       include: 'neighborhood'
//     },
//     headers: {
//       'x-rapidapi-key': '45532efc02msh322c246c11e44c4p1d704cjsn40df685111a1',
//       'x-rapidapi-host': 'hotels-com-free.p.rapidapi.com'
//     }
//   }

// )


