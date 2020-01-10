 var myImages =Array.from(document.querySelectorAll(".item img"));
 var lightboxContainer = document.querySelector(" .lightbox-container");
var close = document.getElementById("close");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var currentImgIndex = 0 ;
 for(var i=0 ; i < myImages.length ; i++)
{
myImages[i].addEventListener("click",showLightBox)
}

function showLightBox(e)
{

lightboxContainer.style.display= "flex" ;
var imgSrc = e.target.src ;
currentImgIndex= myImages.indexOf( e.target);
lightboxContainer.firstElementChild.style.backgroundImage="url("+imgSrc+")";

}
close.addEventListener("click",hideLightBox)
next.addEventListener("click",goNext)
prev.addEventListener("click",goPrev)

function goNext()
{
    currentImgIndex++;
    if(currentImgIndex == myImages.length)
    {
        currentImgIndex = 0 ;
    }
    lightboxContainer.firstElementChild.style.backgroundImage="url("+myImages[currentImgIndex].src+")";

}

function goPrev()
{
    currentImgIndex--;
    if(currentImgIndex < 0 )
    {
        currentImgIndex = myImages.length -1;
    }
    lightboxContainer.firstElementChild.style.backgroundImage="url("+myImages[currentImgIndex].src+")";

}

function hideLightBox()
{
    lightboxContainer.style.display= "none" ;

}

document.addEventListener("keydown",function(e){
    if(e.keyCode == 37)
    {
        goNext();
    }
    else if(e.keyCode == 39)
    {
        goPrev();
    }
    else if(e.keyCode == 27)
    {
        hideLightBox();
    }
})
