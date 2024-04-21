function loadingAnimation(){
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
    delay:3,
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
tl.from('#nav #nav-2',{
    y:-150,
    stagger:2,
    duration:0.6,
    delay:0,
    opacity:0,
})
gsap.from('.hero h1',{
    y:150,
    stagger:0.1,
    duration:0.6,
    delay:6,
})
}
loadingAnimation();


// document.addEventListener('mousemove',function(pos){
    //     gsap.to('#cursor',{
        //         left:pos.x,
//         top:pos.y,
//         duration:0.1,
//         delay:0.01,
//     })
// })

function cursorAnimation(){
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5,
    });
    
    Shery.makeMagnet("#nav-2 h3 ,#logo" , {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}
cursorAnimation();


gsap.to('#page2 video',{
    width:'100%',
    scrollTrigger:{
        trigger:'#page2',
        scroller:'body',
        // markers:true,
        start:'top 0',
        scrub:5,
        end:'top -250%',
        pin:true,
    },
    duration:2,
    delay:0.4,
})

