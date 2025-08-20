// Home hero animation
if (window.gsap && document.getElementById("hero")) {
  gsap.from(".hero-content h1", { opacity: 0, y: 40, duration: 1 });
  gsap.from(".hero-content p", { opacity: 0, y: 40, duration: 1, delay: 0.3 });
  gsap.from(".hero-image img", { opacity: 0, x: 60, duration: 1, delay: 0.6 });
}

// Scroll-triggered animations (About, Projects, etc.)
if (window.gsap && window.ScrollTrigger) {
  document.querySelectorAll(".fade-in").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: { trigger: el, start: "top 85%" },
      }
    );
  });
  document.querySelectorAll(".slide-in-left").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: { trigger: el, start: "top 85%" },
      }
    );
  });
  document.querySelectorAll(".slide-in-right").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: { trigger: el, start: "top 85%" },
      }
    );
  });
}

// Button hover pop effect
if (window.gsap) {
  document.querySelectorAll("button, .btn-pop").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.07, duration: 0.15 });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.15 });
    });
  });
}
