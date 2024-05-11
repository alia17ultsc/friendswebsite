var color="#483d8b";
var red=72;
var green=61;
var blue=139;
var redincrease=true;
var reddirection=true;
var greenincrease=false;
var greendirection=true;
var blueincrease=false;
var bluedirection=true;

change_color()
function rgbToHex(r, g, b) {
    const toHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return '#' + toHex(r) + toHex(g) + toHex(b);
}


function change_color(){
    var aliaslife=document.getElementsByClassName("changecolor")[0];
    
    if (reddirection==true){          
       
        redincrease=!redincrease;
        reddirection=false;
        
    }
  
    if (redincrease==true){
        red+=2;
    }
    else{
        red-=1;
    }
    
    if (reddirection==false && red>170 && redincrease==true){
        reddirection=true;
    }
    
    if (reddirection==false && red<30 && redincrease==false){
        reddirection=true;
    }
    
    
    
     if (greendirection==true){          
       
        greenincrease=!greenincrease;
        greendirection=false;
        
    }
  
    if (greenincrease==true){
        green+=1;
    }
    else{
        green-=1;
    }
    
    if (greendirection==false && green>190 && greenincrease==true){
        greendirection=true;
    }
    
    if (greendirection==false && green<50 && greenincrease==false){
        greendirection=true;
    }
    
    if (bluedirection==true){          
       
        blueincrease=!blueincrease;
        bluedirection=false;
        
    }
  
    if (blueincrease==true){
        blue+=1;
    }
    else{
        blue-=1;
    }
    
    if (bluedirection==false && blue>200 && blueincrease==true){
        bluedirection=true;
    }
    
    if (bluedirection==false && blue<40 && blueincrease==false){
        bluedirection=true;
    }
    
    var newcolor=rgbToHex(red, green, blue);
    aliaslife.style.color=newcolor;

    
      setTimeout(change_color, 20);
}