const sentence = "hello"; 

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(printer(printer(sentence[i])))
  }, i * 500)
}


const printer = (char) => {
  
    return char
  
};


// const timer = (str) => {
//   for (const char of str) {
//     process.stdout.write(printer(char));
//   }
// }

// timer(sentence);

// for (const item of sentence){
// setTimeout(() => {
//   for (const char of sentence) {
//     process.stdout.write(char);
//   }
// }, 50)
// }

// const typewriter = (str, cb) => {
  // for (const char of str) {
  //   cb(char);
  // }
// }

// typewriter(sentence, char => setTimeout(() => {
//      process.stdout.write(char)
//   }, 500,));

// while (i < sentence.length) {
//   setTimeout(() => {
//     process.stdout.write(sentence[i])
//     i++
//   }, 50)
// }

// for (let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(sentence[i])
//   }, 50)
// };

// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char)
//   }, 500)
// };