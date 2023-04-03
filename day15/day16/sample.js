// function myFunction() {
//     var x = document.getElementById("container");

//     if(x.style.display==="none"){
//         x.style.display="block";
//     }
//     else{
//         x.style.display="none";
//     }
     
//   }

function myFunction() {
    var x = document.getElementById("container");
    x.style.display === "block";
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }