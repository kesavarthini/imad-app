console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML ='New-value';
//move the img//
var img = document.getElementById("img");
img.onclick=function()
{
    img.style.marginLeft ='100px';
}