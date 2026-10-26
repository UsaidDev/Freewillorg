// -----------NAVIGATION----------
const siteHeader = document.querySelector(".siteHeader");
const menuBtn = document.querySelector(".menuBtn");
const links = document.getElementById("navLinks");
const navBackdrop = document.querySelector(".navBackdrop");

const setMenu = (open) => {
    links.classList.toggle("show", open);
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    navBackdrop.hidden = !open;
    document.body.classList.toggle("menuOpen", open);
}

menuBtn.addEventListener("click", () => setMenu(!links.classList.contains("show")));
navBackdrop.addEventListener("click", () => setMenu(false));
links.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && links.classList.contains("show")) setMenu(false);
});

// shadow under the header once the page has scrolled
const onScroll = () => siteHeader.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// highlight the nav link of the section currently on screen
const navLinks = [...document.querySelectorAll('.links .link[href^="#"]')];
const spySections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
    });
}, { rootMargin: "-45% 0px -50% 0px" });
spySections.forEach((section) => spy.observe(section));



// -----------SWIPER_1----------
const swiper = new Swiper("#swiper-1", {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides:true,
        autoplay: {
            delay: 5000, 
            disableOnInteraction: false,
            stopOnLastSlide: false,
        },
        allowTouchMove: false,
        loop:true
       
});


// -----------SWIPER_2----------
const swiper2 = new Swiper("#team #swiper-2",{
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl:".swiper-2-custom-nav .nav-right",
        prevEl:".swiper-2-custom-nav .nav-left"
    },
    autoplay: {
        delay: 1500, 
        disableOnInteraction: true,
        stopOnLastSlide: false,
    }, 
    breakpoints : {
        1000 : {
            centeredSlides: false,
            loop: false
        }
    }
      
});


// -----------SWIPER_3----------
const swiper3 = new Swiper("#gallery #swiper-3",{
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl:".swiper-3-custom-nav .nav-right",
        prevEl:".swiper-3-custom-nav .nav-left"
    },
    autoplay: {
        delay: 1500, 
        disableOnInteraction: true,
        stopOnLastSlide: false,
    },
    breakpoints : {
        1000 : {
            centeredSlides: false,
            loop: false
        }
    }
});



// -----------APPOINTMENT_FORM----------
// don't allow booking a date in the past
const apptDate = document.querySelector(".apptForm #date");
if (apptDate) {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    apptDate.min = today.toISOString().split("T")[0];
}
