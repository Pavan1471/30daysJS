function currency(){
    if(document.getElementById("ubt").checked){

        con = document.getElementById("usdt").value;
        document.getElementById("price").innerHTML=con/79.4 +" $";




    }
    else if(document.getElementById("ebt").checked){

        con = document.getElementById("usdt").value;
        document.getElementById("price").innerHTML=con*0.011 +"EUR)";




    }
    function reset(){
        document.getElementById("price").innerHTML="refresh browser";

    }



    
}



