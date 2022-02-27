function solution(numbers, target) {
  var answer = 0;
  let visited = new Array(numbers.length);
  let results = [];
  for (let i = 0; i < visited.length; i++) visited[i] = [];
  dfs(0, 0, 0);
  for (let i = 0; i < visited.length; i++) visited[i] = [];
  dfs(0, 1, 0);
  results.forEach((elem) => {
    if (elem == target) answer++;
  });
  return answer;

  function dfs(node, idx, result) {
    visited[node][idx] = 1;
    if (idx == 0) result += numbers[node];
    if (idx == 1) result -= numbers[node];
    if (node == numbers.length - 1) {
      results.push(result);
      return;
    }
    dfs(node + 1, 0, result);
    dfs(node + 1, 1, result);
  }
}

console.log("solution([1, 1, 1, 1, 1], 3)", solution([1, 1, 1, 1, 1], 3));
console.log("solution([4, 1, 2, 1], 4)", solution([4, 1, 2, 1], 4));
