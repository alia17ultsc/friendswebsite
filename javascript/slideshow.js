var slide=0;
showslides();

function showslides(){
    var slides=document.getElementsByClassName("slidephoto");
    var circles=document.getElementsByClassName("circle");
    for(var i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    slide++;
    if(slide>slides.length){
        slide=1;
    }
    
    for(var i=0; i<circles.length; i++){
        circles[i].className=circles[i].className.replace(" active", "");
    }
    slides[slide-1].style.display="block";
    circles[slide-1].className+=" active";
    setTimeout(showslides, 5000);
    
    
    
}

var t = 20;

function circlesup(){
    var cont=document.getElementsByClassName("switchslide")[0];
    cont.style.bottom=t + "vh"
    t+=2;
      setTimeout(circlesup, 500);
}
