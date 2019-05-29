//Stacks

function createStack(){
    const array = [];

    return {
        // push 
        push(item){
            array.push(item)
        },

        pop(){
            return array.pop();
        },

        peek(){
            return array[array.length - 1]; 
        },

        get length(){
            return array.length;
        },

        isEmpty(){
            return array.length === 0;
        }
    }
}

const num = createStack();

num.push(1);
num.push(2);
num.push(3);

num.pop();
num.pop();
console.log(num.peek());
console.log(num.length);
console.log(num.isEmpty());