# Projects related to DOM

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button) {
  console.log(button)
  button.addEventListener('click', function(e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white') {
      body.style.backgroundColor = e.target.id
    }
  })
})

```

## project 2
```javascript

const form = document.querySelector('form')
//This use case will give empty value
//const height = parseInt(document.querySelector("#height").value)

form.addEventListener('submit', function(e) {
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)

  const weight = parseInt(document.querySelector("#weight").value) 

  const results = document.querySelector("#results")

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = "Please enter a valid weight";
  } else {const bmi = (weight / ((height*height)/10000)).toFixed(2);
  results.innerHTML = `<span>${bmi}</span>`;
  }
})

```

## project 3

```javascript
const clock = document.getElementById("clock")
//const clock = document.querySelector("#clock")




setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)

```

## project 4

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1)

const submitButton = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guesses = document.querySelector(".guesses")
const remainingGuesses = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")


const p = document.createElement("p")

let prevGuess = []
let numGuess = 1

let playGame = true 

if(playGame) {
  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}


function validateGuess(guess) {
  //to validate the guess input submitted by the user
  if (isNaN(guess)) {
    alert("Please enter a valid number")
  } else if (guess < 1) {
    alert("Please enter a number greater than 1")
  } else if (guess > 100) {
    alert("Please enter a number less than 100")
  } else {
    prevGuess.push(guess)
    if (numGuess === 11) {
      displayGuess(guess)
      displayMessage(`Game over. Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  //Check guess will check the guess input with the 
  //random number and with the help of displayMessage
  //function will display the message accordingly
  if (guess === randomNumber) {
    displayMessage("You guessed it right")
    endGame()
  } else if (guess < randomNumber) {
    displayMessage("Number is tooo low")
  } else if (guess > randomNumber) {
    displayMessage("Number is tooo high")
  } 
}

function displayGuess(guess) {
  //will do all the DOM things like clean the value 
  //after submit action. it will update the values for
  //previous guesses and remaining guesses
  userInput.value = "";
  guesses.innerHTML += `${guess}, `;
  numGuess++;
  remainingGuesses.innerHTML = `${11- numGuess}`;
}

function displayMessage(message) {
  //This will display the messages
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function(e) {
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = [];
    numGuess = 1;
    guesses.innerHTML = ""
    remainingGuesses.innerHTML = `${11- numGuess}`;
    userInput.removeAttribute("disabled")
    startOver.removeChild(p)
    playGame = true;

  });
}





```