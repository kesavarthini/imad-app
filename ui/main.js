console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML ='New-value';
//move the img//
var img = document.getElementById("madi");
img.onclick=function()
{
    var interval= setInterval(moveRight,100);
    function moveRight(){
        marginLeft=marginLeft + 10;
        img.style.marginLeft= marginLeft + 'px';
        
    }
};