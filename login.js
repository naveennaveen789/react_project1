let num=document.getElementById("text")
let pass=document.getElementById("password")
let logbtn=document.getElementById("loginbtn")


logbtn.addEventListener("click",function(){
    var a=num.value
    var b=pass.value
    if(a=="" && b==""){
        console.log("enter value")
        console.log("enter password")
    }
    else if(a==""){
        console.log("enter value")
    }
    else if(b==""){
        console.log("enter password")
    }
    else{
        alert("successfully !!!!")
    }
})
