var speed=3000;

var slide=0;
     var slides=document.getElementsByClassName("slidephoto");
    var circles=document.getElementsByClassName("circle")
var changeslide=true;
showslides();

function hideallphotos(){
;
    for(var i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
      for(var i=0; i<circles.length; i++){
        circles[i].className=circles[i].className.replace(" active", "");
    }
}



function showslides(){
    hideallphotos();
    if (changeslide==true)
    {  
        slide++;
        if(slide>slides.length)
        {
            slide=1;
        }
    }
   changeslide=true;
    slides[slide-1].style.display="block";
    circles[slide-1].className+=" active";
    timer= setTimeout(showslides, speed);

    
}

var t = 20;
var timer;


function circlesup(){
    var cont=document.getElementsByClassName("switchslide")[0];
    cont.style.bottom=t + "vh"
    t+=2;
    setTimeout(circlesup, 500);
}

function clickbackbtn(){
    changeslide=false;
    if (slide==1)
        slide=slides.length;
    else
        slide=slide-1;
    hideallphotos();
    slides[slide-1].style.display="block";
    circles[slide-1].className+=" active";
    clearTimeout(timer);
    showslides();
}


function clicknextbtn(){
    if (slide==slides.length)
        slide=1
    else
        slide=slide+1;
    hideallphotos();
    slides[slide-1].style.display="block";
    circles[slide-1].className+=" active";
     clearTimeout(timer);
    showslides();
    
}


function clickcircle(slideNumber){
    slide=slideNumber;
    hideallphotos();
    slides[slide-1].style.display="block";
    circles[slide-1].className+=" active";
     clearTimeout(timer);
    showslides();
}


function increasespeed(){
    speed+=500;
}

function decreasespeed(){
    speed-=500;
}
