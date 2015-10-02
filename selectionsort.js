// swap to value at index in array
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};
// find index of indexOfMinimum element
var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 
// main sort function , it very simpe 
var selectionSort = function(array) {
    for(var i =0 ; i < array.length ; i++)
    {
       var indexOfMin =  indexOfMinimum(array,i);
       swap(array,indexOfMin,i);
    }
    return array;
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);
var array2 = [9,8,7,6,5,4,3,2,1];
selectionSort(array2);