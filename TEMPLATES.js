ar randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2 = location1+1;
var location3 = location2+1;
var guess;
var hit =0;
var guesses=0;
var isSunk=false;

while  (isSunk == false) {
  guess = prompt ("Ready, Set, and FIRE!(Enter a number 0 to 6)");
  if(guess < 0 || guess > 6){
    alert("Please enter a valid cell number!");
  } else {
      guesses = guesses + 1;

      if ( guess == location1 || guess == location2 || guess == location3 ) {

      alert("HIT!");
      hit = hit + 1;
      if (hit == location1,location2,location3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
      else {
        alert("MISS");
      }
      }
    }
}
var stats= "you took "+ guesses +  "guesses to sink the battleship which means"
 + " which your shooting accuracy was" + 3/guesses; alert (stats);

var WelcomeSign= alert("");
var clickBanner = Math.random, Math.floor, 
function dogYears (dogName, years){
  var years = age + 7;
  var brothersDog = "Sancho";
   var myDog = "Fido";
   var mothersDog = "Marian";
  console.log(dogName + " is " + years + " years old !");
}
dogYears(myDog, 11);
dogYears(mothersDog, 9); dogYears(brothersDog, 6);
