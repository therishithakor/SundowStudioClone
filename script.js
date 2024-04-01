const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var cont = document.querySelector("#container")
var fixed = document.querySelector("#fixed-image")

cont.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})
cont.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})

var elems = document.querySelectorAll(".box")

elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var i = e.getAttribute("img-source")
        fixed.style.backgroundImage=`url(${i})`
    })
})

var load=document.querySelector("#loader")

setTimeout(function(){
    load.style.top="-100%"
},4700)
var image=document.querySelector("#nav-left img")
var menuButton = document.querySelector("#nav-right h3")
var menu =document.querySelector("#black-screen")
var flag=0;
menuButton.addEventListener("click",function(){
    if(flag==0){
        menu.style.top="0%"
        image.style.opacity="0"
        flag=1
    }else{
        menu.style.top="-100%"
        image.style.opacity="1"
        flag=0
    }

})