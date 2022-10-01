let para=document.getElementById("hidemenu");
let para1=document.getElementById("hammenu");
 if(para1.style.display=="flex")
para.style.display="none";
function hide() {
    if(para.style.display=="flex")
    para.style.display="none";
    else
    para.style.display="flex";
}