const sentence = "hello this is my world"; 
let arr = sentence.split('');
arr.map((x, i) => setTimeout(() => process.stdout.write(x), i * 200))