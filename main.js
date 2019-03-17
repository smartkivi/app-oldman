var background=document.getElementById("background");
function initialize(background){
    setSize();
    window.onresize=function(){
        setSize();
    }
    function setSize(){
        var pageWidth = document.documentElement.clientWidth;
        var pageHeight = document.documentElement.clientHeight;
        background.width=pageWidth;
        background.height=pageHeight;
    }
}

var head=document.getElementById('head');
var arm=document.getElementById('arm');
var leg=document.getElementById('leg');
var first=document.getElementById('first');
var second=document.getElementById('second');
var third=document.getElementById('third');
var isHead=false;
var isArm=false;
var isLeg=false;
head.onclick=function(){
    // console.log('这是头');
    isHead=!isHead;
    if(isHead)
    {
        first.classList.add('active');
    }else{
        first.classList.remove('active');
    }
}
arm.onclick=function(){
    console.log('这是手臂');
    isArm=!isArm;
    if(isArm)
    {
        second.classList.add('active');
    }else{
        second.classList.remove('active');
    }
}
leg.onclick=function(){
    console.log('这是腿');
    isLeg=!isLeg;
    if(isLeg)
    {
        third.classList.add('active');
    }else{
        third.classList.remove('active');
    }
}