
var container=document.querySelector('.semiBox');
var subContainer=document.querySelector('.box');
var closeIcon=document.getElementById('close');
var prevIcon=document.getElementById('prev');
var nextIcon=document.getElementById('next');
var imgs= Array.from (document.querySelectorAll('.imgSlider img'));

var currentIndex=0;


/*$('img').click(function(){
    $('.semiBox').show(1000)
        $('.semiBox').css("display","flex");

})


('#close').click(function(){
    $('.semiBox').hide(1000)

})
*/


for(i=0;i<imgs.length;i++){
    imgs[i].addEventListener('click',function(e){

        var index= e.target.src
container.style.display="flex";
subContainer.style.backgroundImage=`url(${index})`
currentIndex=imgs.indexOf(e.target);
    })
}


closeIcon.addEventListener('click',close)
function close(){
    container.style.display="none";

}

nextIcon.addEventListener('click',getNext)
function getNext(){
currentIndex++;
if(currentIndex==imgs.length){
currentIndex=0;
}
else{var imgIndex=imgs[currentIndex].src;
    subContainer.style.backgroundImage=`url(${imgIndex})`
    }

}


prevIcon.addEventListener('click',getPrev)
function getPrev(){
    currentIndex--;
    if(currentIndex<0){
currentIndex=imgs.length-1
    }
    var imgIndex=imgs[currentIndex].src;
    subContainer.style.backgroundImage=`url(${imgIndex})`
}

document.addEventListener('keydown',function(e){
    console.log(e);
    if(e.key=='ArrowRight'){
        getNext()
    }
    else if(e.key=='ArrowLeft'){
        getPrev()
    }
    else if(e.key=='Escape'){
        close()
    }
})