// insert to index value , make room
var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }   
    array[j + 1] = value; 
};
// main sort function , very simple  !!!
var insertionSort = function(array) {
    for(var i=1;i<array.length; i++)
    {
        insert(array,i-1,array[i]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);



var array2 = [22, 11, 99, 8, 9, 7, 42];
insertionSort(array2);
println("Array after sorting:  " + array2);

