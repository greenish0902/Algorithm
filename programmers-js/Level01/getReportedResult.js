function solution(id_list, report, k) {
  const users = {};
  const reported = {};
  const result = [...id_list].fill(0);

  // users init
  id_list.forEach((id) => (users[id] = new Set()));
  report.forEach((elem) => {
    const [a, b] = elem.split(" ");
    users[a].add(b);
  });

  // reported count
  Object.keys(users).forEach((name) => {
    [...users[name]].forEach((cur) => {
      if (!reported[cur]) reported[cur] = 1;
      else reported[cur]++;
    });
  });

  // get result
  Object.keys(users).forEach((name, idx) => {
    [...users[name]].forEach((repUser) => {
      if (reported[repUser] >= k) result[idx]++;
    });
  });
  return result;
}
