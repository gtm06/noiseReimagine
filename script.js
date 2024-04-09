function loaderAnimation(){
    var tl = gsap.timeline()

tl.from("#logo",{
    scale:0,
    duration:0.5,
    delay:0.5,
})
tl.to("#logo",{
    x:-120,
    rotate:-360
})
tl.to("#loader h2 span",{
    opacity:1,
    duration:1.3,
    stagger:0.1
})
// tl.to("#logo",{
//     rotate:180,
//     duration:0.6,
//     // delay:0.2
// })
// tl.to("#logo",{
//     rotate:720,
//     duration:0.6,
//     delay:1.3
// })
tl.to("#loader",{
    opacity:0,
    // height:0,
    // duration:1,
    // ease:"power2"
},"h")
tl.from("#page1",{
    // opacity:0,
    // height:0,
    y:1000,
    duration:1,
    ease:"power4"
},"h")

}
loaderAnimation()

var tl1 = gsap.timeline()

tl1.from("#landing .vid-container .vid-info h3, #landing .vid-container .vid-info h1",{
    y:500,
    delay:4,
    stagger:0.5,
    duration:1
})
tl1.from("#landing .vid-container .vid-info .learn-more",{
   scale:0,
   duration:0.4
})
tl1.to("#landing .vid-container:nth-child(2)",{
    y:-1000,
    delay:7.9,
    zindex:99
 })