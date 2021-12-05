const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const timer1 = async function () {
  const page = readline.createInterface({ input, output });
  let msg = "please enter interval time ";
  let intervals = await new Promise((resolve, reject) => {page.question(msg, resolve);});

  let myChar = '\x07';
  let start = Number(intervals);
  let id = setInterval(function () { process.stdout.write(myChar);}, start);

 // page.close();
  process.stdin.on('data', function (chunk) {
    process.stdout.write(`\n  ${chunk}`);
    if (Object.values(chunk)[0] === Object.values(Buffer.from("q"))[0]) {
      clearInterval(id);
      console.log("");
      page.close();
    }
  });
}
timer1();
