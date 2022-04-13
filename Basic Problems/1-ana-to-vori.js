//problem-1 ana to vori
function anaToVori(ana) {
  if (typeof ana != "number") {
    return "Please enter a number";
  }
  if (ana < 0) {
    return "Please enter any positive number";
  }
  var vori = ana / 16;
  return vori;
}
var myVori = anaToVori(32);
console.log(myVori);
