var circularBar=document.querySelector('.circular-progress');
var progressTxt=document.querySelector('.progress-txt');

var width=0;
var maxwidth=100;
var speed=100;
var progresswidth=setInterval(()=>{
    width++;
    console.log(width);
    if(width==maxwidth){
        clearInterval(progresswidth)
    }
    circularBar.style.background=`conic-gradient(rgb(209, 68, 68),rgb(219, 188, 11),rgb(95, 243, 120),rgb(209, 68, 68),${width*3.6}deg, #eee3e3 0deg)`;
    progressTxt.textContent=`${width}%`;
},speed);