// Login Form Handling
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // page reload na ho

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Dummy check (backend nhi hai isliye)
  if (email === "test@test.com" && password === "1234") {
    alert("Login Successful! 🎉");
    // Redirect to main page
    window.location.href = "index.html";
  } else {
    alert("Invalid Email or Password ❌");
  }
});

// Signup Form Handling
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("signupConfirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match ❌");
    return;
  }

  // Dummy signup success
  alert("Signup Successful! 🎉 Now login to continue.");
  
  // Show login form automatically
  document.querySelector(".login-box").classList.add("active");
  document.querySelector(".signup-box").classList.remove("active");
});
