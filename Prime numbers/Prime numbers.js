/**
 * Created by Harshal on 1/3/2016.
 */

function prime(n){

    var Flag;
    console.log(Math.round(Math.sqrt(n)));

    for(var i=2;i<Math.round(Math.sqrt(n));i++){

        if(n % i==0){
            Flag = 0;
        }
    }
    console.log(Flag);

    if(Flag==0){
        console.log("Not a Prime Number");

    }
    else{
        console.log("Prime Number");
    }
}


prime(113);