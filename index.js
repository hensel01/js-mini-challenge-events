/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

let soccerHeader = document.querySelector("h1#header")

soccerHeader.addEventListener("click", function(){ toggleColor(document.querySelector("h1#header")); });


/***** Deliverable 2 *****/

// document.querySelector("#id-new-player-form").addEventListener("submit", function() {
//   document.getElementById()

/***** Deliverable 3 *****/
const upVoteButtons = document.querySelectorAll(".like-button")

upVoteButtons.forEach(function(button){
  button.addEventListener("click", function(event){
     const parentDiv = event.target.parentNode
     const pTag = parentDiv.querySelector('p')

     let currentLikes = parseInt(pTag.textContent)
     const newLikes = currentLikes + 1
     pTag.textContent = newLikes
  })
})