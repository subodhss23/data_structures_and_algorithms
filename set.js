/*Sets */

function mySet(){
    var collection = []; //var that will hold set

    //method that will check for the presenece of an element and return true or false
    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    };

    //method that will return all the values in the set
    this.values = function(){
        return collection;
    };

    //method that will add an element to the set
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
            return false;
    };

    //method that will remove an elmenet from a set
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
        }
    }
}