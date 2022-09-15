let btn1 =document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let id1 = document.getElementById("id1");
let id2 = document.getElementById("id2");

btn1.addEventListener(
    "click", ()=> {
        if(getComputedStyle(id1).display != "none"){
            id1.style.display = "none";
        }else {
            id1.style.dysplay = "block";
        }
    }
)

function buton() {
    if(getComputedStyle(id2).display != "none"){
        id2.style.display = "none";
    }else {
        id2.style.dysplay = "block";
    }
}

btn2.onmouseover = buton;
