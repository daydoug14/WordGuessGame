var wordList = ["love", "tennis", "mcenroe", "connors", "ballboy", "game", "doublefault", "usopen", "wimbledon", "paris", "london", "advantage", "frenchopen","baseline", "gamepoint", "melbourne", "sampras", "federer", "nadal", "volley", "serve", "stroke", "chairump", "linejudge", "trophy"];
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var lettersGuessed = [];


document.onkeyup = function(event) {

    var userGuess = event.key;
   
    var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
    var blanks = "";
        console.log(computerChoice + "+" + computerChoice.length)
    for( var i =0; i<computerChoice.length; i++){
            blanks +="_ "
    };
    console.log(blanks);

    document.querySelector("#wordBlank").innerHTML = "Guess:  " +blanks;
   //-------After this point I was not successful
//    let textForm = document.querySelector('.textForm');
//    textForm.addEventListener('submit', function(event) {

//     var counter = 10;
//     var triedCharacters = [];
//     var correctCharacters = [];
  
//     event.preventDefault();
//     guesses = character.value  

//         for (z = 0; z < userGuess.length; z++) {
//             if (userGuess[z] === computerChoice[i]) {
//                 correctCharacters.push(guesses[z])
//                 console.log("correct " + correctCharacters)
//             } 
//             else {
//                 triedCharacters.push(userGuess[z])
//                 console.log("incorrect " + triedCharacters)
//             }
//         };
    })
}
