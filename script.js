var timer=document.querySelector('#line-part1 h5');
var count=0;

var tl=gsap.timeline();
tl.from('#loader h1',{
    y:150,
    stagger:0.1,
    duration:0.6,
    delay:0.5,
})

tl.from('#line-part1 h5, #line-part1 h6,#now',{
    opacity:0,
    onStart:function(){        
    var int=setInterval(() => {
    if(count<=100){
        count++;
        timer.innerHTML=count;
    }else{
        timer.innerHTML=100;
    }
    }, 30);

    }
})

tl.to('#loader',{
    opacity:0,
    duration:0.5,
    delay:4,
})
tl.from('#page1',{
    y:1200,
    opacity:0,
    ease:Power4,
})
tl.to('#loader',{
    delay:0.2,
    duration:1,
    display:'none',
})