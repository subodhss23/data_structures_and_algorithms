function createNode(value){
    return {
        value, 
        next: null
    }
}

function createLinkedList(){
    return {
        head = null,
        tail = null,
        length = 0,

        //push
        push(value){
            const node = createNode(value);

            if (this.head === null){
                this.head = node;
                this.tail = node;
                this.length++;
                return node;
            }

            this.tail.next = node;
            this.tail = node;
            this.length++;

            return node;
        },
        //pop
            pop(){
                //if list is empty
                if (this.isEmpty()){
                    return null;
                }

                //if list has one node only
                const node = this.tail;
                if (this.head === this.tail){
                    this.head = null;
                    this.tail = null;
                    this.length --;
                    return node;
                }

                let current = this.head;
                let penultimate;
                while (current){
                    if (current.next === this.tail){
                        penultimate = current;
                        break;
                    }

                    current = current.next;
                }

                penultimate.next = null;
                this.tail = penultimate;
                this.length--;

                return node;
            },
            
        //get
            get (index){
                if (index < 0 || index > this.length - 1){
                    return null;
                }

                if (index === 0){
                    return this.head;
                }
            },
            
        //delete
        isEmpty(){
            return this.length === 0;
        }
    }
}