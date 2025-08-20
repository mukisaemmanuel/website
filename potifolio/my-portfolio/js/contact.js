document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "";
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      status.textContent = "Please fill in all fields.";
      status.style.color = "red";
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      status.textContent = "Please enter a valid email.";
      status.style.color = "red";
      return;
    }
    // GSAP sending animation
    if (window.gsap) {
      gsap.to(form, {
        x: 10,
        repeat: 3,
        yoyo: true,
        duration: 0.1,
        onComplete: fakeSend,
      });
    } else {
      fakeSend();
    }
    function fakeSend() {
      status.textContent = "Sending...";
      status.style.color = "#4f8cff";
      setTimeout(() => {
        status.textContent = "Message sent! (Not really, this is a demo)";
        status.style.color = "green";
        form.reset();
      }, 1200);
    }
  });
});
