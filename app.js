const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const score = document.querySelector('#score')
const startGameButton = document.getElementById('#startGameButton')
countDownTimerId = setInterval(countDown, 1000)

// sounds
const gameMusic = document.getElementById('game-music');

let timer = 30
let result = 0
let hitPosition
let timeLeft = 60
let timerId = null

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
  startGameMusic(); 
  currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   stopGameMusic();
   alert('GAME OVER! The final score is ' + result)
 }

}

function startGameMusic(){
  gameMusic.play();
}

function stopGameMusic(){
  gameMusic.pause();
  gameMusic.currentTime = 0
}

