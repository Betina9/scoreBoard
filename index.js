let onePoint = 1;
let twoPoints = 2;
let threePoints = 3;
let homeScore = 0;
let guestScore = 0;

function addOnePointHome() {
  homeScore += onePoint;
  let homePoints = document.querySelector(".score");
  homePoints.innerText = homeScore;
}

function addTwoPointsHome() {
  homeScore += twoPoints;
  let homePoints = document.querySelector(".score");
  homePoints.innerText = homeScore;
}

function addThreePointsHome() {
  homeScore += threePoints;
  let homePoints = document.querySelector(".score");
  homePoints.innerText = homeScore;
}

function addOnePointsGuest() {
  guestScore += onePoint;
  let guestPoints = document.querySelector(".score2");
  guestPoints.innerText = guestScore;
}

function addTwoPointsGuest() {
  guestScore += twoPoints;
  let guestPoints = document.querySelector(".score2");
  guestPoints.innerText = guestScore;
}

function addThreePointsGuest() {
  guestScore += threePoints;
  let guestPoints = document.querySelector(".score2");
  guestPoints.innerText = guestScore;
}

function newGame() {
  homeScore = 0;
  let homePoints = document.querySelector(".score");
  homePoints.innerText = homeScore;
}

function newGame2() {
  guestScore = 0;
  let guestPoints = document.querySelector(".score2");
  guestPoints.innerText = guestScore;
}
