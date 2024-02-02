setTimeout(() => {
    

var tlcv = gsap.timeline({
    scrollTrigger: {
        trigger: ".cvresume",
        start: "top 15%",
        end: "99% 60%",
        scrub: 1,
        // markers: true,
    }
})


tlcv.to("#cvimgTwo", {
    rotateX: "0deg",
})
    .to("#cvimgThree", {
        rotateX: "0deg",
    })
    .to(".cvresume", {
        marginTop: "50vh",
        scale: "0.8"
    }, 'sa')
    .to(".cvimg", {
        filter: "grayscale(1)",
    }, 'sa')
    .to(".cvtext", {
        marginTop: "-100vh",
    }, 'sa')
    .to(".cvoverlay", {
        opacity: 1,
    }, 'sa')

}, 11000);

window.addEventListener('resize', function() {
    ScrollTrigger.refresh();
});
