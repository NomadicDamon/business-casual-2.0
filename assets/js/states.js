function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    // Toggle 'animated' class based on intersecting status
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    } else {
      entry.target.classList.remove("animated");
    }
  });
}

// Configure the IntersectionObserver instance
const observerOptions = {
  root: null, // observing relative to viewport; can be changed to a specific element
  rootMargin: "0px",
  threshold: [0.2, 0.8], // Callback is called when 10% of the item is visible and again when 90% of it goes out of view
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);
const targets = document.querySelectorAll(".animate");

// Observe each target
targets.forEach((target) => observer.observe(target));

//toggle mobile menu states
function toggleMobileMenu() {
  document.querySelector("body").classList.toggle("mobile-menu-active");
}
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    toggleMobileMenu();
  }
});
