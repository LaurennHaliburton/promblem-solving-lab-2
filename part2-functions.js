function dogToHumanYears(dogAge) {
    return dogAge * 7;}

    let dogAge = 3; 
console.log(dogToHumanYears(dogAge));

function calculateTip(total, tippercentage) {
    let tip = (total * (tippercentage / 100))
    return tip;
}

let total = 100;
let tippercentage = .18
console.log(calculateTip(total, tippercentage));

checkEvenOdd(7);
checkEvenOdd(4);

  function checkEvenOdd(num) {
    if (num % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
  }