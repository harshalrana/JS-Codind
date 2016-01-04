/**
 * Created by Harshal on 1/3/2016.
 */

// Code goes here
var rev = function(str){

    var revstr=[];
    var i;

    for(i=str.length-1;i>=0;i--){
        revstr=revstr+str[i];
    }
    console.log(revstr);
}

rev("My name is Harshal");