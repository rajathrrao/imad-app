console.log('Loaded!');
//Changethe text of the main-text div
var element=document.getElementById('main_text');

element.innerHTML="New Value";
//Move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    
    var interval=setInterval(moveRight,50);
};


var button=document.getElementById('counter');
var counter=0;
button.onlick=function(){
    var request=newXMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttprequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        request.open('GET','http://rajath642000.imad.hasura-app.io/conter',true);
        request.send(null);
    };
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=count.toString();
    
};