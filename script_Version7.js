let score = 0
let history = []

let stat0 = 0
let stat1 = 0
let stat10 = 0
let stat100 = 0

function addPoints(points){
  history.push(points)
  score += points
  if(points === 0) stat0++
  if(points === 1) stat1++
  if(points === 10) stat10++
  if(points === 100) stat100++
  updateDisplay()
}

function undo(){
  if(history.length === 0) return
  let last = history.pop()
  score -= last
  if(last === 0) stat0--
  if(last === 1) stat1--
  if(last === 10) stat10--
  if(last === 100) stat100--
  updateDisplay()
}

function resetScore(){
  score = 0
  history = []
  stat0 = 0
  stat1 = 0
  stat10 = 0
  stat100 = 0
  updateDisplay()
}

function updateDisplay(){
  document.getElementById("score").textContent = score
  let shots = history.length
  document.getElementById("shots").textContent = shots
  document.getElementById("stat0").textContent = stat0
  document.getElementById("stat1").textContent = stat1
  document.getElementById("stat10").textContent = stat10
  document.getElementById("stat100").textContent = stat100
  let success = stat10 + stat100
  document.getElementById("success").textContent = success
  let rate = shots > 0 ? Math.round((success/shots)*100) : 0
  document.getElementById("rate").textContent = rate
}

updateDisplay()