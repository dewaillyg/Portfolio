document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".toggle");
    const menuTxt = document.getElementById("menuTxt");
    let isOpen = false;

    // GSAP

    const timeline = gsap.timeline({ paused: true });

    timeline.to(".website-content", {
        duration: 1,
        ease: "power4.inOut",
        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
        scale: 0.5,
    });

    timeline.to(".row", {
        duration: 1.5,
        left: "0%",
        ease: "power4.inOut",
        stagger: 0.1,
    }, "-=1.25");


    // BUTTON

    toggleButton.addEventListener("click", function() {
        if (isOpen) {
            timeline.reverse();
            menuTxt.innerText = "Menu";
            enableScroll();
        } else {
            timeline.play();
            menuTxt.innerText = "Fermez";
            disableScroll();
        }       

        isOpen = !isOpen;
    })

    // LINKS

    const navLinks = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function() {
            timeline.reverse();
            enableScroll();
            isOpen = !isOpen;
        });
    }

    // NO SCROLL

    function preventDefault(e) {
        e.preventDefault();
      }
      
      function preventDefaultForScrollKeys(e) {
          if (keys[e.keyCode]) {
              preventDefault(e);
              return false;
          }
      }

      var supportsPassive = false;
      try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
          get: function () { supportsPassive = true; } 
        }));
      } catch(e) {}
      
      var wheelOpt = supportsPassive ? { passive: false } : false;
      var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
      
      // call this to Disable
      function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
      }
      
      // call this to Enable
      function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
      }
});