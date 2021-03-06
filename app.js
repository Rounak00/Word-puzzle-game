const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
const sc =document.querySelector("#score");
let count=0;
let play = false;
let newWords = "";
let ranWords = "";

let sWords = [
  "apple", "alarm","crow","dolphin","cartoon","milk",
  "bird","ball", "cycle","doctore","salt","tortoise","lipard",
  "spider","penguin","parrot","deer","duck","goat","army","soldier", "player","snake",
  "tiger","cricket","hippopotamous","donkey",
  "elephant","football","baseball","tennis","carrom","cards",
  "jaguar","badminton","pineapple","orange","grape","stawberry","melon","sweet","choclate","chips","lolipop","watch","glass","hourse","house","puzzle",
  "lion", "rabbit", "pizza","burger", "fish", "octopus", "water","snow","chicken","zebra","sugar","noddles","icecream","carrot","lemon","ship","sheep","cloud","rain","thunder"
];

const createNewWord = () => {
  let randomNum = Math.floor(Math.random() * sWords.length);
  let temp = sWords[randomNum];
  return temp;
};

const scrumbleWord = (arr) => {
  for (var i = arr.length - 1; i > 0; i--) {
    let tempVar = arr[i];
    let j = Math.floor(Math.random() * (i + 1));

    arr[i] = arr[j];
    arr[j] = tempVar;
  }
  return arr;
};

btn.addEventListener("click", function () {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle("hidden");

    newWords = createNewWord();
    ranWords = scrumbleWord(newWords.split("")).join("");
    
    msg.innerHTML = ranWords;
    sc.innerHTML = `Your score is ${count}`
  } else {
    let tempWord = guess.value;
    
    if (newWords === tempWord) {
      console.log("correct");
      play = false;
      msg.innerHTML = `Awesome it's currect. it is ${newWords}`;
      sc.innerHTML=`Your score is ${++count}`
      btn.innerHTML = "Start Again";
      guess.classList.toggle("hidden");
      guess.value = "";
    } else {
      console.log("incorrect");
      msg.innerHTML = `sorry:) it's incurrect. Try Again 
            ${ranWords}`;
    }
  }
});


// CALCULATION OF SCRUMBLE WORD FUNCTION

// arr= 'a','n','t'; thats mean a=0,n=1,t=2;
// { 
// for(length-1 to brfore 0){
//   temp = arr[i]; first time 2(t)
//   j= math floor and random * i+1; that mean it generate a number between 2-3.
//   arr[i](t)=arr[j](assume j =1 thats mean n);
//   arr[2]= 'n' and in other hand .
//   arr[j](n)=temp; temp= 't'.
// }
//  return arr;}
