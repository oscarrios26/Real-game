newArr = []
arr1 = []
arr2 = []
console.log(newArr)
function displayCards(images) {
  for (let i = 0; i < 3000; i++) {
    let imagesOfCards = images[i]
    newArr.push(imagesOfCards)
    setRandomCardLeft()
    
  }
  const result = newArr.filter((word) => word.type === 'Normal Monster')
  result.forEach((element) => arr2.push(element.card_images[0].image_url))
  
}

  


function setRandomCardLeft() {
  const randomItem = arr2[Math.floor(Math.random() * arr2.length)]
  let img = document.querySelector('#leftCard')
  img.setAttribute('src', randomItem)

  const randomItem2 = arr2[Math.floor(Math.random() * arr2.length)]
  let img2 = document.querySelector('#rightCard')
  img2.setAttribute('src', randomItem2)
  
}




async function fetchCards() {
  try {
    let cards = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    let images = cards.data.data

    displayCards(images)
  } catch (error) {
    console.log(error)
  } finally {
    console.log('DONE')
  }
}
fetchCards()
