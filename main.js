var cardhands = [];

function addEl() {
  var newcardhands = [];
  var newcard = Number(prompt("newcard"));
  var check = false;
  for (var i = 0; i < cardhands.length; i++) {
    if (cardhands[i] < newcard) {
      newcardhands.push(cardhands[i]);
    } else {
      if (!check) {
        newcardhands.push(newcard);
        check = true;
      }
      newcardhands.push(cardhands[i]);
    }
  }
  return newcardhands;
}
