let dispNum = document.getElementById("disp-num");
let gameOver = document.getElementById("game-over");
let numText = document.getElementById("num-text");
let resetGame = document.getElementById("reset-game");
let getNum = document.getElementById("get-num");
let checkNum = document.getElementById("check-num");
let dispList = document.getElementById("disp-list");

let numlist = [];
let num = 0;

function getnum() {
  num = Math.floor(Math.random() * 90 + 1);
  getNum.innerText = "NEXT NUMBER";
  addnum();
}

function check() {
  dispList.innerText = "Numbers Called:" + numlist;
}

function reset() {
  numText.innerText = "Missing Out on Playing....";
  dispNum.innerText = "Beacuse there's nobody to call the Numbers...";
  gameOver.innerText = "We've got you...";
  getNum.innerText = "START GAME";
  dispList.innerText = "";
  numlist = [];
}

function addnum() {
  if (numlist.includes(num)) {
    getnum();
  } else {
    numlist.push(" " + num);
    dispNum.innerText = num;
    dispList.innerText = "";

    if (num == 1) {
      numText.innerText = "Son of a gun";
    } else if (num == 2) {
      numText.innerText = "One little duck";
    } else if (num == 3) {
      numText.innerText = "Happy family";
    } else if (num == 4) {
      numText.innerText = "Knock at the door";
    } else if (num == 5) {
      numText.innerText = "Fingers in your hand";
    } else if (num == 6) {
      numText.innerText = "Chopping sticks";
    } else if (num == 7) {
      numText.innerText = "days in a week";
    } else if (num == 8) {
      numText.innerText = "One fat major";
    } else if (num == 9) {
      numText.innerText = "Doctor’s time";
    } else if (num == 10) {
      numText.innerText = "A big fat hen";
    } else if (num == 11) {
      numText.innerText = "Two heavenly legs";
    } else if (num == 12) {
      numText.innerText = "One dozen";
    } else if (num == 13) {
      numText.innerText = "Unlucky for some";
    } else if (num == 14) {
      numText.innerText = "Valentine’s Day";
    } else if (num == 15) {
      numText.innerText = "Yet to be kissed";
    } else if (num == 16) {
      numText.innerText = "Sweet sixteen";
    } else if (num == 17) {
      numText.innerText = "Dancing Queen";
    } else if (num == 18) {
      numText.innerText = "Volting age";
    } else if (num == 19) {
      numText.innerText = "End of teens";
    } else if (num == 20) {
      numText.innerText = "One score";
    } else if (num == 21) {
      numText.innerText = "All womens age";
    } else if (num == 22) {
      numText.innerText = "Two little ducks";
    } else if (num == 23) {
      numText.innerText = "You and me";
    } else if (num == 24) {
      numText.innerText = "Two dozen";
    } else if (num == 25) {
      numText.innerText = "Quarter";
    } else if (num == 26) {
      numText.innerText = "Republic Day";
    } else if (num == 27) {
      numText.innerText = "Gateway to heaven";
    } else if (num == 28) {
      numText.innerText = "Overweight @ 28";
    } else if (num == 29) {
      numText.innerText = "Rise & shine";
    } else if (num == 30) {
      numText.innerText = "Women get flirty at";
    } else if (num == 31) {
      numText.innerText = "Time for fun";
    } else if (num == 32) {
      numText.innerText = "Buckle my shoe";
    } else if (num == 33) {
      numText.innerText = "Two little bees";
    } else if (num == 34) {
      numText.innerText = "Dil mange more";
    } else if (num == 35) {
      numText.innerText = "Jump and jive";
    } else if (num == 36) {
      numText.innerText = "Popular size";
    } else if (num == 37) {
      numText.innerText = "Mixed luck";
    } else if (num == 38) {
      numText.innerText = "Oversize";
    } else if (num == 39) {
      numText.innerText = "Watch your waistline";
    } else if (num == 40) {
      numText.innerText = "Life begins at";
    } else if (num == 41) {
      numText.innerText = "Kiss and run";
    } else if (num == 42) {
      numText.innerText = "Winnie the pooh";
    } else if (num == 43) {
      numText.innerText = "Pain in the knee";
    } else if (num == 44) {
      numText.innerText = "All the fours";
    } else if (num == 45) {
      numText.innerText = "Halfway there";
    } else if (num == 46) {
      numText.innerText = "Up to tricks";
    } else if (num == 47) {
      numText.innerText = "Year of Independence";
    } else if (num == 48) {
      numText.innerText = "You are not late";
    } else if (num == 49) {
      numText.innerText = "Your waist line";
    } else if (num == 50) {
      numText.innerText = "Half a century";
    } else if (num == 51) {
      numText.innerText = "Charity begins at 51";
    } else if (num == 52) {
      numText.innerText = "Pack of cards";
    } else if (num == 53) {
      numText.innerText = "Stuck in a tree";
    } else if (num == 54) {
      numText.innerText = "Clean the floor";
    } else if (num == 55) {
      numText.innerText = "All the fives";
    } else if (num == 56) {
      numText.innerText = "Was she worth it?";
    } else if (num == 57) {
      numText.innerText = "Mutiny Year";
    } else if (num == 58) {
      numText.innerText = "Make them wait";
    } else if (num == 59) {
      numText.innerText = "Do I hear a line at";
    } else if (num == 60) {
      numText.innerText = "Five dozen";
    } else if (num == 61) {
      numText.innerText = "Bakers bun";
    } else if (num == 62) {
      numText.innerText = "Turn the screw";
    } else if (num == 63) {
      numText.innerText = "Click the three";
    } else if (num == 64) {
      numText.innerText = "Hard core";
    } else if (num == 65) {
      numText.innerText = "Old age pension";
    } else if (num == 66) {
      numText.innerText = "Chakke pe chakka";
    } else if (num == 67) {
      numText.innerText = "Made in heaven";
    } else if (num == 68) {
      numText.innerText = "Check your weight";
    } else if (num == 69) {
      numText.innerText = "Ulta Pulta";
    } else if (num == 70) {
      numText.innerText = "Lucky blind";
    } else if (num == 71) {
      numText.innerText = "Bang the drum";
    } else if (num == 72) {
      numText.innerText = "Lucky 2";
    } else if (num == 73) {
      numText.innerText = "Under the tree";
    } else if (num == 74) {
      numText.innerText = "Still want more";
    } else if (num == 75) {
      numText.innerText = "Diamond Jublee";
    } else if (num == 76) {
      numText.innerText = "Lucky six";
    } else if (num == 77) {
      numText.innerText = "Two hockey sticks";
    } else if (num == 78) {
      numText.innerText = "Heaven’s gate";
    } else if (num == 79) {
      numText.innerText = "One more time";
    } else if (num == 80) {
      numText.innerText = "Gandhi’s breakfast";
    } else if (num == 81) {
      numText.innerText = "Corner shot";
    } else if (num == 82) {
      numText.innerText = "Fat lady with a duck";
    } else if (num == 83) {
      numText.innerText = "India wins Cricket World Cup";
    } else if (num == 84) {
      numText.innerText = "Last of the chors";
    } else if (num == 85) {
      numText.innerText = "Staying alive";
    } else if (num == 86) {
      numText.innerText = "Between the sticks";
    } else if (num == 87) {
      numText.innerText = "Nearing heaven";
    } else if (num == 88) {
      numText.innerText = "Two fat ladies";
    } else if (num == 89) {
      numText.innerText = "Penultimate";
    } else if (num == 90) {
      numText.innerText = "Top of the house";
    }

    if ((num = true)) {
      gameOver.textContent = "---";
    }
  }

  if (numlist.length == 90) {
    gameOver.innerText = "Game Over....";
    reset();
  }
}
