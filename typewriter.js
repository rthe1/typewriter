const sentence = "hello there from lighthouse labs";
let delay = 100;
let increment = 300;

for (let char of sentence) {

  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, delay);
  delay += increment

}