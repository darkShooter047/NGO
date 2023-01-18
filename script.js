// Get the form element
var form = document.querySelector("form");

// Add a submit event listener to the form
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // Get the input elements
  var name = document.querySelector("input[name='name']");
  var email = document.querySelector("input[name='email']");
  var amount = document.querySelector("input[name='amount']");

  // Validate the input fields
  if (!name.value) {
    alert("Please enter your name.");
    name.focus();
    return;
  }
  if (!email.value) {
    alert("Please enter your email.");
    email.focus();
    return;
  }
  if (!amount.value) {
    alert("Please enter the donation amount.");
    amount.focus();
    return;
  }

  // Validate the email format
  var emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    return;
  }

  // Display a success message
  alert(
    "Thank you for your donation. We will get back to you as soon as possible."
  );

  // Clear the form fields
  name.value = "";
  email.value = "";
  amount.value = "";
});
