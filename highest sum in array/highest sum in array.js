/**
 * Created by Harshal on 1/3/2016.
 */

var sum = function(c){

    var arr = c.sort();
    var total = 0;

    for(var i=arr.length-1;i>=arr.length-2;i--){

        total += arr[i];

    }
    console.log(total);
}

sum([1,2,3,4]);
