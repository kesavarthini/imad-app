console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML ='New-value';
//move the img//
var img = document.getElementById("madi");
img.onclick=function()
{
    var interval= setInterval(moveLeft,100);
};