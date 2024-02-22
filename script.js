
function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function loadinganimation(){
    

var t1=gsap.timeline()
t1.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6, //text visble in how much sec
    delay:0.5    //delay for text coming from downwards 
})

t1.from("#line1p1",{
    opacity:0,
    onStart:function(){
        
var h5timer= document.querySelector("#line1p1 h5")
var grow=0
setInterval(() => {
if(grow<100){
    h5timer.innerHTML= grow++
}else{
    h5timer.innerHTML= grow
}    
}, 30);

    }
});

t1.to(".line h2",{
animationName:"anime",
opacity:1,
})

t1.to("#loader",{
    opacity:0,
    duration:0.4, //text unvisble in how much sec
    delay:1      //delay for text opacity

});

t1.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5
})

t1.from("#nav",{
    opacity:0
    
})
t1.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    stagger:0.2,
    y:120,

})
t1.from("#hero1 h1, #hero1,#page2",{
    opacity:0
},"-=1.2") //"-=1.2" is the way where we can fast the process

// t1.to("#loader",{
//     display:none
// })
}


var cursoranime=function(){
    document.addEventListener("mousemove",function(dets){
  
        gsap.to("#crsr",{
           left:dets.x,
           top:dets.y 
        })
    })
    
    
 
}

// cursoranime()
loadinganimation()

locomotive()

function sheryAnime(){
    shery.imageEffect(".imgdiv",{
        style:5,
        debug:true,
        gooey:true
    })
}
// sheryAnime()