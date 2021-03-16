const options = {
  method: 'GET',
  url: 'https://hotels4.p.rapidapi.com/properties/list',
  params: {
    destinationId: '1506246',
    pageNumber: '1',
    checkIn: '2020-01-08',
    checkOut: '2020-01-15',
    // pageSize: '10',
    adults1: '2',
    currency: 'USD',
    locale: 'en_US',
    sortOrder: 'PRICE'
  },
  headers: {
    'x-rapidapi-key': '1ec36d5faamshc14c23f6b087ba0p115c04jsne719b9609efe',
    'x-rapidapi-host': 'hotels4.p.rapidapi.com'
  }
};


export { options };