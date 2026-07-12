/*=============================
        Typing Effect
=============================*/

const typingText = [
    "Software Tester",
    "QA Engineer",
    "Automation Testing",
    "Selenium Developer",
    "Python Programmer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = typingText[textIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            textIndex++;

            if (textIndex >= typingText.length)
                textIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/*=============================
      Sticky Header
=============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,.85)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.5)";

    } else {

        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";

    }

});


/*=============================
      Mobile Menu
=============================*/

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("show");

});


/*=============================
     Active Navigation
=============================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=============================
     Scroll Reveal Animation
=============================*/

const cards = document.querySelectorAll(
    ".skill-card,.project-card,.about-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-card");

        }

    });

}, {
    threshold: 0.15
});

cards.forEach(card => {

    card.classList.add("hidden-card");

    observer.observe(card);

});


/*=============================
     Hero Image Floating
=============================*/

const image = document.querySelector(".hero-img img");

let direction = 1;

setInterval(() => {

    if (!image) return;

    image.style.transform =
        `translateY(${direction * 10}px)`;

    direction *= -1;

}, 2000);


/*=============================
     Button Ripple Effect
=============================*/

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn => {

    btn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        ripple.style.left = e.offsetX + "px";
        ripple.style.top = e.offsetY + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/*=============================
     Smooth Scroll
=============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*=============================
      Console Message 😎
=============================*/

console.log(
`%cWelcome to Keerthi's Portfolio 🚀`,
"color:#00bfff;font-size:22px;font-weight:bold;"
);
