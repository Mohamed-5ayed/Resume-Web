// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  // const logo = document.querySelector(".navbar-brand");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");

    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        const navbarToggler = document.querySelector(".navbar-toggler");
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarToggler.click();
        }
      }
    });
  });

  // Form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function () {
      // Get form values
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData.entries());

      // Here you would typically send the data to a server
      console.log("Form submitted with values:", formValues);

      // Reset form
      setTimeout(() => {
      contactForm.reset();;
      alert('Thank you! Your message has been sent.');
    }, 1000);
    });
  }

  // Portfolio item hover effect enhancement
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.querySelector(".portfolio-overlay").style.opacity = "1";
    });

    item.addEventListener("mouseleave", function () {
      this.querySelector(".portfolio-overlay").style.opacity = "0";
    });
  });

  // Back to top functionality
  const backToTop = document.querySelector("footer p:first-child");
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // Make it look clickable
    backToTop.style.cursor = "pointer";
  }
});
