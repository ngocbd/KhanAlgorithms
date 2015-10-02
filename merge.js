// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];
var a = [],
        b = [],
        c = p,
        d, e;
    for (d = 0; c <= q; d++, c++) {
        a[d] = array[c];
    }
    for (e = 0; c <= r; e++, c++) {
        b[e] = array[c];
    }
    c = p;
    e = d = 0;
    while ( d < a.length && e < b.length) {
        if (a[d] < b[e]) {
            array[c] = a[d];
            d++;
        } else {
            array[c] = b[e];
            e++;
        }
        c++;
    }
    while ( d < a.length) {
        array[c] = a[d];
        d++;
        c++;
    }
    while ( e < b.length) {
        array[c] = b[e];
        e++;
        c++;
    }
    
};


var array = [3, 7, 12, 14, 2, 6, 9, 11];
merge(array, 0,
    Math.floor((0 + array.length-1) / 2),
    array.length-1);
println("Array after merging: " + array);
//Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);
