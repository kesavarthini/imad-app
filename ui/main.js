console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML ='New-value';
//move the img//
var img = document.getElementById("madi");
img.onclick=function()
{
    var interval= setInterval(moveRight,50);
    var marginLeft=0;
    function moveRight(){
        marginLeft=marginLeft + 3;
        img.style.marginLeft= marginLeft + "px";
        
    }
};