console.log('Loaded!');
//Changethe text of the main-text div
var element=document.getElementById('main_text');

element.innerHTML="New Value";
//Move the image
var img=document.getElementById('madi');
var marginLet=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveLeft,100);
};