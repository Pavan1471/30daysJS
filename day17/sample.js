










function login(){
   var password =  document.getElementById("password").value;
   
  
   if(password.length<=8){
   
    alert("PLz enter a correct password");
    
document.querySelector("#password").style.border="3px solid red ";
document.getElementById("password").value="";
    
   }
   else {
    alert("login successful..!");
   }
}