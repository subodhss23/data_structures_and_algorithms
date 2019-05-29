//creating a stack with array

let word = 'pop';
let arr = [];
let str = "";

//pushing the words in empty array
for (let i = 0; i < word.length; i++){
    arr.push(word[i]);
}
console.log(arr);


//poping letters and storing it in str
for (let i = 0; i < word.length; i++){
    str = str + arr.pop();
}
console.log(str);

if (word === str){
    console.log(`${word } is a palindrome.`)
} else {
    console.log(`${word } is not a palindrome.`)
}



//Creating a real stack :D
var Stack = function (){
    this.count = 0;
    this.storage = {};

    //Adding a value into the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    //Removes and returns the value at the end of the stack
    this.pop = function(){
        if (this.count === 0){
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    
    this.size = function(){
        return this.count;
    }
}
