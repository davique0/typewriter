const sentence = "hello this is my world"; 
let arr = sentence.split('');
arr.push('\n')
arr.map((x, i) => setTimeout(() => process.stdout.write(x), i * 200))