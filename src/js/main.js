"use strict"

// typical import
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.animate').forEach(section => {
	let tl = gsap.timeline({
			scrollTrigger: {
                markers: true,
				trigger: section,
				start: "center center",
        // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
				end: () => "+=" + section.offsetWidth, 
				scrub: true,
				pin: true,
        anticipatePin: 1
			},
			defaults: {ease: "none"}
		});

    tl.to(section.querySelector(".scene"), { xPercent: 0, x: 0})
});