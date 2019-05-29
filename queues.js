//first come first out FIFO

function createQueue(){
    const queue = [];

    return {

        add (item){
            queue.unshift(item)
        },

       remove (){
           return queue.pop()
       },

       peek(){
           return queue[queue.length - 1];
       },
       
       get length(){
           return queue.length;
       },

       isEmpty(){
           return queue.length === 0;
       }
    }
}

const q = createQueue();
q.add('Make an egghead lesson');
q.add('this is how I am learning data structure.');
q.add('In this month I will master data strucure.')

q.remove();
q.remove();
console.log(q.peek());
