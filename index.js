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
  })
}