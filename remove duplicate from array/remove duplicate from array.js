/**
 * Created by Harshal on 1/3/2016.
 */

var duplicate = function(x){

    var arr = x.sort();
    var unique = [];
    for(var i=0;i<arr.length;i++){

        if(arr[i] != arr[i+1]){
            unique.push(arr[i]);
        }
    }

    console.log(unique);
}

duplicate([1,3,3,3,1,5,6,7,8,1]);