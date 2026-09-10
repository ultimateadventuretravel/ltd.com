/*==================================================
    EMAILJS INITIALIZATION
==================================================*/

if (typeof emailjs !== "undefined") {

    emailjs.init({

        publicKey: "BU1ZAa0i80eRuy8CA"

    });

} else {

    console.warn("EmailJS library not loaded.");

}

/*==================================================
    ULTIMATE ADVENTURE TRAVEL PTY LTD
    Main JavaScript File
==================================================*/

"use strict";

/*==================================================
        DOM ELEMENTS
==================================================*/

const header = document.querySelector("header");

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-links a");

const backToTop = document.getElementById("backToTop");

const faqItems = document.querySelectorAll(".faq-item");

const counters = document.querySelectorAll(".counter");

const revealElements = document.querySelectorAll(
".fade-up,.fade-left,.fade-right,.zoom-in"
);


/*==================================================
      MOBILE NAVIGATION
==================================================*/

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}


/* Close menu when clicking a link */

navItems.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});
/*==================================================
        SCROLL EFFECTS
==================================================*/

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    /*==========================
        STICKY HEADER
    ==========================*/

    if(header){

        if(scrollY > 50){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    }

    /*==========================
        BACK TO TOP
    ==========================*/

    if(backToTop){

        if(scrollY > 500){

            backToTop.classList.add("show");

        }else{

            backToTop.classList.remove("show");

        }

    }

});


/*==================================================
        BACK TO TOP CLICK
==================================================*/

if(backToTop){

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}
/*==================================================
            FAQ ACCORDION
==================================================*/

if(faqItems.length){

    faqItems.forEach(item=>{

        const question=item.querySelector(".faq-question");

        question.addEventListener("click",()=>{

            /* Close every other FAQ */

            faqItems.forEach(faq=>{

                if(faq!==item){

                    faq.classList.remove("active");

                }

            });

            /* Toggle current FAQ */

            item.classList.toggle("active");

        });

    });

}
```js
/*==================================================
        ANIMATED COUNTERS
==================================================*/

function animateCounter(counter) {

    const target = Number(counter.dataset.target);

    if (isNaN(target)) return;

    const duration = 1800; // Animation duration in milliseconds
    const startTime = performance.now();

    function updateCounter(currentTime) {

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth ease-out animation
        const easeOut = 1 - Math.pow(1 - progress, 3);

        const current = Math.floor(easeOut * target);

        counter.textContent = current.toLocaleString();

        if (progress < 1) {

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = target.toLocaleString();

        }

    }

    requestAnimationFrame(updateCounter);

}


/*==========================
    COUNTER OBSERVER
==========================*/

if (counters.length) {

    const counterObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(entry.target);

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.5
        }
    );


    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

}
```
/*==================================================
        SCROLL REVEAL ANIMATIONS
==================================================*/

if(revealElements.length){

    const revealObserver = new IntersectionObserver(

        (entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold:0.15,

            rootMargin:"0px 0px -50px 0px"

        }

    );

    revealElements.forEach(element=>{

        revealObserver.observe(element);

    });

}
/*==================================================
        ACTIVE NAVIGATION LINKS
==================================================*/

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation(){

    const scrollPosition = window.scrollY + 120;

    sections.forEach(section=>{

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");

        const navLink = document.querySelector(
            `.nav-links a[href="#${sectionId}"]`
        );

        if(!navLink) return;

        if(

            scrollPosition >= sectionTop &&

            scrollPosition < sectionTop + sectionHeight

        ){

            navLink.classList.add("active");

        }else{

            navLink.classList.remove("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

window.addEventListener("load", updateActiveNavigation);

/*==================================================
        FINAL INITIALIZATION
==================================================*/

/*==========================
        LAZY LOADING IMAGES
==========================*/

const lazyImages = document.querySelectorAll("img[data-src]");

if(lazyImages.length){

    const imageObserver = new IntersectionObserver((entries, observer)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const img = entry.target;

                img.src = img.dataset.src;

                img.removeAttribute("data-src");

                observer.unobserve(img);

            }

        });

    });

    lazyImages.forEach(img=>{

        imageObserver.observe(img);

    });

}


/*==========================
        PAGE LOADED
==========================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/*==================================================
        GLOBAL ERROR HANDLER
==================================================*/

window.addEventListener("error",(event)=>{

    console.error("Website Error:",event.message);

});


/*==================================================
        RESIZE HANDLER
==================================================*/

window.addEventListener("resize",()=>{

    if(window.innerWidth>992){

        if(navLinks){

            navLinks.classList.remove("active");

        }

        if(menuBtn){

            menuBtn.classList.remove("active");

        }

    }

});


/*==================================================
        END OF FILE
==================================================*/

console.log(
    "Ultimate Adventure Travel Pty Ltd Website Loaded Successfully"
);
/*==================================================
        LOADER & PROGRESS BAR
==================================================*/

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    if(loader){

        setTimeout(()=>{

            loader.classList.add("hide");

        },700);

    }

});


window.addEventListener("scroll",()=>{

    const progress=document.getElementById("progressBar");

    if(!progress) return;

    const winScroll=window.scrollY;

    const height=document.documentElement.scrollHeight-window.innerHeight;

    const percent=(winScroll/height)*100;

    progress.style.width=percent+"%";

});
/*==================================================
        HEADER SHADOW UPDATE
==================================================*/

const siteHeader = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(!siteHeader) return;

    if(window.scrollY>80){

        siteHeader.classList.add("scrolled");

    }

    else{

        siteHeader.classList.remove("scrolled");

    }

});
/*==================================================
        CONTACT FORM
==================================================*/

const contactForm = document.querySelector(".contact-form form");
console.log(contactForm);

if(contactForm){


contactForm.addEventListener("submit", function(e){
console.log("Form submitted");

e.preventDefault();



emailjs.sendForm(

"service_ikavjuc",

"template_d6x5fa8",

this

)

.then(function(){


alert(
"Thank you! Your enquiry has been sent successfully."
);


contactForm.reset();


})


.catch(function(error){


alert(
"Message failed. Please try again."
);


console.log(error);


});


});


}
