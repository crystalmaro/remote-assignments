// === Assignment 1: Callback Function
function delayedResult(n1, n2, delayTime, callback){
    setTimeout(function(){
        callback(n1+n2)
    }, delayTime)
};
delayedResult(4, 5, 3000, function(result){
    console.log(result);
});

/*
// initial try: return correct calculation, but no delay
// 1st arg of setTimeout needs to be a function
function delayedResult(n1, n2, delayTime, callback){
    let result = setTimeout(callback(n1+n2), delayTime)
};
*/

delayedResult(4, 5, 3000, function(result){
    console.log(result);
}); //9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function(result){
    window.alert(result);
}); //5 (-5+10) will be shown in an alert dialog after 2 seconds