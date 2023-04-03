function Myfunction(num1,num2){
    var sum = num1+num2;
    return sum;

}
console.log(Myfunction(321,321));





let username;
document.getElementById("btn").onclick=function(){
    username = document.getElementById("Text").value;
    console.log(username);

    if(username==33){
        document.getElementById("tt").innerHTML="Password is correct";
    }
    else{
        console.log("You entered incorrect password");
    }
}


function numb1(){
  const add1= document.getElementById("number1").value;
  const add2= document.getElementById("number2").value;
   
   console.log(add1 + add2);

}
