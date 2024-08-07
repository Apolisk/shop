


let theme = true;
document.getElementById("clic_me").onclick = function(){
    theme = !theme
    if(theme == true){
    document.body.style.background  = "white";
    document.body.style.color = "black";
    }else{
    document.body.style.background  = "black";
    document.body.style.color = "white";
    }
}