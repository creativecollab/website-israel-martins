const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
const typed = new Typed(".typed", {
  strings: [
    "<strong class='red'>Designer</strong>",
    "Photographer",
    "UX|UI",
    "Social Media",
  ],
  smartBackspace: true, // Default value
  loop: true,
  typeSpeed: 200,
});

showMenu("nav-toggle", "nav-menu");

gsap.to(".first", 1.5, {
  delay: 0.5,
  top: "-100%",
  easy: Expo.easeInOut,
});

gsap.to(".second", 1.5, {
  delay: 0.7,
  top: "-100%",
  easy: Expo.easeInOut,
});

gsap.to(".third", 1.5, {
  delay: 0.9,
  top: "-100%",
  easy: Expo.easeInOut,
});

gsap.from(".home__profile", {
  opacity: 0,
  duration: 2,
  delay: 2,
  x: 60,
});

gsap.from(".home__intro", {
  opacity: 0,
  duration: 3,
  delay: 2.3,
  y: 25,
});

gsap.from(".animate-text", {
  opacity: 0,
  duration: 2,
  delay: 2.3,
  y: 25,
  easy: "ease.out",
  stagger: 0.3,
});

gsap.from(".nav__logo", {
  opacity: 0,
  duration: 2,
  delay: 3.2,
  y: 25,
  easy: "ease.out",
});

gsap.from(".nav__menu", {
  opacity: 0,
  duration: 2,
  delay: 2.3,
  y: 25,
  easy: "ease.out",
  stagger: 0.2,
});

gsap.from(".home__social-icon", {
  opacity: 0,
  duration: 2,
  delay: 4,
  y: 25,
  easy: "ease.out",
  stagger: 0.2,
});
