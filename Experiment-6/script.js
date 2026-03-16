let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("UserInput");

let fontsize = 16;

document.getElementById("ChangeTextBtn").addEventListener("click",function(){
    if(input.value !== ""){
        heading.innerHTML = input.value;
    }
});

document.getElementById("bgcolorBtn").addEventListener("click", function(){
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

document.getElementById("IncreaseSizeBtn").addEventListener("click",function(){
    fontsize +=2;
    paragraph.style.fontSize = fontsize + "px";
});

document.getElementById("DecreaseSizeBtn").addEventListener("click",function(){
    fontsize -=2;
    paragraph.style.fontSize = fontsize + "px";
});

document.getElementById("toggleBtn").addEventListener("click",function(){
    if(paragraph.style.display === "none"){
        paragraph.style.display = "block";
    }
    else{
        paragraph.style.display = "none";
    }
});

document.getElementById("ResetBtn").addEventListener("click",function(){
    heading.innerHTML = "Welcome to JavaScript";
    paragraph.style.fontSize = "16px";
    document.body.style.backgroundColor = "#537D96";
    paragraph.style.display = "block";
    input.value = "";
    fontsize = 16;
});