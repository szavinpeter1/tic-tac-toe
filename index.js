let table = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
let allTds = document.querySelectorAll("td")
for(let td of allTds) {
  //  console.log(td.id)
  td.addEventListener("click",function() {
      console.log(td.id)
    let row = parseInt(td.id[0])
    let column = parseInt(td.id[1])
    table[row][column] = 1
    console.log(table)
    let result = checkTable()
    if (result === 1 || result === 2) {
      resetTable()
    }
  })
}
function checkTable() {
  let humanWin = "111"
  let machineWin = "222"
  
  for (let i = 0; i < table.length; i++) {
    let row = table[i].join("")
    if (humanWin == row) {
      console.log("you won" + row)
      alert("You won!")
      return 1
    } else if (machineWin == row) {
      console.log("you lose" + row)
      alert("You lost!")
      return 2
    } else {
      console.log("ongoing game")
    }

    let column = ""

    for (let j = 0; j < table.length; j++) {
      column += table[j][i]
    }
    if (column === humanWin) {
      console.log("You won")
      alert("You won!")
      return 1
    } else if (column === machineWin) {
      console.log("You lost")
      alert("You lost!")
      return 2
    }
  }
  let diagonal1 = `${table[0][0]}${table[1][1]}${table[2][2]}`
  let diagonal2= `${table[0][2]}${table[1][1]}${table[2][0]}`
  if (diagonal1 === humanWin || diagonal2 === humanWin) {
    console.log("You won")
    alert("You won!")
    return 1
  } else if (diagonal1 === machineWin || diagonal2 === machineWin) {
    console.log("You lost")
    alert("You lost!")
    return 2
  }
}

function resetTable() {
  table = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ]
}