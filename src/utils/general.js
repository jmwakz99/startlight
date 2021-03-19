
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


export const checkStars = (value) => {
  let allStars = document.getElementsByClassName("fa-star");
  if (allStars.length > 0) {
    for (let i = 0; i < Math.floor(value); i++) {
      for (let count = 0; count < allStars.length; count++) {
        if (i === count) {
          allStars[count].classList.add("checked");
          allStars[count].classList.remove("unchecked");

        }


      }




    }

  }






}



export const reduceDescriptionWords = (text) => {

  if (!text) return;
  let i = text.split(" ").splice(0).length - (text.split(" ").splice(0).length - 9)

  return text.split(" ").splice(0, i).join(" ");
}

