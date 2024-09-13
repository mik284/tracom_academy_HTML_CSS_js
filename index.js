document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Display an alert on form submission
        alert("Form submitted successfully!");
        form.reset();

        // Optionally, you can process the form data here
        // const formData = new FormData(form);
        // console.log(formData.get("f_name"));
    });
});
