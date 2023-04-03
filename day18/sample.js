function add(){
    document.getElementById("cart").innerHTML +=`
    

    <br>
    <div class="container">

    <img style="width: 40px; height: 40px;" src="35763-7-cherry-fruit-file-thumb.png" alt="">
    
        <div class="label">
            <div>Cherry</div>
            <div>300gm</div>
        </div>
        <div class="quantity">
            <button>+</button>
            <span>0</span>
            <button>-</button>

        </div>
        <div class="price">
            <div>Price</div>
            <div>127$</div>

        </div>
        <button onclick="remove()" class="remove"">X</button>


    </div>

    
</div>

    
    
    `
}



function addmango(){
    document.getElementById("cart").innerHTML +=`
    

    <br>
    <div class="container">

    <img style="width: 40px; height: 40px;" src="22136-3-mango-fruit-thumb.png" alt="">
    
        <div class="label">
            <div>Mango</div>
            <div>250gm</div>
        </div>
        <div class="quantity">
            <button>+</button>
            <span>0</span>
            <button>-</button>

        </div>
        <div class="price">
            <div>Price</div>
            <div>27$</div>

        </div>

        <button onclick="remove()" class="remove" >X</button>
    </div>

    
</div>

    
    
    `
}

function remove(){
    var current_tasks = document.querySelectorAll(".remove");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
}