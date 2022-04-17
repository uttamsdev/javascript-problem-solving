//problem-4
function oddFriend(friends) {
  if (Array.isArray(friends) != true) {
    return "Your input must be an array.";
  }

  for (const friend of friends) {
    length = friend.length;
    if (length % 2 != 0) {
      return friend;
    }
  }
  return "There is no odd length of your friends name..";
}
var myFriends = ["Luna", "Sahkib", "Akib", "Jolil", "Komol", "Oggy"];
var friend = oddFriend(myFriends);
console.log(friend);
