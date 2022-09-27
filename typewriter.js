const sentence = "hello there from lighthouse labs";
let i = 1;
for (const char of sentence) { 
  i++; 
  setTimeout(() => process.stdout.write(char), i * 50);
}
setTimeout(() => {
  console.log('');
}, (i + 1) * 50);

