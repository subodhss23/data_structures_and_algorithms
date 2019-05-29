//first come first out FIFO

function createQueue(){
    const queue = [];

    return {

        add (item){
            queue.unshift(item)
        },

       remove (){
           return queue.pop()
       }

        // add or enqueue
        // remove or dequeue
        // peek
        // length
        // isEmpty
    }
}