/*console.log('Loaded!');
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

*/var counter=0;
//counter code
var button=document.getElementById("counter");
button.onclick=function(){
    //make a req to the counter and capture the response and store in it a variable,render the variablr in the correct 
    var request = new XMlhttpRequest();
    counter= counter + 1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
    
};