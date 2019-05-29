//Priority Queue

const { createQueue } = require('./index');

function createPriorityQueue(){
    const lowPriorityQueue = createQueue();
    const highPriorityQueue = createQueue();

    return {
        enqueue(item, isHighPriority = false){
            isHighPriority ? highPriorityQueue.enqueue(item) : 
            lowPriorityQueue.enqueue(item);
        },

        dequeue(){
            if (!highPriorityQueue.isEmpty()){
                return highPriorityQueue.dequeue();
            }
            return lowPriorityQueue.dequeue();
        },

        peek(){
            if (!highPriorityQueue.isEmpty()){
                return highPriorityQueue.peek();
            }
            return lowPriorityQueue.peek();
        },

        length(){
            return highPriorityQueue.length + 
                lowPriorityQueue.length ;
        },

        isEmpty(){
            return (highPriorityQueue.isEmpty() && 
                    lowPriorityQueue.isEmpty()
            );
        }
    }
}

const q = createPriorityQueue();

q.enqueue('A fix here');
q.enqueue('A fix there');
q.enqueue(' A new feature ');
