//arrary to sort
var array = [9,1,2,5,6,3,4,8,7]

function insertionSort(array){
    for (var i = 0; i < array.length; i ++){
        var temp = arrar[i];
        var j = i - 1;
        while (j >= 0 && array[j] > temp){
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
}

console.elog(insertionSort(array));