const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, ...files] = input;
  const fileName = files.map((file) => file.split(".")[1]);

  let prevName = undefined;
  let count = 0;
  let str = "";

  fileName.sort();
  fileName.forEach((name, idx) => {
    if (name == prevName) {
      count++;
      if (idx == fileName.length - 1) {
        str += prevName + " " + count + "\n";
      }
    } else {
      if (idx != 0) str += prevName + " " + count + "\n";
      count = 1;
      prevName = name;
      if (idx == fileName.length - 1) str += prevName + " " + count + "\n";
    }
  });
  console.log(str);
  process.exit();
});
