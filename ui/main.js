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

*/
//create req
var button=document.getElementById("counter");
var counter=0;
button.onclick=function(){
    //make a req to the counter and capture the response and store in it a variable,render the variablr in the correct 
    var request = new XMlHttpRequest();
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
        { var counter = request.responseText;
           var span=document.getElementById("count");
    span.innerHTML=counter.toString();
        }
     
}
};

  //makereq
  request.open('GET','http://ickesavarthini.imad.hasura-app.io/counter',true);
  request.send(null);
};