document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".work-item");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  items.forEach(item => observer.observe(item));
});
