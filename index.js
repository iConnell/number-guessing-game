function genDom(range){
  let diff = range - 1
  const ranNum = Math.floor(Math.random() * range) + 1
  console.log(ranNum)
  return ranNum;
}

function guessGame(range){
  let stage = 1
  let truthy = true
  
  do {
    var num = genDom(range)
    var inp = prompt("Enter a number: ")
  
    if (num == inp){
      console.log("Congratulations... you guessed right")
       range = range + 1
      stage = stage + 1
      console.log("You're now in stage " + stage)
    } else{
      console.log("Game Over")
      truthy = false
    }
  } while (truthy)
  
  
}

guessGame(2)