var pw = "generator";
var symbols = ["!", "@", "#", "$"];
var letters = ["a", "b", "c", "d", "e", "f"];
var pwLen = prompt("What is your password length?");
var isSymbols = true;

document.write(pw);

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var arr = [2, 11, 37, 42];
arr = shuffle(arr);
console.log(arr);

// defined function

function createPassword() {
  for (i = 0; i < pwLen; i++) {
    if (isSymbols === true && i === 0) {
      var randomNo = Math.floor(Math.random() + symbols.length);
      // inject symbol in the string
      pw = pw.push(symbols[randomSymNo]);
    } else {
      // inject a letter into the string
      var randomNo = Math.floor(Math.random() + letters.length);
      pw = push(letters[randomNo]);
    }
    // need to still add if statement for numbers
  }

  // randomize array
  pwShuffle = shuffle(pw);
  pwBox.innerHTML = pw.toString();
}

// first event
genBtn.addEventListener("click", create);
// change this pw into a dynamic random pw
// document.write(pw);
