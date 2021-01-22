let registered = localStorage.getItem("name");
let answer = localStorage.getItem("answer");
let guessed = localStorage.getItem("guessed");
if(guessed===null)
guessed = "";
let mistakes = localStorage.getItem("mistakes");
if(mistakes===null)
mistakes = 0;
let wordStatus = localStorage.getItem("wordStatus");
let score = localStorage.getItem('score');
if(score===null)
score = 0;

function domElement(){
    if(registered===null || registered===undefined){
      let maindiv=document.createElement('div');
      maindiv.classList.add('container', 'jumbotron', 'd-flex', 'align-items-center');
      let maindivrow=document.createElement('div');
      maindivrow.classList.add('row','mx-auto', 'p-4');
      let div1=document.createElement('div');
      div1.classList.add('col-12', 'text-center', 'mt-4', 'p-4');
      let img = document.createElement("img");
      img.setAttribute("src", "images/logo.png");
      img.setAttribute("class", "img-fluid");
      div1.appendChild(img);
      let div2=document.createElement('div');
      div2.classList.add('col-4', 'offset-4','text-center', 'mt-4', 'p-4');
      let lb=document.createElement('br');
      let h5text = document.createElement("h5");
      h5text.appendChild(document.createTextNode("Enter Nick"));
      div2.appendChild(h5text);
      let div2input=document.createElement('input');
      div2input.classList.add('form-control', 'input', 'text-center');
      div2input.setAttribute('id','username');
      div2input.setAttribute('type','text');
      div2input.setAttribute('placeholder','nickname');
      div2input.setAttribute('required','');
      div2.appendChild(div2input);
      let div3button=document.createElement('button');
      div3button.classList.add('btn', 'btn-primary');
      div3button.setAttribute('id','register');
      div3button.innerText='Play Game';
      div3button.setAttribute("onclick","registerUser()");
      div2.append(lb,div3button);
      maindivrow.append(div1,div2);
      maindiv.appendChild(maindivrow);
      document.body.appendChild(maindiv);
    }
    else{
    var e_0 = document.createElement("div");
    e_0.setAttribute("class", "container");
    var e_1 = document.createElement("div");
    e_1.setAttribute("class", "text-center");
    var e_2 = document.createElement("img");
    e_2.setAttribute("src", "images/logo.png");
    e_2.setAttribute("class", "img-fluid");
    e_1.appendChild(e_2);
    e_0.appendChild(e_1);
    var s = document.createElement("div");
    s.setAttribute("id","result");
    e_0.appendChild(s);
    var e_3 = document.createElement("div");
    e_3.setAttribute("class", "float-right");
    e_3.appendChild(document.createTextNode("Wrong Guesses: "));
    var e_4 = document.createElement("span");
    e_4.setAttribute("id", "mistakes");
    e_4.appendChild(document.createTextNode("0"));
    e_3.appendChild(e_4);
    e_3.appendChild(document.createTextNode(" of "));
    var e_5 = document.createElement("span");
    e_5.setAttribute("id", "maxWrong");
    e_5.appendChild(document.createTextNode("6"));
    e_3.appendChild(e_5);
    e_0.appendChild(e_3);
    var e_6 = document.createElement("div");
    e_6.setAttribute("class", "text-center");
    var e_7 = document.createElement("img");
    e_7.setAttribute("id", "hangmanPic");
    e_7.setAttribute("src", "./images/"+mistakes+".jpg");
    e_7.setAttribute("alt", "0");
    e_6.appendChild(e_7);
    var e_8 = document.createElement("br");
    e_6.appendChild(e_8);
    var e_9 = document.createElement("br");
    e_6.appendChild(e_9);
    var e_10 = document.createElement("h2");
    e_10.appendChild(document.createTextNode("Guess the Programming Language:"));
    e_6.appendChild(e_10);
    var e_11 = document.createElement("h3");
    e_11.setAttribute("id", "wordSpotlight");
    e_6.appendChild(e_11);
    var e_12 = document.createElement("br");
    e_6.appendChild(e_12);
    var e_13 = document.createElement("div");
    e_13.setAttribute("id", "keyboard");
    e_6.appendChild(e_13);
    var e_14 = document.createElement("br");
    e_6.appendChild(e_14);
    var e_15 = document.createElement("button");
    e_15.setAttribute("class", "btn btn-info");
    e_15.setAttribute("onclick", "reset()");
    e_15.appendChild(document.createTextNode("Reset Game"));
    e_6.appendChild(e_15);
    e_6.appendChild( document.createTextNode('\u00A0'));
    var e_16 = document.createElement("button");
    e_16.setAttribute("class", "btn btn-info");
    e_16.setAttribute("id", "hs");
    e_16.setAttribute("onclick", "highScore()");
    e_16.appendChild(document.createTextNode("High Scores"));
    e_16.style.display="none";
    e_6.appendChild(e_16);
    e_0.appendChild(e_6);
    document.body.append(e_0);
    }
}

async function randomWord() {
    let url = "https://finecoder.com/hangman.txt";
    let response = await fetch(url);
    let data = await response.text();
    let array = data.split(',');
    answer = array[Math.floor(Math.random() * array.length)];
    localStorage.setItem("answer",answer);
  }

  function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => {
      let dis = "";
      if(guessed.indexOf(letter)>=0)
      dis ="disabled";
      let btn = `
        <button
          class="btn btn-lg btn-primary m-2"
          id='` + letter + `'
          onclick="handleGuess('` + letter + `')" 
          `+ dis + `
        >
          ` + letter + `
        </button>
      `
      return btn;
    }
    ).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  }

  function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
    localStorage.setItem("wordStatus",wordStatus);
  }  

  function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter) === -1 ? guessed+=chosenLetter : null;
    localStorage.setItem("guessed",guessed);
    document.getElementById(chosenLetter).setAttribute('disabled', true);
    if (answer.indexOf(chosenLetter) >= 0) {
      guessedWord();
      checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
      mistakes++;
      localStorage.setItem("mistakes",mistakes);
      updateMistakes();
      checkIfGameLost();
      updateHangmanPicture();
    }
  }

    function checkIfGameWon() {
    if (wordStatus === answer) {
      updateScore();
      document.getElementById('wordSpotlight').innerHTML = 'Correct Guess !!';
      document.getElementById('keyboard').innerHTML = `<h2>Your Score: ${score}</h2>`;
      let sdiv = document.getElementById('result');
      sdiv.setAttribute("class","text-center alert alert-primary");
      sdiv.setAttribute("role","alert");
      sdiv.innerHTML = "Congratulations you won !!";
      document.getElementById("hs").style.display="inline";
      clearGame();
    }
  }
  
  function checkIfGameLost() {
    if (mistakes === 6) {
      document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
      document.getElementById('keyboard').innerHTML = `<h2>Your Score: ${score}</h2>`;
      let sdiv = document.getElementById('result');
      sdiv.setAttribute("class","text-center alert alert-warning");
      sdiv.setAttribute("role","alert");
      sdiv.innerHTML = "Oops you lost and hanged !! :(";
      document.getElementById("hs").style.display="inline";
      clearGame();
    }
  }

  function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
  }

  function updateHangmanPicture() {
    let imgsrc = './images/' + mistakes + '.jpg';
    document.getElementById('hangmanPic').src = imgsrc;
  }
   function clearGame(){
    answer = null,
    wordStatus = "";
    mistakes = 0;
    guessed = "";
    score = 0;
    document.getElementById('hangmanPic').src = './images/0.jpg';
    localStorage.removeItem("name");
    localStorage.removeItem("answer");
    localStorage.removeItem("guessed");
    localStorage.removeItem("mistakes");
    localStorage.removeItem("wordStatus");
    localStorage.removeItem("score");
   }
    function reset() {
      clearGame();
    location.reload();
  }

  async function updateScore(){
    score = 60 - (mistakes*10);
    localStorage.setItem("score",score);
    let uri = "https://5ffeaf57a4a0dd001701ae13.mockapi.io/hangman";
        try{
        let response = await fetch(uri, {
          method: "POST",
          body: JSON.stringify({name: registered,score: score}),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
      }catch(err){console.log(err)}
}
   function registerUser(){
     let name = document.getElementById('username').value;
    if(name===null || name===undefined || name===""){
       alert("Please enter nick to continue");
     }
     else{
     localStorage.setItem("name",name);
     window.location.href="index.html";
     }
   }
   function highScore(){
     window.location.href="highscores.html";
   }
  window.onload = async function(){
    if(answer===null)
    await randomWord();
    domElement();
   guessedWord();
   updateMistakes();
   generateButtons();
}