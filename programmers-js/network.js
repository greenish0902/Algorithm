function solution(n, computers) {
  var answer = 0;
  let network = [];
  let degree = new Array(n).fill(0);
  let visited = [];
  let queue = [];

  for (let i = 0; i < n; i++) {
    if (!computers[i].includes(0)) return 1;
    for (let j = i + 1; j < n; j++) {
      if (computers[i][j]) {
        if (!network[i]) network[i] = [];
        if (!network[j]) network[j] = [];
        network[i].push(j);
        network[j].push(i);
        degree[j]++;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!degree[i] && !visited[i]) {
      queue.push(i);
      while (queue.length) {
        let node = queue.shift();
        visited[node] = 1;
        if (!network[node]) continue;
        network[node].forEach((elem) => {
          if (!visited[elem]) queue.push(elem);
        });
      }
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]) == 2
);

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ]) == 1
);

console.log(
  solution(4, [
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [1, 0, 1, 1],
  ]) == 1
);
