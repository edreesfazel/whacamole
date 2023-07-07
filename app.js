const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector("#score");

let result = 0;
let hitPosition
let currentTime = 60;
let timerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })

     
    let randomSquare = squares[Math.floor(Math.random() * 9)]; //generat e random square
    randomSquare.classList.add('mole'); // add mole class to random square

    hitPosition = randomSquare.id; // get the id of the random square with the mole;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () =>{
        if(square.id == hitPosition){
            result++;
            score.textContent = result; //show the score
            hitPosition = null; // clear the square
        }
    })
})

function moveMole() {

    timerId = setInterval(randomSquare, 500); //getting a random square with a mole every .5 seconds
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert("Game over! Your final score is " + result);
    }

}

let countDownTimerId = setInterval(countDown, 1000) // call the countDown function every 1 second