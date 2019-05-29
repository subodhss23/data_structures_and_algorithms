// Priority Queue

const { createQueue } = require('./queues');

function createPriorityQueue(){
    const lowPriorityQueue = createQueue();
    const highPriorityQueue = createQueue();

    return {
       enqueue(item, isHighpriority = false){
        isHighpriority 
        ? highPriorityQueue.enqueue(item) 
        : lowPriorityQueue.enqueue(item);
       },

       dequeue(){
           if (!highPriorityQueue.isEmpty()){
               return highPriorityQueue.dequeue();
           }

           return lowPriorityQueue.peek()
       },

       length(){
           return highPriorityQueue.length + 
           lowPriorityQueue.length;
       },

       isEmpty(){
           return (
               highPriorityQueue.isEmpty() && 
                lowPriorityQueue.isEmpty()
           );
        }
        }
    }