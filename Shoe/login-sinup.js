// Toggle Forms
const loginBox = document.querySelector(".login-box");
const signupBox = document.querySelector(".signup-box");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

showSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginBox.classList.remove("active");
  signupBox.classList.add("active");
});

showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupBox.classList.remove("active");
  loginBox.classList.add("active");
});

// Login Validation
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("⚠️ Please fill all fields");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("⚠️ Invalid Email Address");
    return;
  }

  if (password.length < 6) {
    alert("⚠️ Password must be at least 6 characters");
    return;
  }

  alert("✅ Login Successful!");
});

// Signup Validation
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const confirmPassword = document.getElementById("signupConfirmPassword").value.trim();

  if (!name || !email || !password || !confirmPassword) {
    alert("⚠️ All fields are required");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("⚠️ Invalid Email Address");
    return;
  }

  if (password.length < 6) {
    alert("⚠️ Password must be at least 6 characters");
    return;
  }

  if (password !== confirmPassword) {
    alert("⚠️ Passwords do not match");
    return;
  }

  alert("✅ Signup Successful!");
});
