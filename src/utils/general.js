export const extractImages = (hotel) => {
  let allImages = [];
  let urls = Object.values(hotel.venue.responsive_images.urls);
  for (let i = 0; i < urls.length; i++) {
    if (urls[i]["1:1"][200] && urls[i]["1:1"][800]) {
      allImages.push(
        {
          sizeTwoHundred: urls[i]["1:1"][200],
          sizeEightHundred: urls[i]["1:1"][800]

        }

      )

    }


  }





  return allImages;


}

export const convertToString = (value) => (
  value.toString()
)
