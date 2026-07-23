document.addEventListener("DOMContentLoaded", () => {

  // Fade-in animation
  const items = document.querySelectorAll(".hero, .about, .latest, footer");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 0, transform: "translateY(30px)" },
            { opacity: 1, transform: "translateY(0px)" }
          ],
          {
            duration: 700,
            fill: "forwards",
            easing: "ease-out"
          }
        );
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(item => {
    item.style.opacity = "0";
    observer.observe(item);
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});
