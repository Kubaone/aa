const cards = require("./cards");

const newCard = params => {
  // if (params.cash > 0) {
  //   return cards[0];
  // } else if (params.cash < 0) {
  //   return cards[1];
  // } else {
  //   return cards[2];
  // }
  return cards[Math.floor(Math.random() * cards.length)];
};

module.exports = {
  newCard
};
