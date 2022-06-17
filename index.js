let table = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
let allTds = document.querySelectorAll("td")
for(let td of allTds) {
  td.addEventListener("click",function() {
    let row = parseInt(td.id[0])
    let column = parseInt(td.id[1])
    let humanMove = canIMove(table, row, column)
    if (humanMove === false) {
      return 
    }

    table[row][column] = 1
    updateUI(row, column, true)
    console.log(table)
    let result = checkTable()
    if (result === 1 || result === 2) {
      resetTable()
      alert(`You ${result === 1 ? "won!" : "lost!"}`)
    } else if (result === 4) {
      alert("Draw!")
      resetTable()
    }

    makeComputerMove()
    result = checkTable()
    if (result === 1 || result === 2) {
      resetTable()
      alert(`You ${result === 1 ? "won!" : "lost!"}`)
    } else if (result === 4) {
      alert("Draw!")
      resetTable()
    }

    console.log(result)
  })
}

function checkTable() {
  let humanWin = "111"
  let machineWin = "222"
  let gameResult = undefined
  
  for (let i = 0; i < table.length; i++) {
    let row = table[i].join("")
    if (humanWin == row) {
      gameResult = 1
    } else if (machineWin == row) {
      gameResult = 2
    }

    let column = ""

    for (let j = 0; j < table.length; j++) {
      column += table[j][i]
    }

    if (column === humanWin) {
      gameResult = 1
    } else if (column === machineWin) {
      gameResult = 2
    }
  }
  let diagonal1 = `${table[0][0]}${table[1][1]}${table[2][2]}`
  let diagonal2= `${table[0][2]}${table[1][1]}${table[2][0]}`
  if (diagonal1 === humanWin || diagonal2 === humanWin) {
    gameResult = 1
  } else if (diagonal1 === machineWin || diagonal2 === machineWin) {
    gameResult = 2
  }

  let fullCells = 0 

  for (let k = 0; k < table.length; k++) {
    for (let l = 0; l < table.length; l++) {
      if (table[k][l] !== 0) {
       fullCells++
      }
    }
  }

  if (gameResult === undefined && fullCells === 9) {
    gameResult = 4
  } else if (gameResult !== 1 && gameResult !== 2){
    gameResult = 3
  }

  return gameResult
}

function resetTable() {
  table = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ]
}

function updateUI(row, column, isHuman) {
  let id = `${row}${column}`
  let td = document.getElementById(id)
  let image =  document.createElement("img")
  let path = ""

  if (isHuman === true) {
    path = "./images/o.png"
  } else {
    path = "./images/x.png"
  }

  image.setAttribute("src", path)

  if (td.hasChildNodes() === false) {
    td.appendChild(image)
  }
}

function makeComputerMove() {
  let row = Math.floor(Math.random(0,3) * 3)
  let column = Math.floor(Math.random(0,3) * 3)

  while (table[row][column] !== 0) {
    row = Math.floor(Math.random(0,3) * 3)
    column = Math.floor(Math.random(0,3) * 3)
  }
  
  table[row][column] = 2
  updateUI(row, column, false)
}

function canIMove(table, row, col) {
  let numberOfHumanMoves = 0
  let numberOfComputerMoves = 0
  let isCellFree = table[row][col] === 0;

  for(let i = 0; i < table.length; i++) {
      for(let j = 0; j < table.length; j++) {
          if(table[i][j] === 1) {
              numberOfHumanMoves++
          } else if(table[i][j] === 2) {
              numberOfComputerMoves++
          }
      }
  }

  
  if(numberOfHumanMoves === numberOfComputerMoves && isCellFree) {
      return true
  } 

  return false
}