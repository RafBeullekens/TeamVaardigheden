document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-button");
    const loginModal = document.getElementById("login-modal");
    const closeButton = document.querySelector(".close-button");
    const loginForm = document.getElementById("login-form");
    const userInfo = document.getElementById("user-info");
    const userNameSpan = document.getElementById("user-name");
    const logoutButton = document.getElementById("logout-button");
  
    // Check if a user is already logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      // Update the UI to show the logged-in state
      loginButton.style.display = "none";
      userInfo.style.display = "flex";
      userNameSpan.textContent = loggedInUser;
    }
  
    // Open the modal
    loginButton.addEventListener("click", () => {
      loginModal.style.display = "block";
    });
  
    // Close the modal
    closeButton.addEventListener("click", () => {
      loginModal.style.display = "none";
    });
  
    // Close the modal when clicking outside of it
    window.addEventListener("click", (event) => {
      if (event.target === loginModal) {
        loginModal.style.display = "none";
      }
    });
  
    // Handle login form submission
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.getElementById("username").value;
  
      // Simulate login (you can replace this with actual authentication logic)
      if (username) {
        // Update UI to show logged-in state
        loginButton.style.display = "none";
        userInfo.style.display = "inline-block";
        userNameSpan.textContent = username;
  
        // Close the modal
        loginModal.style.display = "none";

        // Store the logged-in user in localStorage
        localStorage.setItem("loggedInUser", username);
      }
    });
  
    // Handle logout
    logoutButton.addEventListener("click", () => {
      // Reset UI to logged-out state
      loginButton.style.display = "inline-block";
      userInfo.style.display = "none";
      userNameSpan.textContent = "";

      // Remove the logged-in user from localStorage
      localStorage.removeItem("loggedInUser");

      // Optionally reload the page to reset the state
      window.location.reload();
    });
  });