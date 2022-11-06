"use strict"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

let svgPath = document.querySelector(".bg__svg svg path")
let svgLength = svgPath.getTotalLength()
console.log(svgLength)
svgPath.style.strokeDasharray = svgLength;
svgPath.style.strokeDashoffset = -1 * svgLength - 1
console.log(svgPath.style.strokeDashoffset)

let isEnded = false
let previousScrollY = 0;
let endOfTlScrollY;

let tl = gsap.timeline({
    scrollTrigger: {
        // markers: true,
        trigger: "main", 
        pin: true,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
    }
})

// tl.to("main", {
//     scale: 0.5,
//     // xPercent: -100,
//     duration: 1,
// })

// tl.addLabel("Start")

tl.to(".me", {
    yPercent: -100,
    ease: "none",
    duration: 1,
})

tl.from(".myStacks", {
    yPercent: 100,
    ease: "none",
    duration: 1,
}, "<")
// tl.set( {}, {delay: 0.5})
tl.fromTo(".stack__container > span:nth-child(1)", {
    x: "60vw",
    y: "-70vh",
}, {
    x: "-80vw",
    y: "50vh",
    duration: 1,
})
tl.fromTo(".stack__container > span:nth-child(2)", {
    x: "-60vw",
    y: "70vh",
}, {
    x: "80vw",
    y: "-50vh",
    duration: 1,
}, "<")
tl.from(".myStacks__stack--front", {
    xPercent: 100,
    ease: "none",
    duration: 1,
})

tl.from(".myStacks__stack--front .stack__container", {
    xPercent: -100,
    ease: "none",
    duration: 1,
}, "<")

tl.fromTo(".stack__container > span:nth-child(1)", {
    x: "60vw",
    y: "-70vh",
}, {
    x: "-80vw",
    y: "50vh",
    duration: 1,
})
tl.fromTo(".stack__container > span:nth-child(2)", {
    x: "-60vw",
    y: "70vh",
}, {
    x: "80vw",
    y: "-50vh",
    duration: 1,
}, "<")

tl.from(".myStacks__stack--back", {
    xPercent: 100,
    ease: "none",
    duration: 1,
})

tl.from(".myStacks__stack--back .stack__container", {
    xPercent: -100,
    ease: "none",
    duration: 1,
}, "<")

tl.fromTo(".stack__container > span:nth-child(1)", {
    rotate: "-45deg",
    x: "60vw",
    y: "-70vh",
}, {
    rotate: "-45deg",
    x: "-80vw",
    y: "50vh",
    duration: 1,
})
tl.fromTo(".stack__container > span:nth-child(2)", {
    rotate: "-45deg",
    x: "-60vw",
    y: "70vh",
}, {
    rotate: "-45deg",
    x: "80vw",
    y: "-50vh",
    duration: 1,
}, "<")

// tl.set( {}, {}, "+=0" )
tl.to(".general", {
    // pin: true,
    marker: true,
    // xPercent: -100,
    scale: 0.5,
    delay: 0.2,
    // duration: 100,
    duration: 1,
    
    
})

// let svgTl = gsap.timeline({
//     scrollTrigger: {
//         markers: true,
//         trigger: "main", 
//         pin: true,   // pin the trigger element while active
//         start: "top top", // when the top of the trigger hits the top of the viewport
//         end: "bottom bottom", // end after scrolling 500px beyond the start
//         // end: "+=4000", 
//         scrub: true,
//     }
// })

tl.to(".bg__svg svg path",{
    strokeDashoffset: -1279,
    duration: 1,
})

tl.to("main",{
    xPercent: -100,
    x: "50vw",
    yPercent: -32,
    duration: 1,
}, "<")

tl.from(".project.project--1",{
    y: "-100vh",
    duration: 1,
})

tl.to(".project.project--1",{
    y: "-100vh",
    x: "100vw",
    duration: 1,
    delay: 0.2,
})

tl.to(".bg__svg svg path",{
    strokeDashoffset: -1025,
    duration: 1,
    delay: 0.1,
}, "<")

tl.to("main",{
    xPercent: -75,
    yPercent: -48,
    duration: 1,
}, "<")

tl.from(".project.project--2",{
    y: "-100vh",
    duration: 1,
    delay: 0.2,
})

tl.to(".project.project--2",{
    y: "100vh",
    x: "100vw",
    duration: 1,
    delay: 0.1,
})

tl.to(".bg__svg svg path",{
    strokeDashoffset: -736,
    duration: 1,
}, "<")

tl.to("main",{
    xPercent: -45.5,
    yPercent: -35,
    duration: 1,
    delay: 0.2,
}, "<")

tl.from(".project.project--3",{
    y: "-100vh",
    duration: 1,
    delay: 0.2,
})

tl.to(".project.project--3",{
    y: "-100vh",
    x: "100vw",
    duration: 1,
    delay: 0.1,
})

tl.to(".bg__svg svg path",{
    strokeDashoffset: -441,
    duration: 1,
}, "<")

tl.to("main",{
    xPercent: 0,
    x: "-50vw",
    yPercent: -48,
    duration: 1,
}, "<")

tl.from(".project.project--4",{
    y: "-100vh",
    duration: 1,
    delay: 0.2,
})

tl.to(".project.project--4",{
    y: "-100vh",
    x: "-100vw",
    duration: 1,
    delay: 0.1,
})

tl.to(".bg__svg svg path",{
    strokeDashoffset: 0,
    duration: 1,
}, "<")

tl.to("main",{
    xPercent: -42,
    yPercent: -72,
    duration: 1,
}, "<")

tl.from(".contact",{
    y: "-100vh",
    duration: 1,
})

tl.from(".contact",{
    duration: 1,
})
