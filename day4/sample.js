//string methods toUppercase,toLowercase,reverse,length,split,slice,trim,charAt

let  text ="Hello";
var result = text.toUpperCase();
console.log(result)
var result = text.toLowerCase();
console.log(result)
var result = text.concat(" world");
console.log(result)
var result = text.length;
console.log(result)

var result = text.charAt(1);
console.log(result)
var result = text.slice(0,2);
console.log(result)
var result = text.replace("world");
console.log(result)

//Arrays in javascript

let fruits=["apple","orange","lemon","graphs"];
//Array length
console.log(fruits.length)
//Accessing array elements
console.log(fruits[2])
//assigning
fruits[2]="cherry";
console.log(fruits[2])

//Array methods

fruits.push("water melon") //push() adds an element
console.log(fruits) 
fruits.pop(); //pop() removes last element
console.log(fruits) 
fruits.unshift("papaya") //unshift() add elemt to beginning
console.log(fruits) 
fruits.shift() //shift() remove element at the beginning
console.log(fruits) 

//Checked property
function subscribe(){
    if(document.getElementById("check").checked){

        document.write("Thanks for subscribe")

    }
    else{
        document.write("Plz subscribe")
    }
}


//this keyword

var car={
    name:"tesla",
    number:"728",
    price:"72$",
    sample:function(){
        console.log(car.price);
    }


    
 
}


