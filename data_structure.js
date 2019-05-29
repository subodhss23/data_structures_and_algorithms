/*Stacks*/
//functions: push, pop, peek, length
// an array can be used to store to make stacks

var letters = [];
var word = 'racecar';
var rword = "";

//putting letters of word into stack
for (var i = 0; i < word.length; i++){
    letters.push(word[i]);
}

//pop off the stack in reverse order
for (var i = 0; i < word.length; i++){
    rword = rword + letters.pop();
}

if (rword === word){
    console.log(word + " is a palindrome.");
}else{
    console.log(word + " is not a palindrome.");
}


//palindrome