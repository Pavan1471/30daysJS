function account(){
   pin = document.getElementById("pass").value;
   if(pin.length == 0){
     alert("Plz enter pass");
   }
   
   else{
    document.write("Account successfully created")
   }
}