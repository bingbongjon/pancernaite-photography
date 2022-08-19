gsap.registerPlugin(ScrollTrigger);

let scroll;

// Disable GSAP on Mobile
// Source: https://greensock.com/forums/topic/26325-disabling-scrolltrigger-on-mobile-with-mediamatch/
ScrollTrigger.matchMedia({

    // Desktop Only Scrolltrigger 
    "(min-width: 721px)": function() {

        if (document.querySelector(".history")) {
            // Scrolltrigger Animation : Community Services BG
            $(".fixedNavBg").each(function(index) {
                let triggerElement = $(this);
                let targetElement = $(".history");

                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: triggerElement,
                        start: "25% 100%",
                        end: "100% 100%",
                        scrub: 0,
                    }
                });
                tl.set(targetElement, {
                    backgroundColor: "#FFFFFF",
                })
                tl.to(targetElement, {
                    backgroundColor: "#000",
                    ease: "none",
                });
            });
        }

    }, // End Desktop Only Scrolltrigger

}); // End GSAP Matchmedia