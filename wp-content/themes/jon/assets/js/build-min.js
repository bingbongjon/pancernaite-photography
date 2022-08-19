var scrollHorz, scrollRandom, cursorRaf, preload, monEase1 = CustomEase.create("custom", "M0,0 C0.128,0.046 0.114,0.688 0.272,0.836 0.464,1.016 0.818,1 1,1"),
    clientX = 0,
    clientY = 0,
    mouseXtemp = 0,
    mouseYtemp = 0,
    activeCursorHover_function = !1,
    chargement = !1,
    firstLoad = !0,
    widthTemp = window.innerWidth;

function initScroll() {
    (scrollHorz = new Parallax({ preload: !0, native: !1, direction: "horizontal", section: document.querySelector(".vs-section"), divs: document.querySelectorAll(".vs-div") })).init()
}

function getRandomInt(e) { return Math.floor(Math.random() * Math.floor(e)) }

function initScrollVert() { Array.prototype.forEach.call(document.querySelectorAll(".vs-section > *"), (function(e, o) { e.classList.add("vs-div"), 0 == e.classList.contains("rSpeech") && 0 == e.classList.contains("wp-block-columns") && 0 == e.classList.contains("wp-block-image") ? e.setAttribute("data-speed", parseFloat(getRandomInt(3) / -10)) : e.setAttribute("data-speed", 0), e.classList.contains("rSpeech") && e.setAttribute("data-speed", -1), null != document.querySelector(".rScroll") && e.classList.contains("rScroll") && e.setAttribute("data-speed", -1) })), Array.prototype.forEach.call(document.querySelectorAll(".vs-section > .wp-block-columns img"), (function(e, o) { e.classList.add("vs-div"), e.setAttribute("data-speed", parseFloat(.05 - getRandomInt(2) / 6)) })), Array.prototype.forEach.call(document.querySelectorAll(".vs-section > .wp-block-image > img"), (function(e, o) { e.classList.add("vs-div"), e.setAttribute("data-speed", "-0.2") })), (scrollRandom = new Parallax2({ preload: !0, native: !1, direction: "vertical", section: document.querySelector(".vs-section"), divs: document.querySelectorAll(".vs-div") })).init() }

function is_touch_device() { try { return document.createEvent("TouchEvent"), !0 } catch (e) { return !1 } }

function scrollToNav() { scrollHorz.scrollTo(document.querySelector(".vs-section").offsetWidth) }

function handleOverallProgress(e) { document.querySelector(".loading").classList.add("loading--on"), gsap.to(".loader", { scaleX: e.progress, duration: .5 }) }

function handleFileLoad(e) {}

function handleComplete(e) { gsap.to(".loader", { x: "100%", scaleX: 0, delay: 1, duration: 1, ease: monEase1 }), chargement = !1, document.querySelector(".loading").classList.remove("loading--on"), firstLoad && (null != document.querySelector("body.home") && initHome(), null == document.querySelector("body.post-type-archive-projet") && null == document.querySelector("body.post-type-archive-travel") || initProjets(), null == document.querySelector("body.single-projet") && null == document.querySelector("body.single-travel") || initProjet(), null != document.querySelector("body.page-template-t-random-serie") && initRandom(), null != document.querySelector("body.page-template-t-contact") && initScroll()) }

function contactOpen() { is_touch_device() || window.innerWidth < 1025 ? gsap.to(".contactForm", { x: "0%", ease: monEase1 }) : (document.querySelector(".contactForm").style.pointerEvents = "auto", gsap.set(".contactForm__anim", { transformOrigin: "bottom left" }), gsap.to(".contactForm__anim", { scaleY: 1, duration: 1, ease: monEase1, onComplete: function() { gsap.set(".contactForm__photo, .contactForm__wrap, .contactForm__close", { opacity: 1 }), gsap.set(".contactForm__anim", { transformOrigin: "top left" }), gsap.to(".contactForm__anim", { duration: 1, scaleY: 0, ease: monEase1 }), gsap.set(".contactForm__wrap *", { opacity: 0 }), gsap.to(".contactForm__wrap *", { delay: .5, opacity: 1, stagger: .05, ease: Linear.easeNone }) } })) }

function contactClose() { is_touch_device() || window.innerWidth < 1025 ? gsap.to(".contactForm", { x: "-100%", ease: monEase1 }) : (document.querySelector(".contactForm").style.pointerEvents = "none", gsap.to(".contactForm__wrap *", { opacity: 0, stagger: .05, ease: Linear.easeNone }), gsap.set(".contactForm__anim", { transformOrigin: "top left" }), gsap.to(".contactForm__anim", { delay: 1, duration: 1, scaleY: 1, ease: monEase1, onComplete: function() { gsap.set(".contactForm__photo, .contactForm__wrap, .contactForm__close", { opacity: 0 }), gsap.set(".contactForm__anim", { transformOrigin: "bottom left" }) } }), gsap.to(".contactForm__anim", { delay: 2, scaleY: 0, ease: monEase1 })) }

function legalOpen() { is_touch_device() || window.innerWidth < 1025 ? gsap.to(".legalPage", { x: "0%", ease: monEase1 }) : (document.querySelector(".legalPage").style.pointerEvents = "auto", gsap.to(".legalPage", { x: "0%", duration: 1, ease: monEase1 })) }

function closeLegal() { is_touch_device() || window.innerWidth < 1025 ? gsap.to(".legalPage", { x: "-100%", ease: monEase1 }) : (document.querySelector(".legalPage").style.pointerEvents = "none", gsap.to(".legalPage", { x: "100%", ease: monEase1 })) }

function activeCursorHover() { null != document.querySelector("body.archive") && (Array.prototype.forEach.call(document.querySelectorAll(".projets__thumb"), (function(e, o) { e.addEventListener("mouseenter", (function() { document.querySelector(".projetCursor").classList.add("projetCursor--on") })) })), Array.prototype.forEach.call(document.querySelectorAll(".projets__thumb"), (function(e, o) { e.addEventListener("mouseleave", (function() { document.querySelector(".projetCursor").classList.remove("projetCursor--on") })) }))) }

function openSingleBurger() { gsap.set(".singleAndRandomNav *", { opacity: 0 }), null != document.querySelector(".nextProject .fixedNavBg") && gsap.to(".nextProject .fixedNavBg", { backgroundColor: "#2B3A41", duration: .4, ease: monEase1 }), gsap.to(".singleAndRandomNav", { y: "0%", ease: monEase1, delay: .2 }), gsap.to(".singleAndRandomNav *", { opacity: 1, stagger: .02 }), document.querySelector(".singleAndRandomNav").classList.add("singleAndRandomNav--on") }

function hideSingleBurger() { null != document.querySelector(".nextProject .fixedNavBg") && gsap.to(".nextProject .fixedNavBg", { backgroundColor: "", duration: .4, ease: monEase1 }), gsap.to(".singleAndRandomNav", { y: "-100%", ease: monEase1 }), document.querySelector(".singleAndRandomNav").classList.remove("singleAndRandomNav--on") }

function monRaf() { mouseXtemp += (clientX - mouseXtemp) / 10, mouseYtemp += (clientY - mouseYtemp) / 10, gsap.set(".projetCursor", { x: mouseXtemp, y: mouseYtemp }), cursorRaf = requestAnimationFrame(monRaf) }

function initHome(e, o, t) { e ? (gsap.to(".homeBG", { scaleY: 1, duration: .65, ease: monEase1, onComplete: function() { document.querySelector("body").classList.add("ready") } }), setTimeout(initScroll, 700), gsap.to(".debut__word span, .debut svg, .debut__scroll", { delay: 1, opacity: 1, duration: 4, stagger: .05, ease: monEase1 }), gsap.to(".t4 i", { delay: 2, color: "#e56e97" }), gsap.to(".debut", { delay: 2, backgroundColor: "#e56e97" })) : (gsap.set(".homeBG", { opacity: 0 }), gsap.to(".homeBG", { delay: 1, opacity: 1 }), gsap.set(".homeBG", { scaleY: 1 }), setTimeout(initScroll, 200), null != document.querySelector("body.home") && (gsap.to(".debut__word span, .debut svg, .debut__scroll", { delay: 2, opacity: 1, duration: 4, stagger: .05, ease: monEase1 }), gsap.to(".t4 i", { delay: 4, color: "#e56e97" }))) }

function initProjets(e, o, t) { window.scrollTo(0, 0), cursorRaf = requestAnimationFrame(monRaf), e ? (setTimeout(initScroll, 700), gsap.to(".archiveBG", { scaleY: 1, duration: .65, ease: monEase1, onComplete: function() { document.querySelector("body").classList.add("ready") } }), gsap.set(".projets__thumb, .projets__cover", { delay: .7, opacity: 1 }), gsap.to(".projets__number", { opacity: 1, delay: .2, duration: 1, ease: Linear.easeNone }), gsap.to(".projets__cover", { scaleY: 0, delay: 1, duration: 1, ease: monEase1 }), gsap.to(".projetCursor", { opacity: 1, delay: 1 })) : (setTimeout(initScroll, 200), gsap.set(".archiveBG", { scaleY: 1 }), document.querySelector("body").classList.add("ready"), gsap.set(".projets__thumb, .projets__cover", { delay: .7, opacity: 1 }), gsap.to(".projets__number", { opacity: 1, delay: .2, duration: 1, ease: Linear.easeNone }), gsap.to(".projets__cover", { scaleY: 0, delay: 1, duration: 1, ease: monEase1 }), gsap.to(".projetCursor", { opacity: 1, delay: 1 })), document.querySelector(".projets").addEventListener("click", openProjet) }

function openProjet() {}

function initProjet(e, o, t) { e ? (setTimeout(initScroll, 1e3), gsap.to(".pIntro__photo,.pIntro__photo img", { x: "0%", delay: .2, duration: .7, ease: monEase1 }), gsap.to(".pIntro__number", { opacity: 1, x: "0px", delay: 1, duration: .7, ease: Linear.easeNone })) : (setTimeout(initScroll, 500), gsap.set(".pIntro__photo,.pIntro__photo img", { x: "0%" }), gsap.to(".pIntro__number", { opacity: 1, x: "0px", delay: 1, duration: .7, ease: Linear.easeNone })) }

function initRandom(e, o, t) { e ? (setTimeout(initScrollVert, 1500), gsap.set(".randomBG", { transformOrigin: "bottom left" }), gsap.to(".randomBG", { delay: .2, scaleY: 1, duration: .6, ease: monEase1, onComplete: function() { null != document.querySelector(".rScroll") && gsap.to(".rScroll", { opacity: 1, delay: 1.5 }), gsap.to(".rSpeech", { opacity: 1, delay: .5 }), gsap.set(".randomBG", { transformOrigin: "top left" }), gsap.to(".randomBG", { opacity: 0 }), gsap.to('main[data-barba-namespace="random"] img', { opacity: 1, delay: 1 }) } })) : (gsap.to(".rSpeech", { opacity: 1, delay: 1 }), gsap.to(".randomBG", { opacity: 0 }), null != document.querySelector(".rScroll") && gsap.to(".rScroll", { opacity: 1 }), setTimeout(initScrollVert, 200), gsap.to('main[data-barba-namespace="random"] img', { opacity: 1, delay: .5 })), gsap.to(".navBlock", { opacity: 1, delay: 2 }) }

function okornot() {
    document.querySelector(".contactForm__wrap button").style.pointerEvents = "none";
    var e = new XMLHttpRequest,
        o = document.querySelector('input[name="c_nom"]').value,
        t = document.querySelector('input[name="c_entreprise"]').value,
        n = document.querySelector('input[name="c_email"]').value,
        a = document.querySelector('input[name="c_tel"]').value,
        r = document.querySelector('textarea[name="c_message"]').value,
        c = document.querySelector('input[name="g-recaptcha-response"]').value;
    return e.open("GET", document.querySelector(".contactForm__form").getAttribute("data-url") + "?c_submit&c_nom=" + encodeURIComponent(o) + "&g-recaptcha-response=" + encodeURIComponent(c) + "&c_entreprise=" + encodeURIComponent(t) + "&c_email=" + encodeURIComponent(n) + "&c_tel=" + encodeURIComponent(a) + "&c_message=" + encodeURIComponent(r), !0), e.onload = function() { this.status >= 200 && this.status < 400 && (document.querySelector(".contactForm__wrap button").style.display = "none", document.querySelector(".contactForm__confirm").style.display = "inline-block") }, e.onerror = function() {}, e.send(), !1
}
document.addEventListener("DOMContentLoaded", (function() {
    document.querySelector(".contactForm__close").addEventListener("click", contactClose), document.querySelector(".legalPage__close").addEventListener("click", closeLegal), is_touch_device() && document.querySelector("html").classList.add("touch"), window.onresize = function() { window.innerWidth < 1025 && widthTemp > 1024 && (window.location.reload(), widthTemp = window.innerWidth), window.innerWidth > 1024 && widthTemp < 1025 && (window.location.reload(), widthTemp = window.innerWidth), window.innerWidth > 1024 && !is_touch_device() && (null != scrollHorz && (scrollHorz.destroy(), initScroll()), null != scrollRandom && (scrollRandom.destroy(), initScrollVert())) }, window.innerWidth < 1025 || is_touch_device() || ((preload = new createjs.LoadQueue).on("fileload", handleFileLoad), preload.on("progress", handleOverallProgress), preload.on("complete", handleComplete), Array.prototype.forEach.call(document.querySelectorAll("img"), (function(e, o) { preload.loadFile(e.getAttribute("src")) })), activeCursorHover(), document.body.addEventListener("mousemove", (function(e) { clientX = e.clientX, clientY = e.clientY })), null == document.querySelector("body.home") && document.querySelector(".burger").classList.remove("burger--hidden"), document.querySelector(".burger").addEventListener("click", (function() { null == scrollRandom ? scrollHorz.scrollTo(document.querySelector(".vs-section").offsetWidth) : scrollRandom.scrollTo(document.querySelector(".vs-section").offsetHeight) })), barba.init({
        preventRunning: !0,
        transitions: [{
            sync: !1,
            leave: ({ current: e, next: o, trigger: t }) => new Promise(e => { firstLoad = !1, chargement = !0, Array.prototype.forEach.call(document.querySelectorAll("img"), (function(e, o) { preload.loadFile(e.getAttribute("src")) })), setInterval((function() { chargement || e() }), 100) }),
            enter: ({ current: e, next: o, trigger: t }) => ("random" != e.namespace && (scrollHorz.destroy(), scrollHorz = null), "random" == e.namespace && (scrollRandom.destroy(), scrollRandom = null), null != document.querySelector(".singleAndRandomNav") && document.querySelector(".singleAndRandomNav").classList.contains("singleAndRandomNav--on") && hideSingleBurger(), new Promise(t => {
                if (o.html.match('data-barba-namespace="home"') && initHome(!0, e.container, o.container), o.html.match('data-barba-namespace="projet"') || o.html.match('data-barba-namespace="travel"') ? initProjets(!0, e.container, o.container) : (gsap.to(".projetCursor", { opacity: 0 }), null != document.querySelector(".projets") && document.querySelector(".projets").removeEventListener("click", openProjet)), o.html.match('data-barba-namespace="single-') && initProjet(!0, e.container, o.container), o.html.match('data-barba-namespace="random') && initRandom(!0, e.container, o.container), "random" == e.namespace) var n = 0;
                else n = 600;
                setTimeout((function() { document.body.classList = o.html.match(/<body class="(.*?)" data-barba="(.*?)">/)[1], activeCursorHover(), t() }), n)
            }))
        }],
        views: [{
            namespace: 'main',
            beforeEnter({ next }) {
                let gradientScript = document.createElement('script');

                gradientScript.src = 'wp-content/themes/jon/assets/js/gradient.js';

                next.container.appendChild(gradientScript);
            }
        }],
    }))
})), mailOK = function(e) { return !!new RegExp("^[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*[.]{1}[a-z]{2,6}$", "i").test(e) };
//# sourceMappingURL=build-min.js.map