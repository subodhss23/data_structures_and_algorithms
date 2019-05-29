let letters = [];
let word = "pop";
let rword = "";

//putting letters of word in stack
for (i = 0; i < word.length; i++){
    letters.push(word[i]);
}
console.log(letters);


//pop off the stack in the reverse order
for (i = 0; i < word.length; i++){
    rword = rword + letters.pop();
}
console.log(rword);


if(rword === word){
    console.log(`${word} is a palindrome.`)
}else{
    console.log(`${word} is not a palindrome.`)
}