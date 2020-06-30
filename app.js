var key = document.getElementById("key");
var keyCode = document.getElementById("keyCode");
var code = document.getElementById("code");
window.addEventListener("keydown",function(e){
    console.log(e);
    key.innerHTML = e.key;
    keyCode.innerHTML = e.keyCode;
    code.innerHTML = e.code;
    var r = Math.floor(Math.random()* 255);
    var g = Math.floor(Math.random()* 255);
    var b = Math.floor(Math.random()* 255);
    

    if(e.keyCode == '38'){
        document.body.style.background = 'red';
    }else if(e.keyCode == '39'){
        document.body.style.background = 'blue';
    }
    else if(e.keyCode == '40'){
        document.body.style.background = 'green';
    }
    else if(e.keyCode == '37'){
        document.body.style.background = 'orange';
    }
    else if(e.keyCode ){
        document.body.style.background = `rgb(${r}, ${g}, ${b})`
    }

   

})