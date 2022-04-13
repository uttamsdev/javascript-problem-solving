//problem-2 PandaCost
function pandaCost(singaraQuantity, somucaQuantity, jilapiQuantity) {
  if (singaraQuantity < 0 || somucaQuantity < 0 || jilapiQuantity < 0) {
    return "Please enter valid number.";
  }
  if (
    typeof singaraQuantity != "number" ||
    typeof somucaQuantity != "number" ||
    typeof jilapiQuantity != "number"
  ) {
    return "Please enter valid number.";
  }
  singaraPrice = 7;
  somucaPrice = 10;
  jilapiPrice = 15;

  var totalPrice = singaraQuantity * singaraPrice + somucaQuantity * somucaPrice + jilapiQuantity * jilapiPrice;
  return totalPrice;
}

var myOrder = pandaCost(5, 6, 3);
console.log(myOrder);
