function locomotive(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

locomotive();

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

Shery.textAnimate(".page1s", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 0.1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

gsap.from('.hero h1',{
    y:150,
    stagger:0.1,
    duration:0.6,
    delay:6,
})
tl.from('#hero1, #page2',{
    opacity:0,
},"-=1.2");

}
loadingAnimation();

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

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo('#mainVideo', {
    opacity: 0,
    scale: 0.5
}, {
    opacity: 1,
    scale: 1,
    duration: 2,
    delay: 0.5,
    ease: "elastic.out(1, 0.3)",
    scrollTrigger: {
        trigger: '#page2',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
});

gsap.to('#mainVideo', {
    opacity: 0.2,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: '#page2',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
});

gsap.to('#mainVideo', {
    scale: 2,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "elastic.out(1, 0.3)",
    scrollTrigger: {
        trigger: '#page2',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
});

gsap.to('#page2', {
    backgroundColor: "#000",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: '#page2',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
});

gsap.fromTo('#page2 #videoContainer', {
    opacity: 1
}, {
    opacity: 1,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: '#page2',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
});


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.image-div').forEach((el, index) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
        }
    });

    tl.from(el, { scale: 0.5, opacity: 0 })
      .to(el, { scale: 1, opacity: 1 });
});

gsap.to('#page4',{
    transform:"translateX(-170%)",
    scrollTrigger:{
        trigger:'#page4',
        scroller:'body',
        // markers:true,
        start:'top 0%',
        end:'top -100%',
        scrub:5,
        pin:true,
    },
    duration:10,
    delay:1,
})

function sheryAnime(){
    Shery.imageEffect(".image-div",{
        style:5,
        gooey:true,
        config:{"a":{"value":1.37,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272695760684946},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.91,"range":[0,10]},"metaball":{"value":0.43,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    })
}
sheryAnime();



  window.addEventListener('load', function() {

    document.getElementById('#loader').style.display = 'none';
    document.body.style.overflow = 'auto';
});
window.addEventListener('beforeunload', function() {
    window.scrollTo(-100, -100);
});
