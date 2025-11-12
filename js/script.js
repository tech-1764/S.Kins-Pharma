// Navbar Sidebar Logic
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("navbar");

// Contact Form Logic
const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("status-message");

// Create overlay dynamically
const overlay = document.createElement("div");
overlay.classList.add("nav-overlay");
document.body.appendChild(overlay);

(function() {
  emailjs.init("WnD1AKdOFUhzOmOpL"); //  EmailJS Initialization
})();


menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("menu-open");

  // Toggle icon
  menuToggle.innerHTML = nav.classList.contains("active")
    ? '<i class="ri-close-line"></i>'
    : '<i class="ri-menu-line"></i>';
});

// Close sidebar when clicking outside
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  nav.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
  menuToggle.innerHTML = '<i class="ri-menu-line"></i>';
}

// Close sidebar when nav link clicked
document.querySelectorAll("#navbar a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});


(function() {
  emailjs.init("WnD1AKdOFUhzOmOpL"); // EmailJS Initialization
})();


form.addEventListener("submit", function(e) {
  e.preventDefault();

  const now = new Date();
  const formattedTime = now.toLocaleString();

  emailjs.send("service_71xagoe", "template_8z0btfa",  {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
    time: formattedTime,
  })
  .then(() => {
    Swal.fire({
      title: "Message Sent!",
      text: "Your message has been sent successfully.",
      icon: "success",
      confirmButtonColor: "#007bff"
    });
    form.reset();
  })
  .catch(() => {
    Swal.fire({
      title: "Error!",
      text: "Something went wrong. Please try again later.",
      icon: "error",
      confirmButtonColor: "#d33"
    });
  });
});

