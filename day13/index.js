

var data =0
document.getElementById("quantity").innerText=data;
    
function decrement(){

    if(data>0){
    data = data-1;
    document.getElementById("quantity").innerText=data;

    var cost = data*12;
    document.getElementById("pri").innerText=`${cost} ₹`;
    }
   
}
function increment(){

    if(data>=0){
    data = data+1;
    document.getElementById("quantity").innerText=data;

    var cost = data*12;
    document.getElementById("pri").innerText=`${cost} ₹`;
    }
}




