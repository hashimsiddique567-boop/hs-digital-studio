const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const header = document.getElementById("header");
const scrollProgress = document.getElementById("scrollProgress");
const premiumMockup = document.getElementById("premiumMockup");

if (window.location.hash) {
history.replaceState(null, "", window.location.pathname);
window.scrollTo(0, 0);
}

if (menuBtn && nav) {
menuBtn.addEventListener("click", function () {
nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(function (link) {
link.addEventListener("click", function () {
nav.classList.remove("active");
});
});
}

function updateScrollEffects() {
const scrollTop = window.scrollY;
const docHeight = document.documentElement.scrollHeight - window.innerHeight;
const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

if (scrollProgress) {
scrollProgress.style.width = progress + "%";
}

if (header) {
header.classList.toggle("scrolled", scrollTop > 30);
}
}

window.addEventListener("scroll", updateScrollEffects);
window.addEventListener("load", updateScrollEffects);

if (premiumMockup) {
premiumMockup.addEventListener("mousemove", function (event) {
const rect = premiumMockup.getBoundingClientRect();
const x = event.clientX - rect.left;
const y = event.clientY - rect.top;


const rotateY = ((x / rect.width) - 0.5) * 6;
const rotateX = ((y / rect.height) - 0.5) * -6;

premiumMockup.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";


});

premiumMockup.addEventListener("mouseleave", function () {
premiumMockup.style.transform = "";
});
}
