const sentence = "hello"; 
let arr = sentence.split('');
arr.map((x, i) => setTimeout(() => process.stdout.write(x), i * 200))

