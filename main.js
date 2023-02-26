const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
const close=document.getElementById("close-icon");

if (bar){
    bar.addEventListener("click",()=>{
        nav.classList.add("active");
    });  
}
if (close){
    close.addEventListener("click", ()=>{
        nav.classList.remove("active");
    })
}

// Image Solid Show for sproduct page images//
const MainImg=document.getElementById("MainImg")
const smallImg=document.getElementsByClassName("small-img")

smallImg[0].onclick=function(){
    MainImg.src=smallImg[0].src;
}
smallImg[1].onclick=function(){
    MainImg.src=smallImg[1].src;
}
smallImg[2].onclick=function(){
    MainImg.src=smallImg[2].src;
}
smallImg[3].onclick=function(){
    MainImg.src=smallImg[3].src;
}


  