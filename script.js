




function displayCards(images) {
  newArr = [];
  for (let i = 0; i < images.data.length; i++) {

    if (images.data[i].type === 'Normal Monster') {



      newArr.push(images.data[i])

    }
  }
  mix(newArr)

};
function mix(new1) {
  hello = []

  for (let i = 0; i < new1.length; i++) {
    // console.log(new1[i])
    hello.push(new1[i])

  }
  // console.log(hello)

  setRandomCardLeft(hello)
}

let counterLeft = 0
let counterRight = 0
function setRandomCardLeft(a) {
  left = a
  // console.log(a)

  randomItem = left[Math.floor(Math.random() * 654)];
  randomItem2 = left[Math.floor(Math.random() * 654)];
  console.log(randomItem)
  console.log(randomItem2)


  let lol = randomItem.card_images[0].image_url
  console.log(lol)
  let lol2 = randomItem2.card_images[0].image_url
  console.log(lol2)
  let img = document.querySelector("#leftCard");
  img.setAttribute("src", lol);
  let img2 = document.querySelector("#rightCard");
  img2.setAttribute("src", lol2);

  let aside = document.querySelector(".left")
  let aside2 = document.querySelector(".rightt")
  let tie = document.querySelector(".tie")
  let leftPoints = document.querySelector('.leftpoints')
  let rightPoints = document.querySelector('.rightpoints')
  // let playAgain = document.querySelector('.playAgain')
  let newBtn = document.createElement("button");
  let new2 = document.querySelector('.btnd')

  if (randomItem.atk > randomItem2.atk) {
    aside.innerText = 'You Won!'
    counterLeft++
    console.log(counterLeft)
    leftPoints.innerText = counterLeft
    aside2.innerText = 'You Lost'
    if (counterLeft === 10) {
      aside.innerText = 'Congratulations You Won!'

      new2.appendChild(newBtn)
      newBtn.innerText = 'Play again'
      newBtn.classList.add("playAgain2");
      button.remove()
    }
    console.log("you win")
  } if (randomItem.atk < randomItem2.atk) {
    aside.innerText = 'You Lost'
    aside2.innerText = 'You Won!'
    counterRight++
    console.log(counterRight)
    rightPoints.innerText = counterRight
    if (counterRight === 10) {
      aside2.innerText = 'Congratulations You Won!'

      new2.appendChild(newBtn)
      newBtn.innerText = 'Play again'
      newBtn.classList.add("playAgain2");
      let hello = document.querySelector('.playAgain2')
      hello.addEventListener('click', () => {
        location.reload()
      })
      button.remove()
    }
    console.log("you lose")
  }
  else if (randomItem.atk === randomItem2.atk) {
    aside.innerText = 'Tie!'
    aside2.innerText = 'Tie!'

  }



};

const button = document.querySelector('#btnLeft')
button.addEventListener('click', fetchCards)





async function fetchCards() {
  try {
    let cards = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    let images = cards.data
    // console.log(images)
    displayCards(images)

  } catch (error) {
    console.log(error)
  } finally {
    console.log('DONE')
  }
}

