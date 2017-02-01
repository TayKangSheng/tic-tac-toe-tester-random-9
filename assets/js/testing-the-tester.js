function TTT () {
  var grid = [] //  array to represent the tic tac toe grid
  var player = 1 // variable to track who current player is

  function isGameOver () {
  // It should return a true or false if the game is over.
    if (whoWon()) {
      return true
    } else {
      return false
    }
  }

  function whoWon () {
  // It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. It should return 3 if the game is a draw.
    if (grid[0] && grid[0] === grid[1] && grid[1] === grid[2]) {
      return grid[0]
    } else if (grid[3] && grid[3] === grid[4] && grid[4] === grid[5]) {
      return grid[3]
    } else if (grid[6] && grid[6] === grid[7] && grid[7] === grid[8]) {
      return grid[6]
    } else if (grid[0] && grid[0] === grid[3] && grid[3] === grid[6]) {
      return grid[0]
    } else if (grid[1] && grid[1] === grid[4] && grid[4] === grid[7]) {
      return grid[1]
    } else if (grid[2] && grid[2] === grid[5] && grid[5] === grid[8]) {
      return grid[2]
    } else if (grid[0] && grid[0] === grid[4] && grid[4] === grid[8]) {
      return grid[0]
    } else if (grid[2] && grid[2] === grid[4] && grid[4] === grid[6]) {
      return grid[2]
    } else if (grid[0] && grid[2] && grid[3] && grid[4] && grid[5] && grid[6] && grid[7] && grid[8]) {
      return 3
    } else {
      return 0
    }
  }

  function playTurn (index) {
    // It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played.
    // It should return a boolean value to indicate whether the move was allowed or not - true if it was successful, false otherwise e.g. if the square is already taken or the game is over.
    if (grid[index] === undefined) {
      if (player === 1) {
        grid[index] = player
        // console.log(player)
        player = 2
      } else {
        grid[index] = player
        // console.log(player)
        player = 1
      }
      return true
    } else {
      return false
    }
  }

  function restart () {
  // It should restart the game so it can be played again.
    grid = []
    player = 1
  }

  function getPlayer () {
    return player
  }
  return {
    isGameOver: isGameOver,
    whoWon: whoWon,
    playTurn: playTurn,
    restart: restart,
    grid: grid,
    getPlayer: getPlayer,
    // player: player
  }
}

window.addEventListener('DOMContentLoaded', function () {
  var ticTacToe = TTT()

  // an array containing divs
  var boxes = document.querySelectorAll('.container > div')
  var message = document.querySelector('h2')
  var resetBtn = document.querySelector('button')
  // iterate through array
  boxes.forEach(function (square) {
    // click handler for each div
    square.addEventListener('click', function () {
      if (ticTacToe.whoWon() === 0) {
        if (ticTacToe.playTurn(square.id)) {
          // console.log(ticTacToe.getPlayer())
          if (ticTacToe.getPlayer() === 1) {
            square.textContent = 'o'
            message.textContent = 'Player One\'s turn'
            // ticTacToe.player = 2
          } else {
            square.textContent = 'x'
            message.textContent = 'Player Two\'s turn'
            // ticTacToe.player = 1
          }
        }
      }
      if (ticTacToe.whoWon() === 1) {
        message.textContent = 'Player One won!'
      } else if (ticTacToe.whoWon() === 2) {
        message.textContent = 'Player Two won!'
      } else if (ticTacToe.whoWon() === 3) {
        message.textContent = 'It\'s a draw!'
      }
    })
  })
  resetBtn.addEventListener('click', function () {
    // if (ticTacToe.isGameOver()) {
    ticTacToe.restart()
    message.textContent = 'Let\'s Play!'
    boxes.forEach(function (square) {
      square.textContent = ''
    })
    // }
  })
})
