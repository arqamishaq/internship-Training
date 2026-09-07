let form = document.getElementById("contactForm");
let message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {

        event.preventDefault();
        message.style.color = "red";
        message.textContent = "Please fill all fields.";

    } else {

        message.style.color = "green";
        message.textContent = "Form submitted successfully!";
  

    }

});