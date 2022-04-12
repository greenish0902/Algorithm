function solution(s) {
  let cnt = [];
  let arr = s
    .slice(2, -2)
    .split("},{")
    .map((elem) => elem.split(",").map(Number));
  arr.forEach((elem, idx) => {
    elem.forEach((val) => {
      if (!cnt[val]) cnt[val] = [0, val];
      cnt[val][0]++;
    });
  });
  cnt.sort((a, b) => b[0] - a[0]);
  cnt = cnt.map((elem) => elem[1]);
  let result = cnt.filter((elem) => {
    if (!elem) return false;
    return true;
  });
  return result;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
console.log(solution("{{20,111},{111}}"));
