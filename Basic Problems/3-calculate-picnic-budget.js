//problem-3 picnic budget calculator
function picnicBudget(totalPeople) {
  if (typeof totalPeople != "number" || totalPeople < 0) {
    return "This parameter is not acceptable.";
  }
  var first100PeoplesCost = 5000;
  var second100PeoplesCost = 4000;
  var totalCost = 0;
  var totalCostOfFirst100People;
  var totalCostOfSecond100Peoples;
  var restPeoplesCost;

  if (totalPeople <= 100) {
    totalCost = first100PeoplesCost * totalPeople;
    return totalCost;
  } else if (totalPeople > 100 && totalPeople <= 200) {
    totalCostOfFirst100People = first100PeoplesCost * 100;
    restPeoplesCost = (totalPeople - 100) * second100PeoplesCost;
    totalCost = totalCostOfFirst100People + restPeoplesCost;
    return totalCost;
  } else {
    totalCostOfFirst100People = first100PeoplesCost * 100;
    totalCostOfSecond100Peoples = second100PeoplesCost * 100;
    restPeoplesCost = (totalPeople - 200) * 3000;
    totalCost = totalCostOfFirst100People + totalCostOfSecond100Peoples + restPeoplesCost;
    return totalCost;
  }
}

var totalPicnicCost = picnicBudget(250);
console.log(totalPicnicCost);
