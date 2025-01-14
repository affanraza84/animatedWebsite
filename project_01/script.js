var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.top = dets.y - 250 + "px"
    blur.style.left = dets.x - 250 + "px"
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (elem){
    elem.addEventListener("mouseenter", funtion(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", funtion(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C111E"
        crsr.style.backgroundColor = "#95C111E"
    })
})