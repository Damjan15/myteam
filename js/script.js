// ====== TOGGLE HAMBURGER MENU ======
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-btn");
  const closeMenuBtn = document.getElementById("close-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburgerMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    mobileMenu.classList.add("shadow-2xl");
  });

  closeMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("shadow-2xl");
  });

  mobileMenu.querySelectorAll(".nav-item").forEach((item) =>
    item.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
    })
  );
});

// ====== FORM SUBMISSION ======
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const companyName = document.getElementById("company-name");
  const title = document.getElementById("title");
  const message = document.getElementById("message");

  // Show Error
  function showError(input, message) {
    input.classList.add("error");
    const error = input.nextElementSibling;

    if (error) {
      error.textContent = message;
      error.classList.remove("hidden");
      error.classList.add("block");
    }
  }

  // Show Success
  function showSuccess(input) {
    input.classList.remove("error");

    const error = input.nextElementSibling;
    if (error) {
      error.textContent = "";
      error.classList.add("hidden");
      error.classList.remove("block");
    }
  }

  // Check Email Validation
  function checkEmail(input) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (input.value.trim() !== "" && !re.test(input.value.trim())) {
      showError(input, "Please use a valid email address");
      return false;
    }

    return true;
  }

  // Check Required Fields
  function checkRequired(inputArr) {
    inputArr.forEach((input) => {
      if (input.value.trim() === "") {
        showError(input, "This field is required");
      } else {
        showSuccess(input);
      }
    });
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    checkRequired([name, email, message]);
    checkEmail(email);

    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        form.reset();
        window.location.href = "index.html";
      }
    } catch (error) {
      console.log(error);
    }
  });
});
