function solution(numbers, hand) {
  let result = "";
  let [curLeft, curRight] = ["*", "#"];
  const keypad = {};
  let i = 0,
    j = 0;
  [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].forEach((item) => {
    keypad[item] = [i, j];
    j++;
    if (j === 3) {
      i++;
      j = 0;
    }
  });

  for (let i = 0; i < numbers.length; i++) {
    result += getFinger(numbers[i], hand);
  }
  return result;

  function getFinger(num, hand) {
    switch (num) {
      case 1:
      case 4:
      case 7:
        curLeft = num;
        return "L";
      case 3:
      case 6:
      case 9:
        curRight = num;
        return "R";
      default:
        if (nearest(num, hand) === "left") {
          curLeft = num;
          return "L";
        } else {
          curRight = num;
          return "R";
        }
    }
  }

  function nearest(num, hand) {
    const left = getDist(keypad[curLeft], keypad[num]);
    const right = getDist(keypad[curRight], keypad[num]);
    return left === right ? hand : left < right ? "left" : "right";
  }
  function getDist(cur, end) {
    return Math.abs(cur[0] - end[0]) + Math.abs(cur[1] - end[1]);
  }
}
