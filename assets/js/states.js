// Toggle the 'animated' class when the element enters or exits the viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('animated');
      } else {
        entry.target.classList.remove('animated');
      }
    });
  }
  const observer = new IntersectionObserver(handleIntersection);
  const targets = document.querySelectorAll('.animate');
  targets.forEach(target => observer.observe(target));  

  //toggle mobile menu states
  function toggleMobileMenu() {
    document.querySelector('body').classList.toggle('mobile-menu-active');
  }
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      toggleMobileMenu()
    }
  });

  