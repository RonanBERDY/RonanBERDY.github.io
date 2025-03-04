function Sendmail(event) {
    event.preventDefault(); // Prevent default form submission

    // Récupération des valeurs des champs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Vérification des champs vides
    if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    // Envoi du mail via EmailJS
    emailjs.send("service_kzfn3ql", "template_cffczij", {
        from_name: name,
        from_email: email,
        message: message,
    }).then(function (response) {
        console.log("Email sent successfully!", response);
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // Réinitialiser le formulaire
    }).catch(function (error) {
        console.error("Error:", error);
        alert("Failed to send message. Please try again later.");
    });
}

