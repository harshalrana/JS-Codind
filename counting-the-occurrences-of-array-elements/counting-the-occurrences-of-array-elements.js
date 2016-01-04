/**
 * Created by Harshal on 1/3/2016.
 */

var counter = function(x){

    var arr = x.sort();
    var i;
    var count=1;
    var prev;
    var b=[];

    for(i=0;i<arr.length;i++){

        if(arr[i] != prev){
            console.log("Unique Element:" + arr[i]);
            b.push(1);
        }
        else{
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    console.log(b);
}

counter([1,2,3,3,3,3,3,2,2]);
