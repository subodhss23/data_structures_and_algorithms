//manipulating queues with object oriented programming 

class CreateQueue{
    constructor(item){
        this.item = item;
        this.queue = [];
    }

    add(item){
        return this.queue.unshift(item);
    }

    remove(){
        return this.queue.pop();
    }

    get length(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length === 0;
    }
}

const a = new CreateQueue();
console.log(a.isEmpty());

a.add('adding new element in our array ');
a.add('this has to be the second one. ');

a.remove();
console.log(a.length);
