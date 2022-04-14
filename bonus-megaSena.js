function sort() {
  return Math.round(Math.random() * 100);
}

function arrNumbers() {
  let numbers = [];

  for (let index = 0; index < 60; index++) {
    numbers.push(index + 1);
  }
  return numbers;
}

function sortNumbers() {
  let game = [];
  let number = 1;

  while (number <= 6) {

    let randomNumber = sort();
    let findNumber = false

    if(randomNumber !== 0 && randomNumber <= 60) {
      for(position = 0; position < game.length; position++) {
        if(game[position] === randomNumber) {
          findNumber = true;
          break
        }
      }

      if(!findNumber) {
        game.push(randomNumber)
        number++
      }
    }
  }

  console.log("Os números da sorte são: " + game);
}

console.log(sortNumbers(arrNumbers()));