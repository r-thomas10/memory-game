//create event listener to start timer when start button clicked
//create a timer
//create a reset button/randomizer
//prompt at end of game - you won! if completed before timer end try again - if not
// create event listener to allow dialouge box to pop up when instructions button is clicked
//let reset = document.getElementById("reset");


//let randomization = () => {
  //  let cardData = getCardFaces();
   // console.log(cardData);
   // cardData.sort(() => Math.random() * 12);
//}

//getCardFaces();

//let showCards = () => {
 // let cardData = randomization();
  //let tarotCard = document.createElement("div");
  //let frontOfCard = document.createElement("img");
  //let backOfCard = document.createElement("img");
  //tarotCard.classList = "tarotCard";
  //frontOfCard.classList = "frontOfCard";
  //backOfCard.classList = "backOfCard";

    //assign card each card face to a card back (from the html)  ?? WHY does forEach not work? :((
  //cardData.forEach((item) => {
    //const cardFace = document.createElement("img");
    //cardFace.classList = "cardFace";
    //attach actual face image  source to card face variable
    //cardFace.src = item.imgSrc;
    //attach deck to cards, and cards to the cardfaces
    //deck.appendChild(tarotCard);
    //card.appendChild(cardFace);
    //card.addEventListener("click", (e) => {
      //card.classList.flip("flipCard");
    //});
//});
//};
//showCards();

//let resetButton = document.getElementById("reset")
//resetButton.addEventListener("click", () => {

//})
// if/else if win/lose


function start() {
  let counter = 30;
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("countdown");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert("Time's Up");
      clearInterval(counter);
    }
  }, 1000);
  //insert code on allowing came to be initiated here
}

const instructionsButton = document.getElementById("instructions");
const instructionsDialog = document.getElementById("instructions-dialog");

instructionsButton.addEventListener("click", () => {
  instructionsDialog.showModal();
});
// make cards, flip them, randomize them

let frontOfCard = () => [
  { value: "1", image: "./images.judgement.jpg" },
  { value: "1", image: "./images.judgement.jpg" },
  { value: "2", image: "./images.the-empress.jpg" },
  { value: "2", image: "./images.the-empress.jpg" },
  { value: "3", image: "./images.the-high-priestess.jpg" },
  { value: "3", image: "./images.the-high-priestess.jpg" },
  { value: "4", image: "./images.the-moon.jpg" },
  { value: "4", image: "./images.the-moon.jpg" },
  { value: "5", image: "./images.the-sun.jpg" },
  { value: "4", image: "./images.the-sun.jpg" },
  { value: "6", image: "./images.the-star.jpg" },
  { value: "4", image: "./images.the-star.jpg" },
];

let showFront = document.getElementsByClassName("front-face");
showFront.addEventListener("click", () => {
})
//function handleCardClick(card) {
  //  if (shouldMoveCardOff(card)) {
    //    MoveCardOff(card);
    //}
//}

//function shouldMoveCardOff(card) {
    // if pair match card if found return true otherwise false
//}

//function MoveCardOff(card) {
    // add hid class to the card
  //  card.classList.add('hide');
//}