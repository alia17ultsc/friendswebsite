var speed=3000;

var slide=0;
var slides=document.getElementsByClassName("slidephoto");
var changeslide=true;
showslides();

function hideallphotos(){
    for(var i=0; i<slides.length; i++){
        slides[i].style.display="none";
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
    timer= setTimeout(showslides, speed);

    
}

var t = 20;
var timer;

function clickbackbtn(){
    changeslide=false;
    if (slide==1)
        slide=slides.length;
    else
        slide=slide-1;
    hideallphotos();
    slides[slide-1].style.display="block";
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
     clearTimeout(timer);
    showslides();
    
}

function increasespeed(){
    if (speed<4000){
    speed+=500;
    showspeed();
    }
}

function decreasespeed(){
    if (speed>500){
    speed-=500;
    showspeed();
    }
}

function showspeed(){
    var showspeedtext=document.getElementsByClassName("currentspeed")[0];
    showspeedtext.textContent=`${speed/1000}x`;

}
