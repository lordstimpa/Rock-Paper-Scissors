let rock = document.getElementById("rock");
rock.addEventListener("click", displayRock);

let paper = document.getElementById("paper");
paper.addEventListener("click", displayPaper);

let scissor = document.getElementById("scissor");
scissor.addEventListener("click", displayScissor);

function displayRock() {
  clear();
  let img = document.createElement("img");
  img.src = "img/rock.png";
  let src = document.getElementById("display");
  src.appendChild(img);
  console.log("You clicked on rock.");
  playGame();
  if (this.aiRndm === 0) {
    console.log("No score!");
  } else if (this.aiRndm === 1) {
    console.log("You lose!");
  } else if (this.aiRndm === 2) {
    console.log("You win!");
  }
}

function displayPaper() {
  clear();
  let img = document.createElement("img");
  img.src = "img/paper.png";
  let src = document.getElementById("display");
  src.appendChild(img);
  console.log("You clicked on paper.");
  playGame();
  if (this.aiRndm === 0) {
    console.log("You win!");
  } else if (this.aiRndm === 1) {
    console.log("No score!");
  } else if (this.aiRndm === 2) {
    console.log("You lose!");
  }
}

function displayScissor() {
  clear();
  let img = document.createElement("img");
  img.src = "img/scissor.png";
  let src = document.getElementById("display");
  src.appendChild(img);
  console.log("You clicked on scissor.");
  playGame();
  if (this.aiRndm === 0) {
    console.log("You lose!");
  } else if (this.aiRndm === 1) {
    console.log("You win!");
  } else if (this.aiRndm === 2) {
    console.log("No score!");
  }
}

function clear() {
  const display = document.getElementById("display");
  display.innerHTML = "";
}

function playGame() {
  let aiRndm = Math.floor(Math.random() * 3);

  if (aiRndm === 0) {
    let img = document.createElement("img");
    img.src = "img/rock.png";
    let src = document.getElementById("display");
    src.appendChild(img);
    console.log("AI picked rock.");
  } else if (aiRndm === 1) {
    let img = document.createElement("img");
    img.src = "img/paper.png";
    let src = document.getElementById("display");
    src.appendChild(img);
    console.log("AI picked paper.");
  } else if (aiRndm === 2) {
    let img = document.createElement("img");
    img.src = "img/scissor.png";
    let src = document.getElementById("display");
    src.appendChild(img);
    console.log("AI picked scissor.");
  } else {
    console.log("An error has been detected, please reload the page.");
  }
  return aiRndm;
}
