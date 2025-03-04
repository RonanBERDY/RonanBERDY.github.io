document.getElementById("contact").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      emailjs.send("service_kzfn3ql", "template_cffczij", {
        from_name: name,
        from_email: email,
        message: message,
      }).then(function (response) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // Reset the form
      }).catch(function (error) {
        console.error("Error:", error);
        alert("Failed to send message. Please try again later.");
      });
    });
