const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, ...cards] = input.map(BigInt);

  cards.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  let count = 1,
    maxCnt = 0,
    maxVal = BigInt(cards[0]),
    nextCard = undefined;

  cards.forEach((card, index) => {
    nextCard = cards[index + 1];
    if (card == nextCard) {
      count++;
    } else {
      count = 1;
    }
    if (count > maxCnt) {
      maxCnt = count;
      maxVal = card;
    }
  });

  console.log(maxVal.toString());
  process.exit();
});
