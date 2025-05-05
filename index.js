const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
const slides = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let index = 0;

const clearSlideClasses = () => {
  slides.forEach((slide) => {
    slide.classList.remove(
      "active",
      "slide-in-left",
      "slide-in-right",
      "slide-in"
    );
  });
};

const showSlideFade = (i) => {
  clearSlideClasses();
  slides[i].classList.add("active");
};

const showSlideWithSlideEffect = (i, direction) => {
  clearSlideClasses();

  // Add slide-in classes based on direction
  if (direction === "next") {
    slides[i].classList.add("slide-in-right");
  } else {
    slides[i].classList.add("slide-in-left");
  }

  // Trigger reflow so that the transition plays
  void slides[i].offsetWidth;

  // Apply the active and slide-in class to make it visible
  slides[i].classList.add("active", "slide-in");
};

// Next and Previous Button Click Event Handlers
next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlideWithSlideEffect(index, "next");
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlideWithSlideEffect(index, "prev");
});

// Autoplay function to fade between slides every 5 seconds
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlideFade(index);
}, 5000);

// Initialize the first slide
showSlideFade(index);

function scrollToSectionWithGap(event, id, offset) {
  event.preventDefault();
  const el = document.getElementById(id);
  const topPos = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: topPos,
    behavior: "smooth",
  });
}
